# Tree-shakable UI library with esbuild

This is a yarn workspace with two packages

- `ui-library` contains the design system/UI library
- `app` is the application consuming the UI library

## The _explore_ branch

Here I'll start adding stuff from [https://gitlab.com/commonground/core/design-system]() so I can learn what esbuild transforms are needed, etc.  
The eventual goal is to replace the Commonground Design System (which is build with webpack) with this.

## Set it up

Go to the project root and copy/paste this:

```shell
yarn
cd packages/ui-library
yarn build
cd ../app
yarn build
```

App is a NextJS application. The built app will now only contain the components that are actually imported (Button in this initial example).  
You can check this by searching the `packages/app/.next` folder in an editor. Find `I SHOULD BE IN APP` -> this is the `Button` that is imported.  
Find `I MUST NOT BE IN APP` -> this is the `Link` that is not imported.

## Work with it

Develop components with Storybook...

```shell
# from root dir:
cd packages/ui-library
yarn start
```

...and make ready for consumption in app with

```shell
# from packages/ui-library
yarn build
```

In dev mode

```shell
# from root dir:
cd packages/app
yarn start
```

In prod mode

```shell
# from root dir:
cd packages/app
yarn build
yarn serve
```

### Extending it further

If you want to work with this and add a third part library to `ui-library`, be sure to add it as a `peerDependency` in `packages/ui-library/package.json` AND list it in the `external` array in `esbuild.js`. You then need to `yarn add` it to your `app` as well.

## Credits

A big thanks to Lukas Bomach  
This project is heavily inspired by his [article](https://dev.to/lukasbombach/how-to-write-a-tree-shakable-component-library-4ied) and [demonstration repo](https://github.com/LukasBombach/tree-shakable-component-library). It's basically identical with the exception that I use JS instead of TS and esbuild instead of rollup.
