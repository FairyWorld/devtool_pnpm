# @pnpm/node.resolver

## 1001.0.0

### Major Changes

- d1edf73: Removed node fetcher. The binary fetcher should be used for downloading node assets.
- f91922c: Changed how the integrity of the node.js artifact is stored in the lockfile.

### Patch Changes

- Updated dependencies [d1edf73]
- Updated dependencies [86b33e9]
- Updated dependencies [86b33e9]
- Updated dependencies [d1edf73]
- Updated dependencies [f91922c]
  - @pnpm/constants@1001.3.0
  - @pnpm/resolver-base@1005.0.0
  - @pnpm/crypto.shasums-file@1001.0.0
  - @pnpm/config@1004.2.1
  - @pnpm/error@1000.0.4

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
- Updated dependencies [1ba2e15]
- Updated dependencies [1a07b8f]
- Updated dependencies [6f7ac0f]
- Updated dependencies [1a07b8f]
- Updated dependencies [1a07b8f]
  - @pnpm/types@1000.7.0
  - @pnpm/fetching-types@1000.2.0
  - @pnpm/crypto.shasums-file@1000.0.0
  - @pnpm/config@1004.2.0
  - @pnpm/resolver-base@1004.1.0
  - @pnpm/constants@1001.2.0
  - @pnpm/error@1000.0.3
  - @pnpm/crypto.hash@1000.2.0

## 1000.0.20

### Patch Changes

- @pnpm/node.fetcher@1000.0.20

## 1000.0.19

### Patch Changes

- @pnpm/node.fetcher@1000.0.19

## 1000.0.18

### Patch Changes

- @pnpm/node.fetcher@1000.0.18

## 1000.0.17

### Patch Changes

- @pnpm/node.fetcher@1000.0.17

## 1000.0.16

### Patch Changes

- @pnpm/node.fetcher@1000.0.16

## 1000.0.15

### Patch Changes

- @pnpm/node.fetcher@1000.0.15

## 1000.0.14

### Patch Changes

- @pnpm/node.fetcher@1000.0.14

## 1000.0.13

### Patch Changes

- @pnpm/node.fetcher@1000.0.13

## 1000.0.12

### Patch Changes

- @pnpm/node.fetcher@1000.0.12

## 1000.0.11

### Patch Changes

- @pnpm/node.fetcher@1000.0.11

## 1000.0.10

### Patch Changes

- @pnpm/node.fetcher@1000.0.10

## 1000.0.9

### Patch Changes

- @pnpm/node.fetcher@1000.0.9

## 1000.0.8

### Patch Changes

- @pnpm/node.fetcher@1000.0.8

## 1000.0.7

### Patch Changes

- @pnpm/node.fetcher@1000.0.7

## 1000.0.6

### Patch Changes

- @pnpm/node.fetcher@1000.0.6

## 1000.0.5

### Patch Changes

- @pnpm/node.fetcher@1000.0.5

## 1000.0.4

### Patch Changes

- @pnpm/node.fetcher@1000.0.4

## 1000.0.3

### Patch Changes

- @pnpm/node.fetcher@1000.0.3

## 1000.0.2

### Patch Changes

- @pnpm/node.fetcher@1000.0.2

## 1000.0.1

### Patch Changes

- Updated dependencies [b0f3c71]
  - @pnpm/fetching-types@1000.1.0
  - @pnpm/node.fetcher@1000.0.1

## 3.0.17

### Patch Changes

- @pnpm/node.fetcher@4.0.17

## 3.0.16

### Patch Changes

- @pnpm/node.fetcher@4.0.16

## 3.0.15

### Patch Changes

- @pnpm/node.fetcher@4.0.15

## 3.0.14

### Patch Changes

- @pnpm/node.fetcher@4.0.14

## 3.0.13

### Patch Changes

- @pnpm/node.fetcher@4.0.13

## 3.0.12

### Patch Changes

- @pnpm/node.fetcher@4.0.12

## 3.0.11

### Patch Changes

- @pnpm/node.fetcher@4.0.11

## 3.0.10

### Patch Changes

- @pnpm/node.fetcher@4.0.10

## 3.0.9

### Patch Changes

- @pnpm/node.fetcher@4.0.9

## 3.0.8

### Patch Changes

