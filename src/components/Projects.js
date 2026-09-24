import React, { useMemo, useState } from "react";
import { projects } from "../data";

const filters = [
  { id: "all", label: "All" },
  { id: "react", label: "React / Web" },
  { id: "salesforce", label: "Salesforce" },
  { id: "automation", label: "Automation" },
  // { id: "personal", label: "Personal" },
];

const getProjectIcon = (project) => {
  const category = project.category?.toLowerCase() || "";
  const title = project.title?.toLowerCase() || "";

  if (title.includes("fitness")) return "fa-solid fa-dumbbell";
  if (title.includes("wedding")) return "fa-solid fa-envelope";
  if (title.includes("rate card")) return "fa-solid fa-file-invoice-dollar";
  if (title.includes("tax")) return "fa-solid fa-shield-halved";
  if (title.includes("agreement")) return "fa-solid fa-file-contract";
  if (title.includes("release")) return "fa-solid fa-cube";
  if (title.includes("documentation")) return "fa-solid fa-book-open";

  if (category.includes("salesforce")) {
    return "fa-brands fa-salesforce";
  }

  return "fa-solid fa-code";
};

const getProjectFilter = (project) => {
  const category = `${project.category || ""} ${
    project.type || ""
  } ${project.technologies?.join(" ") || ""}`.toLowerCase();

  if (
    category.includes("automation") ||
    category.includes("ai")
  ) {
    return "automation";
  }

  if (category.includes("salesforce")) {
    return "salesforce";
  }

  if (
    category.includes("react") ||
    category.includes("web") ||
    category.includes("javascript")
  ) {
    return "react";
  }

  return "personal";
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;

    return projects.filter(
      (project) => getProjectFilter(project) === activeFilter
    );
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#07101f] py-24 text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="reveal mx-auto mb-10 max-w-3xl text-center">

          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-slate-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
              Projects
            </span>

            <span className="h-px w-16 bg-slate-600" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Things I've{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              built.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            A collection of projects that showcase my work in React,
            Salesforce and automation. Each project reflects real-world
            problem solving and practical solutions.
          </p>
        </div>

        {/* Filters */}
        <div className="reveal mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "border-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                  : "border-slate-700 bg-slate-900/40 text-slate-300 hover:border-slate-500 hover:bg-slate-800/60 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {filteredProjects.map((project, index) => (
            <article
  key={project.id || project.title}
  className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900/95 to-[#091321] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-950/30"
>
              {/* subtle top gradient */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-blue-500/[0.07] to-transparent" />

              {/* Number + category */}
              <div className="relative mb-5 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                  {project.category}
                </span>
              </div>

              {/* Icon */}
              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-xl text-blue-400 transition-all duration-300 group-hover:border-purple-400/40 group-hover:bg-purple-500/10 group-hover:text-purple-300">
                <i className={getProjectIcon(project)} />
              </div>

              {/* Title */}
              <h3 className="relative mb-3 text-xl font-bold leading-tight text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="relative mb-5 flex-1 text-sm leading-6 text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              {project.technologies?.length > 0 && (
                <div className="relative mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-blue-500/20 bg-blue-500/[0.07] px-2.5 py-1 text-xs font-medium text-sky-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="relative flex items-center gap-5 border-t border-slate-800 pt-5">

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-blue-400"
                  >
                    View Live
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                  </a>
                )}

                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
                  >
                    Source
                    <i className="fa-brands fa-github" />
                  </a>
                )}

                {!project.liveUrl && !project.sourceUrl && (
                  <button
                    type="button"
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white"
                  >
                    View Details

                    <i className="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
                  </button>
                )}

              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center text-slate-400">
            No projects added to this category yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;