# \<gh-corner>

A simple web-component wrapper around [github-corners](https://github.com/tholman/github-corners).

This component is intended for use in pages that already make use of [lit](https://lit.dev/) though it works fine in 
plain pages as well, just with some additional overhead.

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i gh-corner
```

## Usage

```html
<script type="module">
  import 'gh-corner/gh-corner.js';
</script>

<gh-corner user="USERNAME" repo="REPOSITORY" position="left|right"></gh-corner>
```
or using a CDN:
```html
<script type="module" src="https://unpkg.com/gh-corner-wc/gh-corner.js?module">
</script>

<gh-corner user="USERNAME" repo="REPOSITORY" position="left|right"></gh-corner>
```


## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
