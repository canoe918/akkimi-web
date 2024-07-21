"use client";

import Image from "next/image";

import EditSquareIcon from "@/stories/assets/icons/svg/edit_square.svg";
import TestImage from "@/stories/assets/images/test-image.png";
import { Label } from "@/stories/common/Label/Label";
import Link from "next/link";

export default function MyProfile() {
  return (
    <div className="flex flex-col gap-y-12 justify-center pt-60 items-center">
      <div className="relative">
        <div className="relative rounded-full aspect-square w-88 overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            width={0}
            height={0}
            src={TestImage}
            alt="내 프로필"
          />
        </div>

        <button className="rounded-full flex justify-center cursor-pointer items-center w-26 aspect-square bg-geekblue-6 bottom-0 right-0 z-[3] absolute">
          <EditSquareIcon width={14} height={14} color="white" />
        </button>
      </div>

      <div className="mt-12 flex gap-x-8 justify-center items-center">
        <h2 className="headline-b">예민한 기린 22325</h2>

        <Link href="/my/edit">
          <EditSquareIcon />
        </Link>
      </div>

      <div>
        <Label type="light-gray">카카오로그인</Label>
      </div>
    </div>
  );
}
