module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "staticDirs":[
    "../public"
  ],
  "features": {
    "storyStoreV7": true,
    "interactionsDebugger": true,
  },
  typescript: { reactDocgen: 'none' },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION'){
      config.base= '/Design-System-Storybook/'
    }

    return config
  }
}
