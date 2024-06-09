import { PropsWithChildren } from "react";

export function MobileWebProvider({ children }: PropsWithChildren) {
    return (
        <div className="max-w-[44rem] min-h-full shadow-lg bg-wht mx-auto">
            {children}
        </div>
    );
}
