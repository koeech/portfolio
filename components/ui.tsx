"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
export function Section({ id, eyebrow, title, intro, children }: { id: string; eyebrow: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-24 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-h`} className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          {intro && <p className="mt-3 max-w-xl text-ink/70">{intro}</p>}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
export function IconBox({ children }: { children: ReactNode }) {
  return <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet/15 to-sky/15 text-violet" aria-hidden>{children}</span>;
}
