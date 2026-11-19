export const GREEN = "#03C35E";
export const NAVY = "#142236";

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  category: string;
  rating: number;
  date: string;
  avatar: string;
  content: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Delhi",
    category: "heritage",
    rating: 5,
    date: "January 2026",
    avatar:
      "https://ui-avatars.com/api/?name=Rahul+Sharma&background=03C35E&color=fff&size=100",
    content:
      "Urban Cruise Delhi made our heritage tour unforgettable. The chauffeur was incredibly knowledgeable about Delhi's history and took us to all the iconic spots. The luxury vehicle was immaculate and comfortable. Highly recommend for anyone wanting to explore Delhi in style!",
    service: "Heritage Tour",
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Delhi NCR",
    category: "corporate",
    rating: 5,
    date: "December 2025",
    avatar:
      "https://ui-avatars.com/api/?name=Priya+Patel&background=142236&color=fff&size=100",
    content:
      "As a corporate executive, I rely on Urban Cruise for all my airport transfers and client meetings in Delhi. Their punctuality and professionalism are unmatched. The fleet is always top-notch and the drivers are courteous and professional.",
    service: "Corporate Travel",
  },
  {
    id: 3,
    name: "Amit Kumar",
    location: "Delhi",
    category: "wedding",
    rating: 4.5,
    date: "November 2025",
    avatar:
      "https://ui-avatars.com/api/?name=Amit+Kumar&background=03C35E&color=fff&size=100",
    content:
      "We hired Urban Cruise for our wedding transportation and they exceeded our expectations. The fleet looked stunning, and the coordination was flawless. Our guests were highly impressed with the service. Thank you for making our special day even more memorable!",
    service: "Wedding Transport",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    location: "Delhi NCR",
    category: "tourist",
    rating: 5,
    date: "October 2025",
    avatar:
      "https://ui-avatars.com/api/?name=Sneha+Reddy&background=142236&color=fff&size=100",
    content:
      "Being a tourist in Delhi, I was nervous about navigating the city. Urban Cruise made it so easy! My driver was patient, helpful, and knew all the best spots. I visited places I would have never found on my own. A must-use service for tourists!",
    service: "City Tour",
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Delhi",
    category: "business",
    rating: 5,
    date: "September 2025",
    avatar:
      "https://ui-avatars.com/api/?name=Vikram+Singh&background=03C35E&color=fff&size=100",
    content:
      "Urban Cruise has been my go-to service for business travel in Delhi for over two years. Their reliability is unmatched. The vehicles are always clean and well-maintained, and the drivers are professional. Highly recommended for business professionals.",
    service: "Business Travel",
  },
  {
    id: 6,
    name: "Ananya Verma",
    location: "Delhi",
    category: "family",
    rating: 5,
    date: "August 2025",
    avatar:
      "https://ui-avatars.com/api/?name=Ananya+Verma&background=142236&color=fff&size=100",
    content:
      "Our family trip to Delhi was made special by Urban Cruise. The SUV was spacious and comfortable for all five of us. The driver was friendly and suggested great family-friendly spots. The kids loved the experience!",
    service: "Family Travel",
  },
  {
    id: 7,
    name: "Deepak Malhotra",
    location: "Delhi NCR",
    category: "corporate",
    rating: 4.5,
    date: "July 2025",
    avatar:
      "https://ui-avatars.com/api/?name=Deepak+Malhotra&background=03C35E&color=fff&size=100",
    content:
      "Our company has partnered with Urban Cruise for all our corporate events in Delhi. Their service is consistently excellent. They handle everything from logistics to client satisfaction with utmost professionalism.",
    service: "Corporate Events",
  },
  {
    id: 8,
    name: "Meera Gupta",
    location: "Delhi",
    category: "luxury",
    rating: 5,
    date: "June 2025",
    avatar:
      "https://ui-avatars.com/api/?name=Meera+Gupta&background=142236&color=fff&size=100",
    content:
      "I used Urban Cruise's luxury car service for my anniversary celebration in Delhi. The Mercedes was pristine, the driver was dressed professionally, and the service was impeccable. It made our special evening truly magical.",
    service: "Luxury Travel",
  },
];

export const categories = [
  { id: "all", label: "All Reviews" },
  { id: "heritage", label: "Heritage" },
  { id: "corporate", label: "Corporate" },
  { id: "wedding", label: "Wedding" },
  { id: "tourist", label: "Tourist" },
  { id: "business", label: "Business" },
  { id: "family", label: "Family" },
  { id: "luxury", label: "Luxury" },
];