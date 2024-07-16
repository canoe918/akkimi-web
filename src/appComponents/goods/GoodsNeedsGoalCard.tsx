import Button from "@/stories/common/Button/Button";
import { Label } from "@/stories/common/Label/Label";

export default function GoodsNeedsGoalCard() {
  return (
    <div className="mt-36 px-24">
      <div className="text-blue-gray-900 p-24 bg-blue-gray-50 w-full rounded-lg">
        <div className="flex justify-between headline-b">
          <h3>목표 인원수</h3>

          <p>67%</p>
        </div>

        <div className="mt-8">
          <p className="body2-r text-blue-gray-700">
            아끼미에서는 많은 사람이 수강할수록 높은 단체할인을 받을 수 있어요.
            만약 내가 이 강의에 관심있고 정가보다 저렴한 가격에 수강할 의향이
            있다면 아래의 ‘저도 참여할래요!’ 버튼을 눌러 단체할인 파티에
            참여해주세요.
          </p>

          <p className="mt-8 caption-r text-blue-gray-500">
            파티 참여는 요금이 부과되지 않아요. 그러나{" "}
            <span className="text-red-6">
              파티에 참여했음에도 실제 할인이 시작되었을 때 수강하지 않는 횟수가
              많아지는 경우 불이익이 있을 수 있습니다. 신중히 생각하여
              눌러주세요!
            </span>
          </p>
        </div>

        <div className="mt-24">
          <Label type="red">1명 더 모이면 15%할인</Label>
        </div>

        <div className="flex mt-24 flex-col w-full gap-y-4">
          <Button theme="primary" size="xl" className="w-full">
            저도 파티에 참여할래요!
          </Button>

          <Button theme="primary" size="xl" className="w-full">
            공유하기
          </Button>
        </div>
      </div>
    </div>
  );
}
