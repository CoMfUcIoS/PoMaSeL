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
  rules: {
    "import/no-unresolved": "off",
    "import/extensions": "off",
    // note you must disable the base rule as it can report incorrect errors
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "arrow-parens": ["error", "as-needed"],
    "import/no-cycle": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "import/prefer-default-export": 0,
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always",
        groups: ["module", "/^~//", "/^@//"],
        alphabetize: {
          order: "asc",
          ignoreCase: false,
        },
      },
    ],
    complexity: ["warn", 8],
    "max-params": ["warn", 5],
    "max-statements": ["warn", 15],
    "max-statements-per-line": [
      "error",
      {
        max: 1,
      },
    ],
    "max-nested-callbacks": ["warn", 4],
    "max-depth": [
      "warn",
      {
        max: 3,
      },
    ],
    "max-lines": ["warn", 400],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        trailingComma: "all",
        arrowParens: "avoid",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.js", "**/*.test.ts", "test/**"],
      },
    ],
    "no-unused-expressions": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
};
