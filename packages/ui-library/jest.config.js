// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
module.exports = {
  transform: {
    '^.+\\.jsx?$': 'esbuild-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
}
