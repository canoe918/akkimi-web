import classNames from "clsx";
import { useRef } from "react";

import AddIcon from "@/stories/assets/icons/svg/add.svg";
import Image from "next/image";

export default function Icons() {
  const width = 52;
  const height = 52;

  return (
    <div>
      <p className="mb-[2rem] text-center text-caption-3b text-purple_500">
        아이콘을 클릭하면 컴포넌트 명이 클립보드에 복사됩니다.
      </p>

      <div className="grid grid-cols-6 gap-4 border border-solid border-geekblue-6">
        <IconWrapper name="AddIcon">
          <Image src={AddIcon} width={width} height={height} alt="" />
        </IconWrapper>

        <IconWrapper name="AddIcon">
          <Image src={AddIcon} width={width} height={height} alt="" />
        </IconWrapper>

        <IconWrapper name="AddIcon">
          <Image src={AddIcon} width={width} height={height} alt="" />
        </IconWrapper>
      </div>
    </div>
  );
}

const IconWrapper = ({
  children,
  name = "",
  className = "",
  iconWrapperClassName = "",
}: {
  children: JSX.Element;
  name: string;
  className?: string;
  iconWrapperClassName?: string;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleIconCardClick = () => {
    if (buttonRef.current) {
      // const clipboard = new ClipboardJS(buttonRef.current);
      // buttonRef.current.click();
      // clipboard.on("success", (event) => {
      //   event.clearSelection();
      //   clipboard.destroy();
      // });
      // clipboard.on("error", (event) => {
      //   alert(`Action: ${event.action}, Trigger : ${event.trigger}`);
      //   clipboard.destroy();
      // });
    }
  };

  return (
    <>
      <div
        className={classNames(
          "border-gray-300 flex min-h-[16rem] cursor-pointer flex-col items-center justify-center border bg-gray_300 hover:bg-blue-100",
          className,
        )}
        role="button"
        onClick={handleIconCardClick}
      >
        <div
          className={classNames(
            "flex h-full w-full items-center justify-center p-[1rem]",
            iconWrapperClassName,
          )}
        >
          {children}
        </div>

        <p className="border-t-gray-500 text-purple min-h-[5rem] w-full whitespace-pre-line break-words border-t bg-white p-[0.4rem] text-center text-caption-3b">
          {`<${name} />`}
        </p>
      </div>

      <button
        id={`button-${name}`}
        ref={buttonRef}
        className="hidden"
        data-clipboard-text={`<${name} />`}
      />
    </>
  );
};
