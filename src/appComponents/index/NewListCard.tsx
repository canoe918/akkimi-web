import TestImage from "@/stories/assets/images/test-image.png";
import { GoodsImageItem } from "@/stories/pageComponent/Goods/GoodsImageItem";
import ShowMoreButton from "./ShowMoreButton";

const newCardListData = [
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

export default function NewListCard() {
  const showMore = newCardListData.length >= MAX_COUNT;

  return (
    <section className="flex flex-col pt-58">
      <h3 className="px-24 subhead3-m mb-20">새로 올라왔어요!</h3>

      <div className="flex px-20 pb-10 overflow-x-auto gap-x-12">
        {newCardListData
          .slice(0, MAX_COUNT)
          .map(({ id, title, description, imgSrc }) => {
            return (
              <GoodsImageItem
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

      {showMore && <ShowMoreButton href="/category/new" />}
    </section>
  );
}
