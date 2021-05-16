// Copyright © VNG Realisatie 2021
// Licensed under the EUPL
//
module.exports = {
  plugins: ['react'],
  extends: ['plugin:react/recommended', '@commonground/eslint-config'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // since react@17
  },
}
