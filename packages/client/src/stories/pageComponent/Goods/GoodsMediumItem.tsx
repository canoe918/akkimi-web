import { Label } from "@/stories/common/Label/Label";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface GoodsMediumItemProps {
  href: string;
  image: {
    src: string | StaticImageData;
    alt: string;
  };
  title: string;
  description: string;
}

export function GoodsMediumItem({
  href,
  title,
  image,
  description,
}: GoodsMediumItemProps) {
  return (
    <Link href={href}>
      <div className="rounded relative inline-block min-w-[28rem] aspect-[1.2/1] w-[28rem] overflow-hidden">
        <Image
          src={image.src}
          className="bg-blue-gray-600 w-full h-full object-cover rounded"
          alt={image.alt}
        />

        <div className="absolute text-white left-16 right-16 bottom-16">
          <div className="flex flex-col">
            <h3 className="subhead1-m">{title}</h3>
            <p className="subhead2-m">{description}</p>

            <Label className="mt-8 w-fit" type="red">
              3명 남음
            </Label>
          </div>
        </div>
      </div>
    </Link>
  );
}
