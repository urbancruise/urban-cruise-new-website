export type ServiceSeoContent = {
  name: string;
  title: string;
  description: string;
  introduction: string;
  faqs: Array<{ question: string; answer: string }>;
};

export const SERVICE_SEO_CONTENT: Record<string, ServiceSeoContent> = {
  "jim-corbett": {
    name: "Jim Corbett Vehicle Rental",
    title: "Jim Corbett Vehicle Rental",
    description:
      "Plan a comfortable Delhi, Gurugram, Mumbai or Pune journey to Jim Corbett with a private car, tempo traveller or bus and an experienced driver.",
    introduction:
      "A Jim Corbett trip often combines a long road journey, hotel transfers and early sightseeing. Choose a vehicle that keeps your group and luggage together from pickup to return.",
    faqs: [
      { question: "Which vehicle is suitable for a Jim Corbett trip?", answer: "A sedan or SUV suits a small group, while a tempo traveller or bus is more comfortable for families and larger groups with luggage." },
      { question: "Can pickup and return travel be booked together?", answer: "Yes. Share the pickup city, travel dates and return plan so the vehicle and driver can be scheduled for the complete itinerary." },
    ],
  },
  "do-dham": {
    name: "Do Dham Yatra Package",
    title: "Do Dham Yatra Vehicle Rental",
    description:
      "Arrange dependable car, tempo traveller or bus transport for a Do Dham Yatra, with vehicle planning for pilgrims, luggage and multi-day road travel.",
    introduction:
      "A Do Dham itinerary needs practical planning around group size, luggage, road time and rest stops. Urban Cruise helps you select one vehicle for the planned pilgrimage route.",
    faqs: [
      { question: "Can a Do Dham booking support a family group?", answer: "Yes. Cars work for small families, while tempo travellers and buses provide shared travel for larger pilgrimage groups." },
      { question: "What details are needed for a yatra quote?", answer: "Provide the pickup city, dates, number of travellers, luggage needs and planned route so the vehicle can be matched accurately." },
    ],
  },
  "char-dham": {
    name: "Char Dham Yatra Package",
    title: "Char Dham Yatra Vehicle Rental",
    description:
      "Book a suitable car, tempo traveller or bus for Char Dham travel, with comfortable group transport planned around a multi-day pilgrimage itinerary.",
    introduction:
      "Char Dham travel involves a longer, multi-day route where seating, luggage capacity and itinerary coordination matter. Start with a vehicle plan built around your group.",
    faqs: [
      { question: "Which vehicle is practical for Char Dham travel?", answer: "The right choice depends on group size and luggage; cars suit small groups, while tempo travellers and buses support larger parties." },
      { question: "Can the itinerary include multiple pickup points?", answer: "Share the proposed pickup points and route when requesting a quote so the journey can be planned as one coordinated booking." },
    ],
  },
  pilgrimage: {
    name: "Pilgrimage Vehicle Rental",
    title: "Pilgrimage Vehicle Rental with Driver",
    description:
      "Book chauffeur-driven cars, tempo travellers and buses for pilgrimage groups, with flexible transport for temple visits, luggage and shared travel.",
    introduction:
      "Pilgrimage groups often need early departures, multiple stops and space for personal belongings. A dedicated vehicle makes the route easier to coordinate for everyone.",
    faqs: [
      { question: "Do pilgrimage groups have car and bus options?", answer: "Yes. Vehicle options include cars for smaller parties and tempo travellers or buses for larger groups travelling together." },
      { question: "Can multiple temples be included in one booking?", answer: "Yes. Provide the destinations and dates so the route, vehicle size and driver schedule can be reviewed together." },
    ],
  },
  wedding: {
    name: "Wedding Car & Bus Rental",
    title: "Wedding Car & Bus Rental",
    description:
      "Coordinate wedding guest transport with luxury cars, vans and buses for venue transfers, family movement and airport or hotel pickups.",
    introduction:
      "Wedding transport works best when guest movements, venue timings and airport or hotel pickups are planned together. Use separate vehicle sizes where the schedule needs it.",
    faqs: [
      { question: "Can wedding transport include guest shuttles?", answer: "Yes. Cars, vans and buses can be arranged for guest movement between airports, hotels, venues and related events." },
      { question: "Can luxury cars be booked for the wedding family?", answer: "Yes. Share the family itinerary and timing so luxury cars can be coordinated alongside the larger guest vehicles." },
    ],
  },
  corporate: {
    name: "Corporate Transportation",
    title: "Corporate Transportation with Chauffeur",
    description:
      "Arrange corporate cars, vans and buses for employee movement, client meetings, airport transfers, office routes and business events.",
    introduction:
      "Corporate travel depends on punctual pickups, clear schedules and the right vehicle for each group. A planned transport service helps teams move between offices, hotels and events.",
    faqs: [
      { question: "Can corporate transport cover airport and office transfers?", answer: "Yes. Share the flight, office, hotel and meeting schedule so the required vehicles can be coordinated." },
      { question: "Are buses available for employee movement?", answer: "Yes. Buses and vans can support larger employee groups, while cars suit executives, clients and smaller teams." },
    ],
  },
  vacations: {
    name: "Vacation Bus & Car Rental",
    title: "Vacation Car, Tempo Traveller & Bus Rental",
    description:
      "Plan family holidays and group tours with comfortable cars, tempo travellers and buses, including local sightseeing and outstation journeys.",
    introduction:
      "A holiday vehicle should fit the group, luggage and stops rather than force travellers into separate transfers. Choose a car, tempo traveller or bus around the full itinerary.",
    faqs: [
      { question: "Which vehicle is best for a family holiday?", answer: "Cars suit small families, while tempo travellers and buses offer shared seating and luggage space for larger holiday groups." },
      { question: "Can vacation rental include sightseeing stops?", answer: "Yes. Include the destinations and expected travel dates so the vehicle and driver plan can support the complete holiday." },
    ],
  },
  "local-travel": {
    name: "Local Bus & Car Rental",
    title: "Local Car, Van & Bus Rental",
    description:
      "Book local cars, vans and buses for airport transfers, city sightseeing, meetings, events and planned travel within your service area.",
    introduction:
      "Local travel may involve several stops in one day. A reserved vehicle keeps airport pickups, sightseeing, meetings or event movement on one coordinated schedule.",
    faqs: [
      { question: "Can local rental include airport transfers?", answer: "Yes. Share the airport, pickup time and onward stops so the vehicle can be planned around your local itinerary." },
      { question: "Can I book a bus for city sightseeing?", answer: "Yes. Buses and vans are useful for larger sightseeing groups, while cars suit individuals and smaller parties." },
    ],
  },
};

export function getServiceSeoContent(serviceType: string): ServiceSeoContent {
  return SERVICE_SEO_CONTENT[serviceType] || SERVICE_SEO_CONTENT["local-travel"];
}
