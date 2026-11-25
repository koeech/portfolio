import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#14131f", violet: "#5b4bd6", sky: "#0e86b4", mist: "#f4f4fb" },
    fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], serif: ["var(--font-serif)", "Georgia", "serif"] },
  } },
  plugins: [],
} satisfies Config;
