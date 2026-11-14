"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const GREEN = "#6abf0a";

// 👉 Launch date yahan change karo
const LAUNCH_DATE = new Date("2026-12-31T00:00:00+05:30").getTime();

const features = [
  { title: "Premium Fleet", text: "Wide range of well-maintained vehicles." },
  { title: "Safe & Reliable", text: "Your safety is our top priority." },
  { title: "24/7 Support", text: "We're here to help you anytime, anywhere." },
];

function getTimeLeft() {
  const diff = Math.max(LAUNCH_DATE - Date.now(), 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function ComingSoon() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Countdown (client-only to avoid hydration mismatch)
  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: yahan apni API call lagao (e.g. fetch("/api/notify", {...}))
    setSubmitted(true);
    setEmail("");
  };

  const units = [
    { label: "Days", value: time?.days },
    { label: "Hours", value: time?.hours },
    { label: "Minutes", value: time?.minutes },
    { label: "Seconds", value: time?.seconds },
  ];

  return (
    <main
      aria-labelledby="coming-soon-title"
      className="relative isolate min-h-screen overflow-hidden bg-white"
    >
      {/* Right side background image */}
      <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[65%]">
        <Image
          src="/images/404-bus.webp"
          alt=""
          fill
          priority
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:via-white/10" />
        <div className="absolute inset-0 bg-white/70 lg:hidden" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-56 pt-40 lg:px-12 lg:pt-44">
        <div className="max-w-xl">
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{ borderColor: GREEN, color: GREEN }}
          >
            <span
              className="h-2 w-2 animate-pulse rounded-full"
              style={{ backgroundColor: GREEN }}
            />
            Launching Soon
          </span>

          <h1
            id="coming-soon-title"
            className="mt-6 text-5xl font-black leading-tight text-[#262b33] sm:text-6xl"
          >
            Something <span style={{ color: GREEN }}>Great</span> is Coming Soon
          </h1>

          <p className="mt-5 text-base leading-relaxed text-gray-700 sm:text-lg">
            We&apos;re working hard to bring you a new Urban Cruise experience.
            Premium car &amp; bus rental services, launching very soon.
          </p>

          {/* Countdown */}
          <div
            className="mt-8 grid grid-cols-4 gap-3 sm:gap-4"
            role="timer"
            aria-label="Time left until launch"
          >
            {units.map((u) => (
              <div
                key={u.label}
                className="rounded-2xl bg-white p-3 text-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:p-4"
              >
                <div
                  className="text-3xl font-extrabold tabular-nums sm:text-4xl"
                  style={{ color: GREEN }}
                >
                  {u.value === undefined ? "--" : String(u.value).padStart(2, "0")}
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-gray-500 sm:text-xs">
                  {u.label}
                </div>
              </div>
            ))}
          </div>

          {/* Notify form */}
          {submitted ? (
            <p
              className="mt-8 rounded-xl border bg-white px-5 py-3 text-sm font-semibold"
              style={{ borderColor: GREEN, color: GREEN }}
            >
              ✓ Thank you! We&apos;ll notify you when we launch.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="notify-email" className="sr-only">
                Email address
              </label>
              <input
                id="notify-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full flex-1 rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-sm text-[#262b33] outline-none focus:border-[#6abf0a] focus:ring-2 focus:ring-[#6abf0a]/30"
              />
              <button
                type="submit"
                className="rounded-xl px-8 py-3.5 text-sm font-semibold uppercase text-white shadow-md transition hover:brightness-95"
                style={{ backgroundColor: GREEN }}
              >
                Notify Me
              </button>
            </form>
          )}

          {/* Links */}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-800">
            <Link
              href="/"
              className="font-semibold underline-offset-4 hover:underline"
              style={{ color: GREEN }}
            >
              ← Back to Home
            </Link>
            <span>
              Need help?{" "}
              <a
                href="tel:+919876543210"
                className="font-bold"
                style={{ color: GREEN }}
              >
                +91 98765 43210
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom feature card */}
      <section
        aria-label="Why choose Urban Cruise"
        className="absolute bottom-10 left-1/2 z-10 grid w-[calc(100%-3rem)] max-w-4xl -translate-x-1/2 gap-6 rounded-2xl bg-white p-6 text-left shadow-[0_10px_40px_rgba(0,0,0,0.10)] md:grid-cols-3 md:gap-0"
      >
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`md:px-6 ${i !== 0 ? "md:border-l md:border-gray-200" : ""}`}
          >
            <h2 className="text-sm font-semibold" style={{ color: GREEN }}>
              {f.title}
            </h2>
            <p className="mt-1 text-xs leading-snug text-gray-600">{f.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

// ============================================================================================================================================================== //

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const GREEN = "#6abf0a";

// // 👉 Launch date yahan change karo
// const LAUNCH_DATE = new Date("2026-12-31T00:00:00+05:30").getTime();

// // 👉 Apne social links yahan daalo
// const socials = [
//   {
//     label: "Facebook",
//     href: "#",
//     icon: (
//       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//     ),
//   },
//   {
//     label: "X",
//     href: "#",
//     icon: (
//       <>
//         <path d="M4 4h4.5l11.5 16h-4.5z" />
//         <path d="M4 20l6.8-6.8M20 4l-6.8 6.8" />
//       </>
//     ),
//   },
//   {
//     label: "LinkedIn",
//     href: "#",
//     icon: (
//       <>
//         <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
//         <rect x="2" y="9" width="4" height="12" />
//         <circle cx="4" cy="4" r="2" />
//       </>
//     ),
//   },
//   {
//     label: "YouTube",
//     href: "#",
//     icon: (
//       <>
//         <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
//         <path d="m10 15 5-3-5-3z" />
//       </>
//     ),
//   },
//   {
//     label: "Instagram",
//     href: "#",
//     icon: (
//       <>
//         <rect x="2" y="2" width="20" height="20" rx="5" />
//         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//         <path d="M17.5 6.5h.01" />
//       </>
//     ),
//   },
// ];

// function getTimeLeft() {
//   const diff = Math.max(LAUNCH_DATE - Date.now(), 0);
//   return {
//     days: Math.floor(diff / (1000 * 60 * 60 * 24)),
//     hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
//     minutes: Math.floor((diff / (1000 * 60)) % 60),
//     seconds: Math.floor((diff / 1000) % 60),
//   };
// }

// export default function ComingSoon() {
//   const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     setTime(getTimeLeft());
//     const id = setInterval(() => setTime(getTimeLeft()), 1000);
//     return () => clearInterval(id);
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email) return;
//     // TODO: yahan apni API call lagao (e.g. fetch("/api/notify", {...}))
//     setSubmitted(true);
//     setEmail("");
//   };

