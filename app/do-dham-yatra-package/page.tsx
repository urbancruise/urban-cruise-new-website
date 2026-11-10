import type { Metadata } from "next";
import GlobalDoDhamPage from "@/app/components/services/GlobalDoDhamPage";
import { getVehicle } from "@/lib/cms";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return (
    (await getCmsSeoMetadata("/do-dham-yatra-package")) ?? {
      title: "Do Dham Yatra Package | Urban Cruise",
      description:
        "Plan a comfortable Do Dham Yatra to Yamunotri and Gangotri with Urban Cruise.",
    }
  );
}

export default async function Page() {
  const cmsData = await getVehicle("global", "do-dham");
  return (
    <GlobalDoDhamPage
      cmsSections={cmsData?.vehicle?.sections ?? null}
    />
  );
}
