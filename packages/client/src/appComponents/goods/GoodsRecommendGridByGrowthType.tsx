import TestImage from "@/stories/assets/images/test-image.png";
import { Label } from "@/stories/common/Label/Label";
import { GoodsImageItem } from "@/stories/pageComponent/Goods/GoodsImageItem";
import ShowMoreButton from "../index/ShowMoreButton";

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

const MAX_COUNT = 4;

export default function GoodsRecommendGridByGrowthType() {
  const showMore = newCardListData.length >= MAX_COUNT;

  return (
    <section className="flex flex-col pt-58">
      <h3 className="px-24 subhead3-m mb-20">
        <b className="text-geekblue-6">알잘딱깔센형</b>을 위한 강의
      </h3>

      <div className="grid grid-cols-2 px-20 pb-10 overflow-x-auto gap-x-8 gap-y-16">
        {newCardListData
          .slice(0, MAX_COUNT)
          .map(({ id, title, description, imgSrc }) => {
            return (
              <div key={id} className="flex flex-col gap-y-8">
                <GoodsImageItem
                  href={`/goods/${id}`}
                  wrapperClassName="w-full min-w-full"
                  title={title}
                  description={description}
                  image={{
                    src: imgSrc,
                    alt: title,
                  }}
                />

                <Label type="light-gray">11명 남음</Label>
              </div>
            );
          })}
      </div>

      {showMore && <ShowMoreButton href="/category/new" />}
    </section>
  );
}
