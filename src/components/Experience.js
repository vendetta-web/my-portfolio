import React from "react";
import { experience } from "../data";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="reveal mb-14 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
              Experience
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              My journey so far
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-xl text-base leading-7 text-slate-600">
              A look at my professional journey, the technologies I've worked
              with and the real-world solutions I've helped build.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Desktop vertical line */}
          <div className="absolute bottom-0 left-[190px] top-0 hidden w-px bg-slate-200 md:block" />

          <div className="space-y-12">
            {experience.map((item, index) => {
              const isCurrent = item.period.toLowerCase().includes("current");
              return (
                <div
                  key={item.id}
                  className="relative grid gap-5 md:grid-cols-[160px_1fr] md:gap-16"
                >

                  {/* Date */}
                  <div className="md:text-right">
                    <p className="whitespace-nowrap text-sm font-semibold text-slate-600">
                      {item.period}
                    </p>

                    {isCurrent && (
                      <span className="mt-2 inline-flex rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-[184px] top-1 hidden md:block">
                    <div className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-indigo-100">
                      <div className="h-2 w-2 rounded-full bg-indigo-600" />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

                    <div className="mb-5">
                      <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                        {item.role}
                      </h3>

                      <p className="mt-1 font-semibold text-indigo-600">
                        {item.company}
                      </p>

                      {item.location && (
                        <p className="mt-1 text-sm text-slate-500">
                          {item.location}
                        </p>
                      )}
                    </div>

                    {/* Summary */}
                    {item.summary && (
                      <p className="mb-5 text-sm leading-6 text-slate-600 sm:text-base">
                        {item.summary}
                      </p>
                    )}

                    {/* Bullet Responsibilities */}
                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="space-y-3">
                        {item.highlights.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-3 text-sm leading-6 text-slate-600 sm:text-base"
                          >
                            <span className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-indigo-500" />

                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Technologies */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                        {item.tags.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}

                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;