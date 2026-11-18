import Image from "next/image";

const photos = [
  { src: "/images/careers/gallery-1.jpg", alt: "Drivers at a morning briefing", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/careers/gallery-2.jpg", alt: "Fleet parked at the Ghaziabad office", span: "" },
  { src: "/images/careers/gallery-3.jpg", alt: "Team celebrating Diwali", span: "" },
  { src: "/images/careers/gallery-4.jpg", alt: "Driver greeting passengers", span: "" },
  { src: "/images/careers/gallery-5.jpg", alt: "Support team at work", span: "" },
];

export default function Gallery() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-[#142236] sm:text-4xl">Life at Urban Cruise</h2>
        <p className="mt-3 max-w-xl text-gray-600">On the road, in the office and at our team events.</p>
        <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-4">
          {photos.map((p) => (
            <div key={p.src} className={`relative overflow-hidden rounded-xl ${p.span}`}>
              <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}