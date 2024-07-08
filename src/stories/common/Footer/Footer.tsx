import AppStoreImage from "@/stories/assets/images/app-store.png";
import PlayStoreImage from "@/stories/assets/images/play-store.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-24 mt-80 bg-white">
      <div className="flex text-blue-gray-500 justify-between">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-black headline-b">아끼미</h2>
          <h3 className="caption-r">절약으로 인생을 아낀다</h3>

          <p className="caption-r mt-40">Copyright ⓒ 아끼미</p>
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
    </footer>
  );
}
