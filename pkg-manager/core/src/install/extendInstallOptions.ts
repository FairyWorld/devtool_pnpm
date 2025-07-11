import path from 'path'
import { WANTED_LOCKFILE } from '@pnpm/constants'
import { type Catalogs } from '@pnpm/catalogs.types'
import { PnpmError } from '@pnpm/error'
import { type ProjectOptions } from '@pnpm/get-context'
import { type HoistingLimits } from '@pnpm/headless'
import { createReadPackageHook } from '@pnpm/hooks.read-package-hook'
import { type LockfileObject } from '@pnpm/lockfile.fs'
import { type IncludedDependencies } from '@pnpm/modules-yaml'
import { normalizeRegistries, DEFAULT_REGISTRIES } from '@pnpm/normalize-registries'
import { type WorkspacePackages } from '@pnpm/resolver-base'
import { type StoreController } from '@pnpm/store-controller-types'
import {
  type SupportedArchitectures,
  type AllowedDeprecatedVersions,
  type PackageExtension,
  type PeerDependencyRules,
  type ReadPackageHook,
  type Registries,
  type PrepareExecutionEnv,
} from '@pnpm/types'
import { parseOverrides, type VersionOverride } from '@pnpm/parse-overrides'
import { pnpmPkgJson } from '../pnpmPkgJson'
import { type ReporterFunction } from '../types'
import { type PreResolutionHookContext } from '@pnpm/hooks.types'

export interface StrictInstallOptions {
  autoInstallPeers: boolean
  autoInstallPeersFromHighestMatch: boolean
  catalogs: Catalogs
  catalogMode: 'strict' | 'prefer' | 'manual'
  frozenLockfile: boolean
  frozenLockfileIfExists: boolean
  enableGlobalVirtualStore: boolean
  enablePnp: boolean
  extraBinPaths: string[]
  extraEnv: Record<string, string>
  hoistingLimits?: HoistingLimits
  externalDependencies?: Set<string>
  useLockfile: boolean
  saveLockfile: boolean
  useGitBranchLockfile: boolean
  mergeGitBranchLockfiles: boolean
  linkWorkspacePackagesDepth: number
  lockfileOnly: boolean
  forceFullResolution: boolean
  fixLockfile: boolean
  dedupe: boolean
  ignoreCompatibilityDb: boolean
  ignoreDepScripts: boolean
  ignorePackageManifest: boolean
  preferFrozenLockfile: boolean
  saveWorkspaceProtocol: boolean | 'rolling'
  lockfileCheck?: (prev: LockfileObject, next: LockfileObject) => void
  lockfileIncludeTarballUrl: boolean
  preferWorkspacePackages: boolean
  preserveWorkspaceProtocol: boolean
  saveCatalogName?: string
  scriptsPrependNodePath: boolean | 'warn-only'
  scriptShell?: string
  shellEmulator: boolean
  storeController: StoreController
  storeDir: string
  reporter: ReporterFunction
  force: boolean
  forcePublicHoistPattern: boolean
  depth: number
  lockfileDir: string
  modulesDir: string
  rawConfig: Record<string, any> // eslint-disable-line @typescript-eslint/no-explicit-any
  verifyStoreIntegrity: boolean
  engineStrict: boolean
  ignoredBuiltDependencies?: string[]
  neverBuiltDependencies?: string[]
  onlyBuiltDependencies?: string[]
  onlyBuiltDependenciesFile?: string
  nodeExecPath?: string
  nodeLinker: 'isolated' | 'hoisted' | 'pnp'
  nodeVersion?: string
  packageExtensions: Record<string, PackageExtension>
  ignoredOptionalDependencies: string[]
  pnpmfile: string[] | string
  ignorePnpmfile: boolean
  packageManager: {
    name: string
    version: string
  }
  pruneLockfileImporters: boolean
  hooks: {
    readPackage?: ReadPackageHook[]
    preResolution?: Array<(ctx: PreResolutionHookContext) => Promise<void>>
    afterAllResolved?: Array<(lockfile: LockfileObject) => LockfileObject | Promise<LockfileObject>>
    calculatePnpmfileChecksum?: () => Promise<string | undefined>
  }
  sideEffectsCacheRead: boolean
  sideEffectsCacheWrite: boolean
  strictPeerDependencies: boolean
  include: IncludedDependencies
  includeDirect: IncludedDependencies
  ignoreCurrentSpecifiers: boolean
  ignoreScripts: boolean
  childConcurrency: number
  userAgent: string
  unsafePerm: boolean
  registries: Registries
  tag: string
  overrides: Record<string, string>
  ownLifecycleHooksStdio: 'inherit' | 'pipe'
  // We can automatically calculate these
  // unless installation runs on a workspace
  // that doesn't share a lockfile
  workspacePackages?: WorkspacePackages
  pruneStore: boolean
  virtualStoreDir?: string
  dir: string
  symlink: boolean
  enableModulesDir: boolean
  modulesCacheMaxAge: number
  peerDependencyRules: PeerDependencyRules
  allowedDeprecatedVersions: AllowedDeprecatedVersions
  ignorePatchFailures?: boolean
  allowUnusedPatches: boolean
  preferSymlinkedExecutables: boolean
  resolutionMode: 'highest' | 'time-based' | 'lowest-direct'
  resolvePeersFromWorkspaceRoot: boolean
  ignoreWorkspaceCycles: boolean
  disallowWorkspaceCycles: boolean

