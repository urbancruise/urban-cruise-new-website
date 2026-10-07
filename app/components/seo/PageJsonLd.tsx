import JsonLd from "./JsonLd";
import { webPageSchema } from "@/lib/schema";
import Breadcrumb from "./Breadcrumb";
import { formatLocationName } from "@/app/lib/location";
import { getSeoByPath } from "@/lib/cms";

export default async function PageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const seo = await getSeoByPath(path);
  const segments = path.split("/").filter(Boolean);

  return (
    <>
      {seo?.seo.schemas?.length ? (
        <JsonLd data={seo.seo.schemas} />
      ) : (
        <JsonLd
          data={webPageSchema({
            name,
            description,
            path,
          })}
        />
      )}
      {segments.length > 0 && (
        <Breadcrumb
          items={[
            { name: "Home", path: "/" },
            ...(segments.length > 1
              ? [
                  {
                    name: formatLocationName(segments[0]),
                    path: `/${segments[0]}`,
                  },
                ]
              : []),
            { name, path },
          ]}
        />
      )}
    </>
  );
}
