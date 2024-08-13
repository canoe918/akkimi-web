import { BASIC_MENU_ITEMS } from "@/libs/const/menu.const";
import SurveyMainImage from "@/stories/assets/images/survey-main.png";
import Menu from "@/stories/common/Menu/Menu";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col w-full h-full">
      <Menu
        theme="white"
        existHeight={false}
        navClassName="backdrop-blur-none"
        title={{ text: "성장유형 테스트", center: true }}
        items={BASIC_MENU_ITEMS}
      />

      <div
        className="w-full h-full fixed max-w-[44rem] top-0 left-1/2 -translate-x-1/2 right-0 bottom-0"
        style={{
          background: "linear-gradient(180deg, #1D39C4 0%, #4665FF 100%)",
        }}
      />

      <Link href="/survey/growth-type">
        <Image
          className="w-full h-full fixed max-w-[44rem] top-0 left-1/2 -translate-x-1/2 right-0 bottom-0 object-cover"
          src={SurveyMainImage}
          width={0}
          height={0}
          alt="발전유형 테스트"
        />
      </Link>
    </main>
  );
}
