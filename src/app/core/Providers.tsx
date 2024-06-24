import { PropsWithChildren } from "react";

export function MobileWebProvider({ children }: PropsWithChildren) {
  return (
    <div className="max-w-[44rem] pt-[7rem] min-h-full pb-80 shadow-lg bg-wht mx-auto">
      {children}
    </div>
  );
}
