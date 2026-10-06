import GlobalVehicleSelector, {
  type GlobalVehicleSlug,
} from "@/app/components/GlobalVehicleSelector";
import PageJsonLd from "@/app/components/seo/PageJsonLd";
import { getVehicle } from "@/lib/cms";

export function createGlobalVehiclePage(
  vehicle: GlobalVehicleSlug,
  name: string,
) {
  return async function GlobalVehiclePage() {
    const cmsData = await getVehicle("global", vehicle);

    return (
      <>
        <PageJsonLd
          name={`${name} Rental in India`}
          description={`Book ${name} rental services across India with Urban Cruise.`}
          path={`/${vehicle}`}
        />
        <GlobalVehicleSelector
          vehicle={vehicle}
          cmsMeta={cmsData?.vehicle?.meta ?? null}
          cmsSections={cmsData?.vehicle?.sections ?? null}
        />
      </>
    );
  };
}

