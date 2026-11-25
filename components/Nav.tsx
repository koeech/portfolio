"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import ThemeToggle from "./ThemeToggle"
export default function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    nav.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  const link = (n: { id: string; label: string }, mobile = false) => (
    <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} aria-current={active === n.id ? "page" : undefined}
      className={`rounded-full px-3 py-1.5 text-sm transition ${mobile ? "block py-3 text-base" : ""} ${active === n.id ? "bg-white text-ink shadow-sm" : "text-ink/65 hover:text-ink"}`}>{n.label}</a>
  );
  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <nav aria-label="Primary" className="glass mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
        <a href="#home" aria-label="Anthony Kipkoech, home" className="grid h-10 w-10 place-items-center rounded-2xl bg-ink text-sm font-bold text-white">AK</a>
        <div className="hidden items-center gap-0.5 lg:flex">{nav.map((n) => link(n))}</div>
        <div className="flex items-center gap-1">
        <ThemeToggle />
        <a href="#contact" className="btn hidden bg-ink text-white lg:inline-flex">Let’s connect <ArrowUpRight size={16} aria-hidden /></a>
        <button className="grid h-10 w-10 place-items-center rounded-full lg:hidden" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
        </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="glass mx-auto mt-2 max-w-6xl p-3 lg:hidden">
            {nav.map((n) => link(n, true))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn mt-2 w-full justify-center bg-ink text-white">Let’s connect</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
