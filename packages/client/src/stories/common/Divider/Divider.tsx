import { cn } from "@/libs/tailwindCSS/style";

interface DividerProps {
  className?: string;
}

export default function Divider({ className }: DividerProps) {
  return <div className={cn("w-full bg-blue-gray-100 h-[1px]", className)} />;
}