- Updated dependencies [afe520d]
  - @pnpm/node.fetcher@4.0.8

## 3.0.7

### Patch Changes

- @pnpm/node.fetcher@4.0.7

## 3.0.6

### Patch Changes

- @pnpm/node.fetcher@4.0.6

## 3.0.5

### Patch Changes

- @pnpm/node.fetcher@4.0.5

## 3.0.4

### Patch Changes

- @pnpm/node.fetcher@4.0.4

## 3.0.3

### Patch Changes

- @pnpm/node.fetcher@4.0.3

## 3.0.2

### Patch Changes

- @pnpm/node.fetcher@4.0.2

## 3.0.1

### Patch Changes

- @pnpm/node.fetcher@4.0.1

## 3.0.0

### Major Changes

- 43cdd87: Node.js v16 support dropped. Use at least Node.js v18.12.

### Patch Changes

- Updated dependencies [43cdd87]
- Updated dependencies [730929e]
  - @pnpm/fetching-types@6.0.0
  - @pnpm/node.fetcher@4.0.0

## 2.0.40

### Patch Changes

- @pnpm/node.fetcher@3.0.39

## 2.0.39

### Patch Changes

- @pnpm/node.fetcher@3.0.38

## 2.0.38

### Patch Changes

- @pnpm/node.fetcher@3.0.37

## 2.0.37

### Patch Changes

- Updated dependencies [33313d2fd]
  - @pnpm/node.fetcher@3.0.36

## 2.0.36

### Patch Changes

- @pnpm/node.fetcher@3.0.35

## 2.0.35

### Patch Changes

- @pnpm/node.fetcher@3.0.34

## 2.0.34

### Patch Changes

- @pnpm/node.fetcher@3.0.33

## 2.0.33

### Patch Changes

- @pnpm/node.fetcher@3.0.32

## 2.0.32

### Patch Changes

- @pnpm/node.fetcher@3.0.31

## 2.0.31

### Patch Changes

- @pnpm/node.fetcher@3.0.30

## 2.0.30

### Patch Changes

- @pnpm/node.fetcher@3.0.29

## 2.0.29

### Patch Changes

- @pnpm/node.fetcher@3.0.28

## 2.0.28

### Patch Changes

- @pnpm/node.fetcher@3.0.27

## 2.0.27

### Patch Changes

- @pnpm/node.fetcher@3.0.26

## 2.0.26

### Patch Changes

- @pnpm/node.fetcher@3.0.25

## 2.0.25

### Patch Changes

- @pnpm/node.fetcher@3.0.24

## 2.0.24

### Patch Changes

- @pnpm/node.fetcher@3.0.23

## 2.0.23

### Patch Changes

- @pnpm/node.fetcher@3.0.22

## 2.0.22

### Patch Changes

- @pnpm/node.fetcher@3.0.21

## 2.0.21

### Patch Changes

- @pnpm/node.fetcher@3.0.20

## 2.0.20

### Patch Changes

- Updated dependencies [9caa33d53]
  - @pnpm/node.fetcher@4.0.0

## 2.0.19

### Patch Changes

- @pnpm/node.fetcher@3.0.18

## 2.0.18

### Patch Changes

- @pnpm/node.fetcher@3.0.17

## 2.0.17

### Patch Changes

- @pnpm/node.fetcher@3.0.16

## 2.0.16

### Patch Changes

- @pnpm/node.fetcher@3.0.15

## 2.0.15

### Patch Changes

- Updated dependencies [66423df83]
  - @pnpm/node.fetcher@3.0.14

## 2.0.14

### Patch Changes

- @pnpm/node.fetcher@3.0.13

## 2.0.13

### Patch Changes

- @pnpm/node.fetcher@3.0.12

## 2.0.12

### Patch Changes

- @pnpm/node.fetcher@3.0.11

## 2.0.11

### Patch Changes

- @pnpm/node.fetcher@3.0.10

## 2.0.10

### Patch Changes

- @pnpm/node.fetcher@3.0.9

## 2.0.9

### Patch Changes

- @pnpm/node.fetcher@3.0.8

## 2.0.8

### Patch Changes

- @pnpm/node.fetcher@3.0.7

## 2.0.7

### Patch Changes

- @pnpm/node.fetcher@3.0.6

