import { useEffect } from "react";
import Typed from "typed.js";
import { about } from "../data/portfolioData.js";

const About = () => {
  useEffect(() => {
    const typed = new Typed(".typing-2", {
      strings: [
        "Backend Systems Engineering",
        "Scalable API Design",
        "Performance and Reliability",
        "Data Pipelines and Streaming",
        "Caching and  Observability",
        "Production Automation",
        "Database Optimization",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="about" className="bg-white py-20 dark:bg-slate-900/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div className="flex justify-center lg:justify-start">
          <img
            src={about.imageUrl}
            alt="Gurmeet Singh"
            className="h-[320px] w-[280px] rounded-2xl object-cover shadow-soft sm:h-[360px] sm:w-[320px]"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            I am Gurmeet Singh, unleashing my passion in{" "}
            <span className="typing-2 text-gradient font-semibold"></span>
          </p>
          {about.summary.map((line) => (
            <p key={line} className="text-slate-600 dark:text-slate-300">
              {line}
            </p>
          ))}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Highlights
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
              {about.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <a
            href="/GurmeetSingh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brandDark"
          >
            <i className="fa-solid fa-file-lines"></i>
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
