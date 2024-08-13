"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { useScrollBlock } from "@/hooks/useScrollBlock";
import { COOKIE_KEY_ACCESS_TOKEN } from "@/libs/const/cookie.const";
import { cn } from "@/libs/tailwindCSS/style";
import ArrowBackIcon from "@/stories/assets/icons/svg/arrow_back.svg";
import KeyboardArrowLeftIcon from "@/stories/assets/icons/svg/keyboard_arrow_left.svg";
import MenuIcon from "@/stories/assets/icons/svg/menu.svg";
import PersonIcon from "@/stories/assets/icons/svg/person.svg";
import MenuEmailModal from "@/stories/pageComponent/Auth/MenuEmailModal";
import { getCookie } from "cookies-next";
import MenuLoginModal from "../../pageComponent/Auth/MenuLoginModal";
import MenuListLayoutProps from "./MenuListLayout";

type MenuItem = {
  key: string;
  icon?: JSX.Element;
  label: string;
  divide?: boolean;
  children?: { key: string; label: string }[];
};

export interface MenuProps {
  navClassName?: string;
  theme?: "white" | "primary";
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

export default function Menu({
  navClassName,
  theme = "primary",
  title,
  items,
  showBackButton,
  showMyButton = true,
  existHeight = true,
}: MenuProps) {
  const { push, back } = useRouter();

  const [open, setOpen] = useState(false);
  const [openSnsAuthModal, setSnsOpenAuthModal] = useState(false);
  const [openEmailAuthModal, setEmailOpenAuthModal] = useState(false);

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
      setSnsOpenAuthModal(true);
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
                    <MenuIcon color={theme === "primary" ? "black" : "white"} />
                  </button>
                ) : (
                  <button onClick={handleMenuClose}>
                    <KeyboardArrowLeftIcon
                      color={theme === "primary" ? "black" : "white"}
                    />
                  </button>
                ))}
              {showBackButton && (
                <button onClick={handleBackClick}>
                  <ArrowBackIcon
                    color={theme === "primary" ? "black" : "white"}
                  />
                </button>
              )}

              {title?.hide !== true && (
                <div
                  className={cn(
                    "subhead2-m",
                    {
                      "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 min-w-max":
                        title?.center,
                    },
                    {
                      "text-white": theme === "white",
                      "text-blue-gray-900": theme === "primary",
                    },
                  )}
                >
                  {title?.text}
                </div>
              )}
            </div>
          </div>

          {showMyButton && (
            <button onClick={() => handleMyIconClick("/my")}>
              <PersonIcon color={theme === "primary" ? "black" : "white"} />
            </button>
          )}
        </nav>

        {items && <MenuListLayoutProps items={items} open={open} />}
        {existHeight && <div className="h-[5.6rem] w-full" />}
      </div>

      <MenuLoginModal
        open={openSnsAuthModal}
        onClose={() => setSnsOpenAuthModal(false)}
        onEmailLoginClick={() => {
          setSnsOpenAuthModal(false);
          setEmailOpenAuthModal(true);
        }}
      />

      <MenuEmailModal
        open={openEmailAuthModal}
        onClose={() => setEmailOpenAuthModal(false)}
        onSignUpAuthClick={() => push("/auth/sign-up")}
        onResetPasswordClick={() => push("/auth/reset-password")}
      />
    </>
  );
}
