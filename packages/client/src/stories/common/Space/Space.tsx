import { cn } from "@/libs/tailwindCSS/style";

interface SpaceProps {
  className?: string;
}

export default function Space({ className }: SpaceProps) {
  return <div className={cn("w-full h-20", className)} />;
}
