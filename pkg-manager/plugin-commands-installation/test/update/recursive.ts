import { type PnpmError } from '@pnpm/error'
import { filterPackagesFromDir } from '@pnpm/workspace.filter-packages-from-dir'
import { type LockfileObject } from '@pnpm/lockfile.types'
import { readModulesManifest } from '@pnpm/modules-yaml'
import { install, update } from '@pnpm/plugin-commands-installation'
import { preparePackages } from '@pnpm/prepare'
import { readProjectManifestOnly } from '@pnpm/read-project-manifest'
import { addDistTag } from '@pnpm/registry-mock'
import { sync as readYamlFile } from 'read-yaml-file'
import { DEFAULT_OPTS } from '../utils'

test('recursive update', async () => {
  const projects = preparePackages([
    {
      name: 'project-1',
      version: '1.0.0',

      dependencies: {
        'is-positive': '1.0.0',
      },
    },
    {
      name: 'project-2',
      version: '1.0.0',

      dependencies: {
        'is-negative': '1.0.0',
      },
    },
  ])

  const { allProjects, selectedProjectsGraph } = await filterPackagesFromDir(process.cwd(), [])
  await install.handler({
    ...DEFAULT_OPTS,
    allProjects,
    dir: process.cwd(),
    recursive: true,
    selectedProjectsGraph,
    workspaceDir: process.cwd(),
  })

  await update.handler({
    ...DEFAULT_OPTS,
    allProjects,
    dir: process.cwd(),
    recursive: true,
    selectedProjectsGraph,
    workspaceDir: process.cwd(),
  }, ['is-positive@2.0.0'])

  expect(projects['project-1'].requireModule('is-positive/package.json').version).toBe('2.0.0')
  projects['project-2'].hasNot('is-positive')
})

test('recursive update prod dependencies only', async () => {
  await addDistTag({ package: '@pnpm.e2e/foo', version: '100.0.0', distTag: 'latest' })
  await addDistTag({ package: '@pnpm.e2e/bar', version: '100.0.0', distTag: 'latest' })

  preparePackages([
    {
      name: 'project-1',
      version: '1.0.0',

      dependencies: {
        '@pnpm.e2e/foo': '^100.0.0',
      },
    },
    {
      name: 'project-2',
      version: '1.0.0',

      devDependencies: {
        '@pnpm.e2e/bar': '^100.0.0',
      },
    },
  ])

  const { allProjects, selectedProjectsGraph } = await filterPackagesFromDir(process.cwd(), [])
  await install.handler({
    ...DEFAULT_OPTS,
    allProjects,
    dir: process.cwd(),
    lockfileDir: process.cwd(),
    optional: false,
    recursive: true,
    selectedProjectsGraph,
    workspaceDir: process.cwd(),
  })

  await addDistTag({ package: '@pnpm.e2e/foo', version: '100.1.0', distTag: 'latest' })
  await addDistTag({ package: '@pnpm.e2e/bar', version: '100.1.0', distTag: 'latest' })

  await update.handler({
    ...DEFAULT_OPTS,
    allProjects,
    cliOptions: {
      dev: false,
      optional: false,
      production: true,
    },
    dir: process.cwd(),
    lockfileDir: process.cwd(),
    rawConfig: {
      ...DEFAULT_OPTS.rawConfig,
      optional: false,
    },
    recursive: true,
    selectedProjectsGraph,
    workspaceDir: process.cwd(),
  })

  const lockfile = readYamlFile<LockfileObject>('./pnpm-lock.yaml')
  expect(
    Object.keys(lockfile.packages ?? {})
  ).toStrictEqual(
    ['@pnpm.e2e/bar@100.0.0', '@pnpm.e2e/foo@100.1.0']
  )
  const modules = await readModulesManifest('./node_modules')
  expect(modules?.included).toStrictEqual({
    dependencies: true,
    devDependencies: true,
    optionalDependencies: false,
  })
})

test('recursive update with pattern', async () => {
  const projects = preparePackages([
    {
      name: 'project-1',
      version: '1.0.0',

      dependencies: {
        '@pnpm.e2e/dep-of-pkg-with-1-dep': '100.0.0',
        '@pnpm.e2e/foo': '1.0.0',
      },
    },
    {
      name: 'project-2',
      version: '1.0.0',

      dependencies: {
        '@pnpm.e2e/peer-c': '1.0.0',
      },
    },
  ])

  const { allProjects, selectedProjectsGraph } = await filterPackagesFromDir(process.cwd(), [])
  await install.handler({
    ...DEFAULT_OPTS,
    allProjects,
    dir: process.cwd(),
    recursive: true,
    selectedProjectsGraph,
    workspaceDir: process.cwd(),
  })

  await addDistTag({ package: '@pnpm.e2e/dep-of-pkg-with-1-dep', version: '100.1.0', distTag: 'latest' })
  await addDistTag({ package: '@pnpm.e2e/peer-c', version: '2.0.0', distTag: 'latest' })
  await addDistTag({ package: '@pnpm.e2e/foo', version: '2.0.0', distTag: 'latest' })

  await update.handler({
    ...DEFAULT_OPTS,
    allProjects,
    dir: process.cwd(),
    latest: true,
    recursive: true,
    selectedProjectsGraph,
    workspaceDir: process.cwd(),
  }, ['@pnpm.e2e/peer-*', '@pnpm.e2e/dep-of-pkg-*'])

  expect(projects['project-1'].requireModule('@pnpm.e2e/dep-of-pkg-with-1-dep/package.json').version).toBe('100.1.0')
  expect(projects['project-1'].requireModule('@pnpm.e2e/foo/package.json').version).toBe('1.0.0')
  expect(projects['project-2'].requireModule('@pnpm.e2e/peer-c/package.json').version).toBe('2.0.0')
})

