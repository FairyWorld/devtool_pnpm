# @pnpm/fetcher-base

## 1001.0.0

### Major Changes

- d1edf73: Removed node fetcher. The binary fetcher should be used for downloading node assets.

### Patch Changes

- Updated dependencies [86b33e9]
- Updated dependencies [d1edf73]
- Updated dependencies [f91922c]
  - @pnpm/resolver-base@1005.0.0

## 1000.1.0

### Minor Changes

- 1a07b8f: Added support for resolving and downloading the Node.js runtime specified in the [devEngines](https://github.com/openjs-foundation/package-metadata-interoperability-collab-space/issues/15) field of `package.json`.

  Usage example:

  ```json
  {
    "devEngines": {
      "runtime": {
        "name": "node",
        "version": "^24.4.0",
        "onFail": "download"
      }
    }
  }
  ```

  When running `pnpm install`, pnpm will resolve Node.js to the latest version that satisfies the specified range and install it as a dependency of the project. As a result, when running scripts, the locally installed Node.js version will be used.

  Unlike the existing options, `useNodeVersion` and `executionEnv.nodeVersion`, this new field supports version ranges, which are locked to exact versions during installation. The resolved version is stored in the pnpm lockfile, along with an integrity checksum for future validation of the Node.js content's validity.

  Related PR: [#9755](https://github.com/pnpm/pnpm/pull/9755).

### Patch Changes

- Updated dependencies [1a07b8f]
- Updated dependencies [1a07b8f]
  - @pnpm/types@1000.7.0
  - @pnpm/resolver-base@1004.1.0

## 1000.0.12

### Patch Changes

- Updated dependencies [2721291]
- Updated dependencies [6acf819]
  - @pnpm/resolver-base@1004.0.0

## 1000.0.11

### Patch Changes

- Updated dependencies [5ec7255]
  - @pnpm/types@1000.6.0
  - @pnpm/resolver-base@1003.0.1

## 1000.0.10

### Patch Changes

- Updated dependencies [8a9f3a4]
- Updated dependencies [5b73df1]
- Updated dependencies [9c3dd03]
- Updated dependencies [5b73df1]
  - @pnpm/resolver-base@1003.0.0
  - @pnpm/types@1000.5.0

## 1000.0.9

### Patch Changes

- Updated dependencies [81f441c]
  - @pnpm/resolver-base@1002.0.0

## 1000.0.8

### Patch Changes

- Updated dependencies [750ae7d]
- Updated dependencies [72cff38]
  - @pnpm/types@1000.4.0
  - @pnpm/resolver-base@1001.0.0

## 1000.0.7

### Patch Changes

- Updated dependencies [5f7be64]
- Updated dependencies [5f7be64]
  - @pnpm/types@1000.3.0
  - @pnpm/resolver-base@1000.2.1

## 1000.0.6

### Patch Changes

- Updated dependencies [3d52365]
  - @pnpm/resolver-base@1000.2.0

## 1000.0.5

### Patch Changes

- Updated dependencies [a5e4965]
  - @pnpm/types@1000.2.1
  - @pnpm/resolver-base@1000.1.4

## 1000.0.4

### Patch Changes

- Updated dependencies [8fcc221]
  - @pnpm/types@1000.2.0
  - @pnpm/resolver-base@1000.1.3

## 1000.0.3

### Patch Changes

- Updated dependencies [b562deb]
  - @pnpm/types@1000.1.1
  - @pnpm/resolver-base@1000.1.2

## 1000.0.2

### Patch Changes

- Updated dependencies [9591a18]
  - @pnpm/types@1000.1.0
  - @pnpm/resolver-base@1000.1.1

## 1000.0.1

### Patch Changes

- Updated dependencies [6483b64]
  - @pnpm/resolver-base@1000.1.0

## 16.0.7

### Patch Changes

- Updated dependencies [d500d9f]
  - @pnpm/types@12.2.0
  - @pnpm/resolver-base@13.0.4

## 16.0.6

### Patch Changes

- Updated dependencies [7ee59a1]
  - @pnpm/types@12.1.0
  - @pnpm/resolver-base@13.0.3

## 16.0.5

### Patch Changes

- Updated dependencies [cb006df]
  - @pnpm/types@12.0.0
  - @pnpm/resolver-base@13.0.2

## 16.0.4

### Patch Changes

- Updated dependencies [0ef168b]
  - @pnpm/types@11.1.0
  - @pnpm/resolver-base@13.0.1

## 16.0.3

### Patch Changes

- Updated dependencies [dd00eeb]
- Updated dependencies
  - @pnpm/resolver-base@13.0.0
  - @pnpm/types@11.0.0

## 16.0.2

### Patch Changes

- Updated dependencies [13e55b2]
  - @pnpm/types@10.1.1
  - @pnpm/resolver-base@12.0.2

## 16.0.1

### Patch Changes

- Updated dependencies [45f4262]
  - @pnpm/types@10.1.0
  - @pnpm/resolver-base@12.0.1

## 16.0.0

### Major Changes

- 43cdd87: Node.js v16 support dropped. Use at least Node.js v18.12.

### Minor Changes

- 730929e: Add a field named `ignoredOptionalDependencies`. This is an array of strings. If an optional dependency has its name included in this array, it will be skipped.

### Patch Changes

- Updated dependencies [7733f3a]
- Updated dependencies [43cdd87]
- Updated dependencies [b13d2dc]
- Updated dependencies [730929e]
  - @pnpm/types@10.0.0
  - @pnpm/resolver-base@12.0.0

## 15.0.7

### Patch Changes

- Updated dependencies [31054a63e]
  - @pnpm/resolver-base@11.1.0

## 15.0.6

### Patch Changes

- Updated dependencies [4d34684f1]
  - @pnpm/types@9.4.2
  - @pnpm/resolver-base@11.0.2

## 15.0.5

### Patch Changes

- Updated dependencies
  - @pnpm/types@9.4.1
  - @pnpm/resolver-base@11.0.1

## 15.0.4

### Patch Changes

- Updated dependencies [4c2450208]
  - @pnpm/resolver-base@11.0.0

## 15.0.3

### Patch Changes

- Updated dependencies [43ce9e4a6]
  - @pnpm/types@9.4.0
  - @pnpm/resolver-base@10.0.4

## 15.0.2

### Patch Changes

- Updated dependencies [d774a3196]
  - @pnpm/types@9.3.0
  - @pnpm/resolver-base@10.0.3

## 15.0.1

### Patch Changes

- 4a1a9431d: Breaking change to the `directory-fetcher` API.

## 15.0.0

### Major Changes

- 70b2830ac: Breaking changes to the API.
- 083bbf590: Breaking change to FetchOptions and FetchResult.

## 14.0.2

### Patch Changes

- Updated dependencies [aa2ae8fe2]
  - @pnpm/types@9.2.0
  - @pnpm/resolver-base@10.0.2

## 14.0.1

### Patch Changes

- Updated dependencies [a9e0b7cbf]
  - @pnpm/types@9.1.0
  - @pnpm/resolver-base@10.0.1

## 14.0.0

### Major Changes

- eceaa8b8b: Node.js 14 support dropped.

### Patch Changes

- Updated dependencies [eceaa8b8b]
  - @pnpm/resolver-base@10.0.0
  - @pnpm/types@9.0.0

## 13.1.6

### Patch Changes

- Updated dependencies [029143cff]
- Updated dependencies [029143cff]
  - @pnpm/resolver-base@9.2.0

## 13.1.5

### Patch Changes

- Updated dependencies [b77651d14]
  - @pnpm/types@8.10.0
  - @pnpm/resolver-base@9.1.5

## 13.1.4

### Patch Changes

- Updated dependencies [702e847c1]
  - @pnpm/types@8.9.0
  - @pnpm/resolver-base@9.1.4

## 13.1.3

### Patch Changes

- Updated dependencies [844e82f3a]
  - @pnpm/types@8.8.0
  - @pnpm/resolver-base@9.1.3

## 13.1.2

### Patch Changes

- Updated dependencies [d665f3ff7]
  - @pnpm/types@8.7.0
  - @pnpm/resolver-base@9.1.2

## 13.1.1

### Patch Changes

- Updated dependencies [156cc1ef6]
  - @pnpm/types@8.6.0
  - @pnpm/resolver-base@9.1.1

## 13.1.0

### Minor Changes

- 23984abd1: Add hook for adding custom fetchers.

### Patch Changes

- 32915f0e4: Refactor cafs types into separate package and add additional properties including `cafsDir` and `getFilePathInCafs`.
- Updated dependencies [23984abd1]
  - @pnpm/resolver-base@9.1.0

## 13.0.2

### Patch Changes

- Updated dependencies [c90798461]
  - @pnpm/types@8.5.0
  - @pnpm/resolver-base@9.0.6

## 13.0.1

### Patch Changes

- Updated dependencies [8e5b77ef6]
  - @pnpm/types@8.4.0
  - @pnpm/resolver-base@9.0.5

## 13.0.0

### Major Changes

- 2a34b21ce: Rename engine and targetEngine fields to sideEffectsCacheKey.

### Minor Changes

- 47b5e45dd: `package-import-method` supports a new option: `clone-or-copy`.

### Patch Changes

- Updated dependencies [2a34b21ce]
  - @pnpm/types@8.3.0
  - @pnpm/resolver-base@9.0.4

## 12.1.0

### Minor Changes

- 0abfe1718: New optional option added to package importer: `requiresBuild`. When `requiresBuild` is `true`, the package should only be imported using cloning or copying.

### Patch Changes

- Updated dependencies [fb5bbfd7a]
  - @pnpm/types@8.2.0
  - @pnpm/resolver-base@9.0.3

## 12.0.3

### Patch Changes

- Updated dependencies [4d39e4a0c]
  - @pnpm/types@8.1.0
  - @pnpm/resolver-base@9.0.2

## 12.0.2

### Patch Changes

- 6756c2b02: It should be possible to install a git-hosted package that has no `package.json` file [#4822](https://github.com/pnpm/pnpm/issues/4822).

## 12.0.1

### Patch Changes

- Updated dependencies [18ba5e2c0]
  - @pnpm/types@8.0.1
  - @pnpm/resolver-base@9.0.1

## 12.0.0

### Major Changes

- 542014839: Node.js 12 is not supported.

### Patch Changes

- Updated dependencies [d504dc380]
- Updated dependencies [542014839]
  - @pnpm/types@8.0.0
  - @pnpm/resolver-base@9.0.0

## 11.1.6

### Patch Changes

- Updated dependencies [b138d048c]
  - @pnpm/types@7.10.0
  - @pnpm/resolver-base@8.1.6

## 11.1.5

### Patch Changes

- Updated dependencies [26cd01b88]
  - @pnpm/types@7.9.0
  - @pnpm/resolver-base@8.1.5

## 11.1.4

### Patch Changes

- Updated dependencies [b5734a4a7]
  - @pnpm/types@7.8.0
  - @pnpm/resolver-base@8.1.4

## 11.1.3

### Patch Changes

- Updated dependencies [6493e0c93]
  - @pnpm/types@7.7.1
  - @pnpm/resolver-base@8.1.3

## 11.1.2

### Patch Changes

- Updated dependencies [ba9b2eba1]
  - @pnpm/types@7.7.0
  - @pnpm/resolver-base@8.1.2

## 11.1.1

### Patch Changes

- Updated dependencies [302ae4f6f]
  - @pnpm/types@7.6.0
  - @pnpm/resolver-base@8.1.1

## 11.1.0

### Minor Changes

- 4ab87844a: The files response can point to files that are not in the global content-addressable store. In this case, the response will contain a `local: true` property, and the structure of `filesIndex` will be just a `Record<string, string>`.
- 4ab87844a: New optional property is added to `PackageFilesResponse` for specifying how the package needs to be imported to the modules directory. Should it be hard linked, copied, or cloned.

### Patch Changes

- Updated dependencies [4ab87844a]
- Updated dependencies [4ab87844a]
  - @pnpm/types@7.5.0
  - @pnpm/resolver-base@8.1.0

## 11.0.3

### Patch Changes

- Updated dependencies [b734b45ea]
  - @pnpm/types@7.4.0
  - @pnpm/resolver-base@8.0.4

## 11.0.2

### Patch Changes

- Updated dependencies [8e76690f4]
  - @pnpm/types@7.3.0
  - @pnpm/resolver-base@8.0.3

## 11.0.1

### Patch Changes

- Updated dependencies [724c5abd8]
  - @pnpm/types@7.2.0
  - @pnpm/resolver-base@8.0.2

## 11.0.0

### Major Changes

- e6a2654a2: `importPackage()` and `tempDir()` added to the `Cafs` type.

### Minor Changes

- e6a2654a2: `PackageFileInfo`, `PackageFilesResponse`, and `ImportPackageFunction` types added.

## 10.0.1

### Patch Changes

- Updated dependencies [97c64bae4]
  - @pnpm/types@7.1.0
  - @pnpm/resolver-base@8.0.1

## 10.0.0

### Major Changes

- 97b986fbc: Node.js 10 support is dropped. At least Node.js 12.17 is required for the package to work.

### Patch Changes

- Updated dependencies [97b986fbc]
  - @pnpm/resolver-base@8.0.0
  - @pnpm/types@7.0.0

## 9.0.4

### Patch Changes

- Updated dependencies [9ad8c27bf]
  - @pnpm/types@6.4.0
  - @pnpm/resolver-base@7.1.1

## 9.0.3

### Patch Changes

- Updated dependencies [8698a7060]
  - @pnpm/resolver-base@7.1.0

## 9.0.2

### Patch Changes

- Updated dependencies [b5d694e7f]
  - @pnpm/types@6.3.1
  - @pnpm/resolver-base@7.0.5

## 9.0.1

### Patch Changes

- Updated dependencies [d54043ee4]
  - @pnpm/types@6.3.0
  - @pnpm/resolver-base@7.0.4

## 9.0.0

### Major Changes

- 0a6544043: `generatingIntegrity` replaced with `writeResult`. When files are added to the store, the store returns not only the file's integrity as a result, but also the exact time when the file's content was verified with its integrity.

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

- bcd4aa1aa: Remove `cachedTarballLocation` from `FetchOptions`.

## 7.0.0

### Major Changes

- b6a82072e: Using a content-addressable filesystem for storing packages.

### Minor Changes

- f516d266c: Executables are saved into a separate directory inside the content-addressable storage.
- 42e6490d1: When a new package is being added to the store, its manifest is streamed in the memory. So instead of reading the manifest from the filesystem, we can parse the stream from the memory.

### Patch Changes

- Updated dependencies [da091c711]
  - @pnpm/types@6.0.0
  - @pnpm/resolver-base@7.0.1

## 7.0.0-alpha.3

### Patch Changes

- Updated dependencies [da091c71]
  - @pnpm/types@6.0.0-alpha.0
  - @pnpm/resolver-base@7.0.1-alpha.0

## 7.0.0-alpha.2

### Minor Changes

- 42e6490d1: When a new package is being added to the store, its manifest is streamed in the memory. So instead of reading the manifest from the filesystem, we can parse the stream from the memory.

## 7.0.0-alpha.1

### Minor Changes

- 4f62d0383: Executables are saved into a separate directory inside the content-addressable storage.

## 7.0.0-alpha.0

### Major Changes

- 91c4b5954: Using a content-addressable filesystem for storing packages.
