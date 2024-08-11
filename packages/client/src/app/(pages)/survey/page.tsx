import { BASIC_MENU_ITEMS } from "@/libs/const/menu.const";
import SurveyMainImage from "@/stories/assets/images/survey-main.png";
import Menu from "@/stories/common/Menu/Menu";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main
      className="flex flex-col w-full h-full"
      style={{
        background: "linear-gradient(180deg, #1D39C4 0%, #4665FF 100%)",
      }}
    >
      <Menu
        existHeight={false}
        navClassName="backdrop-blur-none"
        title={{ text: "아끼미", center: true }}
        items={BASIC_MENU_ITEMS}
      />

      <Link href="/survey/growth-type">
        <Image
          className="w-full h-full"
          src={SurveyMainImage}
          width={0}
          height={0}
          alt="발전유형 테스트"
        />
      </Link>
    </main>
  );
}
