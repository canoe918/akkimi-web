import { PortalContext } from "@/app/core/Providers";
import { PropsWithChildren, useContext } from "react";
import { createPortal } from "react-dom";

import { useScrollBlock } from "@/hooks/useScrollBlock";
import CloseIcon from "@/stories/assets/icons/svg/close.svg";

interface ModalProps extends PropsWithChildren {
  open: boolean;
  onClose?: () => void;
}

export default function Modal({ open, children, onClose }: ModalProps) {
  const { popupPortal } = useContext(PortalContext);
  const portalRoot = popupPortal?.current;

  useScrollBlock({ isBlock: open });

  if (!portalRoot || !open) {
    return null;
  }

  return createPortal(
    <div className="fixed max-w-[44rem] w-full h-full z-30 top-0 -translate-x-1/2 left-1/2">
      <div className="relative w-full h-full">
        <div className="top-1/2 left-0 -translate-y-1/2 relative w-full px-24 py-48 bg-white z-40 rounded-lg">
          <div
            className="absolute right-16 top-16"
            onClick={() => onClose && onClose()}
          >
            <CloseIcon />
          </div>

          {children}
        </div>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.45)]"
        onClick={() => onClose && onClose()}
      />
    </div>,
    portalRoot,
  );
}
