import Image from "next/image";

export interface ProfileStackProps {
  amount?: number;
  profileUrls?: string[];
}

export function ProfileStack({ amount, profileUrls }: ProfileStackProps) {
  const width = `${36 + ((amount ?? 0) - 1) * 18}px`;

  return (
    <div className="flex justify-start items-center h-36 gap-x-8">
      {profileUrls && (
        <div className="relative h-full" style={{ width }}>
          {profileUrls.map((profileUrl, index) => {
            const left = `${index * 18}px`;

            return (
              <Image
                className="absolute top-0 rounded-full border-2 border-solid border-white bg-blue-gray-300 w-36 h-36 object-cover"
                style={{ left }}
                key={index}
                width={36}
                height={36}
                src={profileUrl}
                alt={profileUrl}
              />
            );
          })}
        </div>
      )}

      <span className="subhead1-m text-blue-gray-700">{`${amount ?? 0}명 모임`}</span>
    </div>
  );
}
