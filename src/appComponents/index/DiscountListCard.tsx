import TestImage from "@/stories/assets/images/test-image.png";
import { GoodsItem } from "@/stories/pageComponent/Goods/GoodsItem";
import { ProfileStack } from "@/stories/pageComponent/Goods/ProfileStack";
import ShowMoreButton from "./ShowMoreButton";

const discountCardListData = [
  {
    id: 1,
    title: "어학",
    description: "비즈니스 영어",
    imgSrc: TestImage,
  },
  {
    id: 2,
    title: "어학",
    description: "비즈니스 영어",
    imgSrc: TestImage,
  },
  {
    id: 3,
    title: "어학",
    description: "비즈니스 영어",
    imgSrc: TestImage,
  },
  {
    id: 4,
    title: "어학",
    description: "비즈니스 영어",
    imgSrc: TestImage,
  },
  {
    id: 5,
    title: "어학",
    description: "비즈니스 영어",
    imgSrc: TestImage,
  },
];

const MAX_COUNT = 3;

export default function DiscountListCard() {
  const showMore = discountCardListData.length >= MAX_COUNT;

  return (
    <section className="flex flex-col pt-58">
      <h3 className="px-24 subhead3-m mb-20">할인이 시작된 강의</h3>

      <div className="flex flex-col px-20 pb-10 gap-y-12">
        {discountCardListData
          .slice(0, MAX_COUNT)
          .map(({ id, title, description, imgSrc }) => {
            return (
              <GoodsItem
                key={id}
                href={`/goods/${id}`}
                title={title}
                description={description}
                image={{
                  src: imgSrc,
                  alt: title,
                }}
                discount={<GoodsItem.DiscountBadge amount={15} color="red" />}
              >
                <GoodsItem.Description title={title} description={description}>
                  <ProfileStack
                    profileUrls={[TestImage.src, TestImage.src, TestImage.src]}
                    amount={3}
                  />
                </GoodsItem.Description>
              </GoodsItem>
            );
          })}
      </div>

      {showMore && <ShowMoreButton href="/category/discount" />}
    </section>
  );
}
