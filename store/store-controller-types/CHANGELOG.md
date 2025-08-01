# @pnpm/store-controller-types

## 1004.0.1

### Patch Changes

- Updated dependencies [d1edf73]
- Updated dependencies [86b33e9]
- Updated dependencies [d1edf73]
- Updated dependencies [f91922c]
  - @pnpm/fetcher-base@1001.0.0
  - @pnpm/resolver-base@1005.0.0

## 1004.0.0

### Major Changes

- 1a07b8f: expectedPkg removed from options of the fetch package to store function.

### Patch Changes

- Updated dependencies [1a07b8f]
- Updated dependencies [1a07b8f]
  - @pnpm/types@1000.7.0
  - @pnpm/resolver-base@1004.1.0
  - @pnpm/fetcher-base@1000.1.0

## 1003.0.3

### Patch Changes

- Updated dependencies [2721291]
- Updated dependencies [6acf819]
  - @pnpm/resolver-base@1004.0.0
  - @pnpm/fetcher-base@1000.0.12

## 1003.0.2

### Patch Changes

- 509948d: Fix a regression (in v10.9.0) causing the `--lockfile-only` flag on `pnpm update` to produce a different `pnpm-lock.yaml` than an update without the flag.

## 1003.0.1

### Patch Changes

- c24c66e: Don't remove cpu field on subsequent install
- Updated dependencies [5ec7255]
  - @pnpm/types@1000.6.0
  - @pnpm/fetcher-base@1000.0.11
  - @pnpm/resolver-base@1003.0.1

## 1003.0.0

### Major Changes

- 8a9f3a4: `pref` renamed to `bareSpecifier`.
- 5b73df1: Renamed `normalizedPref` to `specifiers`.

### Minor Changes

