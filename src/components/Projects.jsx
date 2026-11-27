import { projects } from "../data/portfolioData.js";

const Projects = () => (
  <section id="projects" className="bg-white py-20 dark:bg-slate-900/60">
    <div className="mx-auto max-w-7xl space-y-8 px-4 lg:px-6">
      <div>
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Projects</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Selected work highlighting backend systems, real-time analytics, and AI.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition-all hover:border-brand/40 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950/70"
          >
            <div className="space-y-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">
                    {project.stack}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand"></span>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.snippets?.map((snippet, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-0.5 text-[10px] font-semibold text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
                  >
                    {snippet}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/50">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand px-3.5 py-1.5 text-xs font-bold text-brand hover:bg-brand hover:text-white transition-colors"
                >
                  <i className="fab fa-github"></i> Source
                </a>
                {project.demoUrl && project.demoUrl !== "#" ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3.5 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                  >
                    <i className="fas fa-external-link-alt"></i> Demo
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
