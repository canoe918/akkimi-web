import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ProfileStack, ProfileStackProps } from "./ProfileStack";

export interface GoodsImageItemProps extends Partial<ProfileStackProps> {
  href: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  description: string;
}

export function GoodsImageItem({
  href,
  title,
  image,
  description,
  amount,
  profileUrls,
}: GoodsImageItemProps) {
  return (
    <Link href={href}>
      <div className="rounded inline-block bg-gray-300 min-w-[24rem] w-[24rem] rounded-tr rounded-tl overflow-hidden">
        <Image
          src={image.src}
          className="bg-blue-gray-600 aspect-[1.6/1] object-cover rounded-tl rounded-tr"
          alt={image.alt}
        />

        <div className="border text-blue-gray-700 border-solid border-blue-gray-200 rounded-bl rounded-br p-24 bg-white">
          <h3 className="subhead1-m">{title}</h3>
          <p className="subhead2-m text-blue-gray-900">{description}</p>

          <div className="mt-8">
            <ProfileStack profileUrls={profileUrls} amount={amount} />
          </div>
        </div>
      </div>
    </Link>
  );
}
