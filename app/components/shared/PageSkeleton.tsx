export default function PageSkeleton() {
  return (
    <div aria-busy="true" className="w-full overflow-hidden bg-white">
      <span role="status" className="sr-only">
        Loading page content
      </span>

      <div aria-hidden="true" className="animate-pulse">
        <div className="relative flex min-h-[320px] items-center justify-center bg-gray-200 px-4 py-16 sm:min-h-[420px] lg:min-h-[520px]">
          <div className="w-full max-w-3xl space-y-5 text-center">
            <div className="mx-auto h-3 w-36 rounded bg-gray-300" />
            <div className="mx-auto h-9 w-3/4 rounded bg-gray-300 sm:h-12" />
            <div className="mx-auto h-9 w-2/3 rounded bg-gray-300 sm:h-12" />
            <div className="mx-auto h-3 w-full max-w-xl rounded bg-gray-300" />
            <div className="mx-auto h-3 w-4/5 max-w-lg rounded bg-gray-300" />
          </div>
        </div>

        <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="aspect-[4/3] rounded-2xl bg-gray-200" />
          <div className="space-y-5">
            <div className="h-3 w-28 rounded bg-gray-200" />
            <div className="h-8 w-4/5 rounded bg-gray-200" />
            <div className="h-8 w-3/5 rounded bg-gray-200" />
            <div className="space-y-3 pt-2">
              <div className="h-3 w-full rounded bg-gray-200" />
              <div className="h-3 w-full rounded bg-gray-200" />
              <div className="h-3 w-5/6 rounded bg-gray-200" />
            </div>
            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              {Array.from({ length: 4 }, (_, index) => (
                <div key={index} className="h-5 rounded bg-gray-200" />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-md space-y-3">
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
      </div>
    </div>
  );
}
