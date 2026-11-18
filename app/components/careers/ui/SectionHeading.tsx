import type { SectionContent } from "./CareersData";

type Props = SectionContent & {
  dark?: boolean;
  align?: "left" | "center";
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  dark = false,
  align = "left",
  description,
}: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 inline-block rounded-full bg-[#03C35E]/10 px-4 py-1 text-sm font-medium text-[#03C35E]">
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-bold leading-tight sm:text-4xl ${dark ? "text-white" : "text-[#142236]"}`}>
        {title} <span className="text-[#03C35E]">{titleHighlight}</span>
      </h2>
      {description && (
        <p className={`mt-3 ${dark ? "text-white/70" : "text-gray-600"}`}>{description}</p>
      )}
    </div>
  );
}