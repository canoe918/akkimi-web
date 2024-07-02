"use client";

import { PortalContext } from "@/app/core/Providers";
import { getCookie } from "cookies-next";
import { useContext } from "react";
import { createPortal } from "react-dom";

export default function EventPopup() {
  const { popupPortal } = useContext(PortalContext);

  const isCloseModal = getCookie("close-modal");

  if (
    !popupPortal?.current ||
    isCloseModal === undefined ||
    Boolean(isCloseModal) === false
  ) {
    return null;
  }

  return createPortal(
    <div className="fixed flex-col bg-green-300 rounded-tl-xl rounded-tr-xl  min-h-[40rem] max-w-[44rem] -translate-x-1/2 bottom-0 left-1/2 flex justify-between w-full p-20">
      <h2>내게 최적의 강의는 어떤걸까?</h2>

      <button>레츠고</button>
    </div>,
    popupPortal.current!,
  );
}
