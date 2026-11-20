export default function SectionSkeleton() {
  return (
    <section
      aria-busy="true"
      className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14"
    >
      <span role="status" className="sr-only">
        Loading section
      </span>

      <div
        aria-hidden="true"
        className="mx-auto max-w-6xl animate-pulse"
      >
        <div className="mx-auto mb-8 max-w-xl space-y-3 text-center">
          <div className="mx-auto h-3 w-28 rounded bg-gray-200" />
          <div className="mx-auto h-8 w-4/5 rounded bg-gray-200" />
          <div className="mx-auto h-3 w-full rounded bg-gray-200" />
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="space-y-4 rounded-2xl border border-gray-100 bg-white p-6"
            >
              <div className="h-12 w-12 rounded-xl bg-gray-200" />
              <div className="h-5 w-3/4 rounded bg-gray-200" />
              <div className="h-3 w-full rounded bg-gray-200" />
              <div className="h-3 w-5/6 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
