module.exports = {
  babel: async (opts) => {
    opts.plugins.push(['@babel/plugin-proposal-private-property-in-object', { loose: true }])
    return { ...opts }
  },

  webpackFinal: async (config) => {
    let rule = config.module.rules.find(
      (r) =>
        r.test && r.test.toString().includes('svg') && r.loader && r.loader.includes('file-loader'),
    )

    // Uses storybook default test without `svg|`
    // See merged config: yarn start --debug-webpack > log.js
    rule.test = /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'file-loader'],
    })

    return config
  },

  stories: [
    '../src/guidelines/getting-started.stories.mdx',
    '../src/guidelines/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-links',
    'storybook-addon-themes',
  ],
}
