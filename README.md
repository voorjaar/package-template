# Package Template

This is a git repo template for setting up your own project using Typescript, Pnpm, Rollup, and Jest.

## Getting started

Click [Use this template](https://github.com/voorjaar/package-template/generate) to initialize a new repository on Github.

Alternately, you can use [degit](https://www.npmjs.com/package/degit) to Create a new project.

```bash
npx degit https://github.com/voorjaar/package-template my-new-project
cd my-new-project
pnpm install
pnpm build
pnpm test
```

## Pre-configured

- [Typescript](https://www.typescriptlang.org/)
- [Sucrase](https://www.npmjs.com/package/sucrase)
- [Pnpm](https://pnpm.io/)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [Rollup](https://rollupjs.org/)

## Commands

### `dev`

Watch build with rollup.

### `build`

Build package to production.

### `lint`

Lint Code.

### `lint:fix`

Automatically fix all lint problems

### `test`

Runs all tests.

Shortcut for `jest`. You can pass any `jest` CLI flags to this command like `--watch`

### `test:dts`

Check Typescript types.

### `test:watch`

Runs all tests with watch mode.

### `test:update`

Update test snapshots.

### `coverage`

Genearte coverage report.

## License

[MIT](https://github.com/voorjaar/package-template/blob/main/LICENSE)

Copyright (c) 2022, Raven Satir