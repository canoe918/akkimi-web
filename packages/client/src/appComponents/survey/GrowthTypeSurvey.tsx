import TestImage from "@/stories/assets/images/test-image.png";
import Button from "@/stories/common/Button/Button";
import Image from "next/image";

export default function GrowthTypeSurvey() {
  return (
    <div className="w-full h-full px-24">
      <div className="flex flex-col items-center justify-center h-full">
        <span className="flex justify-center w-full gap-x-2 subhead2-b text-blue-gray-900">
          <span>1</span>
          <span>/</span>
          <span>10</span>
        </span>

        <Image
          className="object-cover aspect-square mt-36"
          src={TestImage}
          width={240}
          height={240}
          alt="테스트 N"
        />
        <p className="subhead2-b mt-36">
          밤새 유튜브를 보고 오늘 중요한 회의에 참석했다.
        </p>

        <div className="flex flex-col w-full mt-52 gap-y-8">
          <Button theme="primary" size="xl" className="w-full">
            어차피 집중 안되니 걸리지 않게 살짝 졸아본다.
          </Button>

          <Button theme="primary" size="xl" className="w-full">
            중요한 회의 중에 잠이 올 수가 없다. (with 에너지음료)
          </Button>
        </div>
      </div>
    </div>
  );
}
