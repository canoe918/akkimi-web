import Image, { StaticImageData } from "next/image";

import TestImage from "@/stories/assets/images/test-image.png";
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

interface CardItemProps {
  imgSrc: StaticImageData;
  title: string;
  description: string;
}

function CardItem({ title, imgSrc, description }: CardItemProps) {
  return (
    <div className="rounded inline-block bg-gray-300 min-w-[24rem] w-[24rem] rounded-tr rounded-tl overflow-hidden">
      <Image
        src={imgSrc}
        className="bg-blue-gray-600 aspect-[1.6/1] object-cover rounded-tl rounded-tr"
        alt={title}
      />

      <div className="border text-blue-gray-700 border-solid border-blue-gray-200 rounded-bl rounded-br p-24 bg-white">
        <h3 className="subhead1-m">{title}</h3>
        <p className="subhead2-m text-blue-gray-900">{description}</p>

        <div className="mt-8">N명 모임</div>
      </div>
    </div>
  );
}

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
