import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-6 py-16 text-center"
      aria-labelledby="not-found-title"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#03a957]">
        404
      </p>
      <h1
        id="not-found-title"
        className="mt-3 text-3xl font-bold text-[#142236] md:text-4xl"
      >
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-gray-600">
        The page may have moved or the URL may be incorrect. Explore Urban
        Cruise vehicle rental services by location or visit a useful page below.
      </p>
      <nav className="mt-8 flex flex-wrap justify-center gap-4" aria-label="Helpful links">
        {[
          { href: "/delhi", label: "Vehicle rental in Delhi" },
          { href: "/mumbai", label: "Vehicle rental in Mumbai" },
          { href: "/gurugram", label: "Vehicle rental in Gurugram" },
          { href: "/pune", label: "Vehicle rental in Pune" },
          { href: "/delhi/book", label: "Request a quotation" },
        ].map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              index === 0
                ? "rounded-full bg-[#03a957] px-6 py-3 font-semibold text-white hover:bg-[#02894a]"
                : "rounded-full border border-[#142236] px-6 py-3 font-semibold text-[#142236] hover:bg-gray-50"
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
