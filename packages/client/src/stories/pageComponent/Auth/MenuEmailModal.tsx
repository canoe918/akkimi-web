"use client";

import { PLACEHOLDER, VALIDATION_MESSAGE } from "@/libs/const/validation.const";
import Button from "@/stories/common/Button/Button";
import Divider from "@/stories/common/Divider/Divider";
import FormLabel from "@/stories/common/Form/FormLabel";
import { Input } from "@/stories/common/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Modal from "../../common/Modal/Modal";
import ModalBody from "../../common/Modal/ModalBody";

interface MenuEmailModalProps {
  open: boolean;
  onClose?: () => void;
  onSignUpAuthClick?: () => void;
  onResetPasswordClick?: () => void;
}

const signInEmailSchema = z.object({
  email: z
    .string()
    .min(1, VALIDATION_MESSAGE["필수 필드입니다."])
    .email(VALIDATION_MESSAGE["이메일 형식이 잘못되었습니다."]),
  password: z.string().min(1, VALIDATION_MESSAGE["필수 필드입니다."]),
});
type SignInEmailSchemaType = z.infer<typeof signInEmailSchema>;

export default function MenuEmailModal({
  open,
  onClose,
  onSignUpAuthClick,
  onResetPasswordClick,
}: MenuEmailModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInEmailSchemaType>({
    resolver: zodResolver(signInEmailSchema),
  });

  const onSubmit = (value: SignInEmailSchemaType) => {
    console.log("value");
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalBody>
        <h3 className="subhead3-b text-geekblue-6">성장지향 커뮤니티</h3>
        <h2 className="heading5-b">아끼미에 로그인하기</h2>

        <form
          className="w-full flex flex-col justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full mb-24 mt-60 flex flex-col gap-y-8">
            <FormLabel errorMessage={errors.email?.message}>
              <Input
                error={Boolean(errors.email?.message)}
                placeholder={PLACEHOLDER["이메일을 입력해주세요."]}
                {...register("email")}
              />
            </FormLabel>

            <FormLabel errorMessage={errors.password?.message}>
              <Input
                error={Boolean(errors.password?.message)}
                placeholder={PLACEHOLDER["비밀번호를 입력해주세요."]}
                {...register("password")}
              />
            </FormLabel>

            <Button theme="primary" type="submit" size="xl" className="w-full">
              로그인
            </Button>
          </div>

          <span className="flex gap-x-24 text-blue-gray-900 subhead2-m">
            <span className="cursor-pointer" onClick={onSignUpAuthClick}>
              회원가입
            </span>

            <Divider vertical />

            <span className="cursor-pointer" onClick={onResetPasswordClick}>
              비밀번호 재설정
            </span>
          </span>
        </form>
      </ModalBody>
    </Modal>
  );
}
