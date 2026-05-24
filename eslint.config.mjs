import ts from "typescript-eslint";

export default [
  {
    ignores: [".next/**", "node_modules/**"],
  },
  ...ts.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
];
