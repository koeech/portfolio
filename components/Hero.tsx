"use client";
import { ArrowUpRight, Download, Fingerprint, ShieldCheck } from "lucide-react";
import { Reveal } from "./ui";
import { highlights, me } from "@/lib/content";
export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-h" className="scroll-mt-24 pb-10 pt-12 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_.9fr]">
        <Reveal>
          <p className="eyebrow">Hello, I’m</p>
          <h1 id="hero-h" className="mt-3 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
            Anthony<br />Kipkoech
          </h1>
          <p className="mt-4 font-serif text-3xl text-violet sm:text-4xl">{me.title}</p>
          <p className="mt-6 max-w-lg text-lg text-ink/75">I secure systems, investigate digital evidence and build practical tools. I like learning how things fail, because that is how better systems get built.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn bg-ink text-white shadow-lg shadow-violet/20">View projects <ArrowUpRight size={16} aria-hidden /></a>
            <a href="/cv.pdf" download className="btn glass !rounded-full">Download CV <Download size={16} aria-hidden /></a>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="relative mx-auto aspect-square w-full max-w-md">
          <div className="glass absolute inset-0 overflow-hidden !rounded-[3rem]">
            <svg viewBox="0 0 400 400" role="img" aria-label="Abstract shield surrounded by concentric rings, representing security and evidence" className="h-full w-full">
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7c6cf0" /><stop offset="1" stopColor="#4cc3ea" /></linearGradient>
                <radialGradient id="r"><stop offset="0" stopColor="#fff" stopOpacity=".9" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></radialGradient>
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
          <div className="glass float absolute -left-3 top-10 flex items-center gap-2 px-4 py-3 text-sm font-medium"><ShieldCheck size={18} className="text-violet" aria-hidden /> Evidence integrity verified</div>
          <div className="glass float absolute -right-2 bottom-12 px-5 py-3 [animation-delay:-3s]"><p className="text-2xl font-semibold">12+</p><p className="text-xs text-ink/65">Projects built</p></div>
          <div className="glass absolute bottom-3 left-8 flex items-center gap-2 px-4 py-2 text-xs font-medium"><Fingerprint size={16} className="text-sky" aria-hidden /> Chain of custody</div>
        </Reveal>
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
