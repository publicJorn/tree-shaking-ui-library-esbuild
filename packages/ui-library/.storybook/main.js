module.exports = {
  babel: async (opts) => {
    opts.plugins.push(['@babel/plugin-proposal-private-property-in-object', { loose: true }])
    return { ...opts }
  },
  stories: [
    '../src/guidelines/getting-started.stories.mdx',
    '../src/guidelines/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    'storybook-addon-styled-component-theme/dist/preset',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-links',
  ],
}
