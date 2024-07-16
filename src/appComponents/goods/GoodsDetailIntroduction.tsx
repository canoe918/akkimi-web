"use client";
import TestImage from "@/stories/assets/images/test-image.png";
import Image from "next/image";

export default function GoodsDetailIntroduction() {
  return (
    <section>
      <div className="w-full h-full relative">
        <div
          className="absolute z-[2] w-full bottom-0 left-0 right-0 aspect-[5/1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.60) 40%, rgba(255, 255, 255, 0.85) 75%, #FFFFFF 100%)",
          }}
        />

        <Image
          src={TestImage}
          width={0}
          height={0}
          className="object-cover w-full h-full"
          alt="상품명"
        />

        <div className="z-[3] flex flex-col justify-center items-center absolute bottom-12 left-1/2 -translate-x-1/2">
          <h4 className="subhead1-m ">어학</h4>
        </div>
      </div>

      <div className="text-blue-gray-900 flex flex-col justify-center items-center">
        <h2 className="heading5-b">비즈니스영어 강의</h2>

        <p className="mt-8 body1-r text-blue-gray-700">주최학원/회사명</p>

        <span className="mt-24 flex items-end">
          <h2 className="headline-b">100,000원</h2>

          <span className="ml-8 caption-m text-blue-gray-500">/월</span>
        </span>
      </div>

      <div className="w-full flex justify-center">
        <span className="mt-8 caption-r text-blue-gray-500">
          6개월 할부시 가격입니다.
        </span>
      </div>
    </section>
  );
}
