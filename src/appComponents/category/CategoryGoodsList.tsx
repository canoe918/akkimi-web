"use client";

import { useSearchParams } from "next/navigation";

import TestImage from "@/stories/assets/images/test-image.png";
import { Label } from "@/stories/common/Label/Label";
import { GoodsLargeItem } from "@/stories/pageComponent/Goods/GoodsLargeItem";
import { Pagination } from "@/stories/pageComponent/Pagination/Pagination";

const cardListData = [
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

const MAX_COUNT = 10;

export default function CategoryGoodsList() {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") ?? "1";

  return (
    <div className="flex pt-24 flex-col px-20 pb-10 overflow-x-auto gap-y-16">
      {cardListData
        .slice(0, MAX_COUNT)
        .map(({ id, title, description, imgSrc }) => {
          return (
            <GoodsLargeItem
              key={id}
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

      <Pagination className="mt-26" page={Number(currentPage)} size={5} />
    </div>
  );
}
