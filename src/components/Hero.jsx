import { useEffect } from "react";
import Typed from "typed.js";
import { hero } from "../data/portfolioData.js";

const Hero = () => {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: [
        "Software Engineer",
        "Backend Systems Engineer",
        "Scalable API Builder",
        "Distributed Systems Enthusiast",
        "Performance and Reliability Focused",
        "Production-Grade Problem Solver",
        "Data-Driven Engineer",
      ],
      typeSpeed: 90,
      backSpeed: 50,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--hero-bg)" }} />
      <div className="absolute inset-0 -z-10" style={{ background: "var(--hero-glow)" }} />

      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
        <div className="space-y-6">
          <p
            className="text-sm uppercase tracking-[0.2em]"
            style={{ color: "var(--hero-kicker)" }}
          >
            {hero.title}
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-[color:var(--hero-text)]">
            {hero.name} <span className="text-gradient"></span>
          </h1>
          <p className="text-lg" style={{ color: "var(--hero-subtitle)" }}>
            {hero.subtitle}
          </p>
          <div className="text-lg text-[color:var(--hero-text)]">
            And I'm a <span className="typing text-gradient font-semibold"></span>
          </div>
          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white/80 p-4 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-200/70">Impact</p>
              <p className="mt-2 text-sm text-[color:var(--hero-text)] dark:text-slate-100">
                Delivered measurable performance improvements and reliability gains in
                production systems through backend optimization and data pipeline work.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white/80 p-4 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-200/70">Focus</p>
              <p className="mt-2 text-sm text-[color:var(--hero-text)] dark:text-slate-100">
                Backend engineering, scalable APIs, and resilient systems with strong
                observability and automation.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brandDark"
            >
              Hire me
            </a>
            <a
              href={hero.resumeUrl}
              target="_blank"
              rel="noreferrer"
              download="Gurmeet_Singh_Resume_.pdf"
              className="rounded-full bg-brand border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
