# @pnpm/pick-fetcher

## 1000.0.1

### Patch Changes

- 6acf819: Remove the blanket variant from the `Resolution` type, making it stricter and more useful.

## 3.0.0

### Major Changes

- 43cdd87: Node.js v16 support dropped. Use at least Node.js v18.12.

## 2.0.1

### Patch Changes

- f394cfccd: Don't update git-hosted dependencies when adding an unrelated dependency [#7008](https://github.com/pnpm/pnpm/issues/7008).

## 2.0.0

### Major Changes

- eceaa8b8b: Node.js 14 support dropped.

## 1.0.0

### Major Changes

- 7a17f99ab: Refactor `tarball-fetcher` and separate it into more specific fetchers, such as `localTarball`, `remoteTarball` and `gitHostedTarball`.

### Minor Changes

- 23984abd1: Add hook for adding custom fetchers.
