import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  addons: ["storybook-addon-next"],
  staticDirs: ["../public"],
  docs: {
    autodocs: true,
  },
};
export default config;
