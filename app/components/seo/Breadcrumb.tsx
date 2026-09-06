import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export default function Breadcrumb({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav
        aria-label="Breadcrumb"
        className="hidden"
      >
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;

            return (
              <li key={item.path} className="flex items-center gap-x-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-gray-400">
                    →
                  </span>
                )}
                {isCurrent ? (
                  <span aria-current="page" className="font-medium text-[#142236]">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="transition-colors hover:text-[#03a957] hover:underline"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