test('recursive update with pattern and name in project', async () => {
  await addDistTag({ package: '@pnpm.e2e/dep-of-pkg-with-1-dep', version: '100.1.0', distTag: 'latest' })
  await addDistTag({ package: '@pnpm.e2e/peer-c', version: '2.0.0', distTag: 'latest' })
  await addDistTag({ package: '@pnpm.e2e/foo', version: '2.0.0', distTag: 'latest' })
  await addDistTag({ package: '@pnpm.e2e/print-version', version: '2.0.0', distTag: 'latest' })

  const projects = preparePackages([
    {
      name: 'project-1',
      version: '1.0.0',

      dependencies: {
        '@pnpm.e2e/dep-of-pkg-with-1-dep': '100.0.0',
        '@pnpm.e2e/foo': '1.0.0',
      },
    },
    {
      name: 'project-2',
      version: '1.0.0',

      dependencies: {
        '@pnpm.e2e/peer-c': '1.0.0',
        '@pnpm.e2e/print-version': '1.0.0',
      },
    },
  ])

  const lockfileDir = process.cwd()

  const { allProjects, selectedProjectsGraph } = await filterPackagesFromDir(process.cwd(), [])
  await install.handler({
    ...DEFAULT_OPTS,
    allProjects,
    dir: process.cwd(),
    lockfileDir,
    recursive: true,
    selectedProjectsGraph,
    workspaceDir: process.cwd(),
  })

  let err!: PnpmError
  try {
    await update.handler({
      ...DEFAULT_OPTS,
      allProjects,
      depth: 0,
      dir: process.cwd(),
      latest: true,
      lockfileDir,
      recursive: true,
      selectedProjectsGraph,
      workspaceDir: process.cwd(),
    }, ['@pnpm.e2e/this-does-not-exist'])
  } catch (_err: any) { // eslint-disable-line
    err = _err
  }
  expect(err).toBeTruthy()
  expect(err.code).toBe('ERR_PNPM_NO_PACKAGE_IN_DEPENDENCIES')

  // This should not fail because depth=0 is not specified
  await update.handler({
    ...DEFAULT_OPTS,
    allProjects,
    dir: process.cwd(),
    latest: true,
    lockfileDir,
    recursive: true,
    selectedProjectsGraph,
    workspaceDir: process.cwd(),
  }, ['@pnpm.e2e/this-does-not-exist'])

  await update.handler({
    ...DEFAULT_OPTS,
    allProjects,
    dir: process.cwd(),
    latest: true,
    lockfileDir,
    recursive: true,
    selectedProjectsGraph,
    workspaceDir: process.cwd(),
  }, ['@pnpm.e2e/peer-*', '@pnpm.e2e/dep-of-pkg-*', '@pnpm.e2e/print-version'])

  expect(projects['project-1'].requireModule('@pnpm.e2e/dep-of-pkg-with-1-dep/package.json').version).toBe('100.1.0')
  expect(projects['project-1'].requireModule('@pnpm.e2e/foo/package.json').version).toBe('1.0.0')
  expect(projects['project-2'].requireModule('@pnpm.e2e/peer-c/package.json').version).toBe('2.0.0')
  expect(projects['project-2'].requireModule('@pnpm.e2e/print-version/package.json').version).toBe('2.0.0')
})

