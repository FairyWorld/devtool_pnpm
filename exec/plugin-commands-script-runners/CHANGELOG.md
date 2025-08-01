# @pnpm/plugin-commands-script-runners

## 1001.0.1

### Patch Changes

- Updated dependencies [d1edf73]
- Updated dependencies [d1edf73]
- Updated dependencies [86b33e9]
- Updated dependencies [d1edf73]
- Updated dependencies [adb097c]
- Updated dependencies [f91922c]
  - @pnpm/read-project-manifest@1001.1.0
  - @pnpm/client@1001.0.0
  - @pnpm/read-package-json@1000.0.11
  - @pnpm/plugin-commands-installation@1004.4.1
  - @pnpm/config@1004.2.1
  - @pnpm/deps.status@1003.0.3
  - @pnpm/error@1000.0.4
  - @pnpm/store-path@1000.0.4
  - @pnpm/lifecycle@1001.0.19
  - @pnpm/cli-utils@1001.0.3
  - @pnpm/plugin-commands-env@1000.0.32
  - @pnpm/workspace.injected-deps-syncer@1000.0.11
  - @pnpm/crypto.hash@1000.2.0

## 1001.0.0

### Major Changes

- 6f7ac0f: Add `--cpu`, `--libc`, and `--os` to `pnpm install`, `pnpm add`, and `pnpm dlx` to customize `supportedArchitectures` via the CLI [#7510](https://github.com/pnpm/pnpm/issues/7510).

### Patch Changes

- b7d9301: Fix waiting for closed child process.
- Updated dependencies [1a07b8f]
- Updated dependencies [1a07b8f]
- Updated dependencies [6f7ac0f]
- Updated dependencies [1ba2e15]
- Updated dependencies [6f7ac0f]
- Updated dependencies [1a07b8f]
  - @pnpm/types@1000.7.0
  - @pnpm/read-project-manifest@1001.0.0
  - @pnpm/plugin-commands-installation@1004.4.0
  - @pnpm/plugin-commands-env@1000.0.31
  - @pnpm/config@1004.2.0
  - @pnpm/client@1000.1.0
  - @pnpm/cli-utils@1001.0.2
  - @pnpm/deps.status@1003.0.2
  - @pnpm/lifecycle@1001.0.18
  - @pnpm/core-loggers@1001.0.2
  - @pnpm/package-bins@1000.0.9
  - @pnpm/read-package-json@1000.0.10
  - @pnpm/sort-packages@1000.0.9
  - @pnpm/error@1000.0.3
  - @pnpm/store-path@1000.0.3
  - @pnpm/crypto.hash@1000.2.0
  - @pnpm/workspace.injected-deps-syncer@1000.0.10

## 1000.2.21

### Patch Changes

- Updated dependencies [7ad0bc3]
  - @pnpm/cli-utils@1001.0.1
  - @pnpm/plugin-commands-env@1000.0.30
  - @pnpm/plugin-commands-installation@1004.3.1
  - @pnpm/deps.status@1003.0.1

## 1000.2.20

### Patch Changes

- Updated dependencies [623da6f]
- Updated dependencies [cf630a8]
- Updated dependencies [cf630a8]
- Updated dependencies [e225310]
- Updated dependencies [589ac1f]
  - @pnpm/config@1004.1.0
  - @pnpm/cli-utils@1001.0.0
  - @pnpm/deps.status@1003.0.0
  - @pnpm/plugin-commands-installation@1004.3.0
  - @pnpm/crypto.hash@1000.2.0
  - @pnpm/lifecycle@1001.0.17
  - @pnpm/plugin-commands-env@1000.0.29
  - @pnpm/client@1000.0.21

## 1000.2.19

### Patch Changes

- Updated dependencies [b511eac]
  - @pnpm/plugin-commands-installation@1004.2.2

## 1000.2.18

### Patch Changes

- @pnpm/plugin-commands-installation@1004.2.1

## 1000.2.17

### Patch Changes

- 61e7b03: Fix the `--help` and `-h` flags not working as expected for the `pnpm create` command.
- Updated dependencies [983efdc]
  - @pnpm/plugin-commands-installation@1004.2.0
  - @pnpm/cli-utils@1000.1.7
  - @pnpm/deps.status@1002.1.5
  - @pnpm/plugin-commands-env@1000.0.28

## 1000.2.16

### Patch Changes

- Updated dependencies [b0ead51]
- Updated dependencies [b217bbb]
- Updated dependencies [b0ead51]
- Updated dependencies [c8341cc]
- Updated dependencies [b0ead51]
- Updated dependencies [046af72]
  - @pnpm/deps.status@1002.1.4
  - @pnpm/plugin-commands-installation@1004.1.0
  - @pnpm/config@1004.0.0
  - @pnpm/client@1000.0.20
  - @pnpm/cli-utils@1000.1.6
  - @pnpm/plugin-commands-env@1000.0.27
  - @pnpm/lifecycle@1001.0.16
  - @pnpm/workspace.injected-deps-syncer@1000.0.9
  - @pnpm/crypto.hash@1000.1.1

## 1000.2.15

### Patch Changes

- 55424eb: `pnpm -r --silent run` should not print out section [#9563](https://github.com/pnpm/pnpm/issues/9563).
- Updated dependencies [8d175c0]
  - @pnpm/config@1003.1.1
  - @pnpm/plugin-commands-installation@1004.0.3
  - @pnpm/cli-utils@1000.1.5
  - @pnpm/deps.status@1002.1.3
  - @pnpm/plugin-commands-env@1000.0.26
  - @pnpm/lifecycle@1001.0.15
  - @pnpm/client@1000.0.19
  - @pnpm/crypto.hash@1000.1.1
  - @pnpm/workspace.injected-deps-syncer@1000.0.8

## 1000.2.14

### Patch Changes

- 09cf46f: Update `@pnpm/logger` in peer dependencies.
- 36d1448: Set the default `workspaceConcurrency` to `Math.min(os.availableParallelism(), 4)` [#9493](https://github.com/pnpm/pnpm/pull/9493).
- Updated dependencies [b282bd1]
- Updated dependencies [fdb1d98]
- Updated dependencies [e4af08c]
- Updated dependencies [09cf46f]
- Updated dependencies [36d1448]
- Updated dependencies [9362b5f]
- Updated dependencies [5ec7255]
- Updated dependencies [6cf010c]
  - @pnpm/config@1003.1.0
  - @pnpm/plugin-commands-installation@1004.0.2
  - @pnpm/workspace.injected-deps-syncer@1000.0.8
  - @pnpm/plugin-commands-env@1000.0.25
  - @pnpm/core-loggers@1001.0.1
  - @pnpm/lifecycle@1001.0.14
  - @pnpm/cli-utils@1000.1.4
  - @pnpm/deps.status@1002.1.2
  - @pnpm/types@1000.6.0
  - @pnpm/client@1000.0.18
  - @pnpm/package-bins@1000.0.8
  - @pnpm/read-package-json@1000.0.9
  - @pnpm/read-project-manifest@1000.0.11
  - @pnpm/sort-packages@1000.0.8
  - @pnpm/crypto.hash@1000.1.1

## 1000.2.13

### Patch Changes

- Updated dependencies [fa1e69b]
- Updated dependencies [7c7f0d6]
  - @pnpm/plugin-commands-env@1000.0.24
  - @pnpm/common-cli-options-help@1000.0.1
  - @pnpm/plugin-commands-installation@1004.0.1
  - @pnpm/lifecycle@1001.0.13
  - @pnpm/cli-utils@1000.1.3
  - @pnpm/config@1003.0.1
  - @pnpm/deps.status@1002.1.1
  - @pnpm/client@1000.0.17

## 1000.2.12

### Patch Changes

- Updated dependencies [3cf337b]
- Updated dependencies [56bb69b]
- Updated dependencies [8a9f3a4]
- Updated dependencies [3cf337b]
- Updated dependencies [9c3dd03]
- Updated dependencies [5b73df1]
  - @pnpm/deps.status@1002.1.0
  - @pnpm/config@1003.0.0
  - @pnpm/plugin-commands-installation@1004.0.0
  - @pnpm/parse-wanted-dependency@1001.0.0
  - @pnpm/core-loggers@1001.0.0
  - @pnpm/logger@1001.0.0
  - @pnpm/types@1000.5.0
  - @pnpm/cli-utils@1000.1.2
  - @pnpm/plugin-commands-env@1000.0.23
  - @pnpm/lifecycle@1001.0.12
  - @pnpm/client@1000.0.16
  - @pnpm/package-bins@1000.0.7
  - @pnpm/read-package-json@1000.0.8
  - @pnpm/read-project-manifest@1000.0.10
  - @pnpm/sort-packages@1000.0.7
  - @pnpm/workspace.injected-deps-syncer@1000.0.7
  - @pnpm/crypto.hash@1000.1.1

## 1000.2.11

### Patch Changes

- Updated dependencies [4d95e93]
  - @pnpm/plugin-commands-installation@1003.0.1
  - @pnpm/deps.status@1002.0.11
  - @pnpm/client@1000.0.15
  - @pnpm/cli-utils@1000.1.1
  - @pnpm/lifecycle@1001.0.11
  - @pnpm/workspace.injected-deps-syncer@1000.0.6
  - @pnpm/plugin-commands-env@1000.0.22
  - @pnpm/config@1002.7.2
  - @pnpm/crypto.hash@1000.1.1

## 1000.2.10

### Patch Changes

- Updated dependencies [750ae7d]
- Updated dependencies [5679712]
- Updated dependencies [01f2bcf]
- Updated dependencies [750ae7d]
- Updated dependencies [8033854]
- Updated dependencies [1413c25]
  - @pnpm/types@1000.4.0
  - @pnpm/config@1002.7.1
  - @pnpm/plugin-commands-installation@1003.0.0
  - @pnpm/core-loggers@1000.2.0
  - @pnpm/cli-utils@1000.1.0
  - @pnpm/deps.status@1002.0.10
  - @pnpm/plugin-commands-env@1000.0.21
  - @pnpm/lifecycle@1001.0.10
  - @pnpm/client@1000.0.14
  - @pnpm/package-bins@1000.0.6
  - @pnpm/read-package-json@1000.0.7
  - @pnpm/read-project-manifest@1000.0.9
  - @pnpm/sort-packages@1000.0.6
  - @pnpm/crypto.hash@1000.1.1
  - @pnpm/workspace.injected-deps-syncer@1000.0.5

## 1000.2.9

### Patch Changes

- Updated dependencies [e57f1df]
  - @pnpm/config@1002.7.0
  - @pnpm/cli-utils@1000.0.19
  - @pnpm/deps.status@1002.0.9
  - @pnpm/plugin-commands-env@1000.0.20
  - @pnpm/plugin-commands-installation@1002.2.4

## 1000.2.8

### Patch Changes

- 5f7be64: Rename `pnpm.allowNonAppliedPatches` to `pnpm.allowUnusedPatches`. The old name is still supported but it would print a deprecation warning message.
- 5f7be64: Add `pnpm.ignorePatchFailures` to manage whether pnpm would ignore patch application failures.

  If `ignorePatchFailures` is not set, pnpm would throw an error when patches with exact versions or version ranges fail to apply, and it would ignore failures from name-only patches.

  If `ignorePatchFailures` is explicitly set to `false`, pnpm would throw an error when any type of patch fails to apply.

  If `ignorePatchFailures` is explicitly set to `true`, pnpm would print a warning when any type of patch fails to apply.

- Updated dependencies [9bcca9f]
- Updated dependencies [5b35dff]
- Updated dependencies [9bcca9f]
- Updated dependencies [5f7be64]
- Updated dependencies [5f7be64]
  - @pnpm/config@1002.6.0
  - @pnpm/types@1000.3.0
  - @pnpm/cli-utils@1000.0.18
  - @pnpm/deps.status@1002.0.8
  - @pnpm/plugin-commands-env@1000.0.19
  - @pnpm/plugin-commands-installation@1002.2.3
  - @pnpm/pick-registry-for-package@1000.0.5
  - @pnpm/lifecycle@1001.0.9
  - @pnpm/core-loggers@1000.1.5
  - @pnpm/client@1000.0.13
  - @pnpm/package-bins@1000.0.5
  - @pnpm/read-package-json@1000.0.6
  - @pnpm/read-project-manifest@1000.0.8
  - @pnpm/sort-packages@1000.0.5
  - @pnpm/workspace.injected-deps-syncer@1000.0.4
  - @pnpm/crypto.hash@1000.1.1

## 1000.2.7

### Patch Changes

- Updated dependencies [936430a]
  - @pnpm/config@1002.5.4
  - @pnpm/plugin-commands-installation@1002.2.2
  - @pnpm/workspace.injected-deps-syncer@1000.0.3
  - @pnpm/cli-utils@1000.0.17
  - @pnpm/deps.status@1002.0.7
  - @pnpm/plugin-commands-env@1000.0.18
  - @pnpm/client@1000.0.12
  - @pnpm/lifecycle@1001.0.8
  - @pnpm/crypto.hash@1000.1.1

## 1000.2.6

### Patch Changes

- e5b7bf4: Fix `pnpm dlx` with `--allow-build` flag [#9263](https://github.com/pnpm/pnpm/issues/9263).
- Updated dependencies [9904675]
- Updated dependencies [e5b7bf4]
- Updated dependencies [aec8c50]
  - @pnpm/workspace.injected-deps-syncer@1000.0.2
  - @pnpm/plugin-commands-installation@1002.2.1
  - @pnpm/plugin-commands-env@1000.0.17
  - @pnpm/deps.status@1002.0.6
  - @pnpm/client@1000.0.11

## 1000.2.5

### Patch Changes

- 57f989e: Add the missing `node-options` config to `recursive run` [#9180](https://github.com/pnpm/pnpm/issues/9180).
- Updated dependencies [b4efd0e]
- Updated dependencies [6e4459c]
- Updated dependencies [cda1c43]
  - @pnpm/plugin-commands-installation@1002.2.0
  - @pnpm/config@1002.5.3
  - @pnpm/cli-utils@1000.0.16
  - @pnpm/deps.status@1002.0.5
  - @pnpm/plugin-commands-env@1000.0.16

## 1000.2.4

### Patch Changes

- Updated dependencies [0b0bcfa]
  - @pnpm/exec.pnpm-cli-runner@1000.0.1
  - @pnpm/cli-utils@1000.0.15
  - @pnpm/crypto.hash@1000.1.1
  - @pnpm/plugin-commands-env@1000.0.15
  - @pnpm/plugin-commands-installation@1002.1.2
  - @pnpm/deps.status@1002.0.4
  - @pnpm/config@1002.5.2
  - @pnpm/client@1000.0.10

## 1000.2.3

### Patch Changes

- Updated dependencies [c3aa4d8]
  - @pnpm/config@1002.5.1
  - @pnpm/cli-utils@1000.0.14
  - @pnpm/deps.status@1002.0.3
  - @pnpm/plugin-commands-env@1000.0.14
  - @pnpm/plugin-commands-installation@1002.1.1
  - @pnpm/client@1000.0.9

## 1000.2.2

### Patch Changes

- 6a59366: Pass onlyBuiltDependencies as a direct option to add.handler.
- Updated dependencies [b8b0c68]
- Updated dependencies [daf47e9]
- Updated dependencies [6a59366]
- Updated dependencies [a5e4965]
- Updated dependencies [d9d7607]
- Updated dependencies [d965748]
- Updated dependencies [e4eeafd]
  - @pnpm/package-bins@1000.0.4
  - @pnpm/crypto.hash@1000.1.0
  - @pnpm/plugin-commands-installation@1002.1.0
  - @pnpm/types@1000.2.1
  - @pnpm/config@1002.5.0
  - @pnpm/deps.status@1002.0.2
  - @pnpm/cli-utils@1000.0.13
  - @pnpm/pick-registry-for-package@1000.0.4
  - @pnpm/plugin-commands-env@1000.0.13
  - @pnpm/lifecycle@1001.0.7
  - @pnpm/core-loggers@1000.1.4
  - @pnpm/client@1000.0.8
  - @pnpm/read-package-json@1000.0.5
  - @pnpm/read-project-manifest@1000.0.7
  - @pnpm/sort-packages@1000.0.4
  - @pnpm/workspace.injected-deps-syncer@1000.0.1

## 1000.2.1

### Patch Changes

- 0b31bf0: `pnpm dlx` should ignore settings from the `package.json` file in the current working directory [#9178](https://github.com/pnpm/pnpm/issues/9178).
- Updated dependencies [76973d8]
- Updated dependencies [1c2eb8c]
  - @pnpm/plugin-commands-installation@1002.0.1
  - @pnpm/config@1002.4.1
  - @pnpm/cli-utils@1000.0.12
  - @pnpm/deps.status@1002.0.1
  - @pnpm/plugin-commands-env@1000.0.12

## 1000.2.0

### Minor Changes

- e32b1a2: Added support for automatically syncing files of injected workspace packages after `pnpm run` [#9081](https://github.com/pnpm/pnpm/issues/9081). Use the `sync-injected-deps-after-scripts` setting to specify which scripts build the workspace package. This tells pnpm when syncing is needed. The setting should be defined in a `.npmrc` file at the root of the workspace. Example:

  ```ini
  sync-injected-deps-after-scripts[]=compile
  ```

### Patch Changes

- Updated dependencies [8fcc221]
- Updated dependencies [8fcc221]
- Updated dependencies [e32b1a2]
- Updated dependencies [5296961]
- Updated dependencies [8fcc221]
- Updated dependencies [8fcc221]
- Updated dependencies [e32b1a2]
  - @pnpm/plugin-commands-installation@1002.0.0
  - @pnpm/config@1002.4.0
  - @pnpm/workspace.injected-deps-syncer@1000.0.0
  - @pnpm/types@1000.2.0
  - @pnpm/deps.status@1002.0.0
  - @pnpm/cli-utils@1000.0.11
  - @pnpm/plugin-commands-env@1000.0.11
  - @pnpm/pick-registry-for-package@1000.0.3
  - @pnpm/lifecycle@1001.0.6
  - @pnpm/core-loggers@1000.1.3
  - @pnpm/client@1000.0.7
  - @pnpm/package-bins@1000.0.3
  - @pnpm/read-package-json@1000.0.4
  - @pnpm/read-project-manifest@1000.0.6
  - @pnpm/sort-packages@1000.0.3
  - @pnpm/crypto.hash@1000.0.0

## 1000.1.4

### Patch Changes

- Updated dependencies [fee898f]
- Updated dependencies [546ab37]
  - @pnpm/config@1002.3.1
  - @pnpm/plugin-commands-installation@1001.5.1
  - @pnpm/cli-utils@1000.0.10
  - @pnpm/deps.status@1001.2.2
  - @pnpm/plugin-commands-env@1000.0.10

## 1000.1.3

### Patch Changes

- Updated dependencies [91d46ee]
  - @pnpm/plugin-commands-installation@1001.5.0
  - @pnpm/cli-utils@1000.0.9
  - @pnpm/plugin-commands-env@1000.0.9
  - @pnpm/deps.status@1001.2.1

## 1000.1.2

### Patch Changes

- 265946b: Fix a false negative of `verify-deps-before-run` after `pnpm install --production|--no-optional` [#9019](https://github.com/pnpm/pnpm/issues/9019).
- Updated dependencies [c52f55a]
- Updated dependencies [265946b]
- Updated dependencies [f6006f2]
  - @pnpm/exec.pnpm-cli-runner@1000.0.0
  - @pnpm/deps.status@1001.2.0
  - @pnpm/plugin-commands-installation@1001.4.0
  - @pnpm/config@1002.3.0
  - @pnpm/cli-utils@1000.0.8
  - @pnpm/plugin-commands-env@1000.0.8

## 1000.1.1

### Patch Changes

- @pnpm/plugin-commands-installation@1001.3.2

## 1000.1.0

### Minor Changes

- b5ba535: Packages executed via `pnpm dlx` and `pnpm create` are allowed to be built (run postinstall scripts) by default.

  If the packages executed by `dlx` or `create` have dependencies that have to be built, they should be listed via the `--allow-build` flag. For instance, if you want to run a package called `bundle` that has `esbuild` in dependencies and want to allow `esbuild` to run postinstall scripts, run:

  ```
  pnpm --allow-build=esbuild dlx bundle
  ```

  Related PR: [#9026](https://github.com/pnpm/pnpm/pull/9026).

### Patch Changes

- Updated dependencies [c0d1c01]
- Updated dependencies [1e229d7]
  - @pnpm/lifecycle@1001.0.5
  - @pnpm/read-project-manifest@1000.0.5
  - @pnpm/cli-utils@1000.0.7
  - @pnpm/config@1002.2.1
  - @pnpm/plugin-commands-installation@1001.3.1
  - @pnpm/plugin-commands-env@1000.0.7
  - @pnpm/deps.status@1001.1.3
  - @pnpm/client@1000.0.6

## 1000.0.7

### Patch Changes

- c96eb2b: Fix infinite loop caused by lifecycle scripts using `pnpm` to execute other scripts during `pnpm install` with `verify-deps-before-run=install` [#8954](https://github.com/pnpm/pnpm/issues/8954).
- Updated dependencies [b562deb]
- Updated dependencies [5c8654f]
- Updated dependencies [f3ffaed]
- Updated dependencies [c96eb2b]
  - @pnpm/types@1000.1.1
  - @pnpm/deps.status@1001.1.2
  - @pnpm/plugin-commands-installation@1001.3.0
  - @pnpm/config@1002.2.0
  - @pnpm/error@1000.0.2
  - @pnpm/store-path@1000.0.2
  - @pnpm/cli-utils@1000.0.6
  - @pnpm/pick-registry-for-package@1000.0.2
  - @pnpm/plugin-commands-env@1000.0.6
  - @pnpm/lifecycle@1001.0.4
  - @pnpm/core-loggers@1000.1.2
  - @pnpm/client@1000.0.5
  - @pnpm/package-bins@1000.0.2
  - @pnpm/read-package-json@1000.0.3
  - @pnpm/read-project-manifest@1000.0.4
  - @pnpm/sort-packages@1000.0.2
  - @pnpm/crypto.hash@1000.0.0

## 1000.0.6

### Patch Changes

- Updated dependencies [e050221]
- Updated dependencies [e050221]
  - @pnpm/read-project-manifest@1000.0.3
  - @pnpm/plugin-commands-installation@1001.2.1
  - @pnpm/cli-utils@1000.0.5
  - @pnpm/config@1002.1.2
  - @pnpm/lifecycle@1001.0.3
  - @pnpm/plugin-commands-env@1000.0.5
  - @pnpm/deps.status@1001.1.1
  - @pnpm/client@1000.0.4
  - @pnpm/crypto.hash@1000.0.0

## 1000.0.5

### Patch Changes

- Updated dependencies [c7eefdd]
- Updated dependencies [9591a18]
- Updated dependencies [1f5169f]
  - @pnpm/plugin-commands-installation@1001.2.0
  - @pnpm/types@1000.1.0
  - @pnpm/deps.status@1001.1.0
  - @pnpm/config@1002.1.1
  - @pnpm/cli-utils@1000.0.4
  - @pnpm/pick-registry-for-package@1000.0.1
  - @pnpm/plugin-commands-env@1000.0.4
  - @pnpm/lifecycle@1001.0.2
  - @pnpm/core-loggers@1000.1.1
  - @pnpm/client@1000.0.3
  - @pnpm/package-bins@1000.0.1
  - @pnpm/read-package-json@1000.0.2
  - @pnpm/read-project-manifest@1000.0.2
  - @pnpm/sort-packages@1000.0.1
  - @pnpm/crypto.hash@1000.0.0

## 1000.0.4

### Patch Changes

- Updated dependencies [f90a94b]
- Updated dependencies [f891288]
- Updated dependencies [f891288]
  - @pnpm/config@1002.1.0
  - @pnpm/plugin-commands-installation@1001.1.0
  - @pnpm/cli-utils@1000.0.3
  - @pnpm/deps.status@1001.0.3
  - @pnpm/plugin-commands-env@1000.0.3

## 1000.0.3

### Patch Changes

- Updated dependencies [516c4b3]
- Updated dependencies [f685565]
- Updated dependencies [878ea8c]
  - @pnpm/core-loggers@1000.1.0
  - @pnpm/plugin-commands-installation@1001.0.2
  - @pnpm/config@1002.0.0
  - @pnpm/lifecycle@1001.0.1
  - @pnpm/cli-utils@1000.0.2
  - @pnpm/deps.status@1001.0.2
  - @pnpm/plugin-commands-env@1000.0.2
  - @pnpm/client@1000.0.2
  - @pnpm/crypto.hash@1000.0.0

## 1000.0.2

### Patch Changes

- @pnpm/deps.status@1001.0.1
- @pnpm/plugin-commands-installation@1001.0.1

## 1000.0.1

### Patch Changes

- Updated dependencies [ac5b9d8]
- Updated dependencies [6483b64]
- Updated dependencies [31911f1]
- Updated dependencies [b8bda0a]
- Updated dependencies [d47c426]
- Updated dependencies [3a6a417]
- Updated dependencies [a76da0c]
  - @pnpm/plugin-commands-installation@1001.0.0
  - @pnpm/config@1001.0.0
  - @pnpm/deps.status@1001.0.0
  - @pnpm/lifecycle@1001.0.0
  - @pnpm/cli-utils@1000.0.1
  - @pnpm/plugin-commands-env@1000.0.1
  - @pnpm/error@1000.0.1
  - @pnpm/store-path@1000.0.1
  - @pnpm/client@1000.0.1
  - @pnpm/read-package-json@1000.0.1
  - @pnpm/read-project-manifest@1000.0.1
  - @pnpm/crypto.hash@1000.0.0

## 13.0.0

### Major Changes

- 74c6dd3: `pnpm test` should pass all the params after the `test` keyword to the underlying script. This is similar to how `pnpm run test` works [#8619](https://github.com/pnpm/pnpm/pull/8619).
- 7d7c51e: The `dlx` command should always resolve packages to their exact versions and use those exact versions to create a cache key. This way `dlx` will always install the newest versions of the directly requested packages.
- f10256d: Update dlx cache key to use SHA256.

### Minor Changes

- 19d5b51: Add a feature to check dependencies before running scripts [#8585](https://github.com/pnpm/pnpm/issues/8585).

### Patch Changes

- ef7c102: `pnpm exec` should print a meaningful error message when no command is provided [#8752](https://github.com/pnpm/pnpm/issues/8752).
- f76ff63: Fix race condition of symlink creations caused by multiple parallel `dlx` processes.
- 39c5385: Some commands should ignore the `packageManager` field check of `package.json` [#7959](https://github.com/pnpm/pnpm/issues/7959).
- Updated dependencies [477e0c1]
- Updated dependencies [19d5b51]
- Updated dependencies [dcd2917]
- Updated dependencies [dfcf034]
- Updated dependencies [592e2ef]
- Updated dependencies [19d5b51]
- Updated dependencies [19d5b51]
- Updated dependencies [1dbc56a]
- Updated dependencies [6b27c81]
- Updated dependencies [e9985b6]
- Updated dependencies [39c5385]
  - @pnpm/plugin-commands-installation@18.0.0
  - @pnpm/config@22.0.0
  - @pnpm/deps.status@1.0.0
  - @pnpm/crypto.hash@1.0.0
  - @pnpm/plugin-commands-env@5.1.12
  - @pnpm/error@6.0.3
  - @pnpm/store-path@9.0.3
  - @pnpm/cli-utils@4.0.8
  - @pnpm/lifecycle@17.1.6
  - @pnpm/read-package-json@9.0.10
  - @pnpm/read-project-manifest@6.0.10
  - @pnpm/client@11.1.13

## 12.0.10

### Patch Changes

- Updated dependencies [d04f7f2]
- Updated dependencies [6014522]
  - @pnpm/plugin-commands-env@5.1.11
  - @pnpm/plugin-commands-installation@17.2.7
  - @pnpm/crypto.base32-hash@3.0.1
  - @pnpm/cli-utils@4.0.7
  - @pnpm/config@21.8.5
  - @pnpm/lifecycle@17.1.5

## 12.0.9

### Patch Changes

- @pnpm/plugin-commands-installation@17.2.6
- @pnpm/plugin-commands-env@5.1.10
- @pnpm/cli-utils@4.0.6
- @pnpm/config@21.8.4
- @pnpm/lifecycle@17.1.5
- @pnpm/crypto.base32-hash@3.0.0

## 12.0.8

### Patch Changes

- fb77d4e: Prevent `EBUSY` errors caused by calling `symlinkDir` in parallel `dlx` processes.
  - @pnpm/plugin-commands-installation@17.2.5

## 12.0.7

### Patch Changes

- Updated dependencies [83681da]
  - @pnpm/plugin-commands-installation@17.2.4
  - @pnpm/config@21.8.4
  - @pnpm/error@6.0.2
  - @pnpm/cli-utils@4.0.6
  - @pnpm/plugin-commands-env@5.1.9
  - @pnpm/lifecycle@17.1.5
  - @pnpm/read-package-json@9.0.9
  - @pnpm/read-project-manifest@6.0.9
  - @pnpm/store-path@9.0.2
  - @pnpm/crypto.base32-hash@3.0.0

## 12.0.6

### Patch Changes

- Updated dependencies [ad1fd64]
- Updated dependencies [eeb76cd]
  - @pnpm/plugin-commands-installation@17.2.3

## 12.0.5

### Patch Changes

- Updated dependencies [d500d9f]
  - @pnpm/types@12.2.0
  - @pnpm/cli-utils@4.0.5
  - @pnpm/config@21.8.3
  - @pnpm/plugin-commands-env@5.1.8
  - @pnpm/lifecycle@17.1.4
  - @pnpm/core-loggers@10.0.7
  - @pnpm/package-bins@9.0.7
  - @pnpm/plugin-commands-installation@17.2.2
  - @pnpm/read-package-json@9.0.8
  - @pnpm/read-project-manifest@6.0.8
  - @pnpm/sort-packages@6.0.8
  - @pnpm/crypto.base32-hash@3.0.0

## 12.0.4

### Patch Changes

- Updated dependencies [757e6be]
  - @pnpm/env.path@1.1.0
  - @pnpm/plugin-commands-installation@17.2.1

## 12.0.3

### Patch Changes

- Updated dependencies [7ee59a1]
  - @pnpm/types@12.1.0
  - @pnpm/plugin-commands-installation@17.2.0
  - @pnpm/cli-utils@4.0.4
  - @pnpm/config@21.8.2
  - @pnpm/plugin-commands-env@5.1.7
  - @pnpm/lifecycle@17.1.3
  - @pnpm/core-loggers@10.0.6
  - @pnpm/package-bins@9.0.6
  - @pnpm/read-package-json@9.0.7
  - @pnpm/read-project-manifest@6.0.7
  - @pnpm/sort-packages@6.0.7
  - @pnpm/crypto.base32-hash@3.0.0

## 12.0.2

### Patch Changes

- @pnpm/plugin-commands-installation@17.1.1

## 12.0.1

### Patch Changes

- Updated dependencies [eb8bf2a]
  - @pnpm/plugin-commands-installation@17.1.0
  - @pnpm/cli-utils@4.0.3
  - @pnpm/plugin-commands-env@5.1.6

## 12.0.0

### Major Changes

- 0ffb3ad: `pnpm exec` now supports executionEnv [#8356](https://github.com/pnpm/pnpm/issues/8356).

### Patch Changes

- d58b104: When dlx uses cache, use the real directory path not the symlink to the cache [#8421](https://github.com/pnpm/pnpm/pull/8421).
- Updated dependencies [251ab21]
  - @pnpm/config@21.8.1
  - @pnpm/cli-utils@4.0.2
  - @pnpm/plugin-commands-env@5.1.5
  - @pnpm/plugin-commands-installation@17.0.7

## 11.0.6

### Patch Changes

- @pnpm/plugin-commands-installation@17.0.6

## 11.0.5

### Patch Changes

- @pnpm/plugin-commands-installation@17.0.5

## 11.0.4

### Patch Changes

- @pnpm/cli-utils@4.0.1
- @pnpm/plugin-commands-installation@17.0.4
- @pnpm/plugin-commands-env@5.1.4

## 11.0.3

### Patch Changes

- 26b065c: Added usage of `@pnpm/env.path`.
- Updated dependencies [26b065c]
- Updated dependencies [26b065c]
- Updated dependencies [26b065c]
  - @pnpm/cli-utils@4.0.0
  - @pnpm/config@21.8.0
  - @pnpm/env.path@1.0.0
  - @pnpm/plugin-commands-env@5.1.3
  - @pnpm/plugin-commands-installation@17.0.3

## 11.0.2

### Patch Changes

- Updated dependencies [cb006df]
- Updated dependencies [98c8bd6]
- Updated dependencies [d20eed3]
  - @pnpm/types@12.0.0
  - @pnpm/cli-utils@3.1.7
  - @pnpm/config@21.7.0
  - @pnpm/plugin-commands-installation@17.0.2
  - @pnpm/plugin-commands-env@5.1.2
  - @pnpm/lifecycle@17.1.2
  - @pnpm/core-loggers@10.0.5
  - @pnpm/package-bins@9.0.5
  - @pnpm/read-package-json@9.0.6
  - @pnpm/read-project-manifest@6.0.6
  - @pnpm/sort-packages@6.0.6
  - @pnpm/crypto.base32-hash@3.0.0

## 11.0.1

### Patch Changes

- Updated dependencies [9899576]
  - @pnpm/lifecycle@17.1.1
  - @pnpm/plugin-commands-installation@17.0.1
  - @pnpm/config@21.6.3
  - @pnpm/cli-utils@3.1.6
  - @pnpm/plugin-commands-env@5.1.1
  - @pnpm/crypto.base32-hash@3.0.0

## 11.0.0

### Major Changes

- 5aa98b6: Add registries information to the calculation of dlx cache hash.
- 0ef168b: Support specifying node version (via `pnpm.executionEnv.nodeVersion` in `package.json`) for running lifecycle scripts per each package in a workspace [#6720](https://github.com/pnpm/pnpm/issues/6720).

### Patch Changes

- 999d2ef: Silent reporting fixed with the `pnpm exec` command [#7608](https://github.com/pnpm/pnpm/issues/7608).
- Updated dependencies [1e4dd79]
- Updated dependencies [0ef168b]
  - @pnpm/plugin-commands-installation@17.0.0
  - @pnpm/plugin-commands-env@5.1.0
  - @pnpm/lifecycle@17.1.0
  - @pnpm/types@11.1.0
  - @pnpm/cli-utils@3.1.5
  - @pnpm/config@21.6.2
  - @pnpm/core-loggers@10.0.4
  - @pnpm/package-bins@9.0.4
  - @pnpm/read-package-json@9.0.5
  - @pnpm/read-project-manifest@6.0.5
  - @pnpm/sort-packages@6.0.5
  - @pnpm/crypto.base32-hash@3.0.0

## 10.0.1

### Patch Changes

- afe520d: Update symlink-dir to v6.0.1.
- Updated dependencies [afe520d]
  - @pnpm/config@21.6.1
  - @pnpm/plugin-commands-env@5.0.12
  - @pnpm/plugin-commands-installation@16.0.1
  - @pnpm/cli-utils@3.1.4
  - @pnpm/lifecycle@17.0.8
  - @pnpm/crypto.base32-hash@3.0.0

## 10.0.0

### Major Changes

- dd00eeb: Renamed dir to rootDir in the Project object.

### Minor Changes

- 1b03682: Read authentication information from .npmrc in the current directory when running `dlx` [#7996](https://github.com/pnpm/pnpm/issues/7996).

### Patch Changes

- 98f20a7: Fix `dlx` not actually using node version specified by `--use-node-version`.
- Updated dependencies [1b03682]
- Updated dependencies [dd00eeb]
- Updated dependencies
- Updated dependencies [84654bd]
- Updated dependencies [9b5b869]
  - @pnpm/config@21.6.0
  - @pnpm/plugin-commands-installation@16.0.0
  - @pnpm/types@11.0.0
  - @pnpm/command@5.0.2
  - @pnpm/cli-utils@3.1.3
  - @pnpm/plugin-commands-env@5.0.11
  - @pnpm/lifecycle@17.0.7
  - @pnpm/core-loggers@10.0.3
  - @pnpm/package-bins@9.0.3
  - @pnpm/read-package-json@9.0.4
  - @pnpm/read-project-manifest@6.0.4
  - @pnpm/sort-packages@6.0.4
  - @pnpm/crypto.base32-hash@3.0.0

## 9.1.11

### Patch Changes

- 13e55b2: If install is performed on a subset of workspace projects, always create an up-to-date lockfile first. So, a partial install can be performed only on a fully resolved (non-partial) lockfile [#8165](https://github.com/pnpm/pnpm/issues/8165).
- Updated dependencies [7c6c923]
- Updated dependencies [7d10394]
- Updated dependencies [d8eab39]
- Updated dependencies [13e55b2]
- Updated dependencies [04b8363]
  - @pnpm/config@21.5.0
  - @pnpm/plugin-commands-installation@15.1.11
  - @pnpm/types@10.1.1
  - @pnpm/cli-utils@3.1.2
  - @pnpm/lifecycle@17.0.6
  - @pnpm/core-loggers@10.0.2
  - @pnpm/package-bins@9.0.2
  - @pnpm/read-package-json@9.0.3
  - @pnpm/read-project-manifest@6.0.3
  - @pnpm/sort-packages@6.0.3
  - @pnpm/crypto.base32-hash@3.0.0

## 9.1.10

### Patch Changes

- 271386f: Set `reporter-hide-prefix` to `true` by default for `pnpm exec`. In order to show prefix, the user now has to explicitly set `reporter-hide-prefix=false` [#8174](https://github.com/pnpm/pnpm/issues/8174).
- Updated dependencies [47341e5]
  - @pnpm/config@21.4.0
  - @pnpm/plugin-commands-installation@15.1.10
  - @pnpm/cli-utils@3.1.1
  - @pnpm/crypto.base32-hash@3.0.0
  - @pnpm/lifecycle@17.0.5

## 9.1.9

### Patch Changes

- bc0618c: `exec` now also streams prefixed output when `--recursive` or `--parallel` is specified just as `run` does [#8065](https://github.com/pnpm/pnpm/issues/8065).
- Updated dependencies [b7ca13f]
- Updated dependencies [b7ca13f]
  - @pnpm/cli-utils@3.1.0
  - @pnpm/config@21.3.0
  - @pnpm/lifecycle@17.0.5
  - @pnpm/plugin-commands-installation@15.1.9

## 9.1.8

### Patch Changes

- @pnpm/plugin-commands-installation@15.1.8

## 9.1.7

### Patch Changes

- @pnpm/plugin-commands-installation@15.1.7

## 9.1.6

### Patch Changes

- @pnpm/plugin-commands-installation@15.1.6

## 9.1.5

### Patch Changes

- @pnpm/plugin-commands-installation@15.1.5
- @pnpm/lifecycle@17.0.4
- @pnpm/config@21.2.3
- @pnpm/cli-utils@3.0.7
- @pnpm/crypto.base32-hash@3.0.0

## 9.1.4

### Patch Changes

- Updated dependencies [45f4262]
  - @pnpm/types@10.1.0
  - @pnpm/cli-utils@3.0.6
  - @pnpm/config@21.2.2
  - @pnpm/lifecycle@17.0.3
  - @pnpm/package-bins@9.0.1
  - @pnpm/plugin-commands-installation@15.1.4
  - @pnpm/read-package-json@9.0.2
  - @pnpm/read-project-manifest@6.0.2
  - @pnpm/sort-packages@6.0.2
  - @pnpm/crypto.base32-hash@3.0.0

## 9.1.3

### Patch Changes

- Updated dependencies [a7aef51]
- Updated dependencies [37538f5]
  - @pnpm/error@6.0.1
  - @pnpm/command@5.0.1
  - @pnpm/cli-utils@3.0.5
  - @pnpm/config@21.2.1
  - @pnpm/lifecycle@17.0.2
  - @pnpm/plugin-commands-installation@15.1.3
  - @pnpm/read-package-json@9.0.1
  - @pnpm/read-project-manifest@6.0.1
  - @pnpm/store-path@9.0.1

## 9.1.2

### Patch Changes

- @pnpm/cli-utils@3.0.4
- @pnpm/plugin-commands-installation@15.1.2

## 9.1.1

### Patch Changes

- @pnpm/sort-packages@6.0.1
- @pnpm/plugin-commands-installation@15.1.1

## 9.1.0

### Minor Changes

- 9719a42: New setting called `virtual-store-dir-max-length` added to modify the maximum allowed length of the directories inside `node_modules/.pnpm`. The default length is set to 120 characters. This setting is particularly useful on Windows, where there is a limit to the maximum length of a file path [#7355](https://github.com/pnpm/pnpm/issues/7355).

### Patch Changes

- Updated dependencies [9719a42]
  - @pnpm/plugin-commands-installation@15.1.0
  - @pnpm/config@21.2.0
  - @pnpm/cli-utils@3.0.3
  - @pnpm/crypto.base32-hash@3.0.0
  - @pnpm/lifecycle@17.0.1

## 9.0.7

### Patch Changes

- @pnpm/plugin-commands-installation@15.0.7

## 9.0.6

### Patch Changes

- @pnpm/plugin-commands-installation@15.0.6

## 9.0.5

### Patch Changes

- @pnpm/plugin-commands-installation@15.0.5

## 9.0.4

### Patch Changes

- Updated dependencies [bfadc0a]
- Updated dependencies [a80b539]
  - @pnpm/lifecycle@17.0.1
  - @pnpm/cli-utils@3.0.2
  - @pnpm/plugin-commands-installation@15.0.4

## 9.0.3

### Patch Changes

- @pnpm/plugin-commands-installation@15.0.3

## 9.0.2

### Patch Changes

- @pnpm/plugin-commands-installation@15.0.2

## 9.0.1

### Patch Changes

- Updated dependencies [e0f47f4]
  - @pnpm/config@21.1.0
  - @pnpm/cli-utils@3.0.1
  - @pnpm/plugin-commands-installation@15.0.1

## 9.0.0

### Major Changes

- 43cdd87: Node.js v16 support dropped. Use at least Node.js v18.12.

### Minor Changes

- 98566d9: Added cache for `pnpm dlx` [#5277](https://github.com/pnpm/pnpm/issues/5277).

### Patch Changes

- 1a3449e: support `node-options` option inside `.npmrc` file when running scripts [#7596](https://github.com/pnpm/pnpm/issues/7596)
- Updated dependencies [7733f3a]
- Updated dependencies [3ded840]
- Updated dependencies [43cdd87]
- Updated dependencies [2d9e3b8]
- Updated dependencies [3477ee5]
- Updated dependencies [cfa33f1]
- Updated dependencies [d4e13ca]
- Updated dependencies [e748162]
- Updated dependencies [82aac81]
- Updated dependencies [2b89155]
- Updated dependencies [60839fc]
- Updated dependencies [730929e]
- Updated dependencies [98566d9]
  - @pnpm/types@10.0.0
  - @pnpm/config@21.0.0
  - @pnpm/error@6.0.0
  - @pnpm/plugin-commands-installation@15.0.0
  - @pnpm/read-project-manifest@6.0.0
  - @pnpm/read-package-json@9.0.0
  - @pnpm/common-cli-options-help@2.0.0
  - @pnpm/crypto.base32-hash@3.0.0
  - @pnpm/package-bins@9.0.0
  - @pnpm/sort-packages@6.0.0
  - @pnpm/store-path@9.0.0
  - @pnpm/lifecycle@17.0.0
  - @pnpm/cli-utils@3.0.0
  - @pnpm/command@5.0.0

## 8.0.21

### Patch Changes

- Updated dependencies [31054a63e]
- Updated dependencies [f43bdcf45]
  - @pnpm/plugin-commands-installation@14.2.0
  - @pnpm/lifecycle@16.0.12
  - @pnpm/cli-utils@2.1.9
  - @pnpm/config@20.4.2

## 8.0.20

### Patch Changes

- be27890ee: Set saveProd to true for getting pkgName from dependencies [7424](https://github.com/pnpm/pnpm/issues/7424).
  - @pnpm/plugin-commands-installation@14.1.3
  - @pnpm/lifecycle@16.0.11

## 8.0.19

### Patch Changes

- Updated dependencies [37ccff637]
- Updated dependencies [d9564e354]
  - @pnpm/store-path@8.0.2
  - @pnpm/config@20.4.1
  - @pnpm/plugin-commands-installation@14.1.2
  - @pnpm/cli-utils@2.1.8
  - @pnpm/lifecycle@16.0.10

## 8.0.18

### Patch Changes

- @pnpm/plugin-commands-installation@14.1.1

## 8.0.17

### Patch Changes

- Updated dependencies [064aeb681]
- Updated dependencies [c597f72ec]
  - @pnpm/plugin-commands-installation@14.1.0
  - @pnpm/config@20.4.0
  - @pnpm/cli-utils@2.1.7

## 8.0.16

### Patch Changes

- Updated dependencies [619e9ed6f]
- Updated dependencies [4e71066dd]
- Updated dependencies [4d34684f1]
  - @pnpm/plugin-commands-installation@14.0.15
  - @pnpm/common-cli-options-help@1.1.0
  - @pnpm/config@20.3.0
  - @pnpm/types@9.4.2
  - @pnpm/cli-utils@2.1.6
  - @pnpm/lifecycle@16.0.10
  - @pnpm/package-bins@8.0.6
  - @pnpm/read-package-json@8.0.7
  - @pnpm/read-project-manifest@5.0.10
  - @pnpm/sort-packages@5.0.9

## 8.0.15

### Patch Changes

- Updated dependencies
- Updated dependencies [672c559e4]
  - @pnpm/types@9.4.1
  - @pnpm/config@20.2.0
  - @pnpm/plugin-commands-installation@14.0.14
  - @pnpm/cli-utils@2.1.5
  - @pnpm/lifecycle@16.0.9
  - @pnpm/package-bins@8.0.5
  - @pnpm/read-package-json@8.0.6
  - @pnpm/read-project-manifest@5.0.9
  - @pnpm/sort-packages@5.0.8

## 8.0.14

### Patch Changes

- @pnpm/plugin-commands-installation@14.0.13

## 8.0.13

### Patch Changes

- 1474bfd89: Fix a bug where pnpm incorrectly passes a flag to a run handler as a fallback command [#7244](https://github.com/pnpm/pnpm/issues/7244).

## 8.0.12

### Patch Changes

- @pnpm/plugin-commands-installation@14.0.12

## 8.0.11

### Patch Changes

- Updated dependencies [6558d1865]
  - @pnpm/plugin-commands-installation@14.0.11
  - @pnpm/cli-utils@2.1.4

## 8.0.10

### Patch Changes

- @pnpm/cli-utils@2.1.3
- @pnpm/plugin-commands-installation@14.0.10

## 8.0.9

### Patch Changes

- @pnpm/plugin-commands-installation@14.0.9

## 8.0.8

### Patch Changes

- @pnpm/plugin-commands-installation@14.0.8

## 8.0.7

### Patch Changes

- @pnpm/plugin-commands-installation@14.0.7

## 8.0.6

### Patch Changes

- @pnpm/lifecycle@16.0.8
- @pnpm/plugin-commands-installation@14.0.6
- @pnpm/config@20.1.2
- @pnpm/cli-utils@2.1.2

## 8.0.5

### Patch Changes

- @pnpm/plugin-commands-installation@14.0.5

## 8.0.4

### Patch Changes

- @pnpm/lifecycle@16.0.7
- @pnpm/plugin-commands-installation@14.0.4

## 8.0.3

### Patch Changes

- 7d65d901a: Fix issue when trying to use `pnpm dlx` in the root of a Windows Drive [#7263](https://github.com/pnpm/pnpm/issues/7263).
- Updated dependencies [7d65d901a]
  - @pnpm/store-path@8.0.1
  - @pnpm/plugin-commands-installation@14.0.3
  - @pnpm/lifecycle@16.0.6
  - @pnpm/config@20.1.1
  - @pnpm/cli-utils@2.1.1

## 8.0.2

### Patch Changes

- @pnpm/lifecycle@16.0.5
- @pnpm/plugin-commands-installation@14.0.2

## 8.0.1

### Patch Changes

- @pnpm/plugin-commands-installation@14.0.1

## 8.0.0

### Major Changes

- d6592964f: `rootProjectManifestDir` is a required field.

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

- e34f6fba9: When running scripts recursively inside a workspace, the logs of the scripts are grouped together in some CI tools. (Only works with `--workspace-concurrency 1`)
- Updated dependencies [43ce9e4a6]
- Updated dependencies [d2dc2e66a]
- Updated dependencies [d6592964f]
- Updated dependencies [d6592964f]
  - @pnpm/types@9.4.0
  - @pnpm/cli-utils@2.1.0
  - @pnpm/config@20.1.0
  - @pnpm/package-bins@8.0.4
  - @pnpm/plugin-commands-installation@14.0.0
  - @pnpm/lifecycle@16.0.4
  - @pnpm/read-package-json@8.0.5
  - @pnpm/read-project-manifest@5.0.8
  - @pnpm/sort-packages@5.0.7

## 7.2.8

### Patch Changes

- @pnpm/lifecycle@16.0.3
- @pnpm/plugin-commands-installation@13.2.6

## 7.2.7

### Patch Changes

- Updated dependencies [4246f41be]
- Updated dependencies [84f81c9ae]
  - @pnpm/sort-packages@5.0.6
  - @pnpm/lifecycle@16.0.2
  - @pnpm/plugin-commands-installation@13.2.5

## 7.2.6

### Patch Changes

- 1ce2dd13a: Update didyoumean2 to v6.
- ac5abd3ff: `pnpm dlx` should ignore any settings that are in a `package.json` file found in the current working directory [#7198](https://github.com/pnpm/pnpm/issues/7198).
- Updated dependencies [bc83798d4]
- Updated dependencies [46dc34dcc]
- Updated dependencies [ac5abd3ff]
- Updated dependencies [b60bb6cbe]
  - @pnpm/plugin-commands-installation@13.2.4
  - @pnpm/config@20.0.0
  - @pnpm/cli-utils@2.0.24
  - @pnpm/lifecycle@16.0.1

## 7.2.5

### Patch Changes

- @pnpm/plugin-commands-installation@13.2.3

## 7.2.4

### Patch Changes

- @pnpm/plugin-commands-installation@13.2.2

## 7.2.3

### Patch Changes

- Updated dependencies [b1dd0ee58]
  - @pnpm/config@19.2.1
  - @pnpm/cli-utils@2.0.23
  - @pnpm/plugin-commands-installation@13.2.1

## 7.2.2

### Patch Changes

- Updated dependencies [d774a3196]
- Updated dependencies [12f45a83d]
- Updated dependencies [d774a3196]
- Updated dependencies [832e28826]
  - @pnpm/config@19.2.0
  - @pnpm/plugin-commands-installation@13.2.0
  - @pnpm/types@9.3.0
  - @pnpm/cli-utils@2.0.22
  - @pnpm/lifecycle@16.0.1
  - @pnpm/package-bins@8.0.3
  - @pnpm/read-package-json@8.0.4
  - @pnpm/read-project-manifest@5.0.7
  - @pnpm/sort-packages@5.0.5

## 7.2.1

### Patch Changes

- @pnpm/plugin-commands-installation@13.1.8

## 7.2.0

### Minor Changes

- ee328fd25: Add `--hide-reporter-prefix' option for `run` command to hide project name as prefix for lifecycle log outputs of running scripts [#7061](https://github.com/pnpm/pnpm/issues/7061).

### Patch Changes

- Updated dependencies [ba48fe0bc]
- Updated dependencies [ee328fd25]
  - @pnpm/plugin-commands-installation@13.1.7
  - @pnpm/config@19.1.0
  - @pnpm/cli-utils@2.0.21

## 7.1.26

### Patch Changes

- @pnpm/plugin-commands-installation@13.1.6
- @pnpm/cli-utils@2.0.20

## 7.1.25

### Patch Changes

- Updated dependencies [9caa33d53]
  - @pnpm/lifecycle@16.0.0
  - @pnpm/plugin-commands-installation@13.1.5
  - @pnpm/read-project-manifest@5.0.6
  - @pnpm/config@19.0.3
  - @pnpm/cli-utils@2.0.19

## 7.1.24

### Patch Changes

- @pnpm/plugin-commands-installation@13.1.4

## 7.1.23

### Patch Changes

- @pnpm/plugin-commands-installation@13.1.3
- @pnpm/lifecycle@15.0.9
- @pnpm/config@19.0.2
- @pnpm/cli-utils@2.0.18

## 7.1.22

### Patch Changes

- @pnpm/plugin-commands-installation@13.1.2
- @pnpm/config@19.0.1
- @pnpm/lifecycle@15.0.8

## 7.1.21

### Patch Changes

- b962c27ae: Allow create scoped package with preferred version. [#7053](https://github.com/pnpm/pnpm/issues/7053)
  - @pnpm/lifecycle@15.0.8
  - @pnpm/plugin-commands-installation@13.1.1
  - @pnpm/config@19.0.1
  - @pnpm/cli-utils@2.0.17

## 7.1.20

### Patch Changes

- d4ee98f83: Remove unused logger.info [#7005](https://github.com/pnpm/pnpm/issues/7005)
- ce3f1712b: Fix misleading "command not found" error message.
- Updated dependencies [ef3609049]
- Updated dependencies [e0474bc4c]
- Updated dependencies [bf21c9bf3]
- Updated dependencies [cb8bcc8df]
- Updated dependencies [e9aa6f682]
- Updated dependencies [81e5ada3a]
  - @pnpm/plugin-commands-installation@13.1.0
  - @pnpm/config@19.0.0
  - @pnpm/lifecycle@15.0.7
  - @pnpm/cli-utils@2.0.16
  - @pnpm/read-project-manifest@5.0.5

## 7.1.19

### Patch Changes

- c5fbdb55c: Make the error message when user attempting to run a command that does not exist friendlier
- b454bb07b: `pnpm dlx` should not print an error stack when the underlying script execution fails [#6698](https://github.com/pnpm/pnpm/issues/6698).
- Updated dependencies [12b0f0976]
  - @pnpm/plugin-commands-installation@13.0.25
  - @pnpm/cli-utils@2.0.15

## 7.1.18

### Patch Changes

- Updated dependencies [692197df3]
- Updated dependencies [78d43a862]
  - @pnpm/lifecycle@15.0.6
  - @pnpm/plugin-commands-installation@13.0.24

## 7.1.17

### Patch Changes

- @pnpm/cli-utils@2.0.14
- @pnpm/plugin-commands-installation@13.0.23

## 7.1.16

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.22
- @pnpm/config@18.4.4
- @pnpm/lifecycle@15.0.5

## 7.1.15

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.21
- @pnpm/config@18.4.4
- @pnpm/lifecycle@15.0.5

## 7.1.14

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.20
- @pnpm/config@18.4.4
- @pnpm/lifecycle@15.0.5

## 7.1.13

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.19

## 7.1.12

### Patch Changes

- Updated dependencies [aa2ae8fe2]
  - @pnpm/types@9.2.0
  - @pnpm/cli-utils@2.0.13
  - @pnpm/config@18.4.4
  - @pnpm/lifecycle@15.0.5
  - @pnpm/package-bins@8.0.2
  - @pnpm/plugin-commands-installation@13.0.18
  - @pnpm/read-package-json@8.0.3
  - @pnpm/read-project-manifest@5.0.4
  - @pnpm/sort-packages@5.0.4

## 7.1.11

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.17

## 7.1.10

### Patch Changes

- a362a3ca1: Ensure consistent output for scripts executed concurrently, both within a single project and across multiple projects. Each script's output will now be printed in a separate section of the terminal, when running multiple scripts in a single project [using regex](https://pnpm.io/cli/run#running-multiple-scripts) [#6692](https://github.com/pnpm/pnpm/issues/6692).
- Updated dependencies [b4892acc5]
  - @pnpm/read-project-manifest@5.0.3
  - @pnpm/cli-utils@2.0.12
  - @pnpm/config@18.4.3
  - @pnpm/plugin-commands-installation@13.0.16
  - @pnpm/lifecycle@15.0.4

## 7.1.9

### Patch Changes

- Updated dependencies [dddb8ad71]
  - @pnpm/lifecycle@15.0.3
  - @pnpm/plugin-commands-installation@13.0.15
  - @pnpm/config@18.4.2

## 7.1.8

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.14

## 7.1.7

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.13

## 7.1.6

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.12

## 7.1.5

### Patch Changes

- Updated dependencies [e2d631217]
- Updated dependencies [0b830f947]
  - @pnpm/config@18.4.2
  - @pnpm/plugin-commands-installation@13.0.11
  - @pnpm/cli-utils@2.0.11
  - @pnpm/lifecycle@15.0.2

## 7.1.4

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.10
- @pnpm/config@18.4.1
- @pnpm/error@5.0.2
- @pnpm/cli-utils@2.0.10
- @pnpm/lifecycle@15.0.2
- @pnpm/read-package-json@8.0.2
- @pnpm/read-project-manifest@5.0.2

## 7.1.3

### Patch Changes

- Updated dependencies [d55b41a8b]
  - @pnpm/plugin-commands-installation@13.0.9
  - @pnpm/config@18.4.0
  - @pnpm/lifecycle@15.0.1

## 7.1.2

### Patch Changes

- Updated dependencies [a9e0b7cbf]
- Updated dependencies [301b8e2da]
- Updated dependencies [04a279881]
- Updated dependencies [6ce3424a9]
  - @pnpm/types@9.1.0
  - @pnpm/config@18.4.0
  - @pnpm/plugin-commands-installation@13.0.8
  - @pnpm/lifecycle@15.0.1
  - @pnpm/cli-utils@2.0.9
  - @pnpm/package-bins@8.0.1
  - @pnpm/read-package-json@8.0.1
  - @pnpm/read-project-manifest@5.0.1
  - @pnpm/sort-packages@5.0.3
  - @pnpm/error@5.0.1

## 7.1.1

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.7

## 7.1.0

### Minor Changes

- ee429b300: Expanded missing command error, including 'did you mean' [#6492](https://github.com/pnpm/pnpm/issues/6492).

### Patch Changes

- Updated dependencies [ee429b300]
- Updated dependencies [1de07a4af]
  - @pnpm/cli-utils@2.0.8
  - @pnpm/config@18.3.2
  - @pnpm/plugin-commands-installation@13.0.6

## 7.0.11

### Patch Changes

- Updated dependencies [d5c40b556]
  - @pnpm/plugin-commands-installation@13.0.5

## 7.0.10

### Patch Changes

- Updated dependencies [3fa14d7e4]
  - @pnpm/sort-packages@5.0.2
  - @pnpm/plugin-commands-installation@13.0.4

## 7.0.9

### Patch Changes

- Updated dependencies [2809e89ab]
  - @pnpm/config@18.3.1
  - @pnpm/plugin-commands-installation@13.0.3
  - @pnpm/cli-utils@2.0.7
  - @pnpm/lifecycle@15.0.0

## 7.0.8

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.2

## 7.0.7

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.1

## 7.0.6

### Patch Changes

- Updated dependencies [8e7a86dd9]
- Updated dependencies [6706a7d17]
- Updated dependencies [32f8e08c6]
- Updated dependencies [6850bb135]
- Updated dependencies [d43ccc44d]
- Updated dependencies [71a3ee77b]
- Updated dependencies [8e7a86dd9]
  - @pnpm/plugin-commands-installation@13.0.0
  - @pnpm/config@18.3.0
  - @pnpm/sort-packages@5.0.1
  - @pnpm/cli-utils@2.0.6

## 7.0.5

### Patch Changes

- Updated dependencies [e440d784f]
- Updated dependencies [fc8780ca9]
  - @pnpm/plugin-commands-installation@12.1.2
  - @pnpm/config@18.2.0
  - @pnpm/cli-utils@2.0.5

## 7.0.4

### Patch Changes

- @pnpm/plugin-commands-installation@12.1.1
- @pnpm/cli-utils@2.0.4
- @pnpm/config@18.1.1

## 7.0.3

### Patch Changes

- Updated dependencies [e2cb4b63d]
- Updated dependencies [cd6ce11f0]
  - @pnpm/plugin-commands-installation@12.1.0
  - @pnpm/config@18.1.0
  - @pnpm/cli-utils@2.0.3

## 7.0.2

### Patch Changes

- @pnpm/plugin-commands-installation@12.0.2
- @pnpm/config@18.0.2
- @pnpm/cli-utils@2.0.2

## 7.0.1

### Patch Changes

- Updated dependencies [51445f955]
  - @pnpm/plugin-commands-installation@12.0.1
  - @pnpm/config@18.0.1
  - @pnpm/cli-utils@2.0.1

## 7.0.0

### Major Changes

- eceaa8b8b: Node.js 14 support dropped.

### Patch Changes

- Updated dependencies [47e45d717]
- Updated dependencies [cae85dbb1]
- Updated dependencies [47e45d717]
- Updated dependencies [22ccf155e]
- Updated dependencies [7a0ce1df0]
- Updated dependencies [158d8cf22]
- Updated dependencies [eceaa8b8b]
- Updated dependencies [8e35c21d1]
- Updated dependencies [47e45d717]
- Updated dependencies [47e45d717]
- Updated dependencies [113f0ae26]
  - @pnpm/config@18.0.0
  - @pnpm/plugin-commands-installation@12.0.0
  - @pnpm/read-project-manifest@5.0.0
  - @pnpm/read-package-json@8.0.0
  - @pnpm/common-cli-options-help@1.0.0
  - @pnpm/package-bins@8.0.0
  - @pnpm/sort-packages@5.0.0
  - @pnpm/store-path@8.0.0
  - @pnpm/lifecycle@15.0.0
  - @pnpm/error@5.0.0
  - @pnpm/types@9.0.0
  - @pnpm/cli-utils@2.0.0
  - @pnpm/command@4.0.0

## 6.5.7

### Patch Changes

- @pnpm/plugin-commands-installation@11.5.7
- @pnpm/config@17.0.2
- @pnpm/cli-utils@1.1.7

## 6.5.6

### Patch Changes

- Updated dependencies [b38d711f3]
  - @pnpm/config@17.0.1
  - @pnpm/cli-utils@1.1.6
  - @pnpm/plugin-commands-installation@11.5.6

## 6.5.5

### Patch Changes

- Updated dependencies [e505b58e3]
  - @pnpm/config@17.0.0
  - @pnpm/plugin-commands-installation@11.5.5
  - @pnpm/read-project-manifest@4.1.4
  - @pnpm/cli-utils@1.1.5
  - @pnpm/lifecycle@14.1.7

## 6.5.4

### Patch Changes

- @pnpm/plugin-commands-installation@11.5.4
- @pnpm/config@16.7.2
- @pnpm/cli-utils@1.1.4

## 6.5.3

### Patch Changes

- Updated dependencies [690bead26]
  - @pnpm/plugin-commands-installation@11.5.3
  - @pnpm/config@16.7.1
  - @pnpm/cli-utils@1.1.3

## 6.5.2

### Patch Changes

- 7d64d757b: Add `skipped` status in exec report summary when script is missing [#6139](https://github.com/pnpm/pnpm/pull/6139).
- Updated dependencies [7d64d757b]
- Updated dependencies [5c31fa8be]
  - @pnpm/cli-utils@1.1.2
  - @pnpm/config@16.7.0
  - @pnpm/plugin-commands-installation@11.5.2

## 6.5.1

### Patch Changes

- @pnpm/plugin-commands-installation@11.5.1
- @pnpm/config@16.6.4
- @pnpm/cli-utils@1.1.1

## 6.5.0

### Minor Changes

- 0377d9367: Add --report-summary for pnpm exec and pnpm run [#6008](https://github.com/pnpm/pnpm/issues/6008)

### Patch Changes

- Updated dependencies [0377d9367]
  - @pnpm/plugin-commands-installation@11.5.0
  - @pnpm/cli-utils@1.1.0
  - @pnpm/config@16.6.3

## 6.4.2

### Patch Changes

- @pnpm/plugin-commands-installation@11.4.6
- @pnpm/config@16.6.2
- @pnpm/cli-utils@1.0.34

## 6.4.1

### Patch Changes

- @pnpm/plugin-commands-installation@11.4.5
- @pnpm/config@16.6.1
- @pnpm/lifecycle@14.1.6
- @pnpm/cli-utils@1.0.33

## 6.4.0

### Minor Changes

- 9ac694044: Support script selector with RegExp such as `pnpm run /build:.*/` and execute the matched scripts with the RegExp [#5871](https://github.com/pnpm/pnpm/pull/5871).

### Patch Changes

- Updated dependencies [308eb2c9b]
- Updated dependencies [59ee53678]
  - @pnpm/plugin-commands-installation@11.4.4
  - @pnpm/config@16.6.0
  - @pnpm/cli-utils@1.0.32

## 6.3.11

### Patch Changes

- Updated dependencies [6348f5931]
  - @pnpm/plugin-commands-installation@11.4.3
  - @pnpm/config@16.5.5
  - @pnpm/cli-utils@1.0.31

## 6.3.10

### Patch Changes

- @pnpm/plugin-commands-installation@11.4.2
- @pnpm/config@16.5.4
- @pnpm/cli-utils@1.0.30

## 6.3.9

### Patch Changes

- @pnpm/plugin-commands-installation@11.4.1
- @pnpm/config@16.5.3
- @pnpm/cli-utils@1.0.29

## 6.3.8

### Patch Changes

- Updated dependencies [e8f6ab683]
  - @pnpm/plugin-commands-installation@11.4.0
  - @pnpm/config@16.5.2
  - @pnpm/cli-utils@1.0.28

## 6.3.7

### Patch Changes

- Updated dependencies [4655dd41e]
  - @pnpm/plugin-commands-installation@11.3.5
  - @pnpm/config@16.5.1
  - @pnpm/cli-utils@1.0.27
  - @pnpm/lifecycle@14.1.5

## 6.3.6

### Patch Changes

- Updated dependencies [28b47a156]
  - @pnpm/config@16.5.0
  - @pnpm/plugin-commands-installation@11.3.4
  - @pnpm/cli-utils@1.0.26

## 6.3.5

### Patch Changes

- @pnpm/plugin-commands-installation@11.3.3
- @pnpm/config@16.4.3
- @pnpm/cli-utils@1.0.25
- @pnpm/lifecycle@14.1.5

## 6.3.4

### Patch Changes

- @pnpm/plugin-commands-installation@11.3.2
- @pnpm/config@16.4.2
- @pnpm/cli-utils@1.0.24

## 6.3.3

### Patch Changes

- @pnpm/plugin-commands-installation@11.3.1
- @pnpm/config@16.4.1
- @pnpm/cli-utils@1.0.23

## 6.3.2

### Patch Changes

- 8ecbcafdd: `pnpm run` should fail if the path to the project contains colon(s).
- 8ecbcafdd: `pnpm exec` should work when the path to the project contains colon(s) [#5846](https://github.com/pnpm/pnpm/issues/5846).
- Updated dependencies [3ebce5db7]
  - @pnpm/plugin-commands-installation@11.3.0
  - @pnpm/config@16.4.0
  - @pnpm/lifecycle@14.1.5
  - @pnpm/error@4.0.1
  - @pnpm/cli-utils@1.0.22
  - @pnpm/read-package-json@7.0.5
  - @pnpm/read-project-manifest@4.1.3

## 6.3.1

### Patch Changes

- 640f4666c: The help of the run command should list the `--resume-from` option.
- Updated dependencies [1fad508b0]
  - @pnpm/plugin-commands-installation@11.2.0
  - @pnpm/config@16.3.0
  - @pnpm/cli-utils@1.0.21

## 6.3.0

### Minor Changes

- da15828ec: `pnpm exec` and `pnpm run` command support `--resume-from` option. When used, the command will executed from given package [#4690](https://github.com/pnpm/pnpm/issues/4690).

### Patch Changes

- Updated dependencies [08ceaf3fc]
  - @pnpm/plugin-commands-installation@11.1.7
  - @pnpm/cli-utils@1.0.20
  - @pnpm/config@16.2.2

## 6.2.0

### Minor Changes

- b3dfa3ba8: The `pnpm dlx` command supports the `--shell-mode` (or `-c`) option. When used, the script is executed by a shell [#5679](https://github.com/pnpm/pnpm/issues/5679).

### Patch Changes

- Updated dependencies [d71dbf230]
  - @pnpm/config@16.2.1
  - @pnpm/plugin-commands-installation@11.1.6
  - @pnpm/cli-utils@1.0.19

## 6.1.1

### Patch Changes

- Updated dependencies [841f52e70]
  - @pnpm/config@16.2.0
  - @pnpm/plugin-commands-installation@11.1.5
  - @pnpm/cli-utils@1.0.18

## 6.1.0

### Minor Changes

- b77651d14: New setting supported in the `package.json` that is in the root of the workspace: `pnpm.requiredScripts`. Scripts listed in this array will be required in each project of the worksapce. Otherwise, `pnpm -r run <script name>` will fail [#5569](https://github.com/pnpm/pnpm/issues/5569).

### Patch Changes

- Updated dependencies [b77651d14]
- Updated dependencies [6b00a8325]
  - @pnpm/types@8.10.0
  - @pnpm/lifecycle@14.1.4
  - @pnpm/plugin-commands-installation@11.1.4
  - @pnpm/cli-utils@1.0.17
  - @pnpm/config@16.1.11
  - @pnpm/package-bins@7.0.3
  - @pnpm/read-package-json@7.0.4
  - @pnpm/read-project-manifest@4.1.2
  - @pnpm/sort-packages@4.0.3

## 6.0.16

### Patch Changes

- @pnpm/plugin-commands-installation@11.1.3
- @pnpm/config@16.1.10
- @pnpm/cli-utils@1.0.16

## 6.0.15

### Patch Changes

- Updated dependencies [49f6c917f]
- Updated dependencies [f5c377a8d]
  - @pnpm/plugin-commands-installation@11.1.2
  - @pnpm/lifecycle@14.1.3
  - @pnpm/config@16.1.9
  - @pnpm/cli-utils@1.0.15

## 6.0.14

### Patch Changes

- @pnpm/cli-utils@1.0.14
- @pnpm/plugin-commands-installation@11.1.1
- @pnpm/config@16.1.8

## 6.0.13

### Patch Changes

- Updated dependencies [4097af6b5]
- Updated dependencies [a9d59d8bc]
- Updated dependencies [93558ce68]
  - @pnpm/plugin-commands-installation@11.1.0
  - @pnpm/config@16.1.7
  - @pnpm/read-package-json@7.0.3
  - @pnpm/lifecycle@14.1.2
  - @pnpm/cli-utils@1.0.13
  - @pnpm/read-project-manifest@4.1.1

## 6.0.12

### Patch Changes

- @pnpm/plugin-commands-installation@11.0.12
- @pnpm/config@16.1.6
- @pnpm/cli-utils@1.0.12

## 6.0.11

### Patch Changes

- @pnpm/plugin-commands-installation@11.0.11
- @pnpm/config@16.1.5
- @pnpm/cli-utils@1.0.11

## 6.0.10

### Patch Changes

- Updated dependencies [fec9e3149]
- Updated dependencies [868f2fb16]
- Updated dependencies [0d12d38fd]
  - @pnpm/read-project-manifest@4.1.0
  - @pnpm/plugin-commands-installation@11.0.10
  - @pnpm/cli-utils@1.0.10
  - @pnpm/config@16.1.4
  - @pnpm/lifecycle@14.1.1

## 6.0.9

### Patch Changes

- Updated dependencies [969f8a002]
  - @pnpm/plugin-commands-installation@11.0.9
  - @pnpm/config@16.1.3
  - @pnpm/cli-utils@1.0.9

## 6.0.8

### Patch Changes

- Updated dependencies [1d04e663b]
  - @pnpm/lifecycle@14.1.0
  - @pnpm/plugin-commands-installation@11.0.8
  - @pnpm/config@16.1.2
  - @pnpm/cli-utils@1.0.8

## 6.0.7

### Patch Changes

- @pnpm/lifecycle@14.0.3
- @pnpm/plugin-commands-installation@11.0.7
- @pnpm/config@16.1.1
- @pnpm/cli-utils@1.0.7

## 6.0.6

### Patch Changes

- Updated dependencies [3dab7f83c]
- Updated dependencies [3dab7f83c]
  - @pnpm/config@16.1.0
  - @pnpm/plugin-commands-installation@11.0.6
  - @pnpm/cli-utils@1.0.6

## 6.0.5

### Patch Changes

- Updated dependencies [a4c58d424]
- Updated dependencies [702e847c1]
  - @pnpm/lifecycle@14.0.2
  - @pnpm/types@8.9.0
  - @pnpm/cli-utils@1.0.5
  - @pnpm/plugin-commands-installation@11.0.5
  - @pnpm/config@16.0.5
  - @pnpm/package-bins@7.0.2
  - @pnpm/read-package-json@7.0.2
  - @pnpm/read-project-manifest@4.0.2
  - @pnpm/sort-packages@4.0.2

## 6.0.4

### Patch Changes

- Updated dependencies [0da2f0412]
  - @pnpm/plugin-commands-installation@11.0.4
  - @pnpm/config@16.0.4
  - @pnpm/cli-utils@1.0.4

## 6.0.3

### Patch Changes

- Updated dependencies [aacb83f73]
- Updated dependencies [a14ad09e6]
  - @pnpm/config@16.0.3
  - @pnpm/cli-utils@1.0.3
  - @pnpm/plugin-commands-installation@11.0.3

## 6.0.2

### Patch Changes

- Updated dependencies [bea0acdfc]
  - @pnpm/config@16.0.2
  - @pnpm/cli-utils@1.0.2
  - @pnpm/plugin-commands-installation@11.0.2

## 6.0.1

### Patch Changes

- Updated dependencies [e7fd8a84c]
- Updated dependencies [844e82f3a]
  - @pnpm/config@16.0.1
  - @pnpm/types@8.8.0
  - @pnpm/cli-utils@1.0.1
  - @pnpm/plugin-commands-installation@11.0.1
  - @pnpm/lifecycle@14.0.1
  - @pnpm/package-bins@7.0.1
  - @pnpm/read-package-json@7.0.1
  - @pnpm/read-project-manifest@4.0.1
  - @pnpm/sort-packages@4.0.1

## 6.0.0

### Major Changes

- f884689e0: Require `@pnpm/logger` v5.

### Patch Changes

- Updated dependencies [043d988fc]
- Updated dependencies [1d0fd82fd]
- Updated dependencies [645384bfd]
- Updated dependencies [645384bfd]
- Updated dependencies [f884689e0]
- Updated dependencies [3c117996e]
- Updated dependencies [e35988d1f]
  - @pnpm/config@16.0.0
  - @pnpm/error@4.0.0
  - @pnpm/lifecycle@14.0.0
  - @pnpm/plugin-commands-installation@11.0.0
  - @pnpm/cli-utils@1.0.0
  - @pnpm/package-bins@7.0.0
  - @pnpm/read-package-json@7.0.0
  - @pnpm/read-project-manifest@4.0.0
  - @pnpm/sort-packages@4.0.0
  - @pnpm/store-path@7.0.0

## 5.1.13

### Patch Changes

- Updated dependencies [96b507b73]
  - @pnpm/plugin-commands-installation@10.8.4
  - @pnpm/read-project-manifest@3.0.13
  - @pnpm/config@15.10.12
  - @pnpm/cli-utils@0.7.43
  - @pnpm/lifecycle@13.1.12

## 5.1.12

### Patch Changes

- Updated dependencies [3277188eb]
  - @pnpm/plugin-commands-installation@10.8.3
  - @pnpm/lifecycle@13.1.11
  - @pnpm/cli-utils@0.7.42
  - @pnpm/config@15.10.11

## 5.1.11

### Patch Changes

- Updated dependencies [e8a631bf0]
  - @pnpm/error@3.1.0
  - @pnpm/cli-utils@0.7.41
  - @pnpm/config@15.10.10
  - @pnpm/plugin-commands-installation@10.8.2
  - @pnpm/read-package-json@6.0.11
  - @pnpm/read-project-manifest@3.0.12
  - @pnpm/lifecycle@13.1.10

## 5.1.10

### Patch Changes

- Updated dependencies [536b16856]
  - @pnpm/plugin-commands-installation@10.8.1

## 5.1.9

### Patch Changes

- Updated dependencies [abb41a626]
- Updated dependencies [51566e34b]
- Updated dependencies [5beb4e26b]
- Updated dependencies [d665f3ff7]
  - @pnpm/plugin-commands-installation@10.8.0
  - @pnpm/types@8.7.0
  - @pnpm/config@15.10.9
  - @pnpm/cli-utils@0.7.40
  - @pnpm/lifecycle@13.1.9
  - @pnpm/package-bins@6.0.8
  - @pnpm/read-package-json@6.0.10
  - @pnpm/read-project-manifest@3.0.11
  - @pnpm/sort-packages@3.0.9

## 5.1.8

### Patch Changes

- Updated dependencies [56aeba4ba]
- Updated dependencies [56aeba4ba]
  - @pnpm/plugin-commands-installation@10.7.2
  - @pnpm/config@15.10.8
  - @pnpm/cli-utils@0.7.39

## 5.1.7

### Patch Changes

- @pnpm/plugin-commands-installation@10.7.1
- @pnpm/config@15.10.7
- @pnpm/cli-utils@0.7.38

## 5.1.6

### Patch Changes

- Updated dependencies [156cc1ef6]
  - @pnpm/plugin-commands-installation@10.7.0
  - @pnpm/types@8.6.0
  - @pnpm/cli-utils@0.7.37
  - @pnpm/config@15.10.6
  - @pnpm/lifecycle@13.1.8
  - @pnpm/package-bins@6.0.7
  - @pnpm/read-package-json@6.0.9
  - @pnpm/read-project-manifest@3.0.10
  - @pnpm/sort-packages@3.0.8

## 5.1.5

### Patch Changes

- @pnpm/plugin-commands-installation@10.6.5
- @pnpm/config@15.10.5
- @pnpm/cli-utils@0.7.36

## 5.1.4

### Patch Changes

- @pnpm/plugin-commands-installation@10.6.4
- @pnpm/cli-utils@0.7.35
- @pnpm/config@15.10.4

## 5.1.3

### Patch Changes

- @pnpm/plugin-commands-installation@10.6.3
- @pnpm/config@15.10.3
- @pnpm/cli-utils@0.7.34

## 5.1.2

### Patch Changes

- @pnpm/plugin-commands-installation@10.6.2
- @pnpm/config@15.10.2
- @pnpm/cli-utils@0.7.33

## 5.1.1

### Patch Changes

- @pnpm/plugin-commands-installation@10.6.1
- @pnpm/config@15.10.1
- @pnpm/cli-utils@0.7.32

## 5.1.0

### Minor Changes

- 2aa22e4b1: Set `NODE_PATH` when `preferSymlinkedExecutables` is enabled.

### Patch Changes

- Updated dependencies [2aa22e4b1]
  - @pnpm/config@15.10.0
  - @pnpm/plugin-commands-installation@10.6.0
  - @pnpm/cli-utils@0.7.31

## 5.0.39

### Patch Changes

- @pnpm/plugin-commands-installation@10.5.8
- @pnpm/config@15.9.4
- @pnpm/cli-utils@0.7.30

## 5.0.38

### Patch Changes

- @pnpm/plugin-commands-installation@10.5.7
- @pnpm/config@15.9.3
- @pnpm/cli-utils@0.7.29

## 5.0.37

### Patch Changes

- Updated dependencies [07bc24ad1]
- Updated dependencies [9faf0221d]
  - @pnpm/read-package-json@6.0.8
  - @pnpm/plugin-commands-installation@10.5.6
  - @pnpm/lifecycle@13.1.7
  - @pnpm/config@15.9.2
  - @pnpm/cli-utils@0.7.28

## 5.0.36

### Patch Changes

- @pnpm/lifecycle@13.1.6
- @pnpm/plugin-commands-installation@10.5.5
- @pnpm/config@15.9.1
- @pnpm/cli-utils@0.7.27

## 5.0.35

### Patch Changes

- @pnpm/plugin-commands-installation@10.5.4
- @pnpm/config@15.9.0

## 5.0.34

### Patch Changes

- 8103f92bd: Use a patched version of ramda to fix deprecation warnings on Node.js 16. Related issue: https://github.com/ramda/ramda/pull/3270
- Updated dependencies [39c040127]
- Updated dependencies [43cd6aaca]
- Updated dependencies [8103f92bd]
- Updated dependencies [65c4260de]
- Updated dependencies [29a81598a]
  - @pnpm/plugin-commands-installation@10.5.3
  - @pnpm/read-project-manifest@3.0.9
  - @pnpm/config@15.9.0
  - @pnpm/cli-utils@0.7.26
  - @pnpm/lifecycle@13.1.5

## 5.0.33

### Patch Changes

- Updated dependencies [c90798461]
- Updated dependencies [34121d753]
  - @pnpm/types@8.5.0
  - @pnpm/config@15.8.1
  - @pnpm/cli-utils@0.7.25
  - @pnpm/lifecycle@13.1.4
  - @pnpm/package-bins@6.0.6
  - @pnpm/plugin-commands-installation@10.5.2
  - @pnpm/read-package-json@6.0.7
  - @pnpm/read-project-manifest@3.0.8
  - @pnpm/sort-packages@3.0.7

## 5.0.32

### Patch Changes

- @pnpm/plugin-commands-installation@10.5.1

## 5.0.31

### Patch Changes

- Updated dependencies [cac34ad69]
- Updated dependencies [99019e071]
  - @pnpm/config@15.8.0
  - @pnpm/plugin-commands-installation@10.5.0
  - @pnpm/cli-utils@0.7.24

## 5.0.30

### Patch Changes

- @pnpm/plugin-commands-installation@10.4.2
- @pnpm/config@15.7.1
- @pnpm/cli-utils@0.7.23

## 5.0.29

### Patch Changes

- Updated dependencies [01c5834bf]
- Updated dependencies [4fa1091c8]
  - @pnpm/read-project-manifest@3.0.7
  - @pnpm/config@15.7.0
  - @pnpm/cli-utils@0.7.22
  - @pnpm/plugin-commands-installation@10.4.1
  - @pnpm/lifecycle@13.1.3

## 5.0.28

### Patch Changes

- Updated dependencies [7334b347b]
- Updated dependencies [0569f1022]
  - @pnpm/config@15.6.1
  - @pnpm/plugin-commands-installation@10.4.0
  - @pnpm/cli-utils@0.7.21

## 5.0.27

### Patch Changes

- 0e9fa30ac: It should be possible to run exec/run/dlx with the `--use-node-version` option.
- Updated dependencies [28f000509]
- Updated dependencies [406656f80]
  - @pnpm/config@15.6.0
  - @pnpm/plugin-commands-installation@10.3.10
  - @pnpm/cli-utils@0.7.20

## 5.0.26

### Patch Changes

- @pnpm/config@15.5.2
- @pnpm/plugin-commands-installation@10.3.9
- @pnpm/cli-utils@0.7.19

## 5.0.25

### Patch Changes

- @pnpm/plugin-commands-installation@10.3.8

## 5.0.24

### Patch Changes

- @pnpm/cli-utils@0.7.18
- @pnpm/plugin-commands-installation@10.3.7

## 5.0.23

### Patch Changes

- Updated dependencies [b55b3782d]
  - @pnpm/plugin-commands-installation@10.3.6

## 5.0.22

### Patch Changes

- 5f643f23b: Update ramda to v0.28.
- Updated dependencies [5f643f23b]
  - @pnpm/cli-utils@0.7.17
  - @pnpm/config@15.5.1
  - @pnpm/plugin-commands-installation@10.3.5
  - @pnpm/lifecycle@13.1.2

## 5.0.21

### Patch Changes

- @pnpm/plugin-commands-installation@10.3.4

## 5.0.20

### Patch Changes

- @pnpm/plugin-commands-installation@10.3.3

## 5.0.19

### Patch Changes

- Updated dependencies [f48d46ef6]
  - @pnpm/config@15.5.0
  - @pnpm/cli-utils@0.7.16
  - @pnpm/plugin-commands-installation@10.3.2

## 5.0.18

### Patch Changes

- Updated dependencies [8e5b77ef6]
  - @pnpm/types@8.4.0
  - @pnpm/plugin-commands-installation@10.3.1
  - @pnpm/cli-utils@0.7.15
  - @pnpm/config@15.4.1
  - @pnpm/lifecycle@13.1.1
  - @pnpm/package-bins@6.0.5
  - @pnpm/read-package-json@6.0.6
  - @pnpm/read-project-manifest@3.0.6
  - @pnpm/sort-packages@3.0.6

## 5.0.17

### Patch Changes

- Updated dependencies [2a34b21ce]
- Updated dependencies [949e84ba8]
- Updated dependencies [47b5e45dd]
  - @pnpm/types@8.3.0
  - @pnpm/lifecycle@13.1.0
  - @pnpm/plugin-commands-installation@10.3.0
  - @pnpm/config@15.4.0
  - @pnpm/cli-utils@0.7.14
  - @pnpm/package-bins@6.0.4
  - @pnpm/read-package-json@6.0.5
  - @pnpm/read-project-manifest@3.0.5
  - @pnpm/sort-packages@3.0.5

## 5.0.16

### Patch Changes

- Updated dependencies [fb5bbfd7a]
- Updated dependencies [56cf04cb3]
  - @pnpm/types@8.2.0
  - @pnpm/config@15.3.0
  - @pnpm/plugin-commands-installation@10.2.0
  - @pnpm/cli-utils@0.7.13
  - @pnpm/lifecycle@13.0.5
  - @pnpm/package-bins@6.0.3
  - @pnpm/read-package-json@6.0.4
  - @pnpm/read-project-manifest@3.0.4
  - @pnpm/sort-packages@3.0.4

## 5.0.15

### Patch Changes

- Updated dependencies [25798aad1]
  - @pnpm/config@15.2.1
  - @pnpm/cli-utils@0.7.12
  - @pnpm/plugin-commands-installation@10.1.1

## 5.0.14

### Patch Changes

- Updated dependencies [4d39e4a0c]
- Updated dependencies [4d39e4a0c]
- Updated dependencies [bc80631d3]
- Updated dependencies [d5730ba81]
  - @pnpm/types@8.1.0
  - @pnpm/plugin-commands-installation@10.1.0
  - @pnpm/config@15.2.0
  - @pnpm/cli-utils@0.7.11
  - @pnpm/lifecycle@13.0.4
  - @pnpm/package-bins@6.0.2
  - @pnpm/read-package-json@6.0.3
  - @pnpm/read-project-manifest@3.0.3
  - @pnpm/sort-packages@3.0.3

## 5.0.13

### Patch Changes

- @pnpm/plugin-commands-installation@10.0.12

## 5.0.12

### Patch Changes

- @pnpm/cli-utils@0.7.10
- @pnpm/plugin-commands-installation@10.0.11
- @pnpm/lifecycle@13.0.3
- @pnpm/config@15.1.4

## 5.0.11

### Patch Changes

- @pnpm/plugin-commands-installation@10.0.10

## 5.0.10

### Patch Changes

- Updated dependencies [ae2f845c5]
  - @pnpm/config@15.1.4
  - @pnpm/cli-utils@0.7.9
  - @pnpm/plugin-commands-installation@10.0.9

## 5.0.9

### Patch Changes

- Updated dependencies [05159665d]
  - @pnpm/config@15.1.3
  - @pnpm/cli-utils@0.7.8
  - @pnpm/plugin-commands-installation@10.0.8

## 5.0.8

### Patch Changes

- Updated dependencies [190f0b331]
  - @pnpm/plugin-commands-installation@10.0.7
  - @pnpm/cli-utils@0.7.7

## 5.0.7

### Patch Changes

- dddff3709: `pnpm dlx` shouldn't modify the lockfile in the current working directory [#4743](https://github.com/pnpm/pnpm/issues/4743).

## 5.0.6

### Patch Changes

- Updated dependencies [af22c6c4f]
  - @pnpm/config@15.1.2
  - @pnpm/cli-utils@0.7.6
  - @pnpm/plugin-commands-installation@10.0.6

## 5.0.5

### Patch Changes

- 53f653340: `pnpm dlx` should work with git-hosted packages. For example: `pnpm dlx gengjiawen/envinfo` [#4714](https://github.com/pnpm/pnpm/issues/4714).
- 325ed5cba: fix(plugin-commands-script-runner): run --stream should prefix with dir name
- Updated dependencies [52b0576af]
  - @pnpm/cli-utils@0.7.5
  - @pnpm/plugin-commands-installation@10.0.5

## 5.0.4

### Patch Changes

- 8ef4db94c: `pnpm dlx` should work when the bin name of the executed package isn't the same as the package name [#4672](https://github.com/pnpm/pnpm/issues/4672).
- Updated dependencies [0075fcd23]
- Updated dependencies [0075fcd23]
- Updated dependencies [8ef4db94c]
  - @pnpm/plugin-commands-installation@10.0.4
  - @pnpm/cli-utils@0.7.4
  - @pnpm/config@15.1.1

## 5.0.3

### Patch Changes

- Updated dependencies [18ba5e2c0]
  - @pnpm/types@8.0.1
  - @pnpm/cli-utils@0.7.3
  - @pnpm/config@15.1.1
  - @pnpm/lifecycle@13.0.2
  - @pnpm/read-project-manifest@3.0.2
  - @pnpm/sort-packages@3.0.2

## 5.0.2

### Patch Changes

- c5caf8334: `pnpm dlx` should work without a configure global directory.
- Updated dependencies [e05dcc48a]
  - @pnpm/config@15.1.0
  - @pnpm/cli-utils@0.7.2

## 5.0.1

### Patch Changes

- 275c40523: When `pnpm exec` is running a command in a workspace project, the commands that are in the dependencies of that workspace project should be in the PATH [#4481](https://github.com/pnpm/pnpm/issues/4481).
- Updated dependencies [2109f2e8e]
- Updated dependencies [cdeb65203]
- Updated dependencies [8dac029ef]
- Updated dependencies [72b79f55a]
- Updated dependencies [546e644e9]
- Updated dependencies [c6463b9fd]
- Updated dependencies [4bed585e2]
- Updated dependencies [8fa95fd86]
  - @pnpm/sort-packages@3.0.1
  - @pnpm/store-path@6.0.0
  - @pnpm/config@15.0.0
  - @pnpm/cli-utils@0.7.1
  - @pnpm/lifecycle@13.0.1
  - @pnpm/error@3.0.1
  - @pnpm/read-project-manifest@3.0.1

## 5.0.0

### Major Changes

- c35ac786b: When using `pnpm run <script>`, all command line arguments after the script name are now passed to the script's argv, even `--`. For example, `pnpm run echo --hello -- world` will now pass `--hello -- world` to the `echo` script's argv. Previously flagged arguments (e.g. `--silent`) were interpreted as pnpm arguments unless `--` came before it.
- 542014839: Node.js 12 is not supported.

### Patch Changes

- Updated dependencies [516859178]
- Updated dependencies [d504dc380]
- Updated dependencies [73d71a2d5]
- Updated dependencies [fa656992c]
- Updated dependencies [542014839]
- Updated dependencies [d999a0801]
- Updated dependencies [585e9ca9e]
  - @pnpm/config@14.0.0
  - @pnpm/types@8.0.0
  - @pnpm/command@3.0.0
  - @pnpm/error@3.0.0
  - @pnpm/lifecycle@13.0.0
  - @pnpm/read-project-manifest@3.0.0
  - @pnpm/sort-packages@3.0.0
  - @pnpm/cli-utils@0.7.0
  - @pnpm/common-cli-options-help@0.9.0

## 4.6.2

### Patch Changes

- Updated dependencies [70ba51da9]
  - @pnpm/error@2.1.0
  - @pnpm/cli-utils@0.6.50
  - @pnpm/config@13.13.2
  - @pnpm/read-project-manifest@2.0.13
  - @pnpm/lifecycle@12.1.7

## 4.6.1

### Patch Changes

- Updated dependencies [b138d048c]
  - @pnpm/types@7.10.0
  - @pnpm/cli-utils@0.6.49
  - @pnpm/config@13.13.1
  - @pnpm/lifecycle@12.1.6
  - @pnpm/read-project-manifest@2.0.12
  - @pnpm/sort-packages@2.1.8

## 4.6.0

### Minor Changes

- 8d3255515: Added `--shell-mode`/`-c` option support to `pnpm exec` [#4328](https://github.com/pnpm/pnpm/pull/4328)

  - `--shell-mode`: shell interpreter. See: https://github.com/sindresorhus/execa/tree/484f28de7c35da5150155e7a523cbb20de161a4f#shell

  Usage example:

  ```shell
  pnpm -r --shell-mode exec -- echo \"\$PNPM_PACKAGE_NAME\"
  pnpm -r -c exec -- echo \"\$PNPM_PACKAGE_NAME\"
  ```

  ```json
  {
    "scripts": {
      "check": " pnpm -r --shell-mode exec -- echo \"\\$PNPM_PACKAGE_NAME\""
    }
  }
  ```

### Patch Changes

- cd4f9341e: The `pnpx`, `pnpm dlx`, `pnpm create`, and `pnpm exec` commands should set the `npm_config_user_agent` env variable [#3985](https://github.com/pnpm/pnpm/issues/3985).

## 4.5.18

### Patch Changes

- Updated dependencies [7ae349cd3]
  - @pnpm/lifecycle@12.1.5

## 4.5.17

### Patch Changes

- Updated dependencies [334e5340a]
  - @pnpm/config@13.13.0
  - @pnpm/cli-utils@0.6.48

## 4.5.16

### Patch Changes

- 9c0f7e69a: `pnpm exec` should look for the executed command in the `node_modules/.bin` directory that is relative to the current working directory. Only after that should it look for the executable in the workspace root.
- Updated dependencies [b7566b979]
  - @pnpm/config@13.12.0
  - @pnpm/cli-utils@0.6.47

## 4.5.15

### Patch Changes

- Updated dependencies [fff0e4493]
  - @pnpm/config@13.11.0
  - @pnpm/cli-utils@0.6.46

## 4.5.14

### Patch Changes

- @pnpm/cli-utils@0.6.45

## 4.5.13

### Patch Changes

- Updated dependencies [e76151f66]
- Updated dependencies [26cd01b88]
  - @pnpm/config@13.10.0
  - @pnpm/types@7.9.0
  - @pnpm/lifecycle@12.1.4
  - @pnpm/cli-utils@0.6.44
  - @pnpm/read-project-manifest@2.0.11
  - @pnpm/sort-packages@2.1.7

## 4.5.12

### Patch Changes

- ea24c69fe: `@zkochan/rimraf` should be a prod dependency.
  - @pnpm/cli-utils@0.6.43

## 4.5.11

### Patch Changes

- Updated dependencies [8fe8f5e55]
  - @pnpm/config@13.9.0
  - @pnpm/cli-utils@0.6.42

## 4.5.10

### Patch Changes

- Updated dependencies [732d4962f]
- Updated dependencies [a6cf11cb7]
  - @pnpm/config@13.8.0
  - @pnpm/cli-utils@0.6.41

## 4.5.9

### Patch Changes

- Updated dependencies [b5734a4a7]
  - @pnpm/types@7.8.0
  - @pnpm/cli-utils@0.6.40
  - @pnpm/config@13.7.2
  - @pnpm/lifecycle@12.1.3
  - @pnpm/read-project-manifest@2.0.10
  - @pnpm/sort-packages@2.1.6

## 4.5.8

### Patch Changes

- @pnpm/cli-utils@0.6.39

## 4.5.7

### Patch Changes

- Updated dependencies [6493e0c93]
  - @pnpm/types@7.7.1
  - @pnpm/cli-utils@0.6.38
  - @pnpm/config@13.7.1
  - @pnpm/lifecycle@12.1.2
  - @pnpm/read-project-manifest@2.0.9
  - @pnpm/sort-packages@2.1.5

## 4.5.6

### Patch Changes

- Updated dependencies [30bfca967]
- Updated dependencies [927c4a089]
- Updated dependencies [10a4bd4db]
- Updated dependencies [ba9b2eba1]
  - @pnpm/config@13.7.0
  - @pnpm/common-cli-options-help@0.8.0
  - @pnpm/types@7.7.0
  - @pnpm/lifecycle@12.1.1
  - @pnpm/cli-utils@0.6.37
  - @pnpm/read-project-manifest@2.0.8
  - @pnpm/sort-packages@2.1.4

## 4.5.5

### Patch Changes

- Updated dependencies [46aaf7108]
  - @pnpm/config@13.6.1
  - @pnpm/cli-utils@0.6.36

## 4.5.4

### Patch Changes

- Updated dependencies [8a99a01ff]
  - @pnpm/config@13.6.0
  - @pnpm/cli-utils@0.6.35

## 4.5.3

### Patch Changes

- @pnpm/cli-utils@0.6.34

## 4.5.2

### Patch Changes

- Updated dependencies [a7ff2d5ce]
  - @pnpm/config@13.5.1
  - @pnpm/cli-utils@0.6.33

## 4.5.1

### Patch Changes

- 5a11c8bac: `pnpm dlx` will now support version specifiers for packages. E.g. `pnpm dlx create-svelte@next` [#4023](https://github.com/pnpm/pnpm/issues/4023).

## 4.5.0

### Minor Changes

- 002778559: New setting added: `scriptsPrependNodePath`. This setting can be `true`, `false`, or `warn-only`.
  When `true`, the path to the `node` executable with which pnpm executed is prepended to the `PATH` of the scripts.
  When `warn-only`, pnpm will print a warning if the scripts run with a `node` binary that differs from the `node` binary executing the pnpm CLI.

### Patch Changes

- Updated dependencies [002778559]
  - @pnpm/config@13.5.0
  - @pnpm/lifecycle@12.1.0
  - @pnpm/cli-utils@0.6.32

## 4.4.1

### Patch Changes

- eede95c5c: `pnpm exec` should exit with the exit code of the child process. This fixes a regression introduced in pnpm v6.20.4 via [#3951](https://github.com/pnpm/pnpm/pull/3951).

## 4.4.0

### Minor Changes

- 435626ad3: Added `--reverse` option support to `pnpm exec` [#3984](https://github.com/pnpm/pnpm/issues/3972).

  Usage example:

  ```
  pnpm --reverse -r exec pwd
  ```

## 4.3.9

### Patch Changes

- @pnpm/cli-utils@0.6.31

## 4.3.8

### Patch Changes

- Updated dependencies [302ae4f6f]
- Updated dependencies [fa03cbdc8]
  - @pnpm/types@7.6.0
  - @pnpm/lifecycle@12.0.2
  - @pnpm/config@13.4.2
  - @pnpm/cli-utils@0.6.30
  - @pnpm/read-project-manifest@2.0.7
  - @pnpm/sort-packages@2.1.3

## 4.3.7

### Patch Changes

- 8cde32987: Return the exit code instead of killing the process.
- Updated dependencies [5b90ab98f]
  - @pnpm/lifecycle@12.0.1

## 4.3.6

### Patch Changes

- 0e17caf1d: Do not run pre/post scripts by default on recursive run.
- 7d7f6417f: `dlx` should be able to run scoped packages.

## 4.3.5

### Patch Changes

- Updated dependencies [4ab87844a]
- Updated dependencies [4ab87844a]
- Updated dependencies [37dcfceeb]
- Updated dependencies [4ab87844a]
  - @pnpm/types@7.5.0
  - @pnpm/lifecycle@12.0.0
  - @pnpm/cli-utils@0.6.29
  - @pnpm/config@13.4.1
  - @pnpm/read-project-manifest@2.0.6
  - @pnpm/sort-packages@2.1.2

## 4.3.4

### Patch Changes

- Updated dependencies [b6d74c545]
  - @pnpm/config@13.4.0
  - @pnpm/cli-utils@0.6.28

## 4.3.3

### Patch Changes

- Updated dependencies [bd7bcdbe8]
  - @pnpm/config@13.3.0
  - @pnpm/cli-utils@0.6.27

## 4.3.2

### Patch Changes

- Updated dependencies [5ee3b2dc7]
  - @pnpm/config@13.2.0
  - @pnpm/cli-utils@0.6.26

## 4.3.1

### Patch Changes

- @pnpm/cli-utils@0.6.25

## 4.3.0

### Minor Changes

- c83488d01: New command added: create. `pnpm create` is similar to `yarn create`.
- 1efaaf706: `pnpm dlx` supports the `--silent` option.

### Patch Changes

- 091ff5f12: Add link to the docs into the help output of dlx and exec.
- Updated dependencies [4027a3c69]
- Updated dependencies [1efaaf706]
  - @pnpm/config@13.1.0
  - @pnpm/common-cli-options-help@0.7.1
  - @pnpm/cli-utils@0.6.24

## 4.2.7

### Patch Changes

- Updated dependencies [4a4d42d8f]
  - @pnpm/lifecycle@11.0.5

## 4.2.6

### Patch Changes

- Updated dependencies [fe5688dc0]
- Updated dependencies [c7081cbb4]
- Updated dependencies [c7081cbb4]
  - @pnpm/common-cli-options-help@0.7.0
  - @pnpm/config@13.0.0
  - @pnpm/cli-utils@0.6.23

## 4.2.5

### Patch Changes

- Updated dependencies [d62259d67]
  - @pnpm/config@12.6.0
  - @pnpm/cli-utils@0.6.22

## 4.2.4

### Patch Changes

- 04b7f6086: Use safe-execa instead of execa to prevent binary planting attacks on Windows.

## 4.2.3

### Patch Changes

- Updated dependencies [6681fdcbc]
  - @pnpm/config@12.5.0
  - @pnpm/cli-utils@0.6.21

## 4.2.2

### Patch Changes

- @pnpm/cli-utils@0.6.20

## 4.2.1

### Patch Changes

- Updated dependencies [ede519190]
  - @pnpm/config@12.4.9
  - @pnpm/cli-utils@0.6.19

## 4.2.0

### Minor Changes

- 7f097f26f: Support for multiple `--package` parameters added for `pnpm dlx` command

### Patch Changes

- @pnpm/config@12.4.8
- @pnpm/cli-utils@0.6.18

## 4.1.2

### Patch Changes

- Updated dependencies [655af55ba]
  - @pnpm/config@12.4.7
  - @pnpm/cli-utils@0.6.17

## 4.1.1

### Patch Changes

- b17096a36: `pnpm dlx` should not fail when pnpm has no write access to the CWD.

## 4.1.0

### Minor Changes

- 376c30485: New command added for running packages in a temporary environment: `pnpm dlx <command> ...`

### Patch Changes

- bd442ecb5: fix: add "run" to NO_SCRIPT error example

## 4.0.8

### Patch Changes

- Updated dependencies [3fb74c618]
  - @pnpm/config@12.4.6
  - @pnpm/cli-utils@0.6.16

## 4.0.7

### Patch Changes

- Updated dependencies [051296a16]
  - @pnpm/config@12.4.5
  - @pnpm/cli-utils@0.6.15

## 4.0.6

### Patch Changes

- Updated dependencies [af8b5716e]
  - @pnpm/config@12.4.4
  - @pnpm/cli-utils@0.6.14

## 4.0.5

### Patch Changes

- Updated dependencies [b734b45ea]
  - @pnpm/types@7.4.0
  - @pnpm/cli-utils@0.6.13
  - @pnpm/config@12.4.3
  - @pnpm/lifecycle@11.0.4
  - @pnpm/read-project-manifest@2.0.5
  - @pnpm/sort-packages@2.1.1

## 4.0.4

### Patch Changes

- Updated dependencies [7af16a011]
- Updated dependencies [73c1f802e]
  - @pnpm/lifecycle@11.0.3
  - @pnpm/config@12.4.2
  - @pnpm/cli-utils@0.6.12

## 4.0.3

### Patch Changes

- @pnpm/cli-utils@0.6.11

## 4.0.2

### Patch Changes

- 9476d5ac5: `pnpm exec` should work outside of Node.js projects.

## 4.0.1

### Patch Changes

- Updated dependencies [2264bfdf4]
  - @pnpm/config@12.4.1
  - @pnpm/cli-utils@0.6.10

## 4.0.0

### Major Changes

- 691f64713: New required option added: cacheDir.

### Patch Changes

- Updated dependencies [25f6968d4]
- Updated dependencies [5aaf3e3fa]
  - @pnpm/config@12.4.0
  - @pnpm/cli-utils@0.6.9

## 3.3.2

### Patch Changes

- Updated dependencies [1442f8786]
- Updated dependencies [8e76690f4]
  - @pnpm/sort-packages@2.1.0
  - @pnpm/types@7.3.0
  - @pnpm/cli-utils@0.6.8
  - @pnpm/config@12.3.3
  - @pnpm/lifecycle@11.0.2
  - @pnpm/read-project-manifest@2.0.4

## 3.3.1

### Patch Changes

- 4add11a96: `pnpm exec` should be executed in the context of the current working directory.

## 3.3.0

### Minor Changes

- 06f127503: `--` is ignored, when it is passed in as the first parameter to the exec command. This is for backward compatibility.

### Patch Changes

- Updated dependencies [724c5abd8]
  - @pnpm/types@7.2.0
  - @pnpm/cli-utils@0.6.7
  - @pnpm/config@12.3.2
  - @pnpm/lifecycle@11.0.1
  - @pnpm/read-project-manifest@2.0.3
  - @pnpm/sort-packages@2.0.2

## 3.2.2

### Patch Changes

- a1a03d145: Import only the required functions from ramda.
- Updated dependencies [a1a03d145]
  - @pnpm/config@12.3.1
  - @pnpm/cli-utils@0.6.6

## 3.2.1

### Patch Changes

- a77a2005e: `pnpm exec` should exit with the exit code of the child process and should not print an error.

## 3.2.0

### Minor Changes

- 209c14235: `pnpm run` is passed through to `pnpm exec` when it detects a command that is not in the scripts.

### Patch Changes

- c1f137412: `pnpm exec` should add `node_modules/.bin` to the PATH.
- c1f137412: `pnpm exec` should add the Node.js location to the PATH.

## 3.1.6

### Patch Changes

- Updated dependencies [84ec82e05]
- Updated dependencies [c2a71e4fd]
- Updated dependencies [84ec82e05]
  - @pnpm/config@12.3.0
  - @pnpm/common-cli-options-help@0.6.0
  - @pnpm/cli-utils@0.6.5

## 3.1.5

### Patch Changes

- ff9714d78: Don't list the commands twice when `pnpm run` is executed in the root of a workspace.

## 3.1.4

### Patch Changes

- @pnpm/cli-utils@0.6.4

## 3.1.3

### Patch Changes

- @pnpm/cli-utils@0.6.3
- @pnpm/config@12.2.0

## 3.1.2

### Patch Changes

- Updated dependencies [e6a2654a2]
  - @pnpm/lifecycle@11.0.0
  - @pnpm/config@12.2.0

## 3.1.1

### Patch Changes

- Updated dependencies [05baaa6e7]
- Updated dependencies [dfdf669e6]
- Updated dependencies [97c64bae4]
  - @pnpm/config@12.2.0
  - @pnpm/common-cli-options-help@0.5.0
  - @pnpm/types@7.1.0
  - @pnpm/cli-utils@0.6.2
  - @pnpm/lifecycle@10.0.1
  - @pnpm/sort-packages@2.0.1

## 3.1.0

### Minor Changes

- ba5231ccf: New option added for: `enable-pre-post-scripts`. When it is set to `true`, lifecycle scripts with pre/post prefixes are automatically executed by pnpm.

### Patch Changes

- Updated dependencies [ba5231ccf]
  - @pnpm/config@12.1.0
  - @pnpm/cli-utils@0.6.1

## 3.0.0

### Major Changes

- 97b986fbc: Node.js 10 support is dropped. At least Node.js 12.17 is required for the package to work.
- 34338d2d0: Arbitrary pre/post hooks for user-defined scripts (such as `prestart`) are not executed automatically.
- 048c94871: `.pnp.js` renamed to `.pnp.cjs` in order to force CommonJS.

### Patch Changes

- Updated dependencies [97b986fbc]
- Updated dependencies [78470a32d]
- Updated dependencies [aed712455]
- Updated dependencies [aed712455]
  - @pnpm/cli-utils@0.6.0
  - @pnpm/command@2.0.0
  - @pnpm/common-cli-options-help@0.4.0
  - @pnpm/config@12.0.0
  - @pnpm/error@2.0.0
  - @pnpm/lifecycle@10.0.0
  - @pnpm/sort-packages@2.0.0
  - @pnpm/types@7.0.0

## 2.6.5

### Patch Changes

- Updated dependencies [4f1ce907a]
  - @pnpm/config@11.14.2
  - @pnpm/cli-utils@0.5.4

## 2.6.4

### Patch Changes

- Updated dependencies [d853fb14a]
- Updated dependencies [4b3852c39]
  - @pnpm/lifecycle@9.6.5
  - @pnpm/config@11.14.1
  - @pnpm/cli-utils@0.5.3

## 2.6.3

### Patch Changes

- @pnpm/config@11.14.0
- @pnpm/cli-utils@0.5.2

## 2.6.2

### Patch Changes

- Updated dependencies [3be2b1773]
  - @pnpm/cli-utils@0.5.1

## 2.6.1

### Patch Changes

- Updated dependencies [a5e9d903c]
- Updated dependencies [cb040ae18]
  - @pnpm/common-cli-options-help@0.3.1
  - @pnpm/cli-utils@0.5.0
  - @pnpm/config@11.14.0

## 2.6.0

### Minor Changes

- c4cc62506: Add '--reverse' flag for reversing the order of package executions during 'recursive run'

### Patch Changes

- Updated dependencies [c4cc62506]
  - @pnpm/config@11.13.0
  - @pnpm/cli-utils@0.4.51

## 2.5.17

### Patch Changes

- Updated dependencies [bff84dbca]
  - @pnpm/config@11.12.1
  - @pnpm/cli-utils@0.4.50

## 2.5.16

### Patch Changes

- @pnpm/cli-utils@0.4.49

## 2.5.15

### Patch Changes

- @pnpm/cli-utils@0.4.48

## 2.5.14

### Patch Changes

- Updated dependencies [9a9bc67d2]
  - @pnpm/lifecycle@9.6.4

## 2.5.13

### Patch Changes

- Updated dependencies [9ad8c27bf]
- Updated dependencies [548f28df9]
- Updated dependencies [548f28df9]
  - @pnpm/types@6.4.0
  - @pnpm/cli-utils@0.4.47
  - @pnpm/config@11.12.0
  - @pnpm/lifecycle@9.6.3
  - @pnpm/sort-packages@1.0.16

## 2.5.12

### Patch Changes

- @pnpm/config@11.11.1
- @pnpm/cli-utils@0.4.46

## 2.5.11

### Patch Changes

- Updated dependencies [f40bc5927]
  - @pnpm/config@11.11.0
  - @pnpm/cli-utils@0.4.45

## 2.5.10

### Patch Changes

- Updated dependencies [425c7547d]
  - @pnpm/config@11.10.2
  - @pnpm/cli-utils@0.4.44

## 2.5.9

### Patch Changes

- Updated dependencies [ea09da716]
  - @pnpm/config@11.10.1
  - @pnpm/cli-utils@0.4.43

## 2.5.8

### Patch Changes

- 9427ab392: `--no-bail` should work with non-recursive `run` commands as well.
- Updated dependencies [1ec47db33]
- Updated dependencies [a8656b42f]
  - @pnpm/common-cli-options-help@0.3.0
  - @pnpm/config@11.10.0
  - @pnpm/cli-utils@0.4.42

## 2.5.7

### Patch Changes

- Updated dependencies [041537bc3]
  - @pnpm/config@11.9.1
  - @pnpm/cli-utils@0.4.41

## 2.5.6

### Patch Changes

- Updated dependencies [8698a7060]
  - @pnpm/config@11.9.0
  - @pnpm/cli-utils@0.4.40

## 2.5.5

### Patch Changes

- Updated dependencies [fcc1c7100]
  - @pnpm/config@11.8.0
  - @pnpm/cli-utils@0.4.39

## 2.5.4

### Patch Changes

- Updated dependencies [0c5f1bcc9]
  - @pnpm/error@1.4.0
  - @pnpm/cli-utils@0.4.38
  - @pnpm/config@11.7.2
  - @pnpm/lifecycle@9.6.2

## 2.5.3

### Patch Changes

- @pnpm/cli-utils@0.4.37

## 2.5.2

### Patch Changes

- @pnpm/cli-utils@0.4.36

## 2.5.1

### Patch Changes

- Updated dependencies [b5d694e7f]
  - @pnpm/types@6.3.1
  - @pnpm/cli-utils@0.4.35
  - @pnpm/config@11.7.1
  - @pnpm/lifecycle@9.6.1
  - @pnpm/sort-packages@1.0.15

## 2.5.0

### Minor Changes

- 50b360ec1: A new option added for specifying the shell to use, when running scripts: scriptShell.

### Patch Changes

- Updated dependencies [50b360ec1]
  - @pnpm/config@11.7.0
  - @pnpm/lifecycle@9.6.0
  - @pnpm/cli-utils@0.4.34

## 2.4.1

### Patch Changes

- Updated dependencies [d54043ee4]
  - @pnpm/types@6.3.0
  - @pnpm/cli-utils@0.4.33
  - @pnpm/config@11.6.1
  - @pnpm/lifecycle@9.5.1
  - @pnpm/sort-packages@1.0.14

## 2.4.0

### Minor Changes

- f591fdeeb: Scripts support Plug'n'Play.

### Patch Changes

- Updated dependencies [f591fdeeb]
- Updated dependencies [f591fdeeb]
- Updated dependencies [f591fdeeb]
  - @pnpm/config@11.6.0
  - @pnpm/lifecycle@9.5.0
  - @pnpm/cli-utils@0.4.32

## 2.3.3

### Patch Changes

- @pnpm/cli-utils@0.4.31

## 2.3.2

### Patch Changes

- Updated dependencies [74914c178]
  - @pnpm/config@11.5.0
  - @pnpm/cli-utils@0.4.30

## 2.3.1

### Patch Changes

- Updated dependencies [203e65ac8]
  - @pnpm/lifecycle@9.4.0

## 2.3.0

### Minor Changes

- 23cf3c88b: New option added: `shellEmulator`.

### Patch Changes

- Updated dependencies [23cf3c88b]
  - @pnpm/config@11.4.0
  - @pnpm/lifecycle@9.3.0
  - @pnpm/cli-utils@0.4.29

## 2.2.0

### Minor Changes

- 092f8dd83: When a script is not found but is present in the workspace root, suggest to use `pnpm -w run`.
- 092f8dd83: `pnpm run` prints all scripts from the root of the workspace. They may be executed using `pnpm -w run`.

### Patch Changes

- Updated dependencies [767212f4e]
- Updated dependencies [092f8dd83]
- Updated dependencies [092f8dd83]
  - @pnpm/config@11.3.0
  - @pnpm/common-cli-options-help@0.2.0
  - @pnpm/cli-utils@0.4.28

## 2.1.0

### Minor Changes

- d11442a57: If a script is not found in the current project but is present in the root project of the workspace, notify the user about it in the hint of the error.

### Patch Changes

- @pnpm/lifecycle@9.2.5
- @pnpm/cli-utils@0.4.27

## 2.0.1

### Patch Changes

- @pnpm/cli-utils@0.4.26

## 2.0.0

### Major Changes

- de61940a5: The start and stop script commands are removed.
  There is no reason to define separate handlers for shorthand commands
  as any unknown command is automatically converted to a script.

### Patch Changes

- de61940a5: `pnpm test|start|stop` support the same options as `pnpm run test|start|stop`.
- Updated dependencies [75a36deba]
- Updated dependencies [9f1a29ff9]
  - @pnpm/error@1.3.1
  - @pnpm/config@11.2.7
  - @pnpm/cli-utils@0.4.25
  - @pnpm/lifecycle@9.2.4

## 1.2.19

### Patch Changes

- Updated dependencies [ac0d3e122]
  - @pnpm/config@11.2.6
  - @pnpm/cli-utils@0.4.24

## 1.2.18

### Patch Changes

- Updated dependencies [972864e0d]
  - @pnpm/config@11.2.5
  - @pnpm/lifecycle@9.2.3
  - @pnpm/cli-utils@0.4.23

## 1.2.17

### Patch Changes

- Updated dependencies [6d480dd7a]
  - @pnpm/error@1.3.0
  - @pnpm/cli-utils@0.4.22
  - @pnpm/config@11.2.4

## 1.2.16

### Patch Changes

- Updated dependencies [13c18e397]
  - @pnpm/config@11.2.3
  - @pnpm/cli-utils@0.4.21

## 1.2.15

### Patch Changes

- Updated dependencies [3f6d35997]
  - @pnpm/config@11.2.2
  - @pnpm/cli-utils@0.4.20

## 1.2.14

### Patch Changes

- @pnpm/cli-utils@0.4.19

## 1.2.13

### Patch Changes

- @pnpm/cli-utils@0.4.18

## 1.2.12

### Patch Changes

- a2ef8084f: Use the same versions of dependencies across the pnpm monorepo.
- Updated dependencies [a2ef8084f]
  - @pnpm/config@11.2.1
  - @pnpm/lifecycle@9.2.2
  - @pnpm/cli-utils@0.4.17

## 1.2.11

### Patch Changes

- Updated dependencies [ad69677a7]
  - @pnpm/cli-utils@0.4.16
  - @pnpm/config@11.2.0

## 1.2.10

### Patch Changes

- @pnpm/lifecycle@9.2.1
- @pnpm/cli-utils@0.4.15

## 1.2.9

### Patch Changes

- Updated dependencies [65b4d07ca]
- Updated dependencies [ab3b8f51d]
  - @pnpm/config@11.1.0
  - @pnpm/cli-utils@0.4.14

## 1.2.8

### Patch Changes

- 76aaead32: `run --silent <cmd>` should only print output of the command and nothing from pnpm.
- Updated dependencies [76aaead32]
  - @pnpm/lifecycle@9.2.0

## 1.2.7

### Patch Changes

- @pnpm/config@11.0.1
- @pnpm/cli-utils@0.4.13

## 1.2.6

### Patch Changes

- Updated dependencies [71aeb9a38]
- Updated dependencies [915828b46]
  - @pnpm/config@11.0.0
  - @pnpm/cli-utils@0.4.12

## 1.2.5

### Patch Changes

- @pnpm/config@10.0.1
- @pnpm/cli-utils@0.4.11

## 1.2.4

### Patch Changes

- 220896511: Remove common-tags from dependencies.
- Updated dependencies [db17f6f7b]
- Updated dependencies [1146b76d2]
- Updated dependencies [db17f6f7b]
  - @pnpm/config@10.0.0
  - @pnpm/types@6.2.0
  - @pnpm/cli-utils@0.4.10
  - @pnpm/lifecycle@9.1.3
  - @pnpm/sort-packages@1.0.13

## 1.2.3

### Patch Changes

- Updated dependencies [71a8c8ce3]
- Updated dependencies [71a8c8ce3]
  - @pnpm/types@6.1.0
  - @pnpm/config@9.2.0
  - @pnpm/cli-utils@0.4.9
  - @pnpm/lifecycle@9.1.2
  - @pnpm/sort-packages@1.0.12

## 1.2.2

### Patch Changes

- Updated dependencies [e934b1a48]
  - @pnpm/cli-utils@0.4.8

## 1.2.1

### Patch Changes

- d3ddd023c: Update p-limit to v3.
- Updated dependencies [d3ddd023c]
- Updated dependencies [68d8dc68f]
  - @pnpm/lifecycle@9.1.1
  - @pnpm/cli-utils@0.4.7

## 1.2.0

### Minor Changes

- ffddf34a8: Add new global option called `--stream`.
  When used, the output from child processes is streamed to the console immediately, prefixed with the originating package directory. This allows output from different packages to be interleaved.
- 0e8daafe4: The `run` and `exec` commands may use the `--parallel` option.

  `--parallel` completely disregards concurrency and topological sorting,
  running a given script immediately in all matching packages
  with prefixed streaming output. This is the preferred flag
  for long-running processes such as watch run over many packages.

  For example: `pnpm run --parallel watch`

### Patch Changes

- 8094b2a62: A recursive run should not rerun the same package script which started the lifecycle event.

  For instance, let's say one of the workspace projects has the following script:

  ```json
  "scripts": {
    "build": "pnpm run -r build"
  }
  ```

  Running `pnpm run build` in this project should not start an infinite recursion.
  `pnpm run -r build` in this case should run `build` in all the workspace projects except the one that started the build.

  Related issue: #2528

- Updated dependencies [ffddf34a8]
- Updated dependencies [ffddf34a8]
- Updated dependencies [8094b2a62]
  - @pnpm/common-cli-options-help@0.2.0
  - @pnpm/config@9.1.0
  - @pnpm/lifecycle@9.1.0
  - @pnpm/cli-utils@0.4.6
  - @pnpm/sort-packages@1.0.11

## 1.1.0

### Minor Changes

- 7300eba86: Support if-present flag for recursive run

### Patch Changes

- Updated dependencies [242cf8737]
- Updated dependencies [da091c711]
- Updated dependencies [f35a3ec1c]
- Updated dependencies [e11019b89]
- Updated dependencies [802d145fc]
- Updated dependencies [45fdcfde2]
- Updated dependencies [e3990787a]
  - @pnpm/config@9.0.0
  - @pnpm/types@6.0.0
  - @pnpm/lifecycle@9.0.0
  - @pnpm/cli-utils@0.4.5
  - @pnpm/command@1.0.1
  - @pnpm/common-cli-options-help@0.1.6
  - @pnpm/error@1.2.1
  - @pnpm/sort-packages@1.0.10

## 1.1.0-alpha.3

### Patch Changes

- Updated dependencies [242cf8737]
- Updated dependencies [45fdcfde2]
  - @pnpm/config@9.0.0-alpha.2
  - @pnpm/cli-utils@0.4.5-alpha.2
  - @pnpm/sort-packages@1.0.10-alpha.2

## 1.1.0-alpha.2

### Patch Changes

- Updated dependencies [da091c71]
- Updated dependencies [e3990787]
  - @pnpm/types@6.0.0-alpha.0
  - @pnpm/lifecycle@9.0.0-alpha.1
  - @pnpm/cli-utils@0.4.5-alpha.1
  - @pnpm/config@8.3.1-alpha.1
  - @pnpm/sort-packages@1.0.10-alpha.1

## 1.1.0-alpha.1

### Patch Changes

- @pnpm/config@8.3.1-alpha.0
- @pnpm/cli-utils@0.4.5-alpha.0
- @pnpm/sort-packages@1.0.10-alpha.0

## 1.1.0-alpha.0

### Minor Changes

- 7300eba86: Support if-present flag for recursive run

### Patch Changes

- Updated dependencies [f35a3ec1c]
  - @pnpm/lifecycle@8.2.0-alpha.0

## 1.1.0

### Minor Changes

- c80d4ba3c: Support if-present flag for recursive run

### Patch Changes

- Updated dependencies [2ec4c4eb9]
  - @pnpm/lifecycle@8.2.0

## 1.0.8

### Patch Changes

- 907c63a48: Dependencies updated.
  - @pnpm/cli-utils@0.4.4
