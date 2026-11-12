import type { Metadata } from "next";
import GlobalCharDhamPage from "@/app/components/services/GlobalCharDhamPage";
import { getVehicle } from "@/lib/cms";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return (
    (await getCmsSeoMetadata("/char-dham-yatra-package")) ?? {
      title: "Char Dham Yatra Package | Urban Cruise",
      description:
        "Plan a comfortable Char Dham Yatra to Yamunotri, Gangotri, Kedarnath, and Badrinath with Urban Cruise.",
    }
  );
}

export default async function Page() {
  const cmsData = await getVehicle("global", "char-dham");
  return (
    <GlobalCharDhamPage
      cmsSections={cmsData?.vehicle?.sections ?? null}
    />
  );
}
