"use client";

import useSignUpWithOtp from "@/apis/auth/useSignUpWithOtp";
import {
  PLACEHOLDER,
  TOAST_MESSAGE,
  VALIDATION_MESSAGE,
} from "@/libs/const/validation.const";
import { validatePhoneNumber } from "@/libs/validation";
import Button from "@/stories/common/Button/Button";
import FormLabel from "@/stories/common/Form/FormLabel";
import { Input } from "@/stories/common/Input/Input";
import { Select } from "@/stories/common/Select/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const signUpVerifySchema = z.object({
  name: z.string().min(1, VALIDATION_MESSAGE["필수 필드입니다."]),
  age: z.string().min(1, VALIDATION_MESSAGE["필수 필드입니다."]),
  gender: z.string().min(1, VALIDATION_MESSAGE["필수 필드입니다."]),
  phoneNumber: z.string().min(1, VALIDATION_MESSAGE["필수 필드입니다."]),
  isVerified: z.boolean(),
});
type SignUpVerifySchemaType = z.infer<typeof signUpVerifySchema>;

const AGE_OPTIONS = Array.from({ length: 80 }, (_, i) => `${i + 20}`);
const GENDER_OPTIONS = ["남성", "여성", "둘 다 아님"];

export default function Page() {
  const router = useRouter();
  const { mutate: signUpWithOtp } = useSignUpWithOtp();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<SignUpVerifySchemaType>({
    mode: "onChange",
    resolver: zodResolver(signUpVerifySchema),
  });

  const [isSendOtpWithPhoneLoading, setIsSendOtpWithPhoneLoading] =
    useState(false);

  const onSubmit = async ({}: SignUpVerifySchemaType) => {
    // TODO: set accessToken
    router.push("/");
  };

  const handleSendSMSVerifyCodeClick = () => {
    const phoneNumber = getValues("phoneNumber");
    setValue("isVerified", true);

    if (validatePhoneNumber(phoneNumber)) {
      setIsSendOtpWithPhoneLoading(true);

      signUpWithOtp(
        { phone: `+82${phoneNumber}`, password: "" },
        {
          onSuccess: (response) => {
            if (response?.error?.status === 429) {
              toast.error(TOAST_MESSAGE["잠시 후 다시 시도하세요."]);
            } else {
              toast.success(
                TOAST_MESSAGE["휴대폰 번호로 인증코드를 전송했습니다."],
              );
            }
          },
          onError: () => {
            toast.error(TOAST_MESSAGE["코드전송에 실패하였습니다."]);
          },
          onSettled: () => {
            setIsSendOtpWithPhoneLoading(false);
          },
        },
      );
    } else {
      toast.error(VALIDATION_MESSAGE["하이픈 없이 휴대폰번호를 입력하세요."]);
    }
  };

  const handleVerifySMSCodeClick = () => {};

  return (
    <div className="overflow-auto p-24 w-full h-full flex flex-col justify-center items-center pt-[12rem] pb-80">
      <div className="w-full mt-36">
        <form
          className="flex flex-col w-full gap-y-36"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-start justify-center w-full gap-y-8">
            <h3 className="heading6-b mb-16">당신에 대해 알려주세요.</h3>

            <FormLabel errorMessage={errors.name?.message}>
              <Input
                className="w-full"
                error={Boolean(errors.name?.message)}
                placeholder={PLACEHOLDER.이름}
                {...register("name")}
              />
            </FormLabel>

            <FormLabel errorMessage={errors.age?.message}>
              <Select
                options={AGE_OPTIONS}
                className="w-full"
                error={Boolean(errors.age?.message)}
                placeholder={PLACEHOLDER.나이}
                {...register("age")}
              />
            </FormLabel>

            <FormLabel errorMessage={errors.gender?.message}>
              <Select
                options={GENDER_OPTIONS}
                className="w-full"
                error={Boolean(errors.gender?.message)}
                placeholder={PLACEHOLDER.성별}
                {...register("gender")}
              />
            </FormLabel>
          </div>

          <div className="flex flex-col items-start justify-center w-full gap-y-8">
            <h3 className="heading6-b mb-16">휴대폰번호를 인증해주세요.</h3>

            <FormLabel errorMessage={errors.phoneNumber?.message}>
              <div className="flex w-full gap-x-8">
                <Input
                  className="w-full"
                  error={Boolean(errors.phoneNumber?.message)}
                  placeholder={PLACEHOLDER["휴대폰 번호"]}
                  {...register("phoneNumber")}
                />

                <Button
                  className="min-w-max px-20"
                  type="button"
                  theme="primary"
                  size="xl"
                  loading={isSendOtpWithPhoneLoading}
                  onClick={handleSendSMSVerifyCodeClick}
                >
                  인증코드 발송
                </Button>
              </div>
            </FormLabel>

            <FormLabel errorMessage={errors.name?.message}>
              <div className="flex w-full gap-x-8">
                <Input
                  className="w-full"
                  // error={Boolean(errors.name?.message)}
                  placeholder={PLACEHOLDER.인증코드}
                />

                <Button
                  className="min-w-max px-20"
                  type="button"
                  theme="primary"
                  size="xl"
                  onClick={handleVerifySMSCodeClick}
                >
                  인증하기
                </Button>
              </div>
            </FormLabel>
          </div>

          <Button
            theme="primary"
            size="xl"
            type="submit"
            className="w-full"
            disabled={Object.keys(errors).length > 0}
          >
            가입완료
          </Button>
        </form>
      </div>
    </div>
  );
}
