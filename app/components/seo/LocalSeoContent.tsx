import Link from "next/link";
import { formatLocationName } from "@/app/lib/location";
import JsonLd from "./JsonLd";
import { faqPageSchema } from "@/lib/schema";
import ContextualInternalLinks from "./ContextualInternalLinks";
import { getServiceSeoContent } from "@/lib/service-seo";
import { getVehicleSeoContent } from "@/lib/vehicle-seo";

type ContentIntent = "home" | "vehicle" | "service";

type CityContent = {
  heading: string;
  introduction: string;
  transport: string;
  airport: string;
  destinations: string[];
  useCases: string[];
  note: string;
  faqs: Array<{ question: string; answer: string }>;
};

const CITY_CONTENT: Record<string, CityContent> = {
  delhi: {
    heading: "Delhi NCR Car and Bus Rental for Planned Journeys",
    introduction:
      "From airport arrivals in Aerocity to meetings across Delhi, Noida and Gurugram, a pre-booked vehicle keeps your itinerary together and leaves room for sightseeing or an outstation leg.",
    transport:
      "Delhi travellers often need one vehicle for airport pickups, business meetings across NCR and full-day sightseeing. A pre-booked car or group vehicle avoids changing between metro, taxi and local transfers.",
    airport:
      "Indira Gandhi International Airport is the main airport for Delhi and the wider NCR. Urban Cruise can coordinate airport pickup and drop services with the vehicle size matched to passengers and luggage.",
    destinations: ["Red Fort", "Qutub Minar", "India Gate", "Agra and Jaipur routes"],
    useCases: ["NCR business travel", "airport transfers", "family sightseeing", "outstation journeys"],
    note: "Delhi routes can also connect naturally with Gurugram, Noida and other NCR business and residential areas.",
    faqs: [
      { question: "Which vehicle works for Delhi airport luggage?", answer: "A sedan suits a small party, while an Innova, tempo traveller or bus is more practical when several passengers have checked luggage." },
      { question: "Can Delhi rental cover Agra or Jaipur?", answer: "Yes. Share the route and dates when requesting a quote so the vehicle and driver plan match the outstation itinerary." },
      { question: "Do you provide NCR corporate travel?", answer: "Cars, vans and buses can be arranged for meetings, hotel transfers and scheduled movement across Delhi NCR." },
    ],
  },
  gurugram: {
    heading: "Gurugram Corporate and Airport Transport with a Driver",
    introduction:
      "Gurugram trips often run between offices, hotels and the airport on a tight schedule. A dedicated car or group vehicle reduces handovers between meetings and keeps the day coordinated.",
    transport:
      "Gurugram travel commonly combines office districts, hotels, airport transfers and nearby NCR destinations. A chauffeur-driven vehicle is useful when a day includes Cyber City, meetings and a return airport transfer.",
    airport:
      "Indira Gandhi International Airport is the nearest major airport for Gurugram. Pre-booked cars, vans and buses help coordinate corporate groups and luggage between the airport, hotels and offices.",
    destinations: ["Cyber City", "Golf Course Road", "Udyog Vihar", "Delhi and Jaipur routes"],
    useCases: ["corporate transportation", "airport transfers", "hotel transfers", "NCR group travel"],
    note: "Gurugram bookings are planned separately from Delhi so pickup timing and the local service area remain clear.",
    faqs: [
      { question: "Is Gurugram airport pickup available for business groups?", answer: "Yes. Cars, vans and buses can be matched to passenger count, luggage and hotel or office drop points." },
      { question: "Which vehicle is best for Cyber City meetings?", answer: "A chauffeur-driven sedan or SUV suits a small executive group; a van or bus is better when colleagues travel together." },
      { question: "Can a Gurugram booking include Delhi routes?", answer: "Yes. Mention the NCR stops and timing so the itinerary can be planned as one journey rather than separate transfers." },
    ],
  },
  mumbai: {
    heading: "Mumbai Airport, Corporate and Sightseeing Vehicle Rental",
    introduction:
      "Mumbai itineraries can shift from the airport to a hotel, office or South Mumbai landmark in the same day. A reserved vehicle keeps people and luggage together through those changes.",
    transport:
      "Mumbai journeys often involve airport transfers, hotels, business districts and South Mumbai sightseeing in the same itinerary. With a driver, travellers can keep luggage and group members together between stops.",
    airport:
      "Chhatrapati Shivaji Maharaj International Airport serves Mumbai. Urban Cruise can arrange airport pickup and drop with cars, luxury vans or buses based on the group size and luggage.",
    destinations: ["Gateway of India", "Marine Drive", "Bandra", "Lonavala and Pune routes"],
    useCases: ["airport transfers", "corporate travel", "wedding guest movement", "city sightseeing"],
    note: "Mumbai itineraries can be tailored around traffic-sensitive schedules, airport timing and longer western Maharashtra routes.",
    faqs: [
      { question: "Can Mumbai airport transfers include multiple stops?", answer: "Yes. Provide the flight, hotel and onward stop details so the route can be planned around the group and luggage." },
      { question: "What should a Mumbai sightseeing group book?", answer: "Cars work for small parties, while luxury vans and buses are useful when the group wants to stay together across several landmarks." },
      { question: "Can Mumbai transport cover Pune or Lonavala?", answer: "Yes. Outstation routes can be requested with the preferred vehicle size, travel date and return plan." },
    ],
  },
  pune: {
    heading: "Pune Car and Tempo Traveller Rental for City and Outstation Travel",
    introduction:
      "Pune bookings commonly combine airport or railway pickups, technology parks, education hubs and weekend drives. Choosing one vehicle helps families, students and work groups travel together.",
    transport:
      "Pune travel often combines airport or railway transfers, technology parks, education hubs and weekend routes toward nearby destinations. A dedicated vehicle keeps family, corporate or student groups together.",
    airport:
      "Pune Airport serves the city and nearby business and residential areas. Advance booking helps coordinate pickup timing, luggage and onward travel in one vehicle.",
    destinations: ["Shaniwar Wada", "Aga Khan Palace", "Lonavala", "Mumbai routes"],
    useCases: ["outstation car rental", "corporate transportation", "student and family travel", "tourist transportation"],
    note: "Pune bookings can cover local travel as well as longer Maharashtra journeys with a car, tempo traveller or bus.",
    faqs: [
      { question: "Is Pune rental suitable for student or family groups?", answer: "Yes. Cars suit smaller parties, while tempo travellers and buses provide shared travel for larger groups and luggage." },
      { question: "Can Pune airport pickup connect to an outstation trip?", answer: "Yes. Include the airport arrival and onward destination when requesting a quote so the same journey can be coordinated." },
      { question: "Which routes are popular from Pune?", answer: "Lonavala, Mumbai and other Maharashtra routes can be planned with a car, tempo traveller or bus based on group size." },
    ],
  },
};

