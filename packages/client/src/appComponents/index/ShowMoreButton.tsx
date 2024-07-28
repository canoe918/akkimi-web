import ArrowForwardIcon from "@/stories/assets/icons/svg/arrow_forward.svg";
import Link from "next/link";

interface ShowMoreButtonProps {
  href: string;
}

export default function ShowMoreButton({ href }: ShowMoreButtonProps) {
  return (
    <Link href={href}>
      <span className="flex mt-16 justify-end w-full px-20">
        <button className="w-fit flex gap-x-8 justify-center items-center">
          <span className="subhead2-m text-blue-gray-500">자세히보기</span>

          <ArrowForwardIcon color="#667085" />
        </button>
      </span>
    </Link>
  );
}
