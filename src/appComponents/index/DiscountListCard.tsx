import Image, { StaticImageData } from "next/image";

import TestImage from "@/stories/assets/images/test-image.png";
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

interface CardItemProps {
  imgSrc: StaticImageData;
  title: string;
  description: string;
}

function CardItem({ title, imgSrc, description }: CardItemProps) {
  return (
    <div className="overflow-hidden w-full flex">
      <Image
        src={imgSrc}
        className="rounded max-w-[12rem] w-full aspect-square bg-blue-gray-200"
        alt={title}
      />

      <div className="py-8 w-full px-24 flex flex-col justify-between bg-white">
        <div className="flex flex-col">
          <h3 className="subhead1-m">{title}</h3>
          <p className="subhead2-m text-blue-gray-900">{description}</p>
        </div>

        <div className="mt-8">N명 모임</div>
      </div>
    </div>
  );
}

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
              <CardItem
                key={id}
                title={title}
                description={description}
                imgSrc={imgSrc}
              />
            );
          })}
      </div>

      {showMore && <ShowMoreButton />}
    </section>
  );
}
