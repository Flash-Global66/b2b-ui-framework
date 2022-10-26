const { mergeConfig } = require('vite');
const { resolve } = require('path');

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-jest",
    "@storybook/addon-controls"
  ],
  framework: "@storybook/vue3",
  core: {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': resolve(__dirname, '../'),
        },
      },
    });
  },
};