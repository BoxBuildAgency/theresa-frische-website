import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Netlify CLI build output, created by `netlify deploy --build`. Ignored by
    // git, but ESLint would otherwise lint the compiled bundles inside it and
    // report thousands of problems in generated code.
    ".netlify/**",
  ]),
]);

export default eslintConfig;
