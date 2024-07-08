import { TEST_IMAGE_URL } from "@/stories/story.const";
import { Meta, StoryFn } from "@storybook/react";
import { GoodsLargeItem, GoodsLargeItemProps } from "./GoodsLargeItem";

const meta: Meta<typeof GoodsLargeItem> = {
  component: GoodsLargeItem,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
export default meta;

type Story = StoryFn<typeof GoodsLargeItem>;

const Template: Story = (args) => {
  return (
    <div className="w-[44rem] bg-gray-200">
      <GoodsLargeItem {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  title: "hello",
  description: "world",
  image: {
    src: TEST_IMAGE_URL[0],
    alt: TEST_IMAGE_URL[0],
  },
} as GoodsLargeItemProps;
