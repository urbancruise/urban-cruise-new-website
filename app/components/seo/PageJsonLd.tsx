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
  const location = segments[0];

  return (
    <>
      <JsonLd
        data={webPageSchema({
          name,
          description,
          path,
        })}
      />
      {location && (
        <Breadcrumb
          items={[
            { name: "Home", path: "/" },
            { name: formatLocationName(location), path: `/${location}` },
            { name, path },
          ]}
        />
      )}
    </>
  );
}
