import type { Metadata } from "next";
import GlobalVacationsPage from "@/app/components/services/GlobalVacationsPage";
import { getVehicle } from "@/lib/cms";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return (
    (await getCmsSeoMetadata("/vacations")) ?? {
      title: "Vacation Vehicle Rental | Urban Cruise",
      description:
        "Plan comfortable vacations across India with cars, tempo travellers, and buses from Urban Cruise.",
    }
  );
}

export default async function Page() {
  const cmsData = await getVehicle("global", "vacations");
  return <GlobalVacationsPage cmsSections={cmsData?.vehicle?.sections ?? null} />;
}
