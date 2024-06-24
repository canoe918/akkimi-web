"use client";

import { createContext, PropsWithChildren, RefObject, useRef } from "react";

export function MobileWebProvider({ children }: PropsWithChildren) {
  return (
    <div className="max-w-[44rem] pt-[7rem] min-h-full shadow-lg bg-wht mx-auto">
      {children}
    </div>
  );
}

export const PortalContext = createContext<{
  popupPortal: RefObject<HTMLDivElement> | null;
}>({
  popupPortal: null,
});

export function PortalProvider({ children }: PropsWithChildren) {
  const popupPortalRef = useRef<HTMLDivElement>(null);

  return (
    <PortalContext.Provider
      value={{
        popupPortal: popupPortalRef,
      }}
    >
      {children}

      <div id="popup-portal" ref={popupPortalRef} />
    </PortalContext.Provider>
  );
}
