"use client";

import { useKakaoAuth } from "@/hooks/useKakaoAuth";
import { NODE_ENV } from "@/libs/const/env.const";
import { queryClient } from "@/libs/reactQuery/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createContext,
  PropsWithChildren,
  RefObject,
  useEffect,
  useRef,
} from "react";
import { ErrorBoundary } from "react-error-boundary";

declare global {
  var Kakao: any;
}

export function AuthProvider({ children }: PropsWithChildren) {
  const { initialize } = useKakaoAuth();

  useEffect(() => {
    initialize();
  }, []);

  return <>{children}</>;
}

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary fallback={<div />}>
      <QueryClientProvider client={queryClient}>
        {NODE_ENV === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}

        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export function MobileWebProvider({ children }: PropsWithChildren) {
  return (
    <div className="bg-white max-w-[44rem] min-h-[100vh] shadow-lg bg-wht mx-auto">
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
