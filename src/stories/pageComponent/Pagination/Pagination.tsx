"use client";

import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/ilbs/tailwindCSS/style";
import KeyboardArrowLeftIcon from "@/stories/assets/icons/svg/keyboard_arrow_left.svg";
import KeyboardArrowRightIcon from "@/stories/assets/icons/svg/keyboard_arrow_right.svg";

export interface PaginationProps {
  className?: string;
  page: number;
  size: number;
}

export function Pagination({ className, page, size }: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const startPage = Math.floor((page - 1) / size) * size;

  const getNextPage = (inputPage: string | number, amount: 1 | -1) => {
    const page = typeof inputPage === "string" ? Number(inputPage) : inputPage;

    if (amount === 1) {
      return page + amount;
    } else {
      const nextPage = page + amount;

      return nextPage <= 0 ? 1 : nextPage;
    }
  };

  const handleLeftClick = () => {
    router.push(`${pathname}?page=${getNextPage(page, -1)}`);
  };

  const handleRightClick = () => {
    router.push(`${pathname}?page=${getNextPage(page, 1)}`);
  };

  const handlePageClick = (page: number) => {
    router.push(`${pathname}?page=${page}`);
  };

  return (
    <div className={cn("flex justify-center items-center gap-x-8", className)}>
      <button onClick={handleLeftClick}>
        <KeyboardArrowLeftIcon />
      </button>

      {Array.from({ length: size }, (_, index) => {
        const curPage = index + 1 + startPage;

        return (
          <span
            key={index}
            onClick={() => handlePageClick(curPage)}
            className={cn(
              "cursor-pointer bg-white body1-r px-10 py-4 text-blue-gray-900",
              {
                "bg-blue-gray-50 rounded-full": page === curPage,
              },
            )}
          >
            {curPage}
          </span>
        );
      })}

      <button onClick={handleRightClick}>
        <KeyboardArrowRightIcon />
      </button>
    </div>
  );
}
