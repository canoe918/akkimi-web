module.exports = {
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "all",
  singleQuote: false,
  semi: true,
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@/apis/(.*)$",
    "^@/app/(.*)$",
    "^@/appComponents/(.*)$",
    "^@/hooks/(.*)$",
    "^@/stories/(.*)$",
    "^@/types/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
