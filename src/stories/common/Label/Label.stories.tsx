import { Meta, StoryFn } from "@storybook/react";
import { Label, LabelProps } from "./Label";

const meta: Meta<typeof Label> = {
  component: Label,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
export default meta;

type Story = StoryFn<typeof Label>;

const Template: Story = (args) => {
  return <Label {...args} />;
};

export const Red = Template.bind({});
Red.args = {
  type: "red",
  children: "Label",
} as LabelProps;
