export const BRAND = { green: "#03C35E", dark: "#142236" };

export type Job = {
  id: string;
  title: string;
  location: string;
  type: "Full-time" | "Part-time";
  department: "Driving" | "Operations" | "Sales" | "Support";
  experience: string;
  summary: string;
};

export const jobs: Job[] = [
  {
    id: "bus-driver",
    title: "Bus Driver",
    location: "Delhi NCR",
    type: "Full-time",
    department: "Driving",
    experience: "3+ years, HMV licence",
    summary: "Drive our tempo travellers and coaches for corporate, wedding and tour bookings.",
  },
  {
    id: "car-driver",
    title: "Chauffeur (Car)",
    location: "Delhi NCR",
    type: "Full-time",
    department: "Driving",
    experience: "2+ years, LMV licence",
    summary: "Provide airport transfers and outstation trips with polite, punctual service.",
  },
  {
    id: "fleet-coordinator",
    title: "Fleet Coordinator",
    location: "Ghaziabad",
    type: "Full-time",
    department: "Operations",
    experience: "1-3 years",
    summary: "Plan vehicle schedules, assign drivers and make sure every trip leaves on time.",
  },
  {
    id: "sales-executive",
    title: "Sales Executive",
    location: "Delhi NCR",
    type: "Full-time",
    department: "Sales",
    experience: "Freshers welcome",
    summary: "Handle enquiries, share quotes and convert bookings for car and bus rentals.",
  },
  {
    id: "customer-support",
    title: "Customer Support Associate",
    location: "Ghaziabad",
    type: "Part-time",
    department: "Support",
    experience: "Freshers welcome",
    summary: "Answer calls and WhatsApp messages and keep customers updated during their trips.",
  },
];