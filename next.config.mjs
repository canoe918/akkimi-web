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
             */
            icon: "2.4rem",
            replaceAttrValues: {
              "#101828": "currentColor",
            },
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
