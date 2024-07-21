import ArrowOutwardIcon from "@/stories/assets/icons/svg/arrow_outward.svg";

export const BASIC_MENU_ITEMS = [
  {
    key: "/category/language",
    label: "어학",
  },
  {
    key: "/category/start-up",
    label: "창업",
  },
  {
    key: "/category/certificate",
    label: "자격증",
  },
  {
    key: "/category/more",
    label: "더 많은 카테고리",
    icon: <ArrowOutwardIcon />,
    divide: true,
  },
  {
    key: "/category/new",
    label: "새로 올라온 강의",
  },
  {
    key: "/category/discount",
    label: "할인이 시작된 강의",
  },
];
