"use client";

import { VALIDATION_MESSAGE } from "@/libs/const/validation.const";
import Button from "@/stories/common/Button/Button";
import FormLabel from "@/stories/common/Form/FormLabel";
import { Input } from "@/stories/common/Input/Input";
import { Select } from "@/stories/common/Select/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const profileEditSchema = z.object({
  nickname: z.string().min(1, VALIDATION_MESSAGE["필수 필드입니다."]),
  name: z.string().min(1, VALIDATION_MESSAGE["필수 필드입니다."]),
  age: z.string().min(1, VALIDATION_MESSAGE["필수 필드입니다."]),
  gender: z.union([z.literal("남성"), z.literal("여성")]),
});
type ProfileEditSchemaType = z.infer<typeof profileEditSchema>;

export default function ProfileEdit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileEditSchemaType>({
    resolver: zodResolver(profileEditSchema),
  });

  const onSubmit = (value: ProfileEditSchemaType) => {
    // TODO:
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="px-24 flex flex-col pt-24 pb-100 gap-y-24">
        <div className="flex flex-col gap-y-24">
          <Input label="이메일" placeholder="lazydoer@naver.com" disabled />

          <FormLabel errorMessage={errors.nickname?.message}>
            <Input
              error={Boolean(errors.nickname?.message)}
              label="닉네임"
              placeholder="예민한 기린"
              {...register("nickname")}
            />
          </FormLabel>

          <FormLabel errorMessage={errors.nickname?.message}>
            <Input
              error={Boolean(errors.name?.message)}
              label="이름"
              placeholder="김이름"
              {...register("name")}
            />
          </FormLabel>

          <FormLabel errorMessage={errors.age?.message}>
            <Select
              error={Boolean(errors.age?.message)}
              label="나이"
              placeholder="나이를 선택하세요"
              value=""
              options={Array.from(
                { length: 90 },
                (_, index) => `만 ${index + 10}세`,
              )}
              {...register("age")}
            />
          </FormLabel>

          <FormLabel errorMessage={errors.gender?.message}>
            <Select
              error={Boolean(errors.gender?.message)}
              label="성별"
              placeholder="성별을 선택하세요"
              value=""
              options={["남성", "여성"]}
              {...register("gender")}
            />
          </FormLabel>

          <Input label="휴대폰번호" placeholder="010-0000-0000" disabled />
        </div>

        <Button theme="primary" size="xl" className="w-full" type="submit">
          저장
        </Button>
      </div>
    </form>
  );
}
