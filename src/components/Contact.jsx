import { contact } from "../data/portfolioData.js";

const Contact = () => (
  <section id="contact" className="bg-white py-20 dark:bg-slate-900/60">
    <div className="mx-auto max-w-7xl space-y-10 px-4 lg:px-6">
      <div>
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Contact</h2>
        <p className="text-slate-600 dark:text-slate-300">
          Open to backend and full-stack roles that need reliable systems.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Let’s connect</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            I’m happy to discuss full-time opportunities, consulting, or backend engineering
            roles. Reach out and I’ll respond quickly.
          </p>

          <div className="mt-5 flex flex-wrap gap-4">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 p-1 shadow-sm transition hover:-translate-y-0.5 dark:border-slate-700"
            >
              <img
                src="/images/Untitled design.png"
                alt="LinkedIn"
                className="h-12 w-12 rounded-full object-cover"
              />
            </a>
            <a
              href={`mailto:${contact.email}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 p-1 shadow-sm transition hover:-translate-y-0.5 dark:border-slate-700"
            >
              <img
                src="/images/WhatsApp Image 2024-01-18 at 01.11.59_aa37d758.jpg"
                alt="Email"
                className="h-12 w-12 rounded-full object-cover"
              />
            </a>
            <a
              href="https://www.instagram.com/sahib._0001?igsh=YnhyaDFmbGk1enNv"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 p-1 shadow-sm transition hover:-translate-y-0.5 dark:border-slate-700"
            >
              <img
                src="/images/WhatsApp Image 2024-01-18 at 01.12.00_1d399160.jpg"
                alt="Instagram"
                className="h-12 w-12 rounded-full object-cover"
              />
            </a>
            <a
              href="https://wa.me/917696307088"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 p-1 shadow-sm transition hover:-translate-y-0.5 dark:border-slate-700"
            >
              <img
                src="/images/WhatsApp Image 2024-01-18 at 02.46.24_6e53f2e8.jpg"
                alt="WhatsApp"
                className="h-12 w-12 rounded-full object-cover"
              />
            </a>
          </div>

          <div className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-brand"></i>
              <a
                href={`mailto:${contact.email}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                {contact.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-phone text-brand"></i>
              <a
                href={`tel:${contact.phone}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                {contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-brand"></i>
              <span>{contact.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-globe text-brand"></i>
              <a
                href={contact.website}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                {contact.website}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-brands fa-linkedin text-brand"></i>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-brands fa-github text-brand"></i>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Message me</h3>
          <form className="mt-4 space-y-4" action={`mailto:${contact.email}`} method="post">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
            <textarea
              rows="5"
              placeholder="Message"
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            ></textarea>
            <button
              type="submit"
              className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brandDark"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
