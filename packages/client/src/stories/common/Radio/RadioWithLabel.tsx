import { cn } from "@/libs/tailwindCSS/style";
import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  PropsWithChildren,
} from "react";

export interface RadioWithLabelProps
  extends InputHTMLAttributes<HTMLInputElement>,
    PropsWithChildren {}

export const RadioWithLabel = forwardRef(function RadioWithLabel(
  { className, children, checked, ...props }: RadioWithLabelProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <label>
      <input ref={ref} type="checkbox" className="hidden" {...props} />

      <div className="flex justify-start items-center gap-x-12">
        <div
          className={cn(
            "w-24 h-24 relative cursor-pointer transition-all rounded-full border border-solid",
            {
              "border-blue-gray-300": !Boolean(checked),
              "border-geekblue-6": Boolean(checked),
            },
          )}
        >
          {Boolean(checked) && (
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-16 h-16 rounded-full bg-geekblue-6" />
          )}
        </div>

        <p className="w-full subhead1-b text-blue-gray-600">{children}</p>
      </div>
    </label>
  );
});