  publicHoistPattern: string[] | undefined
  hoistPattern: string[] | undefined
  forceHoistPattern: boolean

  shamefullyHoist: boolean
  forceShamefullyHoist: boolean

  global: boolean
  globalBin?: string
  patchedDependencies?: Record<string, string>

  allProjects: ProjectOptions[]
  resolveSymlinksInInjectedDirs: boolean
  dedupeDirectDeps: boolean
  dedupeInjectedDeps: boolean
  dedupePeerDependents: boolean
  extendNodePath: boolean
  excludeLinksFromLockfile: boolean
  confirmModulesPurge: boolean
  /**
   * Don't relink local directory dependencies if they are not hard linked from the local directory.
   *
   * This option was added to fix an issue with Bit CLI.
   * Bit compile adds dist directories to the injected dependencies, so if pnpm were to relink them,
   * the dist directories would be deleted.
   *
   * The option might be used in the future to improve performance.
   */
  disableRelinkLocalDirDeps: boolean

  supportedArchitectures?: SupportedArchitectures
  hoistWorkspacePackages?: boolean
  virtualStoreDirMaxLength: number
  peersSuffixMaxLength: number
  prepareExecutionEnv?: PrepareExecutionEnv
  returnListOfDepsRequiringBuild?: boolean
  injectWorkspacePackages?: boolean
  ci?: boolean
}

export type InstallOptions =
  & Partial<StrictInstallOptions>
  & Pick<StrictInstallOptions, 'storeDir' | 'storeController'>

const defaults = (opts: InstallOptions): StrictInstallOptions => {
  const packageManager = opts.packageManager ?? {
    name: pnpmPkgJson.name,
    version: pnpmPkgJson.version,
  }
  return {
    allowedDeprecatedVersions: {},
    allowUnusedPatches: false,
    ignorePatchFailures: undefined,
    autoInstallPeers: true,
    autoInstallPeersFromHighestMatch: false,
    catalogs: {},
    childConcurrency: 5,
    confirmModulesPurge: !opts.force,
    depth: 0,
    dedupeInjectedDeps: true,
    enableGlobalVirtualStore: false,
    enablePnp: false,
    engineStrict: false,
    force: false,
    forceFullResolution: false,
    frozenLockfile: false,
    hoistPattern: undefined,
    publicHoistPattern: undefined,
    hooks: {},
    ignoreCurrentSpecifiers: false,
    ignoreDepScripts: false,
    ignoreScripts: false,
    include: {
      dependencies: true,
      devDependencies: true,
      optionalDependencies: true,
    },
    includeDirect: {
      dependencies: true,
      devDependencies: true,
      optionalDependencies: true,
    },
    lockfileDir: opts.lockfileDir ?? opts.dir ?? process.cwd(),
    lockfileOnly: false,
    nodeVersion: opts.nodeVersion,
    nodeLinker: 'isolated',
    overrides: {},
    ownLifecycleHooksStdio: 'inherit',
    ignoreCompatibilityDb: false,
    ignorePackageManifest: false,
    packageExtensions: {},
    ignoredOptionalDependencies: [] as string[],
    packageManager,
    preferFrozenLockfile: true,
    preferWorkspacePackages: false,
    preserveWorkspaceProtocol: true,
    pruneLockfileImporters: false,
    pruneStore: false,
    rawConfig: {},
    registries: DEFAULT_REGISTRIES,
    resolutionMode: 'lowest-direct',
    saveWorkspaceProtocol: 'rolling',
    lockfileIncludeTarballUrl: false,
    scriptsPrependNodePath: false,
    shamefullyHoist: false,
    shellEmulator: false,
    sideEffectsCacheRead: false,
    sideEffectsCacheWrite: false,
    symlink: true,
    storeController: opts.storeController,
    storeDir: opts.storeDir,
    strictPeerDependencies: false,
    tag: 'latest',
    unsafePerm: process.platform === 'win32' ||
      process.platform === 'cygwin' ||
      !process.setgid ||
      process.getuid?.() !== 0,
    catalogMode: 'manual',
    useLockfile: true,
    saveLockfile: true,
    useGitBranchLockfile: false,
    mergeGitBranchLockfiles: false,
    userAgent: `${packageManager.name}/${packageManager.version} npm/? node/${process.version} ${process.platform} ${process.arch}`,
    verifyStoreIntegrity: true,
    enableModulesDir: true,
    modulesCacheMaxAge: 7 * 24 * 60,
    resolveSymlinksInInjectedDirs: false,
    dedupeDirectDeps: true,
    dedupePeerDependents: true,
    resolvePeersFromWorkspaceRoot: true,
    extendNodePath: true,
    ignoreWorkspaceCycles: false,
    disallowWorkspaceCycles: false,
    excludeLinksFromLockfile: false,
    virtualStoreDirMaxLength: 120,
    peersSuffixMaxLength: 1000,
  } as StrictInstallOptions
}

