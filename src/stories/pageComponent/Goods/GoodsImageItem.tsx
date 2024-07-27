import { cn } from "@/libs/tailwindCSS/style";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface GoodsImageItemProps {
  href: string;
  wrapperClassName?: string;
  image: {
    className?: string;
    src: StaticImageData;
    alt: string;
  };
  title: string;
  description: string;
  children?: JSX.Element;
}

export function GoodsImageItem({
  href,
  wrapperClassName,
  title,
  image,
  description,
  children,
}: GoodsImageItemProps) {
  return (
    <Link href={href}>
      <div
        className={cn(
          "rounded inline-block bg-gray-300 min-w-[24rem] w-[24rem] rounded-tr rounded-tl overflow-hidden",
          wrapperClassName,
        )}
      >
        <Image
          className={cn(
            "bg-blue-gray-600 aspect-[1.6/1] object-cover rounded-tl rounded-tr",
            image.className,
          )}
          src={image.src}
          alt={image.alt}
        />

        <div className="border text-blue-gray-700 rounded-bl rounded-br p-24 bg-blue-gray-50">
          <h3 className="subhead1-m">{title}</h3>
          <p className="subhead2-b text-blue-gray-900">{description}</p>

          {children}
        </div>
      </div>
    </Link>
  );
}
