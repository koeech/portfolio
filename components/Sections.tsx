"use client";
import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Phone, Send, Quote, BookOpen, CircleDashed } from "lucide-react";
import { Reveal, Section, IconBox } from "./ui";
import { me, metrics, skills, tools, projects, journey, certs, process, quotes, posts } from "@/lib/content";

export function About() {
  return (
    <Section id="about" eyebrow="About me" title="I study how systems fail, so I can help them hold.">
      <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <div className="glass grid aspect-[4/3] place-items-center bg-gradient-to-br from-violet/20 to-sky/20 lg:aspect-square" role="img" aria-label="Portrait placeholder showing the initials AK">
            <span className="font-serif text-8xl text-violet">AK</span>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="glass p-7 sm:p-9">
          <p className="text-lg text-ink/80">I’m a Computer Security & Forensics student who enjoys analysing problems, understanding digital evidence and building secure solutions. My coursework and home labs have taught me that good security starts with careful observation, and good investigations start with disciplined habits.</p>
          <h3 className="mt-6 font-semibold">What drives me</h3>
          <p className="mt-2 text-ink/75">Trust. People rely on systems they cannot see, and I want to be someone who makes that trust deserved, whether by hardening a setup, tracing an incident, or explaining a risk in plain words.</p>
          <dl className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {metrics.map(([v, l]) => (<div key={l} className="rounded-2xl bg-white/60 p-4"><dt className="sr-only">{l}</dt><dd className="text-2xl font-semibold">{v}</dd><dd className="text-xs text-ink/65">{l}</dd></div>))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="Core strengths" title="A foundation built on practice, not just theory.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s, i) => (
          <Reveal key={s.t} delay={(i % 4) * 0.06}>
            <article className="glass lift h-full p-6">
              <IconBox><s.i size={20} /></IconBox>
              <h3 className="mt-4 font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.d}</p>
              <ul className="mt-4 flex flex-wrap gap-2">{s.c.map((c) => <li key={c} className="chip">{c}</li>)}</ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Tools() {
  return (
    <Section id="tools" eyebrow="Toolkit" title="The tools I use, and what I use them for.">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {tools.map((t, i) => (
          <Reveal key={t.n} delay={(i % 6) * 0.04}>
            <div className="glass lift flex h-full flex-col items-center p-5 text-center">
              <IconBox><t.i size={20} /></IconBox>
              <p className="mt-3 text-sm font-semibold">{t.n}</p><p className="text-xs text-ink/65">{t.u}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Projects that turn security ideas into working tools." intro="These are demo showcases. Replace them with your own case studies as they are completed.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.t} delay={(i % 3) * 0.07}>
            <article className="glass lift group relative flex h-full flex-col overflow-hidden p-6">
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-violet/30 to-sky/30 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center justify-between"><IconBox><p.i size={20} /></IconBox><span className="chip">{p.y}</span></div>
              <h3 className="relative mt-4 text-lg font-semibold">{p.t}</h3>
              <p className="relative mt-2 text-sm text-ink/70">{p.d}</p>
              <ul className="relative mt-4 flex flex-wrap gap-2">{p.s.map((s) => <li key={s} className="chip">{s}</li>)}</ul>
              <p className="relative mt-4 rounded-2xl bg-white/60 p-3 text-sm"><span className="font-semibold">Outcome: </span>{p.o}</p>
              <div className="relative mt-auto flex gap-4 pt-5 text-sm font-medium text-violet">
                <a href="#contact" className="inline-flex items-center gap-1 hover:underline">Case study <ArrowUpRight size={14} aria-hidden /></a>
                <a href={me.github} className="inline-flex items-center gap-1 hover:underline">GitHub <Github size={14} aria-hidden /></a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Journey() {
  return (
    <Section id="experience" eyebrow="Learning journey" title="From first lines of code to investigating real evidence.">
      <div className="relative grid gap-5 md:grid-cols-2">
        {journey.map(([t, d], i) => (
          <Reveal key={t} delay={(i % 2) * 0.07}>
            <div className="glass lift flex h-full gap-4 p-6">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-sm font-semibold text-white" aria-label={`Step ${i + 1}`}>{i + 1}</span>
              <div><h3 className="font-semibold">{t}</h3><p className="mt-1 text-sm text-ink/70">{d}</p></div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Certs() {
  return (
    <Section id="certifications" eyebrow="Credentials" title="Certifications and milestones, with room to grow." intro="Items marked as targets or open slots are placeholders for future additions.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <Reveal key={c.t} delay={(i % 3) * 0.06}>
            <article className="glass lift h-full p-6">
              <div className="flex items-center justify-between"><h3 className="font-semibold">{c.t}</h3><span className="chip">{c.s}</span></div>
              <ul className="mt-4 space-y-2 text-sm text-ink/75">{c.items.map((it) => <li key={it} className="flex gap-2"><CircleDashed size={16} className="mt-0.5 shrink-0 text-violet" aria-hidden />{it}</li>)}</ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="process" eyebrow="How I work" title="A repeatable way to solve technical problems.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {process.map(([t, d], i) => (
          <Reveal key={t} delay={(i % 3) * 0.06}>
            <div className="glass lift h-full p-6"><span className="text-sm font-semibold text-violet">Step {i + 1}</span><h3 className="mt-1 text-lg font-semibold">{t}</h3><p className="mt-2 text-sm text-ink/70">{d}</p></div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section id="recommendations" eyebrow="Recommendations" title="What people say about working with me." intro="Sample quotes shown as placeholders until real recommendations are added.">
      <div tabIndex={0} aria-label="Testimonials, scroll horizontally" className="-mx-5 flex snap-x gap-5 overflow-x-auto px-5 pb-3 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4">
        {quotes.map(([q, r]) => (
          <figure key={r} className="glass lift min-w-[82%] snap-center p-6 sm:min-w-[45%] md:min-w-0">
            <Quote size={20} className="text-violet" aria-hidden />
            <blockquote className="mt-3 text-sm text-ink/80">{q}</blockquote>
            <figcaption className="mt-4 text-sm font-semibold">{r}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

export function Insights() {
  return (
    <Section id="insights" eyebrow="Insights" title="Notes from my studies, shared openly.">
      <div className="grid gap-5 sm:grid-cols-2">
        {posts.map(([c, t, m], i) => (
          <Reveal key={t} delay={(i % 2) * 0.07}>
            <article className="glass lift flex h-full items-start gap-4 p-6">
              <IconBox><BookOpen size={20} /></IconBox>
              <div><p className="text-sm font-semibold text-violet">{c}</p><h3 className="mt-1 font-semibold">{t}</h3><p className="mt-2 text-xs text-ink/65">{m} · Coming soon</p></div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get("message")}\n\nFrom: ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${me.email}?subject=${encodeURIComponent(String(f.get("subject")))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  const field = "w-full rounded-2xl border border-white/80 bg-white/70 px-4 py-3 text-sm placeholder:text-ink/45";
  const contacts = [[Mail, me.email, `mailto:${me.email}`], [Github, "GitHub", me.github], [Linkedin, "LinkedIn", me.linkedin], [Phone, me.phone, `tel:${me.phone.replace(/\s/g, "")}`]] as const;
  return (
    <Section id="contact" eyebrow="Contact" title="Have a role, project or question in mind? Let’s talk.">
      <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal className="glass p-7">
          <p className="text-ink/75">I’m open to internships, mentorship and collaboration. I reply within two working days.</p>
          <ul className="mt-6 space-y-3">{contacts.map(([I, l, h]) => <li key={l}><a href={h} className="flex items-center gap-3 text-sm font-medium hover:text-violet"><IconBox><I size={18} /></IconBox>{l}</a></li>)}</ul>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="glass grid gap-4 p-7 sm:grid-cols-2">
            <label className="text-sm font-medium">Name<input required name="name" autoComplete="name" className={`${field} mt-1`} placeholder="Your name" /></label>
            <label className="text-sm font-medium">Email<input required type="email" name="email" autoComplete="email" className={`${field} mt-1`} placeholder="you@example.com" /></label>
            <label className="text-sm font-medium sm:col-span-2">Subject<input required name="subject" className={`${field} mt-1`} placeholder="What is this about?" /></label>
            <label className="text-sm font-medium sm:col-span-2">Message<textarea required name="message" rows={5} className={`${field} mt-1`} placeholder="Tell me a little about your idea or opportunity" /></label>
            <div className="flex items-center gap-4 sm:col-span-2">
              <button className="btn group bg-ink text-white hover:shadow-lg hover:shadow-violet/30">Send message <Send size={16} className="transition group-hover:translate-x-1" aria-hidden /></button>
              <p role="status" className="text-sm text-ink/70">{sent && "Your email app should open with the message ready to send."}</p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="px-5 pb-10 pt-6">
      <div className="glass mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-5 text-sm md:flex-row">
        <p>© {new Date().getFullYear()} Anthony Kipkoech. Building better systems, one lesson at a time.</p>
        <nav aria-label="Footer" className="flex gap-4"><a href="#about" className="hover:text-violet">About</a><a href="#projects" className="hover:text-violet">Projects</a><a href="#contact" className="hover:text-violet">Contact</a></nav>
        <div className="flex gap-3"><a href={me.github} aria-label="GitHub"><Github size={18} /></a><a href={me.linkedin} aria-label="LinkedIn"><Linkedin size={18} /></a><a href={`mailto:${me.email}`} aria-label="Email"><Mail size={18} /></a></div>
      </div>
    </footer>
  );
}
