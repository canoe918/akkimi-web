"use client";

import { MyMenuBlock } from "./MyMenuBlock";

type HistoryMenu = {
  key: string;
  title: string;
  content?: string;
};

const MY_SETTINGS_MENUS: HistoryMenu[] = [
  {
    key: "1",
    title: "고객센터",
    content: "02-0000-0000",
  },
  {
    key: "2",
    title: "앱 정보",
    content: "V 1.0.1",
  },
  {
    key: "3",
    title: "로그아웃",
  },
];

export default function MySettings() {
  return (
    <div className="px-24">
      <div className="flex flex-col gap-y-8">
        {MY_SETTINGS_MENUS.map(({ key, title, content }) => {
          return <MyMenuBlock key={key} title={title} content={content} />;
        })}
      </div>
    </div>
  );
}
