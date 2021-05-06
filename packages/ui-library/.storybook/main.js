module.exports = {
  babel: async (opts) => {
    opts.plugins.push(['@babel/plugin-proposal-private-property-in-object', { loose: true }])
    return { ...opts }
  },
  stories: ['../src/stories/**/*.stories.mdx', '../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@react-theming/storybook-addon',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    // '@storybook/addon-links',
  ],
}
