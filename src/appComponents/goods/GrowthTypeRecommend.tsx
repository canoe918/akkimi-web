import Image from "next/image";
import Link from "next/link";

import { cn } from "@/libs/tailwindCSS/style";
import ArrowForwardIcon from "@/stories/assets/icons/svg/arrow_forward.svg";
import ChallengeImage from "@/stories/assets/images/challenge.png";

const GROWTH_TYPE_LIST = [
  {
    id: 1,
    imageSrc: "",
    type: "찬물샤워형",
  },
  {
    id: 2,
    imageSrc: "",
    type: "동기부족형",
  },
  {
    id: 3,
    imageSrc: "",
    profileSrc: "",
    type: "알잘딱깔센형",
  },
];

const ACTIVE_ID = 3;

export default function GrowthTypeRecommend() {
  return (
    <div className="px-24 mt-36">
      <div className="px-26 py-36 bg-blue-gray-50 rounded-lg">
        <h2 className="w-full text-center headline-b">
          이런 성장유형에게 추천해요!
        </h2>

        <div className="flex mt-24 gap-x-16">
          {GROWTH_TYPE_LIST.map(({ id, imageSrc, profileSrc, type }) => {
            const isActive = ACTIVE_ID === id;

            return (
              <div key={id} className="flex w-full flex-col">
                <div
                  className={cn(
                    "relative w-full aspect-square rounded-lg bg-blue-gray-300 border-solid border border-transparent",
                    {
                      "border-geekblue-6": isActive,
                    },
                  )}
                >
                  {isActive && (
                    <div className="w-24 h-24 bg-black rounded-full bottom-0 right-0 absolute">
                      <div></div>
                    </div>
                  )}
                </div>

                <p className="mt-8 text-center body2-r">{type}</p>
              </div>
            );
          })}
        </div>
      </div>

      <Link href="/survey">
        <button className="flex items-center justify-between relative mt-8 w-full text-geekblue-6 subhead3-b bg-geekblue-1 rounded-lg p-24">
          내 성장유형은 무엇일까?
          <Image
            className="absolute top-1/2 -translate-y-1/2 right-[20%]"
            src={ChallengeImage}
            alt="내 성장유형은 무엇일까?"
            width={105}
            height={115}
          />
          <div className="rounded-full bg-geekblue-6 p-6">
            <ArrowForwardIcon color="white" />
          </div>
        </button>
      </Link>
    </div>
  );
}
