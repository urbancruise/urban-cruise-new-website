export type VehicleSeoContent = {
  name: string;
  title: string;
  description: string;
  seating: string;
  luggage: string;
  features: string[];
  uses: string[];
};

export const VEHICLE_SEO_CONTENT: Record<string, VehicleSeoContent> = {
  "car-suvs": {
    name: "Cars and SUVs",
    title: "Car Rental with Driver",
    description: "Book a sedan or SUV with a professional driver for city travel, airport transfers, business trips and outstation journeys.",
    seating: "Best for small groups; confirm the exact model and seating when booking.",
    luggage: "Boot space varies by model and passenger count.",
    features: ["Air conditioning", "Professional driver", "Flexible pickup", "City and outstation use"],
    uses: ["Airport transfers", "Business travel", "Family sightseeing", "Outstation trips"],
  },
  ertiga: {
    name: "Maruti Suzuki Ertiga",
    title: "Maruti Suzuki Ertiga Rental",
    description: "Hire an Ertiga with a driver for family travel, airport pickups, local sightseeing and practical outstation journeys.",
    seating: "A practical multi-row vehicle for families; confirm available seating for your booking.",
    luggage: "Luggage space depends on the number of passengers and seat configuration.",
    features: ["Air conditioning", "Multi-row seating", "Driver included", "Family-friendly layout"],
    uses: ["Family trips", "Airport transfers", "Local travel", "Outstation travel"],
  },
  "innova-crysta": {
    name: "Toyota Innova Crysta",
    title: "Toyota Innova Crysta Rental",
    description: "Reserve a Toyota Innova Crysta with a driver for comfortable family trips, airport transfers, corporate travel and long routes.",
    seating: "A spacious multi-row option for families and small groups; confirm the assigned vehicle configuration.",
    luggage: "Suitable for everyday group luggage, subject to passenger count and seat use.",
    features: ["Comfortable cabin", "Air conditioning", "Chauffeur-driven", "Long-distance suitability"],
    uses: ["Family holidays", "Corporate travel", "Airport pickups", "Outstation routes"],
  },
  hycross: {
    name: "Toyota Innova Hycross",
    title: "Toyota Innova Hycross Rental",
    description: "Book an Innova Hycross with a driver for premium family travel, executive movement, airport transfers and comfortable road trips.",
    seating: "A premium multi-row vehicle for small groups; confirm seating and model availability before booking.",
    luggage: "Luggage capacity depends on passengers and the selected seating arrangement.",
    features: ["Premium cabin", "Air conditioning", "Professional driver", "Comfort-focused travel"],
    uses: ["Executive travel", "Family journeys", "Airport transfers", "Outstation travel"],
  },
  "luxury-cars-suvs": {
    name: "Luxury Cars and SUVs",
    title: "Luxury Car and SUV Rental",
    description: "Arrange a luxury car or SUV with a professional driver for weddings, executive travel, events, airport transfers and special occasions.",
    seating: "Model-dependent seating for individuals, families or executive groups.",
    luggage: "Confirm luggage needs with the selected luxury model before booking.",
    features: ["Premium interiors", "Chauffeur service", "Event-ready presentation", "Comfortable transfers"],
    uses: ["Weddings", "Corporate travel", "VIP movement", "Airport transfers"],
  },
  "mercedes-sprinter": {
    name: "Mercedes Sprinter Van",
    title: "Mercedes Sprinter Van Rental",
    description: "Hire a Mercedes Sprinter van with a driver for premium group transfers, corporate events, weddings and airport movements.",
    seating: "Seating varies by the Sprinter configuration available for the booking.",
    luggage: "Confirm luggage volume and seating layout for your group before reserving.",
    features: ["Premium group cabin", "Air conditioning", "Professional driver", "Event and airport suitability"],
    uses: ["Corporate groups", "Wedding guests", "Airport transfers", "Premium tours"],
  },
  "luxury-vans": {
    name: "Luxury Van",
    title: "Luxury Van Rental with Driver",
    description: "Book a luxury van with a driver for group airport transfers, weddings, corporate movement, sightseeing and outstation travel.",
    seating: "Group seating varies by the available luxury van model.",
    luggage: "Capacity depends on group size, vehicle configuration and luggage volume.",
    features: ["Comfortable group seating", "Air conditioning", "Driver included", "Flexible itinerary"],
    uses: ["Group tours", "Weddings", "Corporate travel", "Airport transfers"],
  },
  "tempo-traveller": {
    name: "Tempo Traveller",
    title: "Tempo Traveller Rental",
    description: "Reserve a tempo traveller with a driver for family holidays, pilgrimage trips, group sightseeing, weddings and outstation routes.",
    seating: "Multiple seating configurations are available; confirm the required size for your group.",
    luggage: "Luggage space varies by seating configuration and passenger count.",
    features: ["Shared group travel", "Air conditioning", "Driver included", "Outstation suitability"],
    uses: ["Family holidays", "Pilgrimage", "Wedding guests", "Sightseeing"],
  },
  "maharaja-tempo-traveller": {
    name: "Maharaja Tempo Traveller",
    title: "Maharaja Tempo Traveller Rental",
    description: "Hire a Maharaja Tempo Traveller for premium group travel, family tours, weddings, pilgrimage journeys and long-distance routes.",
    seating: "Premium group seating varies by the available vehicle configuration.",
    luggage: "Confirm luggage requirements because capacity depends on passengers and seating.",
    features: ["Premium interiors", "Comfort seating", "Air conditioning", "Professional driver"],
    uses: ["Luxury group tours", "Weddings", "Pilgrimage", "Outstation travel"],
  },
  urbania: {
    name: "Force Urbania",
    title: "Force Urbania Rental",
    description: "Book a Force Urbania with a driver for premium group tours, weddings, corporate travel, airport transfers and outstation journeys.",
    seating: "Available seating varies by Urbania configuration; confirm the required layout before booking.",
    luggage: "Luggage capacity depends on the selected layout and passenger count.",
    features: ["Premium group cabin", "Comfort seating", "Air conditioning", "Driver included"],
    uses: ["Corporate groups", "Wedding guests", "Family tours", "Airport transfers"],
  },
  "mini-bus": {
    name: "Mini Bus",
    title: "Mini Bus Rental with Driver",
    description: "Arrange a mini bus with a driver for school groups, corporate outings, events, sightseeing and local or outstation travel.",
    seating: "Group seating varies by the mini bus available for your route.",
    luggage: "Confirm luggage requirements and storage arrangements when requesting a quote.",
    features: ["Group seating", "Air conditioning options", "Professional driver", "Event suitability"],
    uses: ["Corporate outings", "School groups", "Events", "Sightseeing"],
  },
  "luxury-bus": {
    name: "Luxury Bus",
    title: "Luxury Bus Rental",
    description: "Book a luxury bus with a driver for weddings, corporate events, group tours, airport transfers and comfortable long-distance travel.",
    seating: "Capacity varies by the available luxury bus configuration.",
    luggage: "Confirm luggage storage and passenger capacity for the selected bus.",
    features: ["Comfortable group seating", "Air conditioning", "Professional driver", "Long-route suitability"],
    uses: ["Weddings", "Corporate events", "Group tours", "Outstation travel"],
  },
  "volvo-bus": {
    name: "Volvo Bus",
    title: "Volvo Bus Rental",
    description: "Reserve a Volvo bus with a driver for premium group travel, corporate movement, weddings, tours and long-distance journeys.",
    seating: "Capacity and seating layout vary by the available Volvo bus.",
    luggage: "Confirm luggage storage requirements when planning a group booking.",
    features: ["Premium coach travel", "Comfort seating", "Air conditioning", "Experienced driver"],
    uses: ["Corporate travel", "Weddings", "Tours", "Long-distance journeys"],
  },
  "bharat-benz-bus": {
    name: "BharatBenz Bus",
    title: "BharatBenz Bus Rental",
    description: "Hire a BharatBenz bus with a driver for group tours, events, corporate travel, weddings and dependable intercity transport.",
    seating: "Capacity depends on the BharatBenz configuration available for your booking.",
    luggage: "Confirm luggage arrangements and passenger count with the booking team.",
    features: ["Large-group seating", "Air conditioning options", "Professional driver", "Intercity suitability"],
    uses: ["Tours", "Events", "Corporate groups", "Wedding guests"],
  },
  "bus-with-washroom": {
    name: "Bus with Washroom",
    title: "Bus with Washroom Rental",
    description: "Arrange a bus with washroom facilities for long-distance group tours, events, pilgrimage travel and journeys with fewer roadside stops.",
    seating: "Capacity varies by the bus configuration; confirm availability for your route.",
    luggage: "Discuss luggage volume and storage requirements before booking.",
    features: ["Onboard washroom", "Group seating", "Professional driver", "Long-route suitability"],
    uses: ["Long tours", "Pilgrimage", "Events", "Intercity travel"],
  },
  "sleeper-bus": {
    name: "Sleeper Bus",
    title: "Sleeper Bus Rental",
    description: "Book a sleeper bus with a driver for overnight group travel, long-distance tours, pilgrimages and comfortable intercity journeys.",
    seating: "Berth and seating layout varies by the available sleeper bus.",
    luggage: "Confirm luggage storage and berth configuration when requesting a quote.",
    features: ["Sleeper berths", "Long-route comfort", "Professional driver", "Overnight travel suitability"],
    uses: ["Overnight journeys", "Long tours", "Pilgrimage", "Intercity travel"],
  },
};

export function getVehicleSeoContent(vehicleType: string): VehicleSeoContent {
  return VEHICLE_SEO_CONTENT[vehicleType] || VEHICLE_SEO_CONTENT["car-suvs"];
}