## 2.0.6

### Patch Changes

- @pnpm/node.fetcher@3.0.5

## 2.0.5

### Patch Changes

- @pnpm/node.fetcher@3.0.4

## 2.0.4

### Patch Changes

- @pnpm/node.fetcher@3.0.3

## 2.0.3

### Patch Changes

- @pnpm/node.fetcher@3.0.2

## 2.0.2

### Patch Changes

- Updated dependencies [8228c2cb1]
  - @pnpm/node.fetcher@3.0.1

## 2.0.1

### Patch Changes

- c0760128d: bump semver to 7.4.0

## 2.0.0

### Major Changes

- eceaa8b8b: Node.js 14 support dropped.

### Patch Changes

- Updated dependencies [eceaa8b8b]
  - @pnpm/fetching-types@5.0.0
  - @pnpm/node.fetcher@3.0.0

## 1.1.11

### Patch Changes

- @pnpm/node.fetcher@2.0.14

## 1.1.10

### Patch Changes

- @pnpm/node.fetcher@2.0.13

## 1.1.9

### Patch Changes

- @pnpm/node.fetcher@2.0.12

## 1.1.8

### Patch Changes

- @pnpm/node.fetcher@2.0.11

## 1.1.7

### Patch Changes

- @pnpm/node.fetcher@2.0.10

## 1.1.6

### Patch Changes

- @pnpm/node.fetcher@2.0.9

## 1.1.5

### Patch Changes

- @pnpm/node.fetcher@2.0.8

## 1.1.4

### Patch Changes

- Updated dependencies [ec97a3105]
  - @pnpm/node.fetcher@2.0.7

## 1.1.3

### Patch Changes

- @pnpm/node.fetcher@2.0.6

## 1.1.2

### Patch Changes

- @pnpm/node.fetcher@2.0.5

## 1.1.1

### Patch Changes

- @pnpm/node.fetcher@2.0.4

## 1.1.0

### Minor Changes

- f60d6c46f: Export a new function: resolveNodeVersions.

## 1.0.19

### Patch Changes

- @pnpm/node.fetcher@2.0.3

## 1.0.18

### Patch Changes

- Updated dependencies [804de211e]
  - @pnpm/fetching-types@4.0.0
  - @pnpm/node.fetcher@2.0.2

## 1.0.17

### Patch Changes

- @pnpm/node.fetcher@2.0.1

## 1.0.16

### Patch Changes

- Updated dependencies [f884689e0]
  - @pnpm/node.fetcher@2.0.0

## 1.0.15

### Patch Changes

- @pnpm/node.fetcher@1.0.15

## 1.0.14

### Patch Changes

- @pnpm/node.fetcher@1.0.14

## 1.0.13

### Patch Changes

- @pnpm/node.fetcher@1.0.13

## 1.0.12

### Patch Changes

- @pnpm/node.fetcher@1.0.12

## 1.0.11

### Patch Changes

- Updated dependencies [1c7b439bb]
  - @pnpm/node.fetcher@1.0.11

## 1.0.10

### Patch Changes

- @pnpm/node.fetcher@1.0.10

## 1.0.9

### Patch Changes

- @pnpm/node.fetcher@1.0.9

## 1.0.8

### Patch Changes

- Updated dependencies [32915f0e4]
- Updated dependencies [7a17f99ab]
  - @pnpm/node.fetcher@1.0.8

## 1.0.7

### Patch Changes

- @pnpm/node.fetcher@1.0.7

## 1.0.6

### Patch Changes

- @pnpm/node.fetcher@1.0.6

## 1.0.5

### Patch Changes

- @pnpm/node.fetcher@1.0.5

## 1.0.4

### Patch Changes

- Updated dependencies [2105735a0]
  - @pnpm/node.fetcher@1.0.4

## 1.0.3

### Patch Changes

- @pnpm/node.fetcher@1.0.3

## 1.0.2

### Patch Changes

- @pnpm/node.fetcher@1.0.2

## 1.0.1

### Patch Changes

- @pnpm/node.fetcher@1.0.1

## 1.0.0

### Major Changes

- badbab154: Initial release.

### Patch Changes

- Updated dependencies [228dcc3c9]
  - @pnpm/node.fetcher@1.0.0
