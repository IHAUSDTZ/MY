import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigNext from "eslint-config-next";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  eslintConfigNext,
  {
    ignores: ["node_modules/", ".next/", "out/", "public/"],
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  }
);
