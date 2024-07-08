"use client";

import ContentCopyIcon from "@/stories/assets/icons/svg/content_copy.svg";
import { MyMenuBlock } from "./MyMenuBlock";

type HistoryMenu = {
  key: string;
  title: string;
  content?: string;
  icon?: JSX.Element;
};

const MY_HISTORY_MENUS: HistoryMenu[] = [
  {
    key: "1",
    title: "초대코드",
    content: "2DF3G4",
    icon: <ContentCopyIcon />,
  },
  {
    key: "2",
    title: "내 강의목록",
  },
  {
    key: "3",
    title: "거래내역",
  },
  {
    key: "4",
    title: "나의 성장유형",
    content: "알잘딱깔센",
  },
];

export default function MyHistory() {
  return (
    <div className="px-24 pt-68 pb-36">
      <div className="flex flex-col gap-y-8">
        {MY_HISTORY_MENUS.map(({ key, title, content, icon }) => {
          return (
            <MyMenuBlock
              key={key}
              title={title}
              content={content}
              icon={icon}
            />
          );
        })}
      </div>
    </div>
  );
}
