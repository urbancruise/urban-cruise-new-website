import type { Metadata } from "next";
import GlobalWeddingPage from "@/app/components/services/GlobalWeddingPage";
import { getVehicle } from "@/lib/cms";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return (
    (await getCmsSeoMetadata("/wedding")) ?? {
      title: "Wedding Vehicle Rental | Urban Cruise",
      description:
        "Arrange comfortable wedding travel across India with premium cars, tempo travellers, and buses from Urban Cruise.",
    }
  );
}

export default async function Page() {
  const cmsData = await getVehicle("global", "wedding");
  return <GlobalWeddingPage cmsSections={cmsData?.vehicle?.sections ?? null} />;
}
