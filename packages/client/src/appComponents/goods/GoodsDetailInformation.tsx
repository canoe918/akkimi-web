import Button from "@/stories/common/Button/Button";

const INFORMATION_LIST = [
  {
    id: 1,
    title: "강의소개",
    description: `대통령의 선거에 관한 사항은 법률로 정한다. 누구든지 체포 또는 구속의 이유와 변호인의 조력을 받을 권리가 있음을 고지받지 아니하고는 체포 또는 구속을 당하지 아니한다. 체포 또는 구속을 당한 자의 가족등 법률이 정하는 자에게는 그 이유와 일시·장소가 지체없이 통지되어야 한다.

국회는 상호원조 또는 안전보장에 관한 조약, 중요한 국제조직에 관한 조약, 우호통상항해조약, 주권의 제약에 관한 조약, 강화조약, 국가나 국민에게 중대한 재정적 부담을 지우는 조약 또는 입법사항에 관한 조약의 체결·비준에 대한 동의권을 가진다.`,
  },
  {
    id: 2,
    title: "수강신청법",
    description: `대통령의 선거에 관한 사항은 법률로 정한다. 누구든지 체포 또는 구속의 이유와 변호인의 조력을 받을 권리가 있음을 고지받지 아니하고는 체포`,
  },
  {
    id: 3,
    title: "강의기간",
    description: "챕터 10개 · 총 5시간 21분",
  },
  {
    id: 4,
    title: "강사",
    description: "선한부자 오가닉",
  },
  {
    id: 5,
    title: "주최학원",
    description: "메가스터디",
  },
  {
    id: 6,
    title: "수강법",
    description: `매주 월, 수, 금 오전 10:00 현장수업
메가스터디 강남점 8층`,
  },
];

export default function GoodsDetailInformation() {
  return (
    <div className="px-24 mt-36">
      <div className="flex flex-col gap-y-24">
        {INFORMATION_LIST.map(({ id, title, description }) => {
          return (
            <div key={id} className="flex flex-col gap-y-8">
              <h3 className="subhead2-b text-blue-gray-500">{title}</h3>

              <p className="whitespace-pre-line body3-r text-blue-gray-900">
                {description}
              </p>
            </div>
          );
        })}
      </div>

      <Button theme="primary" size="xl" className="w-full mt-36">
        신청하기
      </Button>
    </div>
  );
}
