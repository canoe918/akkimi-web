import Image, { StaticImageData } from "next/image";

export interface GoodsLargeItemProps {
  image: {
    src: string | StaticImageData;
    alt: string;
  };
  title: string;
  description: string;
  status?: JSX.Element;
}

export function GoodsLargeItem({
  title,
  image,
  description,
  status,
}: GoodsLargeItemProps) {
  return (
    <div className="rounded relative inline-block min-w-[28rem] aspect-[1.2/1] overflow-hidden">
      <Image
        src={image.src}
        width={0}
        height={0}
        className="w-full h-full object-cover"
        alt={title}
      />

      <div className="absolute text-white left-16 right-16 bottom-16">
        <div className="flex flex-col">
          <h3 className="subhead1-m">{title}</h3>
          <p className="subhead2-m">{description}</p>
        </div>
      </div>

      {status}
    </div>
  );
}
