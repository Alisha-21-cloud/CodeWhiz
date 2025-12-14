import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  {
    rules: {},
  },
  globalIgnores([
    "**/*",
  ]),
]);

export default eslintConfig;
