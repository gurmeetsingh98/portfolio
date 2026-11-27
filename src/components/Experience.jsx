import { experience } from "../data/portfolioData.js";

const Experience = () => (
  <section id="experience" className="bg-slate-50 py-20 dark:bg-slate-950">
    <div className="mx-auto max-w-7xl space-y-10 px-4 lg:px-6">
      <div>
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Experience</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Real-time analytics, backend performance, and reliable systems at scale.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {experience.map((role) => (
          <article
            key={role.role}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="grid gap-2">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{role.role}</h4>
                <span className="text-sm text-slate-500 dark:text-slate-400">{role.period}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <p className="font-semibold dark:text-gradient">
                  {role.company} {role.team ? `· ${role.team}` : ""}
                </p>
                <span className="text-slate-500 dark:text-slate-400">{role.location}</span>
              </div>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
              {role.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {role.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
