import { cn } from "@/libs/tailwindCSS/style";
import { ReactNode } from "react";

export interface LabelProps {
  type: "red" | "light-gray";
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
}

export function Label({ type, className, children, onClick }: LabelProps) {
  return (
    <span
      className={cn(
        "subhead1-b w-fit rounded-full px-16 py-8",
        {
          "bg-red-1 text-red-6": type === "red",
          "bg-blue-gray-50 text-blue-gray-900": type === "light-gray",
        },
        className,
      )}
      onClick={onClick}
    >
      {children}
    </span>
  );
}
