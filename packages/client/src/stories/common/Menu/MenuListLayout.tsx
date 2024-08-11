"use client";

import { cn } from "@/libs/tailwindCSS/style";
import Link from "next/link";
import Divider from "../Divider/Divider";
import { MenuProps } from "./Menu";

interface MenuListLayoutProps extends MenuProps {
  open: boolean;
}

export default function MenuListLayoutProps({
  items,
  open,
}: MenuListLayoutProps) {
  return (
    <div
      className={cn(
        "fixed overflow-y-scroll z-[5] duration-500 transition-all max-w-[44rem] -translate-x-1/2 overflow-hidden top-[5.6rem] left-1/2 w-full h-full",
        {
          "visible opacity-100": open,
          "invisible opacity-0": !open,
        },
      )}
    >
      <div
        className={cn(
          "absolute pt-24 overflow-y-scroll duration-300 z-[5] transition-all max-w-[44rem] -translate-x-1/2 top-0 bottom-0 left-1/2 w-full h-full bg-white",
          {
            "-translate-x-1/2 opacity-100 left-1/2": open,
            "-translate-x-full opacity-100 left-0": !open,
          },
        )}
      >
        <ul className="flex flex-col gap-y-24 px-24">
          {items?.map(({ key, icon, label, divide }) => {
            return (
              <li key={key}>
                <Link
                  href={key}
                  className="flex gap-x-8 justify-start items-center"
                >
                  <span className="subhead3-m">{label}</span>
                  {icon}
                </Link>

                {divide && <Divider className="mt-24" />}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
