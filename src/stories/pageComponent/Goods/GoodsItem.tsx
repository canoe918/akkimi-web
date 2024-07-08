import { cn } from "@/ilbs/tailwindCSS/style";
import Image, { StaticImageData } from "next/image";

export interface GoodsItemProps {
  image: {
    src: string | StaticImageData;
    alt: string;
  };
  title: string;
  description: string;
  discount?: JSX.Element;
  children?: JSX.Element;
}

export interface GoodsItemDescriptionProps {
  title: string;
  description: string;
}

export function GoodsItem({ image, discount, children }: GoodsItemProps) {
  return (
    <div className="relative overflow-hidden w-full flex">
      {discount}

      <Image
        src={image.src}
        width={0}
        height={0}
        className="rounded max-w-[12rem] w-full aspect-square bg-blue-gray-200"
        alt={image.alt}
      />

      {children}
    </div>
  );
}

GoodsItem.DiscountBadge = function GoodsItemDiscountBadge({
  amount,
  color,
}: {
  amount: number;
  color: "red";
}) {
  return (
    <div
      className={cn(
        "absolute caption-b top-0 left-10 px-2 pb-8 pt-18 rounded-br rounded-bl",
        {
          "bg-red-6 text-white": color === "red",
        },
      )}
    >
      <span>{`${amount}%`}</span>
    </div>
  );
};

GoodsItem.Description = function GoodsItemDescription({
  title,
  description,
}: GoodsItemDescriptionProps) {
  return (
    <div className="py-8 w-full px-24 flex flex-col justify-between bg-white">
      <div className="flex flex-col">
        <h3 className="subhead1-m">{title}</h3>
        <p className="subhead2-m text-blue-gray-900">{description}</p>
      </div>

      <div className="mt-8">N명 모임</div>
    </div>
  );
};