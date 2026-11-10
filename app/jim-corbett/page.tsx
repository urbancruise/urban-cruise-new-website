import type { Metadata } from "next";
import GlobalJimCorbettPage from "@/app/components/services/GlobalJimCorbettPage";
import { getVehicle } from "@/lib/cms";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return (
    (await getCmsSeoMetadata("/jim-corbett")) ?? {
      title: "Jim Corbett Vehicle Rental | Urban Cruise",
      description:
        "Travel to Jim Corbett National Park in a comfortable car, tempo traveller, or bus with a professional driver.",
    }
  );
}

export default async function Page() {
  const cmsData = await getVehicle("global", "jim-corbett");
  return (
    <GlobalJimCorbettPage
      cmsSections={cmsData?.vehicle?.sections ?? null}
    />
  );
}