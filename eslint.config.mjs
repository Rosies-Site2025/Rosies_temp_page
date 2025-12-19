import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    rules: {
      // Content-heavy marketing site — allow natural text
      'react/no-unescaped-entities': 'off',

      // UI project — allow `any` where needed
      '@typescript-eslint/no-explicit-any': 'off',

      // Warnings only, not blockers
      '@typescript-eslint/no-unused-vars': 'warn',
      'react-hooks/exhaustive-deps': 'warn',

      // Allow <img> for now (no build impact)
      '@next/next/no-img-element': 'off',
    },
  },

  // Explicit ignores
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'node_modules/**',
    'next-env.d.ts',
  ]),
]);
