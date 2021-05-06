const esbuild = require('esbuild')
const pkg = require('./package.json')

const options = {
  entryPoints: ['components/index.js'],
  bundle: true,
  loader: {
    '.js': 'jsx',
  },
  external: ['react', 'styled-components'],
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
