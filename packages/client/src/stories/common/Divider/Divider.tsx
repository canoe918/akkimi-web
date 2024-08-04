import { cn } from "@/libs/tailwindCSS/style";

interface DividerProps {
  className?: string;
  vertical?: boolean;
}

export default function Divider({ className, vertical }: DividerProps) {
  return (
    <div
      className={cn(
        "bg-blue-gray-100",
        {
          "w-[1px] h-full min-h-[1.8rem]": vertical,
          "w-full h-[1px]": !vertical,
        },
        className,
      )}
    />
  );
}
