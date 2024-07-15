import { cn } from "@/ilbs/tailwindCSS/style";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme:
    | "primary"
    | "tertiary"
    | "destructive"
    | "tertiary-white"
    | "tertiary-tonal"
    | "secondary";
  size: "xl" | "md";
  loading?: boolean;
  icon?: JSX.Element;
}

export default function Button({
  className,
  theme,
  size,
  loading,
  disabled,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "transition-all w-full rounded-full bg-blue-gray-100 h-[1px]",
        {
          "w-[10.5rem] h-52 subhead2-b": size === "xl",
          "w-100 h-38 subhead1-b": size === "md",

          "bg-geekblue-6 text-white hover:bg-geekblue-8 active:bg-geekblue-9 focus:bg-geekblue-6":
            theme === "primary",
          "bg-geekblue-2": theme === "primary" && loading,

          "bg-white text-geekblue-6 hover:bg-geekblue-2 active:bg-geekblue-3 focus:bg-white":
            theme === "tertiary-white",
          "bg-white": theme === "tertiary-white" && loading,

          "bg-blue-gray-50 text-blue-gray-600 hover:bg-blue-gray-100 active:bg-blue-gray-200 focus:bg-blue-gray-50":
            theme === "tertiary-tonal",
          "bg-blue-gray-50": theme === "tertiary-tonal" && loading,

          "bg-blue-gray-200": disabled,
        },
        className,
      )}
      {...props}
    >
      {props.children}

      {icon}
    </button>
  );
}
