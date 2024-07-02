"use client";

import { NODE_ENV } from "@/ilbs/env.const";
import { queryClient } from "@/ilbs/reactQuery/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createContext, PropsWithChildren, RefObject, useRef } from "react";
import { ErrorBoundary } from "react-error-boundary";

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary fallback={<div />}>
      <QueryClientProvider client={queryClient}>
        {NODE_ENV === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}

        {children}
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export function MobileWebProvider({ children }: PropsWithChildren) {
  return (
    <div className="max-w-[44rem] pt-[5.6rem] min-h-full shadow-lg bg-wht mx-auto">
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
