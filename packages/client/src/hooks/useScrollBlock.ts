import { useEffect } from "react";

export const useScrollBlock = (options?: { isBlock: boolean }) => {
  const { isBlock } = options ?? { isBlock: true };

  useEffect(() => {
    if (isBlock) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isBlock]);
};