export interface ProcessedInstallOptions extends StrictInstallOptions {
  readPackageHook?: ReadPackageHook
  parsedOverrides: VersionOverride[]
}

export function extendOptions (
  opts: InstallOptions
): ProcessedInstallOptions {
  if (opts) {
    for (const key in opts) {
      if (opts[key as keyof InstallOptions] === undefined) {
        delete opts[key as keyof InstallOptions]
      }
    }
  }
  if (opts.neverBuiltDependencies == null && opts.onlyBuiltDependencies == null && opts.onlyBuiltDependenciesFile == null) {
    opts.onlyBuiltDependencies = []
  }
  if (opts.onlyBuiltDependencies && opts.neverBuiltDependencies) {
    throw new PnpmError('CONFIG_CONFLICT_BUILT_DEPENDENCIES', 'Cannot have both neverBuiltDependencies and onlyBuiltDependencies')
  }
  const defaultOpts = defaults(opts)
  const extendedOpts: ProcessedInstallOptions = {
    ...defaultOpts,
    ...opts,
    storeDir: defaultOpts.storeDir,
    parsedOverrides: parseOverrides(opts.overrides ?? {}, opts.catalogs ?? {}),
  }
  extendedOpts.readPackageHook = createReadPackageHook({
    ignoreCompatibilityDb: extendedOpts.ignoreCompatibilityDb,
    readPackageHook: extendedOpts.hooks?.readPackage,
    overrides: extendedOpts.parsedOverrides,
    lockfileDir: extendedOpts.lockfileDir,
    packageExtensions: extendedOpts.packageExtensions,
    ignoredOptionalDependencies: extendedOpts.ignoredOptionalDependencies,
  })
  if (extendedOpts.lockfileOnly) {
    extendedOpts.ignoreScripts = true
    if (!extendedOpts.useLockfile) {
      throw new PnpmError('CONFIG_CONFLICT_LOCKFILE_ONLY_WITH_NO_LOCKFILE',
        `Cannot generate a ${WANTED_LOCKFILE} because lockfile is set to false`)
    }
  }
  if (extendedOpts.userAgent.startsWith('npm/')) {
    extendedOpts.userAgent = `${extendedOpts.packageManager.name}/${extendedOpts.packageManager.version} ${extendedOpts.userAgent}`
  }
  extendedOpts.registries = normalizeRegistries(extendedOpts.registries)
  extendedOpts.rawConfig['registry'] = extendedOpts.registries.default
  if (extendedOpts.enableGlobalVirtualStore && extendedOpts.virtualStoreDir == null) {
    extendedOpts.virtualStoreDir = path.join(extendedOpts.storeDir, 'links')
  }
  return extendedOpts
}
