"use client";

import { useEffect, useState } from "react";
import { jobs } from "./CareersData";

type Status = "idle" | "sending" | "success" | "error";

export default function ApplyForm() {
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  // Pre-select the role when "Apply now" is clicked on a job card
  useEffect(() => {
    const handler = (e: Event) => setRole((e as CustomEvent<string>).detail);
    window.addEventListener("careers:select-role", handler);
    return () => window.removeEventListener("careers:select-role", handler);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    const file = data.get("resume") as File | null;
    if (file && file.size > 5 * 1024 * 1024) {
      setError("Resume must be smaller than 5 MB.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/careers", { method: "POST", body: data });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
      setRole("");
    } catch {
      setStatus("error");
      setError("Could not send your application. Please try again or WhatsApp us.");
    }
  }

  const field =
    "mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-[#142236] focus:border-[#03C35E] focus:outline-none focus:ring-2 focus:ring-[#03C35E]/30";

  return (
    <section id="apply" className="scroll-mt-20 bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-[#142236] sm:text-4xl">Apply now</h2>
        <p className="mt-3 text-gray-600">Fill in your details and we&apos;ll call you within 3 working days.</p>

        {status === "success" ? (
          <div role="status" className="mt-8 rounded-xl bg-[#03C35E]/10 p-6 text-[#142236]">
            <p className="font-semibold">Application received.</p>
            <p className="mt-1 text-sm">Our team will call you on the number you shared.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 grid gap-5 rounded-xl border border-gray-200 bg-white p-6 sm:grid-cols-2">
            <label className="text-sm font-medium text-[#142236]">
              Full name
              <input name="name" required autoComplete="name" className={field} />
            </label>
            <label className="text-sm font-medium text-[#142236]">
              Phone number
              <input name="phone" type="tel" required pattern="[0-9+\s-]{10,15}" autoComplete="tel" className={field} />
            </label>
            <label className="text-sm font-medium text-[#142236]">
              Email
              <input name="email" type="email" autoComplete="email" className={field} />
            </label>
            <label className="text-sm font-medium text-[#142236]">
              Position
              <select name="position" required value={role} onChange={(e) => setRole(e.target.value)} className={field}>
                <option value="" disabled>Select a role</option>
                {jobs.map((j) => (
                  <option key={j.id} value={j.title}>{j.title}</option>
                ))}
                <option value="Other">Other</option>
              </select>
            </label>
            <label className="text-sm font-medium text-[#142236] sm:col-span-2">
              Resume (PDF or DOC, max 5 MB)
              <input
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="mt-1 block w-full text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-[#142236] file:px-4 file:py-2.5 file:text-white"
              />
            </label>
            <label className="text-sm font-medium text-[#142236] sm:col-span-2">
              Message (optional)
              <textarea name="message" rows={4} className={field} />
            </label>

            {error && <p role="alert" className="text-sm text-red-600 sm:col-span-2">{error}</p>}

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-lg bg-[#03C35E] px-6 py-3 font-semibold text-[#142236] transition hover:brightness-110 disabled:opacity-60 sm:col-span-2"
            >
              {status === "sending" ? "Sending..." : "Submit application"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}