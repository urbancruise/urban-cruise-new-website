import type { Metadata } from "next";
import GlobalCorporatePage from "@/app/components/services/GlobalCorporatePage";
import { getVehicle } from "@/lib/cms";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return (
    (await getCmsSeoMetadata("/corporate-travel-rental-service")) ?? {
      title: "Corporate Travel Rental Service | Urban Cruise",
      description:
        "Arrange corporate transportation across India with Urban Cruise's professional fleet and drivers.",
    }
  );
}

export default async function Page() {
  const cmsData = await getVehicle("global", "corporate");
  return (
    <GlobalCorporatePage
      cmsSections={cmsData?.vehicle?.sections ?? null}
    />
  );
}
