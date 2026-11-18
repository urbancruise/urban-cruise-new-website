// app/components/about-us/ui/OurStory.tsx
export interface StoryMilestone {
  year: string;
  title: string;
  description: string;
}

export interface OurStoryProps {
  content?: {
    eyebrow?: string;
    title?: string;
    titleHighlight?: string;
    intro?: string;
    milestones?: StoryMilestone[];
  };
}

const DEFAULT_MILESTONES: StoryMilestone[] = [
  {
    year: "2015",
    title: "The beginning",
    description:
      "Urban Cruise started with a small fleet of cars and one goal: reliable, comfortable travel in Delhi NCR.",
  },
  {
    year: "2018",
    title: "Growing the fleet",
    description:
      "We added tempo travellers and luxury vans to serve families, groups, and corporate clients.",
  },
  {
    year: "2021",
    title: "Bus rentals",
    description:
      "Larger buses joined the fleet for weddings, school trips, and outstation group travel.",
  },
  {
    year: "Today",
    title: "Trusted by customers",
    description:
      "Hundreds of happy customers choose us for airport transfers, tours, and events, with 24/7 support.",
  },
];

export default function OurStory({ content }: OurStoryProps) {
  const eyebrow = content?.eyebrow?.trim() || "Our story";
  const title = content?.title?.trim() || "How Urban Cruise";
  const titleHighlight = content?.titleHighlight?.trim() || "began and grew";
  const intro =
    content?.intro?.trim() ||
    "From a few vehicles to a full fleet, our journey has always been about one thing: making every trip safe, comfortable, and on time.";
  const milestones = content?.milestones?.length
    ? content.milestones
    : DEFAULT_MILESTONES;

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="hidden h-px w-8 bg-gray-400/60 sm:block" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#03C35E] sm:text-sm">
              {eyebrow}
            </span>
            <span className="hidden h-px w-8 bg-gray-400/60 sm:block" />
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#142236] sm:text-4xl lg:text-[42px]">
            {title} <span className="text-[#03C35E]">{titleHighlight}</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            {intro}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <span
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-[#03C35E]/30 md:left-1/2 md:-translate-x-1/2"
          />

          <ul className="space-y-10">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={`${m.year}-${i}`}
                  className="relative pl-12 md:grid md:grid-cols-2 md:gap-12 md:pl-0"
                >
                  {/* Dot */}
                  <span
                    aria-hidden
                    className="absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-[#03C35E] shadow md:left-1/2"
                  />

                  <div
                    className={
                      isLeft
                        ? "md:col-start-1 md:pr-10 md:text-right"
                        : "md:col-start-2 md:pl-10"
                    }
                  >
                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <span className="inline-block rounded-full bg-[#03C35E]/10 px-3 py-1 text-xs font-bold text-[#03C35E]">
                        {m.year}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold text-[#142236]">
                        {m.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}