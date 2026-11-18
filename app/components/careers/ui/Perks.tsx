import { FaWallet, FaClock, FaShieldAlt, FaGraduationCap, FaChartLine, FaBus } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import type { SectionContent } from "./CareersData";

const perks = [
  { icon: FaWallet, title: "Fair, on-time salary", text: "Paid on the 1st of every month, plus trip incentives and overtime." },
  { icon: FaClock, title: "Predictable shifts", text: "Rosters shared in advance so you can plan your week." },
  { icon: FaShieldAlt, title: "Insurance cover", text: "Accident and health cover for you while you are on duty." },
  { icon: FaGraduationCap, title: "Training", text: "Defensive driving, customer handling and first-aid sessions." },
  { icon: FaChartLine, title: "Clear growth path", text: "Move from driver to team lead or from executive to manager." },
  { icon: FaBus, title: "Modern vehicles", text: "Regularly serviced cars and buses with GPS and clean interiors." },
];

export default function Perks({ content }: { content: SectionContent }) {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading {...content} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#03C35E]/10 text-[#03C35E]">
                <Icon size={22} aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#142236]">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}