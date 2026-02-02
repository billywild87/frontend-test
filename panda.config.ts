import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          body: { value: "var(--font-source-sans), sans-serif" },
          editorial: { value: "var(--font-merriweather), serif" },
        },
        colors: {
          brand: {
            primary: { value: "#B01104" },
            secondary: { value: "#FAEC71" },
          },
          surface: {
            muted: { value: "#F4F4F4" },
            placeholder: { value: "#CECECE" },
          },
        },
      },
      semanticTokens: {
        colors: {
          cta: {
            primary: { value: "{colors.brand.primary}" },
            secondary: { value: "{colors.brand.secondary}" },
          },
        },
      },
    },
  },
  outdir: "styled-system",
});