export default function LocalSeoContent({
  location,
  intent = "home",
  subject,
  serviceType,
  vehicleType,
}: {
  location: string;
  intent?: ContentIntent;
  subject?: string;
  serviceType?: string;
  vehicleType?: string;
}) {
  const city = formatLocationName(location);
  const cityContent = CITY_CONTENT[location] || CITY_CONTENT.delhi;
  const serviceContent = serviceType ? getServiceSeoContent(serviceType) : null;
  const vehicleContent = vehicleType ? getVehicleSeoContent(vehicleType) : null;
  const content = serviceContent
    ? {
        ...cityContent,
        heading: `${serviceContent.name} in ${city}`,
        introduction: serviceContent.introduction,
        faqs: serviceContent.faqs,
      }
    : vehicleContent
      ? {
          ...cityContent,
          heading: `${vehicleContent.name} Rental in ${city}`,
          introduction: vehicleContent.description,
          useCases: vehicleContent.uses,
          faqs: [
            {
              question: `Who should choose ${vehicleContent.name}?`,
              answer: `${vehicleContent.name} is suited to ${vehicleContent.uses.join(", ").toLowerCase()}. Confirm the vehicle configuration and route when requesting a quote.`,
            },
            {
              question: `How many passengers can ${vehicleContent.name} carry?`,
              answer: vehicleContent.seating,
            },
          ],
        }
    : cityContent;
  const heading =
    intent === "home" || serviceContent || vehicleContent
      ? content.heading
      : `${subject || "Vehicle Rental"} in ${city}: Practical Travel Options`;
  const faqs = content.faqs;

  return (
    <>
      <JsonLd
        data={faqPageSchema(faqs)}
      />
      <section className="bg-white py-14 md:py-20" aria-labelledby="local-travel-content">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <h2 id="local-travel-content" className="mb-4 text-3xl font-bold text-[#142236] md:text-4xl">
            {heading}
          </h2>
          <p className="mb-4 text-gray-600">{content.introduction}</p>
          <p className="mb-4 text-gray-600">{content.transport}</p>
          <p className="text-gray-600">{content.note}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <InfoBlock title={`${city} Airport Transfers`} text={content.airport} />
          {vehicleContent && (
            <>
              <InfoBlock title="Seating and luggage" text={`${vehicleContent.seating} ${vehicleContent.luggage}`} />
              <InfoBlock title="Vehicle features" text={vehicleContent.features.join(", ")} />
            </>
          )}
          <InfoBlock title="Popular Travel Areas" text={content.destinations.join(", ")} />
          <InfoBlock title="Useful Rental Options" text={content.useCases.join(", ")} />
          <div className="rounded-xl border border-gray-100 bg-[#f8fafb] p-5 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-[#142236]">Plan Your Ride</h3>
            <p className="mb-4 text-sm text-gray-600">
              Choose a vehicle and request a quote for your {city} journey.
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              <Link className="text-[#03a957] hover:underline" href={`/${location}/book`}>
                Book in {city}
              </Link>
              <Link className="text-[#03a957] hover:underline" href={`/${location}/faqs`}>
                Read FAQs
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-3 text-2xl font-bold text-[#142236]">
            {city} Vehicle Rental FAQs
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {faqs.map((faq) => (
              <Faq key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </div>
      </section>
      <ContextualInternalLinks location={location} />
    </>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-[#f8fafb] p-5 shadow-sm">
      <h3 className="mb-3 text-lg font-semibold text-[#142236]">{title}</h3>
      <p className="text-sm leading-6 text-gray-600">{text}</p>
    </div>
  );
}

function Faq({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-xl border border-gray-100 p-5">
      <h4 className="mb-2 font-semibold text-[#142236]">{question}</h4>
      <p className="text-sm leading-6 text-gray-600">{answer}</p>
    </div>
  );
}
