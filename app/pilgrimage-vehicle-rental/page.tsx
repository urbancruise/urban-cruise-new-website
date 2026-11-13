import type { Metadata } from "next";
import GlobalPilgrimagePage from "@/app/components/services/GlobalPilgrimagePage";
import { getVehicle } from "@/lib/cms";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return (
    (await getCmsSeoMetadata("/pilgrimage-vehicle-rental")) ?? {
      title: "Pilgrimage Vehicle Rental | Urban Cruise",
      description:
        "Travel to sacred destinations across India in a comfortable vehicle with Urban Cruise.",
    }
  );
}

export default async function Page() {
  const cmsData = await getVehicle("global", "pilgrimage");
  return (
    <GlobalPilgrimagePage
      cmsSections={cmsData?.vehicle?.sections ?? null}
    />
  );
}
