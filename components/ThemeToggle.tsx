"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.dataset.theme === "dark"), []);
  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    setDark(!dark);
  };
  return (
    <button onClick={toggle} aria-pressed={dark} aria-label={dark ? "Switch to light studio theme" : "Switch to dark lab theme"}
      className="grid h-10 w-10 place-items-center rounded-full transition hover:bg-white/60">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}