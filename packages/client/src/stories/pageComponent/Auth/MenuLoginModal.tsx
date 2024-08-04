"use client";

import { useKakaoAuth } from "@/hooks/useKakaoAuth";
import { BASE_URL } from "@/libs/const/env.const";
import Button from "../../common/Button/Button";
import Modal from "../../common/Modal/Modal";
import ModalBody from "../../common/Modal/ModalBody";

interface MenuLoginModalProps {
  open: boolean;
  onClose?: () => void;
  onEmailLoginClick?: () => void;
  onFindAuthClick?: () => void;
}

export default function MenuLoginModal({
  open,
  onClose,
  onEmailLoginClick,
  onFindAuthClick,
}: MenuLoginModalProps) {
  const { loginWithKakao } = useKakaoAuth();

  const handleKakaoLoginClick = async () => {
    loginWithKakao(BASE_URL ?? "https://akkimi-web.vercel.app");
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalBody>
        <h3 className="subhead3-b text-geekblue-6">성장지향 커뮤니티</h3>
        <h2 className="heading5-b">아끼미에 로그인하기</h2>

        <div className="w-full mb-24 mt-60">
          <Button
            theme="custom"
            size="xl"
            className="bg-gold-5 w-full"
            onClick={handleKakaoLoginClick}
          >
            카카오로 시작하기
          </Button>

          <Button
            theme="custom"
            size="xl"
            className="bg-green-6 text-white w-full mt-8"
          >
            네이버로 시작하기
          </Button>
        </div>

        <span className="flex gap-x-24 text-blue-gray-900 subhead2-m">
          <span className="cursor-pointer" onClick={onEmailLoginClick}>
            다른 방법으로 로그인
          </span>
          <span className="cursor-pointer" onClick={onFindAuthClick}>
            계정찾기
          </span>
        </span>
      </ModalBody>
    </Modal>
  );
}
