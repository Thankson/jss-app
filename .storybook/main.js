module.exports = {
  "stories": [
    // 组件展示排序
    '../src/components/ContentBlock.stories.tsx',
    '../src/stories/Introduction.stories.mdx',
    '../src/stories/Page.stories.tsx',
    '../src/stories/Button.stories.tsx',
    '../src/stories/Header.stories.tsx',
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}