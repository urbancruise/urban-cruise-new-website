import JsonLd from "./JsonLd";
import { webPageSchema } from "@/lib/schema";
import Breadcrumb from "./Breadcrumb";
import { formatLocationName } from "@/app/lib/location";

export default function PageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const segments = path.split("/").filter(Boolean);

  return (
    <>
      <JsonLd
        data={webPageSchema({
          name,
          description,
          path,
        })}
      />
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
