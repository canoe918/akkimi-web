import TestImage from "@/stories/assets/images/test-image.png";
import { Label } from "@/stories/common/Label/Label";
import { GoodsLargeItem } from "@/stories/pageComponent/Goods/GoodsLargeItem";
import ShowMoreButton from "./ShowMoreButton";

const discountComingSoonCardListData = [
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

export default function CategoryItemListView() {
  const showMore = discountComingSoonCardListData.length >= MAX_COUNT;

  return (
    <section className="flex flex-col pt-58">
      <h3 className="px-24 subhead3-m mb-20">어학</h3>

      <div className="flex flex-col px-20 pb-10 overflow-x-auto gap-y-16">
        {discountComingSoonCardListData
          .slice(0, MAX_COUNT)
          .map(({ id, title, description, imgSrc }) => {
            return (
              <GoodsLargeItem
                key={id}
                href={`/goods/${id}`}
                title={title}
                description={description}
                image={{
                  src: imgSrc,
                  alt: title,
                }}
                status={
                  <Label type="red" className="absolute top-12 right-12 ">
                    3명 남음
                  </Label>
                }
              />
            );
          })}
      </div>

      {showMore && <ShowMoreButton href="/category/discount" />}
    </section>
  );
}
