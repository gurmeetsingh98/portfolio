import { skills } from "../data/portfolioData.js";

const Skills = () => (
  <section id="skills" className="bg-white py-20 dark:bg-slate-900/60">
    <div className="mx-auto max-w-7xl space-y-8 px-4 lg:px-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Skills</h2>
          <p className="text-slate-600 dark:text-slate-300">
            A balanced toolkit across backend, data, and systems.
          </p>
        </div>
        <a
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-gradient dark:hover:text-gradient text-semibold"
          href="https://github.com/gurmeetsingh98/Certificates"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-certificate"></i>
          View Certificates
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