//   const units = [
//     { label: "Days", value: time?.days },
//     { label: "Hours", value: time?.hours },
//     { label: "Minutes", value: time?.minutes },
//     { label: "Seconds", value: time?.seconds },
//   ];

//   return (
//     <main
//       aria-labelledby="coming-soon-title"
//       className="relative isolate min-h-screen overflow-hidden bg-[#0a0b0d] text-white"
//     >
//       {/* subtle background light */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#6abf0a]/10 blur-[160px]" />
//         <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
//       </div>

//       {/* pt-40 keeps content below the fixed header */}
//       <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-40 lg:grid-cols-[1fr_auto_1fr] lg:gap-14 lg:px-12 lg:pt-44">
//         {/* LEFT: heading, text, form */}
//         <div className="order-1 text-center lg:text-left">
//           <p
//             className="text-xs font-semibold uppercase tracking-[0.35em]"
//             style={{ color: GREEN }}
//           >
//             Urban Cruise
//           </p>

//           <h1
//             id="coming-soon-title"
//             className="mt-5 font-serif text-5xl font-light leading-[1.08] sm:text-6xl"
//           >
//             Premium travel,{" "}
//             <span className="italic" style={{ color: GREEN }}>
//               arriving
//             </span>{" "}
//             soon.
//           </h1>

//           <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/60 lg:mx-0">
//             Something exceptional is on the way. Our new website for car &amp;
//             bus rentals will be live shortly.
//           </p>

//           {submitted ? (
//             <p
//               className="mx-auto mt-8 max-w-md rounded-full border px-6 py-3.5 text-sm font-semibold lg:mx-0"
//               style={{ borderColor: GREEN, color: GREEN }}
//             >
//               ✓ Thank you! We&apos;ll notify you when we launch.
//             </p>
//           ) : (
//             <form
//               onSubmit={handleSubmit}
//               className="mx-auto mt-8 flex max-w-md items-center rounded-full border border-white/15 bg-white/5 p-1.5 focus-within:border-[#6abf0a] lg:mx-0"
//             >
//               <label htmlFor="notify-email" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="notify-email"
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your email address"
//                 className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-white/40"
//               />
//               <button
//                 type="submit"
//                 className="shrink-0 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#0a0b0d] transition hover:brightness-110"
//                 style={{ backgroundColor: GREEN }}
//               >
//                 Notify Me
//               </button>
//             </form>
//           )}

//           <Link
//             href="/"
//             className="mt-6 inline-block text-sm font-semibold underline-offset-4 hover:underline"
//             style={{ color: GREEN }}
//           >
//             ← Back to Home
//           </Link>
//         </div>

