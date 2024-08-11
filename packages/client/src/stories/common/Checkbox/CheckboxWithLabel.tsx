import { cn } from "@/libs/tailwindCSS/style";
import CheckIcon from "@/stories/assets/icons/svg/check.svg";
import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  PropsWithChildren,
} from "react";

export type CheckboxStatus = "init" | "error" | "success";

export interface CheckboxWithLabelProps
  extends InputHTMLAttributes<HTMLInputElement>,
    PropsWithChildren {
  status: CheckboxStatus;
}

const STATUS_MAP: {
  [key in CheckboxStatus]: {
    color: string;
  };
} = {
  init: {
    color: "#D0D5DD",
  },
  error: {
    color: "#F5222D",
  },
  success: {
    color: "#52C41A",
  },
};

export const CheckboxWithLabel = forwardRef(function CheckboxWithLabel(
  { className, status, children, ...props }: CheckboxWithLabelProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <label>
      <input ref={ref} type="checkbox" className="hidden" {...props} />

      <div className="flex justify-start items-center gap-x-12">
        <CheckIcon color={STATUS_MAP[status].color} />

        <p
          className={cn("subhead1-m", {
            "text-blue-gray-600": status === "init",
            "text-red-6": status === "error",
            "text-green-6": status === "success",
          })}
        >
          {children}
        </p>
      </div>
    </label>
  );
});
