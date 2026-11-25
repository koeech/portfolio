import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "rgb(var(--ink) / <alpha-value>)", violet: "rgb(var(--violet) / <alpha-value>)", sky: "rgb(var(--sky) / <alpha-value>)", mist: "rgb(var(--mist) / <alpha-value>)" },
    fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], serif: ["var(--font-serif)", "Georgia", "serif"] },
  } },
  plugins: [],
} satisfies Config;
