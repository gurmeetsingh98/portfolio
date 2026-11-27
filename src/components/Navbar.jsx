import { useEffect, useState } from "react";
import { navLinks } from "../data/portfolioData.js";
import { theme, THEMES } from "../constants/theme.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setIsDark(shouldUseDark);
    const themeVars = shouldUseDark ? THEMES.dark : THEMES.light;
    Object.entries(themeVars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const setTheme = (nextIsDark) => {
    setIsDark(nextIsDark);
    const themeVars = nextIsDark ? THEMES.dark : THEMES.light;
    Object.entries(themeVars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    window.dispatchEvent(new Event("theme-change"));
  };

  const currentTheme = isDark ? theme.dark : theme.light;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${isSticky
        ? "bg-white/90 shadow-soft backdrop-blur dark:bg-slate-950/90"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <div className="flex items-center gap-3">
          <a href="#home" className="text-lg font-semibold tracking-wide">
            <span className="text-gradient">GS</span>
          </a>
          <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
            <button
              type="button"
              className={`flex items-center gap-1 rounded-full px-2 py-1 transition ${isDark ? "text-slate-400" : "text-amber-500"
                }`}
              onClick={() => setTheme(false)}
              aria-label="Switch to light theme"
              title="Light theme"
            >
              <i className="fas fa-sun"></i>
            </button>
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <button
              type="button"
              className={`flex items-center gap-1 rounded-full px-2 py-1 transition ${isDark ? "text-indigo-400" : "text-slate-400"
                }`}
              onClick={() => setTheme(true)}
              aria-label="Switch to dark theme"
              title="Dark theme"
            >
              <i className="fas fa-moon"></i>
            </button>
          </div>
        </div>

        <button
          className="text-xl text-brand lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        <div
          className={`${isOpen ? "opacity-100" : "pointer-events-none opacity-0"
            } fixed inset-0 z-40 transition lg:static lg:z-auto lg:pointer-events-auto lg:bg-transparent lg:opacity-100 ${currentTheme.overlay}`}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`${isOpen ? "translate-x-0" : "translate-x-full"
            } fixed inset-y-0 right-0 z-50 flex h-screen w-72 flex-col gap-6 overflow-y-auto px-6 py-10 text-lg transition-transform lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:flex-row lg:items-center lg:bg-transparent lg:px-0 lg:py-0 lg:text-sm ${currentTheme.panel}`}
        >
          <button
            className={`mb-4 flex items-center gap-2 text-sm font-semibold lg:hidden ${currentTheme.panelMuted}`}
            onClick={() => setIsOpen(false)}
            aria-label="Back"
          >
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="font-semibold text-gradient transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