test('recursive update --latest foo should only update projects that have foo', async () => {
  await addDistTag({ package: '@pnpm.e2e/foo', version: '100.0.0', distTag: 'latest' })
  await addDistTag({ package: '@pnpm.e2e/bar', version: '100.0.0', distTag: 'latest' })
  await addDistTag({ package: '@pnpm.e2e/qar', version: '100.0.0', distTag: 'latest' })

  preparePackages([
    {
      name: 'project-1',
      version: '1.0.0',

      dependencies: {
        '@pnpm.e2e/foo': '100.0.0',
        '@pnpm.e2e/qar': '100.0.0',
      },
    },
    {
      name: 'project-2',
      version: '1.0.0',

      dependencies: {
        '@zkochan/async-regex-replace': '0.1.0',
        '@pnpm.e2e/bar': '^100.0.0',
      },
    },
  ])

  const lockfileDir = process.cwd()

  const { allProjects, selectedProjectsGraph } = await filterPackagesFromDir(process.cwd(), [])
  await install.handler({
    ...DEFAULT_OPTS,
    allProjects,
    dir: process.cwd(),
    lockfileDir,
    recursive: true,
    selectedProjectsGraph,
    workspaceDir: process.cwd(),
  })

  await addDistTag({ package: '@pnpm.e2e/foo', version: '100.1.0', distTag: 'latest' })
  await addDistTag({ package: '@pnpm.e2e/bar', version: '100.1.0', distTag: 'latest' })

  await update.handler({
    ...DEFAULT_OPTS,
    allProjects,
    dir: process.cwd(),
    latest: true,
    lockfileDir,
    recursive: true,
    selectedProjectsGraph,
    workspaceDir: process.cwd(),
  }, ['@zkochan/async-regex-replace', '@pnpm.e2e/foo'])

  const lockfile = readYamlFile<LockfileObject>('./pnpm-lock.yaml')

  expect(Object.keys(lockfile.packages ?? {}).sort()).toStrictEqual([
    '@zkochan/async-regex-replace@0.2.0',
    '@pnpm.e2e/bar@100.0.0',
    '@pnpm.e2e/foo@100.1.0',
    '@pnpm.e2e/qar@100.0.0',
  ].sort())
})

test('recursive update --latest foo should only update packages that have foo', async () => {
  await addDistTag({ package: '@pnpm.e2e/foo', version: '100.0.0', distTag: 'latest' })
  await addDistTag({ package: '@pnpm.e2e/bar', version: '100.0.0', distTag: 'latest' })
  await addDistTag({ package: '@pnpm.e2e/qar', version: '100.0.0', distTag: 'latest' })

  const projects = preparePackages([
    {
      name: 'project-1',
      version: '1.0.0',

      dependencies: {
        '@pnpm.e2e/foo': '100.0.0',
        '@pnpm.e2e/qar': '100.0.0',
      },
    },
    {
      name: 'project-2',
      version: '1.0.0',

      dependencies: {
        '@pnpm.e2e/bar': '^100.0.0',
      },
    },
  ])

  const { allProjects, selectedProjectsGraph } = await filterPackagesFromDir(process.cwd(), [])
  await install.handler({
    ...DEFAULT_OPTS,
    allProjects,
    dir: process.cwd(),
    recursive: true,
    selectedProjectsGraph,
    workspaceDir: process.cwd(),
  })

  await addDistTag({ package: '@pnpm.e2e/foo', version: '100.1.0', distTag: 'latest' })
  await addDistTag({ package: '@pnpm.e2e/bar', version: '100.1.0', distTag: 'latest' })

  await update.handler({
    ...DEFAULT_OPTS,
    allProjects,
    dir: process.cwd(),
    latest: true,
    recursive: true,
    selectedProjectsGraph,
    workspaceDir: process.cwd(),
  }, ['@pnpm.e2e/foo'])

  {
    const lockfile = projects['project-1'].readLockfile()

    expect(Object.keys(lockfile.packages ?? {})).toStrictEqual(['@pnpm.e2e/foo@100.1.0', '@pnpm.e2e/qar@100.0.0'])
  }

  {
    const lockfile = projects['project-2'].readLockfile()

    expect(Object.keys(lockfile.packages ?? {})).toStrictEqual(['@pnpm.e2e/bar@100.0.0'])
  }
})

test('recursive update in workspace should not add new dependencies', async () => {
  const projects = preparePackages([
    {
      name: 'project-1',
      version: '1.0.0',
    },
    {
      name: 'project-2',
      version: '1.0.0',
    },
  ])

  let err!: PnpmError
  try {
    await update.handler({
      ...DEFAULT_OPTS,
      ...await filterPackagesFromDir(process.cwd(), []),
      depth: 0,
      dir: process.cwd(),
      recursive: true,
      workspaceDir: process.cwd(),
    }, ['is-positive'])
  } catch (_err: any) { // eslint-disable-line
    err = _err
  }
  expect(err).toBeTruthy()
  expect(err.code).toBe('ERR_PNPM_NO_PACKAGE_IN_DEPENDENCIES')

  projects['project-1'].hasNot('is-positive')
  projects['project-2'].hasNot('is-positive')
})

test('recursive update with aliased workspace dependency (#7975)', async () => {
  const projects = preparePackages([
    {
      name: 'project-1',
      version: '1.0.0',
      dependencies: {
        pkg: 'workspace:project-2@^',
      },
    },
    {
      name: 'project-2',
      version: '1.0.0',
    },
  ])

  await update.handler({
    ...DEFAULT_OPTS,
    ...await filterPackagesFromDir(process.cwd(), []),
    depth: 0,
    dir: process.cwd(),
    recursive: true,
    workspaceDir: process.cwd(),
    saveWorkspaceProtocol: 'rolling',
  })

  projects['project-1'].has('pkg')

  const manifest = await readProjectManifestOnly('project-1')
  expect(manifest).toHaveProperty(['dependencies', 'pkg'], 'workspace:project-2@^')
})
