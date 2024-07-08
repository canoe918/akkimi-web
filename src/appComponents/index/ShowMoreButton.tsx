import ArrowForwardIcon from "@/stories/assets/icons/svg/arrow_forward.svg";

interface ShowMoreButtonProps {
  onClick?: () => void;
}

export default function ShowMoreButton({ onClick }: ShowMoreButtonProps) {
  return (
    <span className="flex mt-16 justify-end w-full px-20" onClick={onClick}>
      <button className="w-fit flex gap-x-8 justify-center items-center">
        <span className="subhead2-m text-blue-gray-500">자세히보기</span>

        <ArrowForwardIcon color="#667085" />
      </button>
    </span>
  );
}
