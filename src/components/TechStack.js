import React, { useState, useEffect } from "react";
import { skillGroups } from "../data";

const TechStack = () => {
  const [active, setActive] = useState(skillGroups[0].id);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setIsDark(e.matches);
    setIsDark(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const activeGroup = skillGroups.find((group) => group.id === active) || skillGroups[0];

  return (
    <section
      id="skills"
      className={`relative overflow-hidden py-24 transition-colors duration-300 ${
        isDark ? "bg-[#07101f] text-white" : "bg-white text-[#0f172a]"
      }`}
    >
      {isDark && (
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/5 blur-[130px]" />
      )}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="reveal mb-10">
          <div className="mb-5 flex items-center gap-4">
            <span className={`h-px w-16 ${isDark ? "bg-slate-600" : "bg-slate-200"}`} />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
              TECH STACK
            </span>

            <span className={`h-px w-16 ${isDark ? "bg-slate-600" : "bg-slate-200"}`} />
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Tools I work with
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              .
            </span>
          </h2>

          <p className={`mx-auto mt-5 max-w-2xl text-base leading-7 ${isDark ? "text-slate-400" : "text-slate-600"} sm:text-lg`}>
            Frontend craft and enterprise Salesforce engineering, backed by the tools needed to ship real products.
          </p>
        </div>

        {/* Tabs */}
        <div className="reveal mb-12 flex flex-wrap justify-center gap-3">
          {skillGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setActive(group.id)}
              className={`rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === group.id
                  ? "border-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                  : isDark
                  ? "border-slate-700 bg-slate-900/40 text-slate-300 hover:border-slate-500 hover:bg-slate-800/60 hover:text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" key={active}>
          {activeGroup.skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative flex min-h-[140px] flex-col items-center justify-center gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? "border border-slate-700/70 bg-gradient-to-b from-slate-900/95 to-[#091321] hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-950/30"
                  : "border border-slate-200 bg-white hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-100/50"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`relative flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:border-purple-400/40 group-hover:bg-purple-500/10 group-hover:text-purple-300 ${
                isDark
                  ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                  : "border-blue-500/20 bg-blue-500/5 text-blue-600"
              }`}>
                <i className={`${skill.icon} text-xl`} />
              </div>

              <span className={`font-medium text-center ${isDark ? "text-white" : "text-slate-900"}`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;