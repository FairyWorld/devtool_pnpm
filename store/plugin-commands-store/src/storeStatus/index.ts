import path from 'path'
import { getIndexFilePathInCafs, type PackageFilesIndex } from '@pnpm/store.cafs'
import { getContextForSingleImporter } from '@pnpm/get-context'
import {
  nameVerFromPkgSnapshot,
  packageIdFromSnapshot,
  type PackageSnapshot,
} from '@pnpm/lockfile.utils'
import { streamParser } from '@pnpm/logger'
import * as dp from '@pnpm/dependency-path'
import { type DepPath } from '@pnpm/types'
import dint from 'dint'
import loadJsonFile from 'load-json-file'
import pFilter from 'p-filter'
import {
  extendStoreStatusOptions,
  type StoreStatusOptions,
} from './extendStoreStatusOptions'
import { type TarballResolution } from '@pnpm/store-controller-types'

export async function storeStatus (maybeOpts: StoreStatusOptions): Promise<string[]> {
  const reporter = maybeOpts?.reporter
  if ((reporter != null) && typeof reporter === 'function') {
    streamParser.on('data', reporter)
  }
  const opts = await extendStoreStatusOptions(maybeOpts)
  const {
    storeDir,
    skipped,
    virtualStoreDir,
    wantedLockfile,
  } = await getContextForSingleImporter({}, {
    ...opts,
    extraBinPaths: [], // ctx.extraBinPaths is not needed, so this is fine
  })
  if (!wantedLockfile) return []

  const pkgs = (Object.entries(wantedLockfile.packages ?? {}) as Array<[DepPath, PackageSnapshot]>)
    .filter(([depPath]) => !skipped.has(depPath))
    .map(([depPath, pkgSnapshot]) => {
      const id = packageIdFromSnapshot(depPath, pkgSnapshot)
      return {
        depPath,
        id,
        integrity: (pkgSnapshot.resolution as TarballResolution).integrity,
        pkgPath: depPath,
        ...nameVerFromPkgSnapshot(depPath, pkgSnapshot),
      }
    })

  const modified = await pFilter(pkgs, async ({ id, integrity, depPath, name }) => {
    const pkgIndexFilePath = integrity
      ? getIndexFilePathInCafs(storeDir, integrity, id)
      : path.join(storeDir, dp.depPathToFilename(id, maybeOpts.virtualStoreDirMaxLength), 'integrity.json')
    const { files } = await loadJsonFile<PackageFilesIndex>(pkgIndexFilePath)
    return (await dint.check(path.join(virtualStoreDir, dp.depPathToFilename(depPath, maybeOpts.virtualStoreDirMaxLength), 'node_modules', name), files)) === false
  }, { concurrency: 8 })

  if ((reporter != null) && typeof reporter === 'function') {
    streamParser.removeListener('data', reporter)
  }

  return modified.map(({ pkgPath }) => pkgPath)
}
