import { createGlobalVehiclePage } from "@/app/lib/global-vehicle-page";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata() {
  return (
    (await getCmsSeoMetadata("/maharaja-tempo-traveller")) ?? {
      title: "Maharaja Tempo Traveller Rental | Urban Cruise",
    }
  );
}

export default createGlobalVehiclePage("maharaja-tempo-traveller", "Maharaja Tempo Traveller");
