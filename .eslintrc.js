module.exports = {
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: [
    "babel",
    "prettier",
    "json",
    "eslint-plugin-import-helpers",
    "@typescript-eslint",
  ],
  rules: {},
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
};
