import Image from "next/image";

import MainLogoImage from "@/stories/assets/images/main-logo.png";

export default function MainBanner() {
  return (
    <div className="px-24 mt-24">
      <div className="flex rounded bg-[#D4EDFF] items-center justify-center flex-col px-24 gap-y-24 py-48">
        <Image
          className="aspect-square"
          src={MainLogoImage}
          width={128}
          height={128}
          alt="아끼미의 강의는 수강생이 많아질수록 할인을 받을 수 있어요. 함께 들을 친구들에게 공유하고 더 합리적인 가격으로 수강하세요!"
        />

        <div className="flex flex-col gap-y-12">
          <h1 className="heading6-b w-full text-center text-geekblue-6">
            모이면 싸진다!
          </h1>

          <p className="body2-r text-geekblue-9 text-center">
            아끼미의 강의는 수강생이 많아질수록 할인을 받을 수 있어요. 함께 들을
            친구들에게 공유하고 더 합리적인 가격으로 수강하세요!
          </p>
        </div>
      </div>
    </div>
  );
}
