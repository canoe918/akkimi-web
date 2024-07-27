import { PortalContext } from "@/app/core/Providers";
import { useContext } from "react";
import { createPortal } from "react-dom";

import { useKakaoAuth } from "@/hooks/useKakaoAuth";
import { useScrollBlock } from "@/hooks/useScrollBlock";
import CloseIcon from "@/stories/assets/icons/svg/close.svg";
import Button from "../Button/Button";

interface ModalProps {
  open: boolean;
  onClose?: () => void;
}

export default function Modal({ open, onClose }: ModalProps) {
  const { popupPortal } = useContext(PortalContext);
  const portalRoot = popupPortal?.current;

  const { loginWithKakao } = useKakaoAuth();
  useScrollBlock({ isBlock: open });

  if (!portalRoot || !open) {
    return null;
  }

  const handleEmailLoginClick = () => {
    // TODO:
  };

  const handleFindAuthClick = () => {
    // TODO:
  };

  const handleKakaoLoginClick = async () => {
    loginWithKakao(
      process.env.NEXT_PUBLIC_BASE_URL ?? "https://akkimi-web.vercel.app",
    );
  };

  return createPortal(
    <div className="fixed max-w-[44rem] w-full h-full z-30 top-0 -translate-x-1/2 left-1/2 bg-[rgba(0,0,0,0.45)]">
      <div className="relative w-full h-full">
        <div className="top-1/2 left-0 -translate-y-1/2 relative w-full px-24 py-48 bg-white z-40 rounded-lg">
          <div
            className="absolute right-16 top-16"
            onClick={() => onClose && onClose()}
          >
            <CloseIcon />
          </div>

          <div className="w-full flex flex-col justify-center items-center">
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
              <span onClick={handleEmailLoginClick}>다른 방법으로 로그인</span>
              <span onClick={handleFindAuthClick}>계정찾기</span>
            </span>
          </div>
        </div>
      </div>
    </div>,
    portalRoot,
  );
}
