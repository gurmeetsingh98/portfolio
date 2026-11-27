import { useEffect, useState } from "react";
import Typed from "typed.js";
import { projects } from "../data/portfolioData.js";

const Projects = () => {
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const instances = projects.map((project, index) => {
      if (!project.snippets?.length) {
        return null;
      }
      const selector = `.project-typing-${index}`;
      if (!document.querySelector(selector)) {
        return null;
      }
      return new Typed(selector, {
        strings: project.snippets,
        typeSpeed: 60,
        backSpeed: 30,
        loop: true,
      });
    });

    return () => instances.forEach((instance) => instance?.destroy());
  }, []);

  const toggleDescription = (name) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section id="projects" className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl space-y-8 px-4 lg:px-6">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Projects</h2>
          <p className="text-slate-600 dark:text-slate-300">
            Selected work highlighting problem-solving and system design.
          </p>
        </div>

        <div className="grid auto-rows-fr items-stretch gap-2 md:grid-cols-4">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="mx-auto flex h-full w-full max-w-md flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="relative h-96 w-full bg-slate-100 sm:h-96 dark:bg-slate-800">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-3 p-6">
                <div className="min-h-[64px]">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{project.name}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {project.stack}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {(() => {
                    const isLong = project.description.length > 140;
                    const isExpanded = expanded[project.name];
                    return (
                      <div>
                        <p
                          className={`min-h-[72px] text-sm text-slate-600 dark:text-slate-300 lg:min-h-[88px] ${isLong && !isExpanded ? "line-clamp-3" : ""
                            }`}
                        >
                          {project.description}
                        </p>
                        {isLong ? (
                          <button
                            type="button"
                            onClick={() => toggleDescription(project.name)}
                            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[var(--hero-subtitle)]"
                          >
                            {isExpanded ? "Show less" : "Show more"}
                            <i className={`fas ${isExpanded ? "fa-angle-up" : "fa-angle-down"}`}></i>
                          </button>
                        ) : null}
                      </div>
                    );
                  })()}
                  <div className="min-h-[24px] text-xs font-semibold text-gradient lg:min-h-[28px]">
                    {project.snippets?.length ? (
                      <span className={`project-typing-${index}`}></span>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white transition hover:bg-brandDark"
                  >
                    View Files
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-slate-400 hover:text-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
