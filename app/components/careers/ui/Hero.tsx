import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#142236] text-white">
      <Image
        src="/images/careers/hero.jpg"
        alt="Urban Cruise bus on the road"
        fill
        priority
        className="object-cover opacity-25"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <p className="mb-4 inline-block rounded-full bg-[#03C35E]/15 px-4 py-1 text-sm font-medium text-[#03C35E]">
          We&apos;re hiring across Delhi NCR
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Build your career with Urban Cruise
        </h1>
        <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
          Join the team that moves families, offices and tour groups every day. Fair pay, a
          respectful workplace and room to grow.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="#open-roles"
            className="rounded-lg bg-[#03C35E] px-6 py-3 font-semibold text-[#142236] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            See open roles
          </Link>
          <Link
            href="#apply"
            className="rounded-lg border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Apply now
          </Link>
        </div>
      </div>
    </section>
  );
}