//         {/* CENTER: arch image */}
//         <div className="order-2 mx-auto">
//           <div className="relative">
//             {/* outer ring */}
//             <div
//               className="absolute -inset-3 rounded-t-[999px] rounded-b-[2rem] border"
//               style={{ borderColor: "rgba(106,191,10,0.4)" }}
//             />
//             <div className="relative aspect-[3/4] w-[260px] overflow-hidden rounded-t-[999px] rounded-b-3xl border border-white/10 sm:w-[300px] lg:w-[340px]">
//               <Image
//                 src="/images/404-bus.webp"
//                 alt="Urban Cruise bus on the road"
//                 fill
//                 priority
//                 className="object-cover object-[78%_center]"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//               <p className="absolute inset-x-0 bottom-6 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-white/90">
//                 Cars &middot; Buses &middot; Tours
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: countdown + socials */}
//         <div className="order-3 text-center lg:text-left">
//           <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
//             Launching in
//           </p>

//           <div
//             className="mt-4 grid grid-cols-4 gap-2 lg:grid-cols-1 lg:gap-0"
//             role="timer"
//             aria-label="Time left until launch"
//           >
//             {units.map((u) => (
//               <div
//                 key={u.label}
//                 className="flex flex-col items-center py-3 lg:flex-row lg:items-baseline lg:justify-between lg:border-t lg:border-white/10 lg:py-4 lg:last:border-b"
//               >
//                 <span className="text-3xl font-light tabular-nums sm:text-4xl lg:text-5xl">
//                   {u.value === undefined
//                     ? "--"
//                     : String(u.value).padStart(2, "0")}
//                 </span>
//                 <span
//                   className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] lg:mt-0 lg:text-xs"
//                   style={{ color: GREEN }}
//                 >
//                   {u.label}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <ul className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
//             {socials.map((s) => (
//               <li key={s.label}>
//                 <a
//                   href={s.href}
//                   aria-label={s.label}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[#6abf0a] hover:text-[#6abf0a]"
//                 >
//                   <svg
//                     viewBox="0 0 24 24"
//                     className="h-[18px] w-[18px]"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.8"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     aria-hidden="true"
//                   >
//                     {s.icon}
//                   </svg>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </main>
//   );
// }

// ============================================================================================================================================================== //

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const GREEN = "#6abf0a";

// // 👉 Launch date yahan change karo
// const LAUNCH_DATE = new Date("2026-12-31T00:00:00+05:30").getTime();

// // 👉 Apne social links yahan daalo
// const socials = [
//   {
//     label: "Facebook",
//     href: "#",
//     icon: (
//       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//     ),
//   },
//   {
//     label: "X",
//     href: "#",
//     icon: (
//       <>
//         <path d="M4 4h4.500l11.500 16h-4.500z" />
//         <path d="M4 20l6.800-6.800M20 4l-6.800 6.800" />
//       </>
//     ),
//   },
//   {
//     label: "LinkedIn",
//     href: "#",
//     icon: (
//       <>
//         <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
//         <rect x="2" y="9" width="4" height="12" />
//         <circle cx="4" cy="4" r="2" />
//       </>
//     ),
//   },
//   {
//     label: "YouTube",
//     href: "#",
//     icon: (
//       <>
//         <path d="M2.500 17a24.120 24.120 0 0 1 0-10 2 2 0 0 1 1.400-1.400 49.560 49.560 0 0 1 16.200 0A2 2 0 0 1 21.500 7a24.120 24.120 0 0 1 0 10 2 2 0 0 1-1.400 1.400 49.550 49.550 0 0 1-16.200 0A2 2 0 0 1 2.500 17" />
//         <path d="m10 15 5-3-5-3z" />
//       </>
//     ),
//   },
//   {
//     label: "Instagram",
//     href: "#",
//     icon: (
//       <>
//         <rect x="2" y="2" width="20" height="20" rx="5" />
//         <path d="M16 11.370A4 4 0 1 1 12.630 8 4 4 0 0 1 16 11.370z" />
//         <path d="M17.500 6.500h.010" />
//       </>
//     ),
//   },
// ];

// function getTimeLeft() {
//   const diff = Math.max(LAUNCH_DATE - Date.now(), 0);
//   return {
//     days: Math.floor(diff / (1000 * 60 * 60 * 24)),
//     hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
//     minutes: Math.floor((diff / (1000 * 60)) % 60),
//     seconds: Math.floor((diff / 1000) % 60),
//   };
// }

