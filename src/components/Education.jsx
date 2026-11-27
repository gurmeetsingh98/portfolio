import { education } from "../data/portfolioData.js";

const Education = () => (
  <section id="education" className="bg-white py-20 dark:bg-slate-900/60">
    <div className="mx-auto max-w-7xl space-y-10 px-4 lg:px-6">
      <div>
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Education</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Academic background in computer science and applications.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {education.map((edu) => (
          <article
            key={edu.degree}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="grid gap-2">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{edu.degree}</h4>
                <span className="text-sm text-slate-500 dark:text-slate-400">{edu.period}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <p className="font-semibold dark:text-gradient">{edu.institution}</p>
                <span className="text-slate-500 dark:text-slate-400">{edu.detail}</span>
              </div>
            </div>
            {edu.highlights.length > 0 && (
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-2">
                  Highlights
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                  {edu.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
