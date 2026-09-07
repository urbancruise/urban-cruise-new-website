import GlobalVehicleSelector, {
  type GlobalVehicleSlug,
} from "@/app/components/GlobalVehicleSelector";
import PageJsonLd from "@/app/components/seo/PageJsonLd";

export function createGlobalVehiclePage(
  vehicle: GlobalVehicleSlug,
  name: string,
) {
  return function GlobalVehiclePage() {
    return (
      <>
        <PageJsonLd
          name={`${name} Rental in India`}
          description={`Book ${name} rental services across India with Urban Cruise.`}
          path={`/${vehicle}`}
        />
        <GlobalVehicleSelector vehicle={vehicle} />
      </>
    );
  };
}
