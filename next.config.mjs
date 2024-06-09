/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            /**
             * Replace SVG width and height by a custom value. If value is omitted, it uses 1em in order to make SVG size inherits from text size.
             *
             * 1rem 을 10px로 가져가기 때문에, 기본 아이콘 사이즈인 14px 맞추기 위해 1.4rem 으로 설정
             */
            icon: "1.4rem",
            replaceAttrValues: {
              "#092C1F": "currentColor",
            },
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
