import { createGlobalVehiclePage } from "@/app/lib/global-vehicle-page";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata() {
  return (
    (await getCmsSeoMetadata("/bus-with-washroom")) ?? {
      title: "Bus with Washroom Rental | Urban Cruise",
    }
  );
}

export default createGlobalVehiclePage("bus-with-washroom", "Bus with Washroom");
