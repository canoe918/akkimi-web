import TestImage from "@/stories/assets/images/test-image.png";
import { GoodsMediumItem } from "@/stories/pageComponent/Goods/GoodsMediumItem";
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

const MAX_COUNT = 5;

export default function DiscountComingSoonListCard() {
  const showMore = discountComingSoonCardListData.length >= MAX_COUNT;

  return (
    <section className="flex flex-col pt-58">
      <h3 className="px-24 subhead3-m mb-20">곧 할인이 시작돼요!</h3>

      <div className="flex px-20 pb-10 overflow-x-auto gap-x-12">
        {discountComingSoonCardListData
          .slice(0, MAX_COUNT)
          .map(({ id, title, description, imgSrc }) => {
            return (
              <GoodsMediumItem
                key={id}
                href={`/goods/${id}`}
                title={title}
                description={description}
                image={{
                  src: imgSrc,
                  alt: title,
                }}
              />
            );
          })}
      </div>

      {showMore && <ShowMoreButton href="/category/discount" />}
    </section>
  );
}
