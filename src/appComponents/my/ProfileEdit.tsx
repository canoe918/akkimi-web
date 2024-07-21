"use client";

import Button from "@/stories/common/Button/Button";
import { Input } from "@/stories/common/Input/Input";
import { Select } from "@/stories/common/Select/Select";

export default function ProfileEdit() {
  const handleSaveButtonClick = () => {
    // TODO:
  };

  return (
    <div className="px-24 flex flex-col pt-24 pb-100 gap-y-24">
      <div className="flex flex-col gap-y-24">
        <Input label="이메일" placeholder="lazydoer@naver.com" disabled />

        <Input label="닉네임" placeholder="예민한 기린" />

        <Input label="이름" placeholder="김이름" />

        <Select
          label="나이"
          placeholder="나이를 선택하세요"
          value=""
          options={Array.from(
            { length: 90 },
            (_, index) => `만 ${index + 10}세`,
          )}
        />

        <Select
          label="성별"
          placeholder="성별을 선택하세요"
          value=""
          options={["남성", "여성"]}
        />

        <Input label="휴대폰번호" placeholder="010-0000-0000" disabled />
      </div>

      <Button
        theme="primary"
        size="xl"
        className="w-full"
        onClick={handleSaveButtonClick}
      >
        저장
      </Button>
    </div>
  );
}
