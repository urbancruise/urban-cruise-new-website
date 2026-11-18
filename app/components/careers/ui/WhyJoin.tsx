import Image from "next/image";

const stats = [
  { value: "500+", label: "Trips completed every month" },
  { value: "100+", label: "Vehicles in our fleet" },
  { value: "24/7", label: "Customer support" },
];

export default function WhyJoin() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/careers/team.jpg"
            alt="Urban Cruise team standing beside a bus"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#142236] sm:text-4xl">Why work with us</h2>
          <p className="mt-4 text-gray-600">
            Urban Cruise started with a simple idea: travel should be safe, clean and on time. Our
            drivers, coordinators and support staff make that happen every day, and we treat them
            like the backbone of the company.
          </p>
          <p className="mt-3 text-gray-600">
            You will work with well-maintained vehicles, clear schedules and managers who listen.
            Many of our team leads started as drivers or executives.
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-bold text-[#03C35E] sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-sm text-gray-600">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}