// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
const esbuild = require('esbuild')
const pkg = require('./package.json')

const options = {
  entryPoints: ['src/index.js'],
  bundle: true,
  loader: {
    '.js': 'jsx',
  },
  inject: ['build/global-inject.js'],
  external: ['react', 'prop-types', 'styled-components'],
}

const cjs = { format: 'cjs', outfile: pkg.main, ...options }
const esm = { format: 'esm', outfile: pkg.module, ...options }

esbuild.build(cjs).catch((e) => {
  process.stderr.write(e.stderr)
  process.exit(1)
})

esbuild.build(esm).catch((e) => {
  process.stderr.write(e.stderr)
  process.exit(1)
})
