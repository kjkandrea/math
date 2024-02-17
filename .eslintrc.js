module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
};
