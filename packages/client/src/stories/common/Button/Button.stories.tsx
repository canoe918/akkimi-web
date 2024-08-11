import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
export default meta;

type Story = StoryFn<typeof Button>;

const Template: Story = (args) => {
  return <Button {...args} />;
};

export const Red = Template.bind({});
Red.args = {
  theme: "primary",
  size: "xl",
  children: "버튼명",
} as ButtonProps;
