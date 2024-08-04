"use client";

import { PLACEHOLDER, VALIDATION_MESSAGE } from "@/libs/const/validation.const";
import Button from "@/stories/common/Button/Button";
import FormLabel from "@/stories/common/Form/FormLabel";
import { Input } from "@/stories/common/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signUpEmailSchema = z.object({
  email: z
    .string()
    .min(1, VALIDATION_MESSAGE["필수 필드입니다."])
    .email(VALIDATION_MESSAGE["이메일 형식이 잘못되었습니다."]),
  emailVerify: z.boolean({ message: VALIDATION_MESSAGE["필수 필드입니다."] }),
  password: z.string().min(1, VALIDATION_MESSAGE["필수 필드입니다."]),
});
type SignUpEmailSchemaType = z.infer<typeof signUpEmailSchema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpEmailSchemaType>({
    resolver: zodResolver(signUpEmailSchema),
  });

  const onSubmit = (value: SignUpEmailSchemaType) => {
    console.log("value : ", value);
  };

  const handleEmailVerifyClick = () => {};

  return (
    <div className="p-24 w-full min-h-[100vh] h-full flex flex-col justify-center items-center">
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
            <Input
              error={Boolean(errors.email?.message)}
              placeholder={PLACEHOLDER.이메일}
              {...register("email")}
            />
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
                {...register("emailVerify")}
              />

              <Button
                className="min-w-max"
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
              {...register("password")}
            />
          </FormLabel>

          <Button theme="primary" size="xl" type="submit" className="w-full">
            가입하기
          </Button>
        </form>
      </div>
    </div>
  );
}
