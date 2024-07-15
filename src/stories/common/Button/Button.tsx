import { cn } from "@/ilbs/tailwindCSS/style";
import { HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type:
    | "primary"
    | "tertiary"
    | "disabled"
    | "destructive"
    | "tertiary-white"
    | "secondary";
  size: "xl" | "md";
  loading?: boolean;
}

export default function Button({
  className,
  type,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn("w-full rounded-full bg-blue-gray-100 h-[1px]", className, {
        "w-[10.5rem] h-52 subhead2-b": size === "xl",
        "w-100 h-38 subhead1-b": size === "md",
        "bg-geekblue-6 text-white hover:bg-geekblue-8 active:bg-geekblue-9 focus:bg-geekblue-6":
          type === "primary",
      })}
      {...props}
    />
  );
}
