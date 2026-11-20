"use client";

import { useState, FormEvent } from "react";
import {
  FaBus,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaBullhorn,
  FaCommentDots,
  FaChevronDown,
} from "react-icons/fa";
import type { ReactNode } from "react";

// app/components/contact/ui/ContactForm.tsx

type ContactFormContent = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
};

export interface ContactDetails {
  officeHeading?: string;
  phones: { label?: string; value: string }[];
  emails: { label: string; value: string }[];
  offices: { location?: string; address: string }[];
}

const LOCATIONS = ["Delhi", "Mumbai", "Pune", "Gurgaon", "Noida"];
const SOURCES = ["Google Search", "Instagram", "Friend / Referral", "Facebook", "Others"];

function IconField({
  icon,
  children,
  select = false,
  top = false,
}: {
  icon: ReactNode;
  children: ReactNode;
  select?: boolean;
  top?: boolean;
}) {
  return (
    <div className="group relative">
      <span
        className={`pointer-events-none absolute left-4 text-gray-400 transition group-focus-within:text-[#03C35E] ${
          top ? "top-4" : "top-1/2 -translate-y-1/2"
        }`}
      >
        {icon}
      </span>
      {children}
      {select && (
        <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400" />
      )}
    </div>
  );
}

type Status = "idle" | "loading" | "success" | "error";

const field =
  "w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm text-[#142236] " +
  "placeholder:text-gray-400 transition focus:border-[#03C35E] focus:outline-none " +
  "focus:ring-4 focus:ring-[#03C35E]/15";

const DEFAULT_CONTENT: ContactFormContent = {
  eyebrow: "Contact Form",
  title: "Reach out to",
  titleHighlight: "Urban Cruise",
};

const DEFAULT_CONTACT_DETAILS: ContactDetails = {
  officeHeading: "Offices in Delhi / NCR",
  phones: [
    { value: "(+91) 93240 48224" },
    { value: "(+91) 89289 46056" },
  ],
  emails: [
    { label: "Booking", value: "delhi@urbancruise.in" },
    { label: "Attachment", value: "partner@urbancruise.in" },
  ],
  offices: [
    {
      address:
        "B-14, Gali no. 10, Shashi Garden, Mayur Vihar Phase 1, Delhi-110091",
    },
    {
      address: "834, Gali Beri Wali, Bazar Sita Ram, Old Delhi, Delhi, 110006",
    },
    {
      address:
        "C/o 4c plus, 3rd Floor Mahalaxmi Plaza, Vaishali, Ghaziabad, UP-201010",
    },
  ],
};

export default function ContactForm({
  content = DEFAULT_CONTENT,
  contactDetails = DEFAULT_CONTACT_DETAILS,
}: {
  content?: ContactFormContent;
  contactDetails?: ContactDetails;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className=" px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#03C35E]/10 px-4 py-1.5 text-sm font-semibold text-[#03C35E]">
            <FaBus /> {content.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-[#142236] md:text-5xl">
            {content.title}{" "}
            <span className="text-[#03C35E]">{content.titleHighlight}</span>
          </h2>
          <p className="mt-3 text-gray-500">
            Feel free to drop us a line below — our team replies quickly.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info column */}
          <div className="space-y-5 lg:col-span-2">
            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md ring-1 ring-black/5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#03C35E] text-white">
                <FaPhoneAlt />
              </span>
              <div className="text-sm">
                <p className="font-bold text-[#142236]">Call Us</p>
                {contactDetails.phones.map(({ label, value }) => (
                  <a
                    key={`${label ?? ""}-${value}`}
                    href={`tel:${value.replace(/[^\d+]/g, "")}`}
                    className="block text-gray-600 hover:text-[#03C35E]"
                  >
                    {label ? `${label}: ` : ""}
                    {value}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md ring-1 ring-black/5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#03C35E] text-white">
                <FaEnvelope />
              </span>
              <div className="text-sm">
                <p className="font-bold text-[#142236]">Email Us</p>
                {contactDetails.emails.map(({ label, value }) => (
                  <p key={`${label}-${value}`} className="text-gray-600">
                    {label}:{" "}
                    <a
                      href={`mailto:${value}`}
                      className="font-semibold text-[#142236] hover:text-[#03C35E]"
                    >
                      {value}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 text-[#142236] shadow-md ring-1 ring-black/5">
              <p className="mb-4 flex items-center gap-2 font-bold">
                <FaMapMarkerAlt className="text-[#03C35E]" />{" "}
                {contactDetails.officeHeading}
              </p>
              <ul className="space-y-4 text-sm text-gray-600">
                {contactDetails.offices.map(({ location, address }) => (
                  <li
                    key={`${location ?? ""}-${address}`}
                    className="border-l-2 border-[#03C35E] pl-3 leading-6"
                  >
                    {location && (
                      <span className="font-semibold text-[#142236]">
                        {location}:{" "}
                      </span>
                    )}
                    {address}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form card */}
          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5 md:p-10 lg:col-span-3">
            <h3 className="text-2xl font-bold text-[#142236]">Send us a message</h3>
            <p className="mb-6 mt-1 text-sm text-gray-500">
              Fill in the details and we'll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <IconField icon={<FaUser />}>
                  <input name="name" placeholder="Your Name" required className={field} />
                </IconField>
                <IconField icon={<FaPhoneAlt />}>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    pattern="[0-9+\-\s]{10,15}"
                    className={field}
                  />
                </IconField>
              </div>

              <IconField icon={<FaEnvelope />}>
                <input name="email" type="email" placeholder="Your Email" required className={field} />
              </IconField>

              <div className="grid gap-4 md:grid-cols-2">
                <IconField icon={<FaMapMarkerAlt />} select>
                  <select name="location" required defaultValue="" className={`${field} appearance-none`}>
                    <option value="" disabled>Select Your Location</option>
                    {LOCATIONS.map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </IconField>
                <IconField icon={<FaBullhorn />} select>
                  <select name="source" required defaultValue="" className={`${field} appearance-none`}>
                    <option value="" disabled>How did you hear about us?</option>
                    {SOURCES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </IconField>
              </div>

              <IconField icon={<FaCommentDots />} top>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Type your message here..."
                  required
                  className={field}
                />
              </IconField>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 rounded-full bg-[#03C35E] px-8 py-3.5 font-bold text-white shadow-lg shadow-[#03C35E]/30 transition hover:bg-[#02a84f] disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <FaPaperPlane className="text-sm" />
              </button>

              {status === "success" && (
                <p className="text-sm font-medium text-[#03C35E]">
                  Thanks! We'll get back to you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}