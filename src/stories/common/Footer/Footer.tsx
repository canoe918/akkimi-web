import { cn } from "@/ilbs/tailwindCSS/style";
import AppStoreImage from "@/stories/assets/images/app-store.png";
import PlayStoreImage from "@/stories/assets/images/play-store.png";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "caption-r text-blue-gray-500 w-full p-24 mt-60 bg-white",
        className,
      )}
    >
      <div className="flex text-blue-gray-500 justify-between">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-black headline-b">아끼미</h2>
          <h3 className="caption-r">절약으로 인생을 아낀다</h3>
        </div>

        <div className="flex flex-col gap-y-4">
          {/* TODO: app store */}
          <Link href="https://www.naver.com" target="_blank">
            <Image
              width={100}
              height={32}
              src={AppStoreImage}
              alt="아끼미 앱스토어 링크"
            />
          </Link>
          {/* TODO: app store */}
          <Link href="https://www.naver.com" target="_blank">
            <Image
              width={100}
              height={32}
              src={PlayStoreImage}
              alt="아끼미 플레이스토어 링크"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-16 mt-24">
        <span>회사명 : 레이지두어</span>
        <span>대표자 : 이경</span>
        <span>주소 : 서울특별시 강남구 ㅇㅇ로 00-0길</span>
        <span>사업자등록번호 : 271-24-01854</span>
        <span>고객센터 : 1000-0000</span>
        <span>
          운영시간 : 09:00 - 18:00 (점심시간 12:00 - 13:00 / 주말 및 공휴일
          휴무)
        </span>
        <span>이메일 : contact@lazydoer.com</span>
        <span>개인정보관리책임자 : 이경</span>
      </div>

      <p className="mt-24">Copyright ⓒ 아끼미</p>
    </footer>
  );
}
