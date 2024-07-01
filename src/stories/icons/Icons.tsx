import classNames from "classnames";
import { useRef } from "react";

import {
  AppleLogo,
  Arrow,
  ArrowCircleRight,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Coin,
  Comment,
  EditPlus,
  EyesClose,
  EyesOpen,
  GooglePlayLogo,
  Instagram,
  Like,
  LikeCreator,
  LikeFill,
  Location,
  Menu,
  MenuClose,
  More,
  NFTCreationWorkImage,
  NFTMembershipImage,
  NFTOfflineTicketLeftImage,
  NFTOfflineTicketRightImage,
  NavHome,
  NavMarket,
  NavMarketW,
  People,
  Point,
  Question,
  Scroll,
  Search,
  SelectArrowDown,
  SelfAuthCompleted,
  SelfAuthLoading,
  ShareBlack,
  ShareWhite,
  Ticket,
  Union,
  Youtube,
} from "@/stories/icons";

export default function Icons() {
  const width = "5.2rem";
  const height = "5.2rem";

  return (
    <div>
      <p className="mb-[2rem] text-center text-caption-3b text-purple_500">
        아이콘을 클릭하면 컴포넌트 명이 클립보드에 복사됩니다.
      </p>

      <div className="grid grid-cols-6 gap-4 border border-gray-light">
        <IconWrapper name="AppleLogo">
          <AppleLogo width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="Arrow">
          <Arrow width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="Coin">
          <Coin width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="GooglePlayLogo">
          <GooglePlayLogo width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="Instagram">
          <Instagram width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="MenuClose">
          <MenuClose width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="NFTCreationWorkImage">
          <NFTCreationWorkImage width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="NFTMembershipImage">
          <NFTMembershipImage width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="NFTOfflineTicketLeftImage">
          <NFTOfflineTicketLeftImage width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="NFTOfflineTicketRightImage">
          <NFTOfflineTicketRightImage width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="Point">
          <Point width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="Scroll">
          <Scroll width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="Youtube">
          <Youtube width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="ArrowDown">
          <ArrowDown width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="SelectArrowDown">
          <SelectArrowDown width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="Menu">
          <Menu width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="EditPlus">
          <EditPlus width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="Comment">
          <Comment width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="Like">
          <Like width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="LikeCreator">
          <LikeCreator width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="LikeFill">
          <LikeFill width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="ArrowRight">
          <ArrowRight width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="EyesClose">
          <EyesClose width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="EyesOpen">
          <EyesOpen width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="More">
          <More width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="People">
          <People width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="Question">
          <Question width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="SelfAuthCompleted">
          <SelfAuthCompleted width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="SelfAuthLoading">
          <SelfAuthLoading width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="ShareBlack">
          <ShareBlack width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="ShareWhite">
          <ShareWhite width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="Ticket">
          <Ticket width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="Union">
          <Union width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="Search">
          <Search width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="ArrowLeft">
          <ArrowLeft width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="Calendar">
          <Calendar width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="Clock">
          <Clock width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="Location">
          <Location width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="NavMarket">
          <NavMarket width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="NavSearch">
          <NavSearch width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="NavHome">
          <NavHome width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="ArrowCircleRight">
          <ArrowCircleRight width={width} height={height} />
        </IconWrapper>

        <IconWrapper name="NavMarketW">
          <NavMarketW width={width} height={height} />
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
          "border-gray-dark flex min-h-[16rem] cursor-pointer flex-col items-center justify-center border bg-gray_300 hover:bg-blue_200",
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

        <p className="border-t-gray-dark text-purple min-h-[5rem] w-full whitespace-pre-line break-words border-t bg-white p-[0.4rem] text-center text-caption-3b">
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
