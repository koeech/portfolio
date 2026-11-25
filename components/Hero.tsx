"use client";
import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Download, Fingerprint, ShieldCheck } from "lucide-react";
import { Reveal } from "./ui";
import { highlights, me } from "@/lib/content";

function Visual() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0), py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 90, damping: 18 }), sy = useSpring(py, { stiffness: 90, damping: 18 });
  const rotY = useTransform(sx, [-0.5, 0.5], [-10, 10]), rotX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const near = useTransform(sx, [-0.5, 0.5], [-14, 14]), far = useTransform(sx, [-0.5, 0.5], [18, -18]);
  const move = (e: React.PointerEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5); py.set((e.clientY - r.top) / r.height - 0.5);
  };
  return (
    <div ref={ref} onPointerMove={move} onPointerLeave={() => { px.set(0); py.set(0); }} className="relative mx-auto aspect-square w-full max-w-md [perspective:1100px]">
      <motion.div style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }} className="absolute inset-0">
        <motion.div aria-hidden style={{ x: far, z: -50 }} className="absolute -inset-6 rounded-[3.5rem] bg-gradient-to-br from-violet/25 to-sky/25 blur-3xl" />
        <div className="glass absolute inset-0 overflow-hidden !rounded-[3rem]">
          <svg viewBox="0 0 400 400" role="img" aria-label="Abstract shield surrounded by concentric rings, representing security and evidence" className="h-full w-full">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style={{ stopColor: "rgb(var(--violet))" }} /><stop offset="1" style={{ stopColor: "rgb(var(--sky))" }} /></linearGradient>
              <radialGradient id="r"><stop offset="0" style={{ stopColor: "rgb(var(--violet))" }} stopOpacity=".22" /><stop offset="1" style={{ stopColor: "rgb(var(--violet))" }} stopOpacity="0" /></radialGradient>
            </defs>
            <circle cx="200" cy="200" r="190" fill="url(#r)" />
            <g className="spin-slow" fill="none" stroke="url(#g)" strokeWidth="1.5">
              <circle cx="200" cy="200" r="170" strokeDasharray="2 10" /><circle cx="200" cy="200" r="135" strokeDasharray="60 14" opacity=".6" /><circle cx="200" cy="200" r="100" strokeDasharray="4 8" opacity=".8" />
            </g>
            <path d="M200 105l78 30v66c0 44-34 74-78 94-44-20-78-50-78-94v-66z" fill="url(#g)" opacity=".92" />
            <path d="M200 105l78 30v66c0 44-34 74-78 94z" fill="#fff" opacity=".14" />
            <circle cx="200" cy="190" r="16" fill="#fff" /><rect x="194" y="196" width="12" height="38" rx="6" fill="#fff" />
          </svg>
        </div>
        <motion.div aria-hidden style={{ x: near, z: 90, background: "radial-gradient(circle at 30% 25%,#fff,rgb(var(--violet)/.65) 45%,rgb(var(--sky)/.85))" }}
          className="absolute -right-4 top-6 h-20 w-20 rounded-full shadow-[0_24px_40px_-12px_rgba(91,75,214,.55)]" />
        <motion.div style={{ x: near, z: 70 }} className="glass absolute -left-3 top-10 flex items-center gap-2 px-4 py-3 text-sm font-medium"><ShieldCheck size={18} className="text-violet" aria-hidden /> Evidence integrity verified</motion.div>
        <motion.div style={{ x: far, z: 50 }} className="glass absolute -right-2 bottom-12 px-5 py-3"><p className="text-2xl font-semibold">12+</p><p className="text-xs text-ink/65">Projects built</p></motion.div>
        <motion.div style={{ x: near, z: 40 }} className="glass absolute bottom-3 left-8 flex items-center gap-2 px-4 py-2 text-xs font-medium"><Fingerprint size={16} className="text-sky" aria-hidden /> Chain of custody</motion.div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-h" className="scroll-mt-24 pb-10 pt-12 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_.9fr]">
        <Reveal>
          <p className="eyebrow">Hello, I’m</p>
          <h1 id="hero-h" className="mt-3 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">Anthony<br />Kipkoech</h1>
          <p className="mt-4 font-serif text-3xl text-violet sm:text-4xl">{me.title}</p>
          <p className="mt-6 max-w-lg text-lg text-ink/75">I study how systems fail and how evidence survives scrutiny. Then I build practical, secure tools from what I learn.</p>
          <ul className="mt-5 flex flex-wrap gap-2">{["Evidence handling", "Network analysis", "Secure coding"].map((c) => <li key={c} className="chip">{c}</li>)}</ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn bg-ink text-white shadow-lg shadow-violet/25">View projects <ArrowUpRight size={16} aria-hidden /></a>
            <a href="/cv.pdf" download className="btn glass !rounded-full">Download CV <Download size={16} aria-hidden /></a>
          </div>
        </Reveal>
        <Reveal delay={0.15}><Visual /></Reveal>
      </div>
      <div className="mx-auto mt-14 grid max-w-6xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map(([n, t, d], i) => (
          <Reveal key={n} delay={i * 0.07}>
            <div className="glass lift h-full p-5"><span className="text-sm font-semibold text-violet">{n}</span><h2 className="mt-1 font-semibold">{t}</h2><p className="mt-1 text-sm text-ink/70">{d}</p></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}