"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useScrollBlock } from "@/hooks/useScrollBlock";
import { COOKIE_KEY_ACCESS_TOKEN } from "@/libs/const/cookie.const";
import { cn } from "@/libs/tailwindCSS/style";
import ArrowBackIcon from "@/stories/assets/icons/svg/arrow_back.svg";
import KeyboardArrowLeftIcon from "@/stories/assets/icons/svg/keyboard_arrow_left.svg";
import MenuIcon from "@/stories/assets/icons/svg/menu.svg";
import PersonIcon from "@/stories/assets/icons/svg/person.svg";
import { getCookie } from "cookies-next";
import Divider from "../Divider/Divider";
import Modal from "../Modal/Modal";

type MenuItem = {
  key: string;
  icon?: JSX.Element;
  label: string;
  divide?: boolean;
  children?: { key: string; label: string }[];
};

interface MenuProps {
  navClassName?: string;
  title?: {
    text: string;
    center?: boolean;
    hide?: boolean;
  };
  items?: MenuItem[];
  showBackButton?: boolean;
  showMyButton?: boolean;
  existHeight?: boolean;
}

interface MenuListLayoutProps extends MenuProps {
  open: boolean;
}

export default function Menu({
  navClassName,
  title,
  items,
  showBackButton,
  showMyButton = true,
  existHeight = true,
}: MenuProps) {
  const { push, back } = useRouter();

  const [open, setOpen] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);

  useScrollBlock({ isBlock: open });

  const handleMenuClose = () => {
    setOpen(false);
  };

  const handleMenuClick = () => {
    setOpen(!open);
  };

  const handleBackClick = () => {
    back();
  };

  const handleMyIconClick = (href: string) => {
    const accessToken = getCookie(COOKIE_KEY_ACCESS_TOKEN);
    if (!accessToken) {
      setOpenAuthModal(true);
    } else {
      push(href);
    }
  };

  return (
    <>
      <div>
        <nav
          className={cn(
            "fixed max-w-[44rem] h-[5.6rem] z-20 -translate-x-1/2 top-0 left-1/2 flex justify-between items-center w-full p-12 backdrop-blur-lg",
            navClassName,
          )}
        >
          <div className="">
            <div className="flex gap-x-16">
              {items &&
                (!open ? (
                  <button onClick={handleMenuClick}>
                    <MenuIcon />
                  </button>
                ) : (
                  <button onClick={handleMenuClose}>
                    <KeyboardArrowLeftIcon />
                  </button>
                ))}
              {showBackButton && (
                <button onClick={handleBackClick}>
                  <ArrowBackIcon />
                </button>
              )}

              {title?.hide !== true && (
                <div
                  className={cn("subhead2-m", {
                    "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 min-w-max":
                      title?.center,
                  })}
                >
                  {title?.text}
                </div>
              )}
            </div>
          </div>

          {showMyButton && (
            <button onClick={() => handleMyIconClick("/my")}>
              <PersonIcon />
            </button>
          )}
        </nav>

        {items && <MenuListLayoutProps items={items} open={open} />}
        {existHeight && <div className="h-[5.6rem] w-full" />}
      </div>

      <Modal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />
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
