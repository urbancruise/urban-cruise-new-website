import { createGlobalVehiclePage } from "@/app/lib/global-vehicle-page";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata() {
  return (
    (await getCmsSeoMetadata("/innova-crysta")) ?? {
      title: "Innova Crysta Rental in India | Urban Cruise",
    }
  );
}

export default createGlobalVehiclePage("innova-crysta", "Innova Crysta");
