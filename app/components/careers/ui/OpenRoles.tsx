"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaBriefcase, FaClock } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { jobs, type Job, type SectionContent } from "./CareersData";

const departments = ["All", "Driving", "Operations", "Sales", "Support"] as const;

export default function OpenRoles({ content }: { content: SectionContent }) {
  const [active, setActive] = useState<(typeof departments)[number]>("All");
  const list = active === "All" ? jobs : jobs.filter((j) => j.department === active);

  const handleApply = (job: Job) => {
    window.dispatchEvent(new CustomEvent("careers:select-role", { detail: job.title }));
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="open-roles" className="scroll-mt-20 bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading {...content} />

        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter by department">
          {departments.map((d) => (
            <button
              key={d}
              role="tab"
              aria-selected={active === d}
              onClick={() => setActive(d)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                active === d ? "bg-[#142236] text-white" : "bg-white text-[#142236] ring-1 ring-gray-200 hover:ring-[#03C35E]"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid gap-4">
          {list.map((job) => (
            <li
              key={job.id}
              className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-[#142236]">{job.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{job.summary}</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5"><FaMapMarkerAlt size={14} aria-hidden />{job.location}</span>
                  <span className="flex items-center gap-1.5"><FaClock size={14} aria-hidden />{job.type}</span>
                  <span className="flex items-center gap-1.5"><FaBriefcase size={14} aria-hidden />{job.experience}</span>
                </div>
              </div>
              <button
                onClick={() => handleApply(job)}
                className="shrink-0 rounded-lg bg-[#03C35E] px-5 py-2.5 font-semibold text-[#142236] transition hover:brightness-110"
              >
                Apply now
              </button>
            </li>
          ))}
          {list.length === 0 && (
            <li className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-500">
              No openings in this department right now. Send us your resume below and we&apos;ll contact you.
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}