// export default function ComingSoon() {
//   const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     setTime(getTimeLeft());
//     const id = setInterval(() => setTime(getTimeLeft()), 1000);
//     return () => clearInterval(id);
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email) return;
//     // TODO: yahan apni API call lagao (e.g. fetch("/api/notify", {...}))
//     setSubmitted(true);
//     setEmail("");
//   };

//   const units = [
//     { label: "Days", value: time?.days },
//     { label: "Hours", value: time?.hours },
//     { label: "Minutes", value: time?.minutes },
//     { label: "Seconds", value: time?.seconds },
//   ];

//   return (
//     <main
//       aria-labelledby="coming-soon-title"
//       className="relative isolate flex min-h-screen flex-col overflow-hidden bg-black text-white"
//     >
//       {/* Cinematic full-bleed image with vignette */}
//       <div className="absolute inset-0 -z-10">
//         <Image
//           src="/images/404-bus.webp"
//           alt=""
//           fill
//           priority
//           className="object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-black/65" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.95)_100%)]" />
//         <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
//       </div>

//       {/* pt-40 keeps content below the fixed header */}
//       <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 pb-10 pt-40 text-center lg:pt-44">
//         <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/60">
//           Launching in
//         </p>

//         {/* Countdown is the hero */}
//         <div
//           className="mt-6 flex items-start justify-center gap-2 sm:gap-6"
//           role="timer"
//           aria-label="Time left until launch"
//         >
//           {units.map((u, i) => (
//             <div key={u.label} className="flex items-start gap-2 sm:gap-6">
//               <div>
//                 <div className="text-5xl font-extralight tabular-nums leading-none sm:text-8xl lg:text-9xl">
//                   {u.value === undefined
//                     ? "--"
//                     : String(u.value).padStart(2, "0")}
//                 </div>
//                 <div
//                   className="mt-3 text-[10px] font-semibold uppercase tracking-[0.3em] sm:text-xs"
//                   style={{ color: GREEN }}
//                 >
//                   {u.label}
//                 </div>
//               </div>
//               {i < units.length - 1 && (
//                 <span
//                   className="text-4xl font-extralight text-white/30 sm:text-7xl lg:text-8xl"
//                   aria-hidden="true"
//                 >
//                   :
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 h-px w-24" style={{ backgroundColor: GREEN }} />

//         <h1
//           id="coming-soon-title"
//           className="mt-8 font-serif text-3xl font-light sm:text-5xl"
//         >
//           Urban Cruise is{" "}
//           <span style={{ color: GREEN }}>Coming Soon</span>
//         </h1>
//         <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
//           Premium car &amp; bus rental, reimagined. Our new website is almost
//           ready — leave your email and be the first to know.
//         </p>

//         {/* Notify form */}
//         {submitted ? (
//           <p
//             className="mt-8 rounded-full border px-6 py-3 text-sm font-semibold"
//             style={{ borderColor: GREEN, color: GREEN }}
//           >
//             ✓ Thank you! We&apos;ll notify you when we launch.
//           </p>
//         ) : (
//           <form
//             onSubmit={handleSubmit}
//             className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
//           >
//             <label htmlFor="notify-email" className="sr-only">
//               Email address
//             </label>
//             <input
//               id="notify-email"
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Your email address"
//               className="w-full flex-1 rounded-lg border border-white/20 bg-black/40 px-5 py-3.5 text-sm text-white outline-none backdrop-blur placeholder:text-white/40 focus:border-[#6abf0a]"
//             />
//             <button
//               type="submit"
//               className="rounded-lg px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-black transition hover:brightness-110"
//               style={{ backgroundColor: GREEN }}
//             >
//               Notify Me
//             </button>
//           </form>
//         )}
//       </div>

//       {/* Footer bar: socials | back home | phone */}
//       <footer className="border-t border-white/10 bg-black/50 backdrop-blur">
//         <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
//           <ul className="flex items-center gap-2">
//             {socials.map((s) => (
//               <li key={s.label}>
//                 <a
//                   href={s.href}
//                   aria-label={s.label}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[#6abf0a] hover:text-[#6abf0a]"
//                 >
//                   <svg
//                     viewBox="0 0 24 24"
//                     className="h-4 w-4"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.8"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     aria-hidden="true"
//                   >
//                     {s.icon}
//                   </svg>
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <Link
//             href="/"
//             className="text-sm font-semibold underline-offset-4 hover:underline"
//             style={{ color: GREEN }}
//           >
//             ← Back to Home
//           </Link>

//           <a
//             href="tel:+919876543210"
//             className="text-sm font-semibold text-white/80 hover:text-white"
//           >
//             +91 98765 43210
//           </a>
//         </div>
//       </footer>
//     </main>
//   );
// }