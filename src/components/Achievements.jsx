import { achievements } from "../data/portfolioData.js";

const Achievements = () => (
  <section id="achievements" className="bg-slate-50 py-20 dark:bg-slate-950">
    <div className="mx-auto max-w-7xl space-y-10 px-4 lg:px-6">
      <div>
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{achievements.headline}</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Academic milestones and problem-solving progress.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {achievements.items.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70 flex flex-col items-center justify-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-4 text-brand font-bold text-xl">
              #{index + 1}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
