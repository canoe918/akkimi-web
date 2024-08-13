import Image from "next/image";
import Link from "next/link";

import ChallengeImage from "@/stories/assets/images/challenge.png";
import Button from "@/stories/common/Button/Button";

export default function SurveyCard() {
  return (
    <div className="text-blue-gray-900 flex flex-col justify-center items-center rounded-lg p-24 shadow bg-white">
      <Image
        src={ChallengeImage}
        width={90}
        height={95}
        alt="아끼미 성장유형검사"
      />

      <h3 className="mt-20 subhead3-b">내게 최적의 강의는 어떤걸까?</h3>
      <p className="text-blue-gray-700 mt-8 body1-r">
        성장유형 검사하고 내 유형에 맞는 강의 추천받기
      </p>

      <Link href="/survey" className="mt-24 w-full">
        <Button theme="primary" size="xl" className="min-w-full">
          검사하기
        </Button>
      </Link>
    </div>
  );
}
