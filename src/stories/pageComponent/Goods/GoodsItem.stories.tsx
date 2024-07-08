import { TEST_IMAGE_URL } from "@/stories/story.const";
import { Meta, StoryFn } from "@storybook/react";
import { GoodsItem, GoodsItemProps } from "./GoodsItem";

const meta: Meta<typeof GoodsItem> = {
  component: GoodsItem,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
export default meta;

type Story = StoryFn<typeof GoodsItem>;

const Template: Story = (args) => {
  return <GoodsItem {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  image: {
    src: TEST_IMAGE_URL[0],
    alt: TEST_IMAGE_URL[0],
  },
  children: <GoodsItem.Description title={"hello"} description={"world"} />,
} as GoodsItemProps;

export const DiscountBadge = Template.bind({});
DiscountBadge.args = {
  image: {
    src: TEST_IMAGE_URL[0],
    alt: TEST_IMAGE_URL[0],
  },
  discount: <GoodsItem.DiscountBadge amount={15} color="red" />,
  children: <GoodsItem.Description title={"hello"} description={"world"} />,
} as GoodsItemProps;
