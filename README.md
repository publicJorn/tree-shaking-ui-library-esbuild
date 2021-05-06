# Tree-shakable UI library with esbuild

This is a yarn workspace with two packages

- `ui-library` contains the design system/UI library
- `app` is the application consuming the UI library

## Get it to work

Go to the project root and type:

```shell
yarn
cd ui-library
yarn build
cd ../app
yarn build
```

App is a NextJS application. It will now only contain the components that are actually imported.

## Credits

A bit thanks to Lukas Bomach  
This project is heavily inspired by his [article](https://dev.to/lukasbombach/how-to-write-a-tree-shakable-component-library-4ied) and [demonstration repo](https://github.com/LukasBombach/tree-shakable-component-library). It's basically identical with the exception that I use JS instead of TS and esbuild instead of rollup.
