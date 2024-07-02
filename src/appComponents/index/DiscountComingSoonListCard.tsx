import Image, { StaticImageData } from "next/image";

import TestImage from "@/stories/assets/images/test-image.png";
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

interface CardItemProps {
  imgSrc: StaticImageData;
  title: string;
  description: string;
}

function CardItem({ title, imgSrc, description }: CardItemProps) {
  return (
    <div className="rounded relative inline-block min-w-[28rem] aspect-[1.2/1] w-[28rem] overflow-hidden">
      <Image
        src={imgSrc}
        className="bg-blue-gray-600 w-full h-full object-cover rounded"
        alt={title}
      />

      <div className="absolute text-white left-16 right-16 bottom-16">
        <div className="flex flex-col mb-8">
          <h3 className="subhead1-m">{title}</h3>
          <p className="subhead2-m">{description}</p>
        </div>

        <button className="bg-red-1 text-red-6 subhead1-b rounded-full px-16 py-8">
          3명 남음
        </button>
      </div>
    </div>
  );
}

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
