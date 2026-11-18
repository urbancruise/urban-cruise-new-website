const steps = [
  { title: "Apply", text: "Fill the form below or send your resume on WhatsApp." },
  { title: "Screening call", text: "A 10-minute call to understand your experience and expectations." },
  { title: "Interview", text: "Meet the team. Drivers also do a short road test." },
  { title: "Offer", text: "We share salary and joining details within 2 days." },
  { title: "Onboarding", text: "Documents, uniform and training in your first week." },
];

export default function HiringProcess() {
  return (
    <section className="bg-[#142236] py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">How hiring works</h2>
        <p className="mt-3 max-w-xl text-white/70">Most people hear back within 3 working days.</p>
        <ol className="mt-10 grid gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#03C35E] font-bold text-[#142236]">
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <span aria-hidden className="absolute left-12 right-0 top-5 hidden h-px bg-white/20 md:block" />
              )}
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-white/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}