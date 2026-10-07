import { createGlobalVehiclePage } from "@/app/lib/global-vehicle-page";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata() {
  return (
    (await getCmsSeoMetadata("/tempo-traveller")) ?? {
      title: "Tempo Traveller Rental | Urban Cruise",
    }
  );
}

export default createGlobalVehiclePage("tempo-traveller", "Tempo Traveller");