- 9c3dd03: **Added support for installing JSR packages.** You can now install JSR packages using the following syntax:

  ```
  pnpm add jsr:<pkg_name>
  ```

  or with a version range:

  ```
  pnpm add jsr:<pkg_name>@<range>
  ```

  For example, running:

  ```
  pnpm add jsr:@foo/bar
  ```

  will add the following entry to your `package.json`:

  ```json
  {
    "dependencies": {
      "@foo/bar": "jsr:^0.1.2"
    }
  }
  ```

  When publishing, this entry will be transformed into a format compatible with npm, older versions of Yarn, and previous pnpm versions:

  ```json
  {
    "dependencies": {
      "@foo/bar": "npm:@jsr/foo__bar@^0.1.2"
    }
  }
  ```

  Related issue: [#8941](https://github.com/pnpm/pnpm/issues/8941).

  Note: The `@jsr` scope defaults to <https://npm.jsr.io/> if the `@jsr:registry` setting is not defined.

### Patch Changes

- Updated dependencies [8a9f3a4]
- Updated dependencies [5b73df1]
- Updated dependencies [9c3dd03]
- Updated dependencies [5b73df1]
  - @pnpm/resolver-base@1003.0.0
  - @pnpm/types@1000.5.0
  - @pnpm/fetcher-base@1000.0.10

## 1002.0.1

### Patch Changes

- Updated dependencies [81f441c]
  - @pnpm/resolver-base@1002.0.0
  - @pnpm/fetcher-base@1000.0.9

## 1002.0.0

### Major Changes

- 72cff38: The resolving function now takes a `registries` object, so it finds the required registry itself instead of receiving it from package requester.

### Patch Changes

- Updated dependencies [750ae7d]
- Updated dependencies [72cff38]
  - @pnpm/types@1000.4.0
  - @pnpm/resolver-base@1001.0.0
  - @pnpm/fetcher-base@1000.0.8

## 1001.0.5

### Patch Changes

- Updated dependencies [5f7be64]
- Updated dependencies [5f7be64]
  - @pnpm/types@1000.3.0
  - @pnpm/fetcher-base@1000.0.7
  - @pnpm/resolver-base@1000.2.1

## 1001.0.4

### Patch Changes

- Updated dependencies [3d52365]
  - @pnpm/resolver-base@1000.2.0
  - @pnpm/fetcher-base@1000.0.6

## 1001.0.3

### Patch Changes

- Updated dependencies [a5e4965]
  - @pnpm/types@1000.2.1
  - @pnpm/fetcher-base@1000.0.5
  - @pnpm/resolver-base@1000.1.4

## 1001.0.2

### Patch Changes

- Updated dependencies [8fcc221]
  - @pnpm/types@1000.2.0
  - @pnpm/fetcher-base@1000.0.4
  - @pnpm/resolver-base@1000.1.3

## 1001.0.1

### Patch Changes

- Updated dependencies [b562deb]
  - @pnpm/types@1000.1.1
  - @pnpm/fetcher-base@1000.0.3
  - @pnpm/resolver-base@1000.1.2

## 1001.0.0

### Major Changes

- dde650b: `RequestPackageOptions` now takes a union type for the `update` option, instead of a separate `updateToLatest` option.

  This avoids pitfalls around specifying only `update` or, specifying `update: false`, but still providing `updateToLatest: true`.

## 1000.1.1

### Patch Changes

- Updated dependencies [9591a18]
  - @pnpm/types@1000.1.0
  - @pnpm/fetcher-base@1000.0.2
  - @pnpm/resolver-base@1000.1.1

## 1000.1.0

### Minor Changes

- 6483b64: A new setting, `inject-workspace-packages`, has been added to allow hard-linking all local workspace dependencies instead of symlinking them. Previously, this behavior was achievable via the [`dependenciesMeta[].injected`](https://pnpm.io/package_json#dependenciesmetainjected) setting, which remains supported [#8836](https://github.com/pnpm/pnpm/pull/8836).

### Patch Changes

- Updated dependencies [6483b64]
  - @pnpm/resolver-base@1000.1.0
  - @pnpm/fetcher-base@1000.0.1

## 18.1.6

### Patch Changes

- Updated dependencies [d500d9f]
  - @pnpm/types@12.2.0
  - @pnpm/fetcher-base@16.0.7
  - @pnpm/resolver-base@13.0.4

## 18.1.5

### Patch Changes

- Updated dependencies [7ee59a1]
  - @pnpm/types@12.1.0
  - @pnpm/fetcher-base@16.0.6
  - @pnpm/resolver-base@13.0.3

## 18.1.4

### Patch Changes

- Updated dependencies [cb006df]
  - @pnpm/types@12.0.0
  - @pnpm/fetcher-base@16.0.5
  - @pnpm/resolver-base@13.0.2

## 18.1.3

### Patch Changes

- Updated dependencies [0ef168b]
  - @pnpm/types@11.1.0
  - @pnpm/fetcher-base@16.0.4
  - @pnpm/resolver-base@13.0.1

## 18.1.2

### Patch Changes

- Updated dependencies [dd00eeb]
- Updated dependencies
  - @pnpm/resolver-base@13.0.0
  - @pnpm/types@11.0.0
  - @pnpm/fetcher-base@16.0.3

## 18.1.1

### Patch Changes

- Updated dependencies [13e55b2]
  - @pnpm/types@10.1.1
  - @pnpm/fetcher-base@16.0.2
  - @pnpm/resolver-base@12.0.2

## 18.1.0

### Minor Changes

- 0c08e1c: Added a new function for clearing resolution cache.

## 18.0.1

### Patch Changes

- Updated dependencies [45f4262]
  - @pnpm/types@10.1.0
  - @pnpm/fetcher-base@16.0.1
  - @pnpm/resolver-base@12.0.1

## 18.0.0

### Major Changes

- 43cdd87: Node.js v16 support dropped. Use at least Node.js v18.12.

### Patch Changes

- Updated dependencies [7733f3a]
- Updated dependencies [43cdd87]
- Updated dependencies [b13d2dc]
- Updated dependencies [730929e]
  - @pnpm/types@10.0.0
  - @pnpm/resolver-base@12.0.0
  - @pnpm/fetcher-base@16.0.0

## 17.2.0

### Minor Changes

- 31054a63e: Running `pnpm update -r --latest` will no longer downgrade prerelease dependencies [#7436](https://github.com/pnpm/pnpm/issues/7436).

### Patch Changes

- Updated dependencies [31054a63e]
  - @pnpm/resolver-base@11.1.0
  - @pnpm/fetcher-base@15.0.7

## 17.1.4

### Patch Changes

- Updated dependencies [4d34684f1]
  - @pnpm/types@9.4.2
  - @pnpm/fetcher-base@15.0.6
  - @pnpm/resolver-base@11.0.2

## 17.1.3

### Patch Changes

- Updated dependencies
  - @pnpm/types@9.4.1
  - @pnpm/fetcher-base@15.0.5
  - @pnpm/resolver-base@11.0.1

## 17.1.2

### Patch Changes

- 291607c5a: When using `pnpm store prune --force` alien directories are removed from the store [#7272](https://github.com/pnpm/pnpm/pull/7272).

## 17.1.1

### Patch Changes

- 7ea45afbe: If a package's tarball cannot be fetched, print the dependency chain that leads to the failed package [#7265](https://github.com/pnpm/pnpm/pull/7265).
- Updated dependencies [4c2450208]
  - @pnpm/resolver-base@11.0.0
  - @pnpm/fetcher-base@15.0.4

## 17.1.0

### Minor Changes

- 43ce9e4a6: Support for multiple architectures when installing dependencies [#5965](https://github.com/pnpm/pnpm/issues/5965).

  You can now specify architectures for which you'd like to install optional dependencies, even if they don't match the architecture of the system running the install. Use the `supportedArchitectures` field in `package.json` to define your preferences.

  For example, the following configuration tells pnpm to install optional dependencies for Windows x64:

  ```json
  {
    "pnpm": {
      "supportedArchitectures": {
        "os": ["win32"],
        "cpu": ["x64"]
      }
    }
  }
  ```

  Whereas this configuration will have pnpm install optional dependencies for Windows, macOS, and the architecture of the system currently running the install. It includes artifacts for both x64 and arm64 CPUs:

  ```json
  {
    "pnpm": {
      "supportedArchitectures": {
        "os": ["win32", "darwin", "current"],
        "cpu": ["x64", "arm64"]
      }
    }
  }
  ```

  Additionally, `supportedArchitectures` also supports specifying the `libc` of the system.

### Patch Changes

- Updated dependencies [43ce9e4a6]
  - @pnpm/types@9.4.0
  - @pnpm/fetcher-base@15.0.3
  - @pnpm/resolver-base@10.0.4

## 17.0.1

### Patch Changes

- Updated dependencies [d774a3196]
  - @pnpm/types@9.3.0
  - @pnpm/fetcher-base@15.0.2
  - @pnpm/resolver-base@10.0.3

## 17.0.0

### Major Changes

- 9caa33d53: Remove `disableRelinkFromStore` and `relinkLocalDirDeps`. Replace them with `disableRelinkLocalDirDeps`.
- 9caa33d53: `fromStore` replaced with `resolvedFrom`.

### Patch Changes

- @pnpm/fetcher-base@15.0.1

## 16.1.0

### Minor Changes

- 03cdccc6e: New option added: disableRelinkFromStore.

### Patch Changes

- @pnpm/fetcher-base@15.0.1

## 16.0.1

### Patch Changes

- Updated dependencies [4a1a9431d]
  - @pnpm/fetcher-base@15.0.1

## 16.0.0

### Major Changes

- 494f87544: Breaking changes to the API.

### Patch Changes

- Updated dependencies [70b2830ac]
- Updated dependencies [083bbf590]
  - @pnpm/fetcher-base@15.0.0

## 15.0.2

### Patch Changes

- Updated dependencies [aa2ae8fe2]
  - @pnpm/types@9.2.0
  - @pnpm/fetcher-base@14.0.2
  - @pnpm/resolver-base@10.0.2

## 15.0.1

### Patch Changes

- Updated dependencies [a9e0b7cbf]
  - @pnpm/types@9.1.0
  - @pnpm/fetcher-base@14.0.1
  - @pnpm/resolver-base@10.0.1

## 15.0.0

### Major Changes

- eceaa8b8b: Node.js 14 support dropped.

### Patch Changes

- Updated dependencies [eceaa8b8b]
  - @pnpm/resolver-base@10.0.0
  - @pnpm/fetcher-base@14.0.0
  - @pnpm/types@9.0.0

## 14.3.1

### Patch Changes

- Updated dependencies [029143cff]
- Updated dependencies [029143cff]
  - @pnpm/resolver-base@9.2.0
  - @pnpm/fetcher-base@13.1.6

## 14.3.0

### Minor Changes

- 891a8d763: New function added to the store: `getFilesIndexFilePath`.
- c7b05cd9a: When ignoreScripts=true is passed to the fetcher, do not build git-hosted dependencies.

## 14.2.0

### Minor Changes

- 2458741fa: A new option added to package importer for keeping modules directory: `keepModulesDir`. When this is set to true, if a package already exist at the target location and it has a node_modules directory, then that node_modules directory is moved to the newly imported dependency. This is only needed when node-linker=hoisted is used.

### Patch Changes

- Updated dependencies [b77651d14]
  - @pnpm/types@8.10.0
  - @pnpm/fetcher-base@13.1.5
  - @pnpm/resolver-base@9.1.5

## 14.1.5

### Patch Changes

- Updated dependencies [702e847c1]
  - @pnpm/types@8.9.0
  - @pnpm/fetcher-base@13.1.4
  - @pnpm/resolver-base@9.1.4

## 14.1.4

### Patch Changes

- Updated dependencies [844e82f3a]
  - @pnpm/types@8.8.0
  - @pnpm/fetcher-base@13.1.3
  - @pnpm/resolver-base@9.1.3

## 14.1.3

### Patch Changes

- Updated dependencies [d665f3ff7]
  - @pnpm/types@8.7.0
  - @pnpm/fetcher-base@13.1.2
  - @pnpm/resolver-base@9.1.2

## 14.1.2

### Patch Changes

- Updated dependencies [156cc1ef6]
  - @pnpm/types@8.6.0
  - @pnpm/fetcher-base@13.1.1
  - @pnpm/resolver-base@9.1.1

## 14.1.1

### Patch Changes

- 32915f0e4: Refactor cafs types into separate package and add additional properties including `cafsDir` and `getFilePathInCafs`.
- Updated dependencies [32915f0e4]
- Updated dependencies [23984abd1]
  - @pnpm/fetcher-base@13.1.0
  - @pnpm/resolver-base@9.1.0

## 14.1.0

### Minor Changes

- 65c4260de: Support a new hook for passing a custom package importer to the store controller.

## 14.0.2

### Patch Changes

- Updated dependencies [c90798461]
  - @pnpm/types@8.5.0
  - @pnpm/fetcher-base@13.0.2
  - @pnpm/resolver-base@9.0.6

## 14.0.1

### Patch Changes

- Updated dependencies [8e5b77ef6]
  - @pnpm/types@8.4.0
  - @pnpm/fetcher-base@13.0.1
  - @pnpm/resolver-base@9.0.5

## 14.0.0

### Major Changes

- 2a34b21ce: Rename engine and targetEngine fields to sideEffectsCacheKey.

### Patch Changes

- Updated dependencies [2a34b21ce]
- Updated dependencies [2a34b21ce]
- Updated dependencies [47b5e45dd]
  - @pnpm/types@8.3.0
  - @pnpm/fetcher-base@13.0.0
  - @pnpm/resolver-base@9.0.4

## 13.0.4

### Patch Changes

- Updated dependencies [fb5bbfd7a]
- Updated dependencies [0abfe1718]
  - @pnpm/types@8.2.0
  - @pnpm/fetcher-base@12.1.0
  - @pnpm/resolver-base@9.0.3

## 13.0.3

### Patch Changes

- Updated dependencies [4d39e4a0c]
  - @pnpm/types@8.1.0
  - @pnpm/fetcher-base@12.0.3
  - @pnpm/resolver-base@9.0.2

## 13.0.2

### Patch Changes

- 6756c2b02: It should be possible to install a git-hosted package that has no `package.json` file [#4822](https://github.com/pnpm/pnpm/issues/4822).
- Updated dependencies [6756c2b02]
  - @pnpm/fetcher-base@12.0.2

## 13.0.1

### Patch Changes

- Updated dependencies [18ba5e2c0]
  - @pnpm/types@8.0.1
  - @pnpm/fetcher-base@12.0.1
  - @pnpm/resolver-base@9.0.1

## 13.0.0

### Major Changes

- 542014839: Node.js 12 is not supported.

### Patch Changes

- Updated dependencies [d504dc380]
- Updated dependencies [542014839]
  - @pnpm/types@8.0.0
  - @pnpm/fetcher-base@12.0.0
  - @pnpm/resolver-base@9.0.0

## 12.0.0

### Major Changes

- 5c525db13: Changes to RequestPackageOptions: currentPkg.name and currentPkg.version removed.

## 11.0.12

### Patch Changes

- Updated dependencies [b138d048c]
  - @pnpm/types@7.10.0
  - @pnpm/fetcher-base@11.1.6
  - @pnpm/resolver-base@8.1.6

## 11.0.11

### Patch Changes

- Updated dependencies [26cd01b88]
  - @pnpm/types@7.9.0
  - @pnpm/fetcher-base@11.1.5
  - @pnpm/resolver-base@8.1.5

## 11.0.10

### Patch Changes

- Updated dependencies [b5734a4a7]
  - @pnpm/types@7.8.0
  - @pnpm/fetcher-base@11.1.4
  - @pnpm/resolver-base@8.1.4

## 11.0.9

### Patch Changes

- Updated dependencies [6493e0c93]
  - @pnpm/types@7.7.1
  - @pnpm/fetcher-base@11.1.3
  - @pnpm/resolver-base@8.1.3

## 11.0.8

### Patch Changes

- Updated dependencies [ba9b2eba1]
  - @pnpm/types@7.7.0
  - @pnpm/fetcher-base@11.1.2
  - @pnpm/resolver-base@8.1.2

## 11.0.7

### Patch Changes

- Updated dependencies [302ae4f6f]
  - @pnpm/types@7.6.0
  - @pnpm/fetcher-base@11.1.1
  - @pnpm/resolver-base@8.1.1

## 11.0.6

### Patch Changes

- Updated dependencies [4ab87844a]
- Updated dependencies [4ab87844a]
- Updated dependencies [4ab87844a]
- Updated dependencies [4ab87844a]
  - @pnpm/types@7.5.0
  - @pnpm/fetcher-base@11.1.0
  - @pnpm/resolver-base@8.1.0

## 11.0.5

### Patch Changes

- Updated dependencies [b734b45ea]
  - @pnpm/types@7.4.0
  - @pnpm/fetcher-base@11.0.3
  - @pnpm/resolver-base@8.0.4

## 11.0.4

### Patch Changes

- Updated dependencies [8e76690f4]
  - @pnpm/types@7.3.0
  - @pnpm/fetcher-base@11.0.2
  - @pnpm/resolver-base@8.0.3

## 11.0.3

### Patch Changes

- Updated dependencies [724c5abd8]
  - @pnpm/types@7.2.0
  - @pnpm/fetcher-base@11.0.1
  - @pnpm/resolver-base@8.0.2

## 11.0.2

### Patch Changes

- Updated dependencies [e6a2654a2]
- Updated dependencies [e6a2654a2]
  - @pnpm/fetcher-base@11.0.0

## 11.0.1

### Patch Changes

- Updated dependencies [97c64bae4]
  - @pnpm/types@7.1.0
  - @pnpm/resolver-base@8.0.1

## 11.0.0

### Major Changes

- 97b986fbc: Node.js 10 support is dropped. At least Node.js 12.17 is required for the package to work.

### Patch Changes

- Updated dependencies [97b986fbc]
  - @pnpm/resolver-base@8.0.0
  - @pnpm/types@7.0.0

## 10.0.0

### Major Changes

- 8d1dfa89c: Breaking changes to the store controller API.

  The options to `requestPackage()` and `fetchPackage()` changed.

## 9.2.1

### Patch Changes

- Updated dependencies [9ad8c27bf]
  - @pnpm/types@6.4.0
  - @pnpm/resolver-base@7.1.1

## 9.2.0

### Minor Changes

- 8698a7060: New option added: preferWorkspacePackages. When it is `true`, dependencies are linked from the workspace even, when there are newer version available in the registry.

### Patch Changes

- Updated dependencies [8698a7060]
  - @pnpm/resolver-base@7.1.0

## 9.1.2

### Patch Changes

- Updated dependencies [b5d694e7f]
  - @pnpm/types@6.3.1
  - @pnpm/resolver-base@7.0.5

## 9.1.1

### Patch Changes

- Updated dependencies [d54043ee4]
  - @pnpm/types@6.3.0
  - @pnpm/resolver-base@7.0.4

## 9.1.0

### Minor Changes

- 0a6544043: A new field added to the package files index: `checkedAt`. `checkedAt` is the timestamp (number of milliseconds), when the file's content was verified the last time.

## 9.0.0

### Major Changes

- 86cd72de3: The `importPackage` function of the store controller returns the `importMethod` that was used to link the package to the virtual store. If importing was not needed, `importMethod` is `undefined`.

## 8.0.2

### Patch Changes

- Updated dependencies [db17f6f7b]
  - @pnpm/types@6.2.0
  - @pnpm/resolver-base@7.0.3

## 8.0.1

### Patch Changes

- Updated dependencies [71a8c8ce3]
  - @pnpm/types@6.1.0
  - @pnpm/resolver-base@7.0.2

## 8.0.0

### Major Changes

- 16d1ac0fd: `body.cacheByEngine` removed from `PackageResponse`.
- da091c711: Remove state from store. The store should not store the information about what projects on the computer use what dependencies. This information was needed for pruning in pnpm v4. Also, without this information, we cannot have the `pnpm store usages` command. So `pnpm store usages` is deprecated.
- b6a82072e: Using a content-addressable filesystem for storing packages.
- 802d145fc: `getPackageLocation()` removed from store. Remove `inStoreLocation` from the result of `fetchPackage()`.
- a5febb913: The importPackage function of the store controller is importing packages directly from the side-effects cache.
- a5febb913: The upload function of the store controller accepts `opts.filesIndexFile` instead of `opts.packageId`.

### Minor Changes

- f516d266c: Executables are saved into a separate directory inside the content-addressable storage.
- 42e6490d1: The fetch package to store function does not need the pkgName anymore.
- a5febb913: Package request response contains the path to the files index file.
- a5febb913: sideEffects property added to files index file.

### Patch Changes

- Updated dependencies [da091c711]
  - @pnpm/types@6.0.0
  - @pnpm/resolver-base@7.0.1

## 8.0.0-alpha.4

### Major Changes

- 16d1ac0fd: `body.cacheByEngine` removed from `PackageResponse`.
- a5febb913: The importPackage function of the store controller is importing packages directly from the side-effects cache.
- a5febb913: The upload function of the store controller accepts `opts.filesIndexFile` instead of `opts.packageId`.

### Minor Changes

- a5febb913: Package request response contains the path to the files index file.
- a5febb913: sideEffects property added to files index file.

## 8.0.0-alpha.3

### Major Changes

- da091c71: Remove state from store. The store should not store the information about what projects on the computer use what dependencies. This information was needed for pruning in pnpm v4. Also, without this information, we cannot have the `pnpm store usages` command. So `pnpm store usages` is deprecated.

### Patch Changes

- Updated dependencies [da091c71]
  - @pnpm/types@6.0.0-alpha.0
  - @pnpm/resolver-base@7.0.1-alpha.0

## 8.0.0-alpha.2

### Minor Changes

- 42e6490d1: The fetch package to store function does not need the pkgName anymore.

## 8.0.0-alpha.1

### Minor Changes

- 4f62d0383: Executables are saved into a separate directory inside the content-addressable storage.

## 8.0.0-alpha.0

### Major Changes

- 91c4b5954: Using a content-addressable filesystem for storing packages.
