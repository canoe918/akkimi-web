"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/ilbs/tailwindCSS/style";
import ShareIcon from "@/stories/assets/icons/svg/arrow_outward.svg";
import CertificateImage from "@/stories/assets/images/certificate.png";
import LanguageImage from "@/stories/assets/images/language.png";
import StartupImage from "@/stories/assets/images/startup.png";

const categoryListData = [
  {
    id: 1,
    title: "어학",
    backgroundColor: "#EBE4FF",
    imgSrc: LanguageImage,
    url: "/category/language",
  },
  {
    id: 2,
    title: "자격증",
    backgroundColor: "#FFE4F1",
    imgSrc: CertificateImage,
    url: "/category/certificate",
  },
  {
    id: 3,
    title: "창업",
    backgroundColor: "#FFF8E4",
    imgSrc: StartupImage,
    url: "/category/start-up",
  },
  {
    id: 4,
    title: "어떤 강의가\n필요하세요?",
    backgroundColor: "#2F54EB",
    content: "투표하러가기",
    url: "/votes",
  },
];

export default function CategoryGrid() {
  const handleShareClick = () => {
    console.log("click share");
  };

  return (
    <div className="px-24 mt-8">
      <section className="grid grid-cols-2 gap-8">
        {categoryListData.map(
          ({ id, title, backgroundColor, url, content, imgSrc }) => {
            return (
              <Link
                href={url}
                key={id}
                className="w-full aspect-[3/2] h-fit px-16 pt-16 rounded bg-gray-200 relative"
                style={{ backgroundColor }}
              >
                <div className="flex justify-between flex-col">
                  <h3
                    className={cn("whitespace-pre subhead2-m", {
                      "text-blue-gray-900": imgSrc !== undefined,
                      "text-white": imgSrc === undefined,
                    })}
                  >
                    {title}
                  </h3>

                  {content !== undefined && (
                    <div className="pt-8 body2-r text-blue-gray-400">
                      {content}
                    </div>
                  )}
                </div>

                {imgSrc !== undefined && (
                  <Image
                    className="absolute max-w-[70%] w-fit h-fit right-0 bottom-0"
                    src={imgSrc}
                    width={200}
                    height={180}
                    alt={title}
                  />
                )}

                <span
                  className="absolute top-16 right-16"
                  onClick={handleShareClick}
                >
                  <ShareIcon />
                </span>
              </Link>
            );
          },
        )}
      </section>
    </div>
  );
}
