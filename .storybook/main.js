module.exports = {
  "stories": [
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)",

  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          'dripsy',
          '@dripsy/core'
        ],
      }
    }
  ],
  core: {
    builder: 'webpack5'
  },
  "framework": "@storybook/react"
}