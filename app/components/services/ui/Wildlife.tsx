import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const animals = [
  { name: "Bengal Tiger", icon: "🐯" },
  { name: "Indian Leopard", icon: "🐆" },
  { name: "Asian Elephant", icon: "🐘" },
  { name: "Sloth Bear", icon: "🐻" },
  { name: "Sambar Deer", icon: "🦌" },
  { name: "Spotted Deer", icon: "🦌" },
  { name: "Mugger Crocodile", icon: "🐊" },
  { name: "Crested Serpent Eagle", icon: "🦅" },
  { name: "King Cobra", icon: "🐍" },
  { name: "Gharial", icon: "🐊" },
  { name: "Rhesus Macaque", icon: "🐒" },
  { name: "Pied Kingfisher", icon: "🐦" },
  { name: "Wild Boar", icon: "🐗" },
  { name: "Golden Jackal", icon: "🦊" },
  { name: "Softshell Turtle", icon: "🐢" },
  { name: "Indian Peacock", icon: "🦚" },
  { name: "Blue Mormon Butterfly", icon: "🦋" },
  { name: "Bengal Monitor", icon: "🦎" },
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readText(value: unknown, fallback: string): string {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

export default function Wildlife({ content }: { content?: unknown }) {
  const section = isRecord(content) ? content : {};
  const sectionAnimals: Array<{ name: string; icon: string }> = Array.isArray(
    section.animals,
  )
    ? section.animals.flatMap((animal) =>
        isRecord(animal) && typeof animal.name === "string" && animal.name.trim()
          ? [{ name: animal.name, icon: readText(animal.icon, "🐾") }]
          : [],
      )
    : [];
  const displayAnimals = sectionAnimals.length ? sectionAnimals : animals;

  return (
    <section className="w-full bg-white px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-2 flex w-full items-center justify-start gap-1.5">
          <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
          <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.15em] text-[#03C35E] xs:text-[10px] sm:text-[10px] sm:tracking-[0.2em] md:text-[11px] lg:text-[12px] lg:tracking-[0.25em] xl:text-[13px]">
            {readText(section.eyebrow, "WILDLIFE")}
          </span>
          <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
        </div>

        <h2 className="text-[21px] xs:text-[23px] sm:text-[27px] md:text-[29px] font-extrabold leading-[1] tracking-[-0.04em] text-[#142236]">
          {readText(section.title, "Animals Found in Jim Corbett")}
        </h2>

        <p className="mt-2 font-serif text-[21px] italic leading-tight text-[#03C35E] xs:text-[23px] sm:text-[27px] md:text-[29px]">
          {readText(section.subtitle, "Discover the Wild Heart of Jim Corbett")}
        </p>

        <p className="mt-5 max-w-[900px] text-[10px] leading-[1.75] text-[#303944] xs:text-[11px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
          {readText(
            section.description,
            "Jim Corbett National Park is home to a rich variety of wildlife, from Bengal tigers and leopards to elephants, deer, crocodiles, and colorful birdlife. Explore the animals that make this forest one of India's most remarkable natural habitats.",
          )}
        </p>

        {/* Pills */}
        <ul
          className={`${robotoCondensed.className} mt-6 flex flex-wrap justify-center gap-x-5 gap-y-5`}
        >
          {displayAnimals.map((animal) => (
            <li
              key={animal.name}
              className="flex items-center gap-3 rounded-full bg-[#EAF8EF] px-6 py-3 text-[15px] text-gray-800 shadow-md transition duration-200 hover:-translate-y-1 hover:bg-[#DDF3E5] hover:shadow-lg"
            >
              <span className="text-xl leading-none">{animal.icon}</span>
              <span>{animal.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}