"use client";

import Link from "next/link";
import { useState } from "react";

import { useScrollBlock } from "@/hooks/useScrollBlock";
import { cn } from "@/ilbs/tailwindCSS/style";
import KeyboardArrowLeftIcon from "@/stories/assets/icons/svg/keyboard_arrow_left.svg";
import MenuIcon from "@/stories/assets/icons/svg/menu.svg";
import PersonIcon from "@/stories/assets/icons/svg/person.svg";
import Divider from "../Divider/Divider";

type MenuItem = {
  key: string;
  icon?: JSX.Element;
  label: string;
  divide?: boolean;
  children?: { key: string; label: string }[];
};

interface MenuProps {
  items: MenuItem[];
}

interface MenuListLayoutProps extends MenuProps {
  open: boolean;
}

export default function Menu({ items }: MenuProps) {
  const [open, setOpen] = useState(false);

  useScrollBlock({ isBlock: open });

  const handleMenuClose = () => {
    setOpen(false);
  };

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="fixed max-w-[44rem] h-[5.6rem] z-20 -translate-x-1/2 top-0 left-1/2 flex justify-between items-center w-full p-12 backdrop-blur-lg">
        <div className="flex gap-x-16">
          {!open ? (
            <button className="" onClick={handleMenuClick}>
              <MenuIcon />
            </button>
          ) : (
            <button onClick={handleMenuClose}>
              <KeyboardArrowLeftIcon />
            </button>
          )}
          <div className="subhead2-m">아끼미</div>
        </div>

        <Link href="/my">
          <PersonIcon />
        </Link>
      </nav>

      <MenuListLayoutProps items={items} open={open} />
    </>
  );
}

function MenuListLayoutProps({ items, open }: MenuListLayoutProps) {
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
