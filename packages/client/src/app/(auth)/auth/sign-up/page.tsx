"use client";

import useSignUp from "@/apis/auth/useSignUp";
import useSignUpWithOtp from "@/apis/auth/useSignUpWithOtp";
import {
  PLACEHOLDER,
  TOAST_MESSAGE,
  VALIDATION_MESSAGE,
} from "@/libs/const/validation.const";
import { validateEmail, validatePassword } from "@/libs/validation";
import KeyboardArrowRightIcon from "@/stories/assets/icons/svg/keyboard_arrow_right.svg";
import Button from "@/stories/common/Button/Button";
import {
  CheckboxStatus,
  CheckboxWithLabel,
} from "@/stories/common/Checkbox/CheckboxWithLabel";
import FormLabel from "@/stories/common/Form/FormLabel";
import { Input } from "@/stories/common/Input/Input";
import { RadioWithLabel } from "@/stories/common/Radio/RadioWithLabel";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const signUpEmailSchema = z.object({
  email: z
    .string()
    .min(1, VALIDATION_MESSAGE["필수 필드입니다."])
    .email(VALIDATION_MESSAGE["이메일 형식이 잘못되었습니다."]),
  emailVerifyCode: z.string().min(1, VALIDATION_MESSAGE["필수 필드입니다."]),
  emailVerify: z.boolean({ message: VALIDATION_MESSAGE["필수 필드입니다."] }),
  password: z
    .string()
    .min(8, "")
    .regex(/[A-Z]/, "") // 최소 한 개의 영대문자 포함
    .regex(/[a-z]/, "") // 최소 한 개의 영소문자 포함
    .regex(/[!@#$%^&*(),.?":{}|<>]/, ""), // 최소 한 개의 특수문자 포함
  isUsageAgree: z.boolean(),
  isPrivacyInfoAgree: z.boolean(),
  isSensitiveInfoAgree: z.boolean(),
  isOverAge: z.boolean(),
});
type SignUpEmailSchemaType = z.infer<typeof signUpEmailSchema>;

const RADIO_LIST = [
  {
    key: "isUsageAgree",
    title: "이용 약관 동의",
    href: "https://www.notion.so/350f59f12cb9442bb4b79dfbd114937d",
  },
  {
    key: "isPrivacyInfoAgree",
    title: "개인정보 보호방침 동의",
    href: "https://www.notion.so/206d773bbc2745dd939eab9dd02924fa",
  },
  {
    key: "isSensitiveInfoAgree",
    title: "민감정보수집 및 이용동의",
    href: "https://www.notion.so/fe517b5c664b427a88eeb6dd61469d3c",
  },
  {
    key: "isOverAge",
    title: "만 14세 이상입니다.",
    href: "",
  },
];

export default function Page() {
  const router = useRouter();
  const { mutate: signUpWithEmail } = useSignUp();
  const { mutate: signUpWithOtp } = useSignUpWithOtp();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<SignUpEmailSchemaType>({
    mode: "onChange",
    resolver: zodResolver(signUpEmailSchema),
  });
  const passwordValue = watch("password");

  const [isSendOtpWithEmailLoading, setIsSendOtpWithEmailLoading] =
    useState(false);
  const [passwordLengthStatus, setPasswordLengthStatus] =
    useState<CheckboxStatus>("init");
  const [passwordSchemaStatus, setPasswordSchemaStatus] =
    useState<CheckboxStatus>("init");

  const onSubmit = async ({
    email,
    password,
    emailVerify,
  }: SignUpEmailSchemaType) => {
    checkPasswordValidation(password);
    if (!emailVerify) {
      toast.error(TOAST_MESSAGE["이메일 인증이 필요합니다."]);
      return;
    }

    signUpWithEmail(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          toast.success(TOAST_MESSAGE["회원가입을 하였습니다."]);
          router.push("/auth/sign-up/verify");
        },
        onError: () => {
          toast.error(TOAST_MESSAGE["코드전송에 실패하였습니다."]);
        },
      },
    );
  };

  const handleEmailVerifyClick = () => {
    const email = getValues("email");

    setValue("emailVerify", true);

    if (validateEmail(email)) {
      setIsSendOtpWithEmailLoading(true);

      signUpWithOtp(
        { email, password: "" },
        {
          onSuccess: (response) => {
            if (response?.error?.status === 429) {
              toast.error(TOAST_MESSAGE["잠시 후 다시 시도하세요."]);
            } else {
              toast.success(TOAST_MESSAGE["이메일로 코드를 전송했습니다."]);
            }
          },
          onError: () => {
            toast.error(TOAST_MESSAGE["코드전송에 실패하였습니다."]);
          },
          onSettled: () => {
            setIsSendOtpWithEmailLoading(false);
          },
        },
      );
    } else {
      toast.error(VALIDATION_MESSAGE["이메일 형식이 잘못되었습니다."]);
    }
  };

  const checkPasswordValidation = (value: string) => {
    if (value) {
      const type = validatePassword(value);

      if (type === "LENGTH") {
        setPasswordLengthStatus("error");
      }
      if (type === "SMALL" || type === "UPPER" || type === "SPECIAL") {
        setPasswordSchemaStatus("error");
      }
      if (type === "PASS") {
        setPasswordLengthStatus("success");
        setPasswordSchemaStatus("success");
      }
      if (value.length >= 8) {
        setPasswordLengthStatus("success");
      }
    } else {
      setPasswordLengthStatus("init");
      setPasswordSchemaStatus("init");
    }
  };

  useEffect(() => {
    checkPasswordValidation(passwordValue);
  }, [passwordValue]);

  return (
    <div className="w-full overflow-auto">
      <div className="px-24 pt-[12rem] pb-80 w-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center w-full gap-y-8">
          <h3 className="subhead3-b text-geekblue-6">성장지향 커뮤니티</h3>
          <h2 className="heading5-b text-blue-gray-900">아끼미</h2>
        </div>

        <div className="w-full mt-36">
          <form
            className="flex flex-col w-full gap-y-24"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormLabel label="이메일" errorMessage={errors.email?.message}>
              <div className="flex w-full gap-x-8">
                <Input
                  className="w-full"
                  error={Boolean(errors.email?.message)}
                  placeholder={PLACEHOLDER.이메일}
                  {...register("email")}
                />

                <Button
                  className="min-w-max px-20"
                  type="button"
                  theme="primary"
                  size="xl"
                  loading={isSendOtpWithEmailLoading}
                  onClick={handleEmailVerifyClick}
                >
                  코드전송
                </Button>
              </div>
            </FormLabel>

            <FormLabel
              label="이메일 인증코드"
              errorMessage={errors.emailVerify?.message}
            >
              <div className="flex w-full gap-x-8">
                <Input
                  className="w-full"
                  error={Boolean(errors.emailVerify?.message)}
                  placeholder={PLACEHOLDER["이메일 인증코드"]}
                  {...register("emailVerifyCode")}
                />

                <Button
                  className="min-w-max px-20"
                  type="button"
                  theme="primary"
                  size="xl"
                  onClick={handleEmailVerifyClick}
                >
                  인증
                </Button>
              </div>
            </FormLabel>

            <FormLabel label="비밀번호" errorMessage={errors.password?.message}>
              <Input
                error={Boolean(errors.password?.message)}
                placeholder={PLACEHOLDER.비밀번호}
                type="password"
                {...register("password")}
              />

              <div className="mt-24 flex flex-col gap-y-12">
                <CheckboxWithLabel status={passwordLengthStatus}>
                  8자이상
                </CheckboxWithLabel>
                <CheckboxWithLabel status={passwordSchemaStatus}>
                  영대문자, 영소문자, 특수문자 포함
                </CheckboxWithLabel>
              </div>

              <div className="mt-24 flex flex-col gap-y-12">
                {RADIO_LIST.map(({ key: radioKey, href, title }) => {
                  const key = radioKey as
                    | "isUsageAgree"
                    | "isPrivacyInfoAgree"
                    | "isSensitiveInfoAgree"
                    | "isOverAge";

                  return (
                    <RadioWithLabel
                      key={key}
                      {...register(key)}
                      checked={Boolean(watch(key))}
                      onChange={(event) => {
                        if (event.target.checked) {
                          setValue(key, true);
                        } else {
                          setValue(key, false);
                        }
                      }}
                    >
                      {href.length > 0 ? (
                        <Link
                          className="justify-between items-center w-full flex"
                          href={href}
                          target="_blank"
                        >
                          {title}
                          <KeyboardArrowRightIcon color="#000000" />
                        </Link>
                      ) : (
                        title
                      )}
                    </RadioWithLabel>
                  );
                })}
              </div>
            </FormLabel>

            <Button
              theme="primary"
              size="xl"
              type="submit"
              className="w-full"
              disabled={Object.keys(errors).length > 0}
            >
              가입하기
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
