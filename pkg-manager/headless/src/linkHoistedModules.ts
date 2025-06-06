import path from 'path'
import { calcDepState, type DepsStateCache } from '@pnpm/calc-dep-state'
import {
  progressLogger,
  removalLogger,
  statsLogger,
} from '@pnpm/core-loggers'
import {
  type DepHierarchy,
  type DependenciesGraph,
} from '@pnpm/deps.graph-builder'
import { linkBins } from '@pnpm/link-bins'
import { logger } from '@pnpm/logger'
import {
  type PackageFilesResponse,
  type StoreController,
} from '@pnpm/store-controller-types'
import pLimit from 'p-limit'
import difference from 'ramda/src/difference'
import isEmpty from 'ramda/src/isEmpty'
import rimraf from '@zkochan/rimraf'

const limitLinking = pLimit(16)

export async function linkHoistedModules (
  storeController: StoreController,
  graph: DependenciesGraph,
  prevGraph: DependenciesGraph,
  hierarchy: DepHierarchy,
  opts: {
    allowBuild?: (pkgName: string) => boolean
    depsStateCache: DepsStateCache
    disableRelinkLocalDirDeps?: boolean
    force: boolean
    ignoreScripts: boolean
    lockfileDir: string
    preferSymlinkedExecutables?: boolean
    sideEffectsCacheRead: boolean
  }
): Promise<void> {
  // TODO: remove nested node modules first
  const dirsToRemove = difference(
    Object.keys(prevGraph),
    Object.keys(graph)
  )
  statsLogger.debug({
    prefix: opts.lockfileDir,
    removed: dirsToRemove.length,
  })
  // We should avoid removing unnecessary directories while simultaneously adding new ones.
  // Doing so can sometimes lead to a race condition when linking commands to `node_modules/.bin`.
  await Promise.all(dirsToRemove.map((dir) => tryRemoveDir(dir)))
  await Promise.all(
    Object.entries(hierarchy)
      .map(([parentDir, depsHierarchy]) => {
        function warn (message: string) {
          logger.info({
            message,
            prefix: parentDir,
          })
        }
        return linkAllPkgsInOrder(storeController, graph, depsHierarchy, parentDir, {
          ...opts,
          warn,
        })
      })
  )
}

async function tryRemoveDir (dir: string): Promise<void> {
  removalLogger.debug(dir)
  try {
    await rimraf(dir)
  } catch (err: any) { // eslint-disable-line
    /* Just ignoring for now. Not even logging.
    logger.warn({
      error: err,
      message: `Failed to remove "${pathToRemove}"`,
      prefix: lockfileDir,
    })
    */
  }
}

async function linkAllPkgsInOrder (
  storeController: StoreController,
  graph: DependenciesGraph,
  hierarchy: DepHierarchy,
  parentDir: string,
  opts: {
    allowBuild?: (pkgName: string) => boolean
    depsStateCache: DepsStateCache
    disableRelinkLocalDirDeps?: boolean
    force: boolean
    ignoreScripts: boolean
    lockfileDir: string
    preferSymlinkedExecutables?: boolean
    sideEffectsCacheRead: boolean
    warn: (message: string) => void
  }
): Promise<void> {
  const _calcDepState = calcDepState.bind(null, graph, opts.depsStateCache)
  await Promise.all(
    Object.entries(hierarchy).map(async ([dir, deps]) => {
      const depNode = graph[dir]
      if (depNode.fetching) {
        let filesResponse!: PackageFilesResponse
        try {
          filesResponse = (await depNode.fetching()).files
        } catch (err: any) { // eslint-disable-line
          if (depNode.optional) return
          throw err
        }

        depNode.requiresBuild = filesResponse.requiresBuild
        let sideEffectsCacheKey: string | undefined
        if (opts.sideEffectsCacheRead && filesResponse.sideEffects && !isEmpty(filesResponse.sideEffects)) {
          if (opts?.allowBuild?.(depNode.name) !== false) {
            sideEffectsCacheKey = _calcDepState(dir, {
              includeSubdepsHash: !opts.ignoreScripts && depNode.requiresBuild, // true when is built
              patchFileHash: depNode.patch?.file.hash,
            })
          }
        }
        // Limiting the concurrency here fixes an out of memory error.
        // It is not clear why it helps as importing is also limited inside fs.indexed-pkg-importer.
        // The out of memory error was reproduced on the teambit/bit repository with the "rootComponents" feature turned on
        await limitLinking(async () => {
          const { importMethod, isBuilt } = await storeController.importPackage(depNode.dir, {
            filesResponse,
            force: true,
            disableRelinkLocalDirDeps: opts.disableRelinkLocalDirDeps,
            keepModulesDir: true,
            requiresBuild: depNode.patch != null || depNode.requiresBuild,
            sideEffectsCacheKey,
          })
          if (importMethod) {
            progressLogger.debug({
              method: importMethod,
              requester: opts.lockfileDir,
              status: 'imported',
              to: depNode.dir,
            })
          }
          depNode.isBuilt = isBuilt
        })
      }
      return linkAllPkgsInOrder(storeController, graph, deps, dir, opts)
    })
  )
  const modulesDir = path.join(parentDir, 'node_modules')
  const binsDir = path.join(modulesDir, '.bin')
  await linkBins(modulesDir, binsDir, {
    allowExoticManifests: true,
    preferSymlinkedExecutables: opts.preferSymlinkedExecutables,
    warn: opts.warn,
  })
}
