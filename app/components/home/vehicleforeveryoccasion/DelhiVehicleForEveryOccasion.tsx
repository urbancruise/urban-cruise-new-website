// // app/components/home/vehicleforeveryoccasion/DelhiVehicleForEveryOccasion.tsx
// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import {
//   FaBriefcase,
//   FaCheck,
//   FaMapMarkerAlt,
//   FaSnowflake,
//   FaUsers,
// } from "react-icons/fa";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { MdOutlineBeachAccess } from "react-icons/md";
// import { motion, AnimatePresence } from "framer-motion";

// const GREEN = "#03C35E";
// const ORANGE = "#F7941E";
// const DARK = "#12233F";

// type Card = {
//   title: string;
//   highlight: string;
//   description: string;
//   seats: string;
//   price: string;
//   location: string;
//   image: string;
//   features: string[];
// };

// type Occasion = {
//   id: string;
//   label: string;
//   icon: React.ReactNode;
//   cards: Card[];
// };

// const occasions: Occasion[] = [
//   {
//     id: "wedding",
//     label: "WEDDING TRAVEL",
//     icon: <FaUsers />,
//     cards: [
//       {
//         title: "Tempo Traveller",
//         highlight: "For Wedding",
//         description:
//           "A Tempo Traveller for weddings in Delhi such as our Standard and Premium variants, is a multi-utility vehicle that comfortably accommodates 17–26 wedding guests, family members, and bridal party members. These spacious vans provide cost-effective group transportation for ceremonies.",
//         seats: "17 to 26 Seater",
//         price: "₹21/km",
//         location: "Delhi NCR",
//         image: "/images/vehicleforeverygroupsize/7.jpeg",
//         features: ["AC", "Music System", "Luggage Space", "Pushback Seats"],
//       },
//       {
//         title: "Luxury Coach",
//         highlight: "For Wedding",
//         description: "Premium wedding transport with luxury interiors and more space.",
//         seats: "30 to 40 Seater",
//         price: "₹35/km",
//         location: "Delhi NCR",
//         image: "/images/vehicleforeverygroupsize/8.jpeg",
//         features: ["AC", "Pushback Seats", "LED TV", "Music System"],
//       },
//     ],
//   },
//   {
//     id: "corporate",
//     label: "CORPORATE TRAVEL",
//     icon: <FaBriefcase />,
//     cards: [
//       {
//         title: "Tempo Traveller",
//         highlight: "For Corporate",
//         description: "Comfortable and professional group transportation for corporate meetings.",
//         seats: "12 to 26 Seater",
//         price: "₹21/km",
//         location: "Delhi NCR",
//         image: "/images/vehicleforeverygroupsize/8.jpeg",
//         features: ["AC", "Comfort Seats", "Luggage Space", "Music System"],
//       },
//       {
//         title: "Mini Bus",
//         highlight: "For Corporate",
//         description: "Perfect for larger corporate groups and offsite events.",
//         seats: "30 to 40 Seater",
//         price: "₹28/km",
//         location: "Delhi NCR",
//         image: "/images/vehicleforeverygroupsize/9.jpeg",
//         features: ["AC", "Recliner Seats", "WiFi", "Charging Points"],
//       },
//     ],
//   },
//   {
//     id: "vacation",
//     label: "VACATIONS",
//     icon: <MdOutlineBeachAccess />,
//     cards: [
//       {
//         title: "Tempo Traveller",
//         highlight: "For Vacation",
//         description: "Plan comfortable family vacations and group tours.",
//         seats: "12 to 26 Seater",
//         price: "₹21/km",
//         location: "Delhi NCR",
//         image: "/images/vehicleforeverygroupsize/9.jpeg",
//         features: ["AC", "Pushback Seats", "Luggage Space", "Experienced Driver"],
//       },
//       {
//         title: "SUV",
//         highlight: "For Vacation",
//         description: "Ideal for small families and off-road adventures.",
//         seats: "7 Seater",
//         price: "₹15/km",
//         location: "Delhi NCR",
//         image: "/images/vehicleforeverygroupsize/10.jpeg",
//         features: ["AC", "GPS", "Roof Carrier", "Comfort Seats"],
//       },
//     ],
//   },
//   {
//     id: "local",
//     label: "LOCAL TRAVEL",
//     icon: <FaMapMarkerAlt />,
//     cards: [
//       {
//         title: "Tempo Traveller",
//         highlight: "For Local Travel",
//         description: "Book a Tempo Traveller for comfortable local transportation.",
//         seats: "12 to 26 Seater",
//         price: "₹21/km",
//         location: "Delhi NCR",
//         image: "/images/vehicleforeverygroupsize/10.jpeg",
//         features: ["AC", "Spacious Seating", "Luggage Space", "GPS"],
//       },
//     ],
//   },
//   {
//     id: "pilgrimage",
//     label: "PILGRIMAGE TOUR",
//     icon: <FaMapMarkerAlt />,
//     cards: [
//       {
//         title: "Tempo Traveller",
//         highlight: "For Pilgrimage",
//         description: "Comfortable travel for religious tours and group pilgrimages.",
//         seats: "12 to 26 Seater",
//         price: "₹21/km",
//         location: "Delhi NCR",
//         image: "/images/vehicleforeverygroupsize/7.jpeg",
//         features: ["AC", "Pushback Seats", "Luggage Space", "Experienced Driver"],
//       },
//       {
//         title: "Mini Bus",
//         highlight: "For Pilgrimage",
//         description: "Ideal for large pilgrimage groups with luggage.",
//         seats: "30 to 40 Seater",
//         price: "₹28/km",
//         location: "Delhi NCR",
//         image: "/images/vehicleforeverygroupsize/8.jpeg",
//         features: ["AC", "Recliner Seats", "Luggage Space", "Music System"],
//       },
//     ],
//   },
// ];

// // --- Sub-components ---
// function OccasionTabs({
//   activeIndex,
//   onChange,
// }: {
//   activeIndex: number;
//   onChange: (index: number) => void;
// }) {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const [showLeftArrow, setShowLeftArrow] = useState(false);
//   const [showRightArrow, setShowRightArrow] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   const checkScroll = () => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const hasLeftScroll = container.scrollLeft > 5;
//       const hasRightScroll = container.scrollLeft < container.scrollWidth - container.clientWidth - 5;
//       setShowLeftArrow(hasLeftScroll);
//       setShowRightArrow(hasRightScroll);
//     }
//   };

//   useEffect(() => {
//     checkScroll();
//     window.addEventListener('resize', checkScroll);
//     const container = scrollContainerRef.current;
//     if (container) {
//       container.addEventListener('scroll', checkScroll);
//     }
//     return () => {
//       window.removeEventListener('resize', checkScroll);
//       if (container) {
//         container.removeEventListener('scroll', checkScroll);
//       }
//     };
//   }, []);

//   // Mouse drag to scroll
//   const handleMouseDown = (e: React.MouseEvent) => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       setIsDragging(true);
//       setStartX(e.pageX - container.offsetLeft);
//       setScrollLeft(container.scrollLeft);
//       container.style.cursor = 'grabbing';
//       container.style.userSelect = 'none';
//     }
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const container = scrollContainerRef.current;
//     if (container) {
//       const x = e.pageX - container.offsetLeft;
//       const walk = (x - startX) * 1.5;
//       container.scrollLeft = scrollLeft - walk;
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     const container = scrollContainerRef.current;
//     if (container) {
//       container.style.cursor = 'grab';
//       container.style.userSelect = 'auto';
//     }
//   };

//   const handleMouseLeave = () => {
//     if (isDragging) {
//       setIsDragging(false);
//       const container = scrollContainerRef.current;
//       if (container) {
//         container.style.cursor = 'grab';
//         container.style.userSelect = 'auto';
//       }
//     }
//   };

//   const scroll = (direction: 'left' | 'right') => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const scrollAmount = 250;
//       container.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <div className="relative flex w-full items-center justify-center">
//       {/* Left Arrow */}
//       {showLeftArrow && (
//         <button
//           onClick={() => scroll('left')}
//           className="absolute left-0 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl focus:outline-none md:h-9 md:w-9"
//           aria-label="Scroll left"
//         >
//           <IoIosArrowBack className="text-sm text-[#344054] md:text-base" />
//         </button>
//       )}

//       {/* Left Gradient Fade */}
//       {showLeftArrow && (
//         <div className="pointer-events-none absolute left-0 z-10 h-full w-12 bg-gradient-to-r from-white via-white/80 to-transparent" />
//       )}

//       {/* Scrollable Container with drag support */}
//       <div
//         ref={scrollContainerRef}
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//         onMouseLeave={handleMouseLeave}
//         className="flex max-w-full items-center gap-2 overflow-x-auto px-1 -pb-1 scrollbar-hide sm:gap-3 md:gap-4"
//         style={{ 
//           scrollbarWidth: 'none', 
//           msOverflowStyle: 'none',
//           cursor: 'grab'
//         }}
//       >
//         {occasions.map((occasion, index) => {
//           const active = activeIndex === index;
//           return (
//             <button
//               key={occasion.id}
//               type="button"
//               onClick={() => onChange(index)}
//               className={`group flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-[9px] font-bold transition-all duration-300 sm:px-5 sm:py-3 sm:text-[10px] md:px-6 md:text-[11px] ${
//                 active
//                   ? "border-[#F7941E] bg-[#F7941E] text-white shadow-[0_8px_25px_rgba(247,148,30,0.28)]"
//                   : "border-[#E8E8E8] bg-white text-[#344054] shadow-[0_4px_15px_rgba(0,0,0,0.06)] hover:border-[#03C35E] hover:text-[#03C35E]"
//               }`}
//             >
//               <span
//                 className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] transition-all duration-300 sm:h-6 sm:w-6 ${
//                   active
//                     ? "bg-white/20 text-white"
//                     : "bg-[#03C35E]/10 text-[#03C35E]"
//                 }`}
//               >
//                 {occasion.icon}
//               </span>
//               <span>{occasion.label}</span>
//             </button>
//           );
//         })}
//       </div>

//       {/* Right Gradient Fade */}
//       {showRightArrow && (
//         <div className="pointer-events-none absolute right-0 z-10 h-full w-12 bg-gradient-to-l from-white via-white/80 to-transparent" />
//       )}

//       {/* Right Arrow */}
//       {showRightArrow && (
//         <button
//           onClick={() => scroll('right')}
//           className="absolute right-0 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl focus:outline-none md:h-9 md:w-9"
//           aria-label="Scroll right"
//         >
//           <IoIosArrowForward className="text-sm text-[#344054] md:text-base" />
//         </button>
//       )}
//     </div>
//   );
// }

// function SmallBadge({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
//   return (
//     <div className="flex min-w-0 items-center gap-1.5 rounded-full bg-[#F6F8F7] px-2.5 py-1.5 text-[8px] font-semibold text-[#344054] sm:px-3 sm:text-[9px] md:text-[10px]">
//       <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[#03C35E]">
//         {icon}
//       </span>
//       <span className="truncate">{children}</span>
//     </div>
//   );
// }

// function FeatureItem({ text }: { text: string }) {
//   return (
//     <div className="flex items-center gap-1.5 rounded-full border border-[#B9DEBF] bg-white px-2.5 py-1.5 text-[8px] font-semibold text-[#344054] sm:px-3 sm:py-2 sm:text-[9px] md:text-[10px]">
//       <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#03C35E]/10 text-[#03C35E]">
//         <FaCheck className="text-[8px]" />
//       </span>
//       <span className="whitespace-nowrap">{text}</span>
//     </div>
//   );
// }

// function ImageFeature({ icon, title }: { icon: React.ReactNode; title: string }) {
//   return (
//     <div className="flex flex-1 items-center gap-2 rounded-lg bg-black/60 px-2 py-2 backdrop-blur-md sm:gap-2.5 sm:px-3 sm:py-2.5">
//       <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#03C35E]/20 text-[#03C35E] sm:h-8 sm:w-8">
//         {icon}
//       </span>
//       <span className="text-[7px] font-bold leading-tight text-white sm:text-[8px] md:text-[9px]">
//         {title}
//       </span>
//     </div>
//   );
// }

// function FeaturedOccasionCard({ card, direction }: { card: Card; direction: number }) {
//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={card.title + card.highlight}
//         initial={{ opacity: 0, x: direction > 0 ? 35 : -35 }}
//         animate={{ opacity: 1, x: 0 }}
//         exit={{ opacity: 0, x: direction > 0 ? -35 : 35 }}
//         transition={{ duration: 0.35, ease: "easeOut" }}
//         className="w-full"
//       >
//         <div className="relative overflow-hidden rounded-[18px] border border-[#E7E7E7] bg-white shadow-[0_12px_45px_rgba(0,0,0,0.10)] sm:rounded-[20px] md:rounded-[22px]">
//           <div className="grid w-full grid-cols-1 md:grid-cols-[46%_54%] lg:grid-cols-[47%_53%]">
//             {/* IMAGE */}
//             <div className="relative min-h-[260px] overflow-hidden sm:min-h-[320px] md:min-h-[350px] lg:min-h-[390px] xl:min-h-[410px]">
//               <Image
//                 src={card.image}
//                 alt={card.title}
//                 fill
//                 priority
//                 className="object-cover transition-transform duration-700 hover:scale-[1.03]"
//                 sizes="(max-width: 767px) 100vw, (max-width: 1023px) 46vw, 47vw"
//               />
//               <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
//             </div>

//             {/* CONTENT */}
//             <div className="flex flex-col justify-center px-5 py-6 sm:px-7 sm:py-7 md:px-7 md:py-8 lg:px-8 xl:px-10">
//               <h3 className="text-[22px] font-extrabold leading-tight tracking-[-0.04em] text-[#12233F] sm:text-[25px] md:text-[27px] lg:text-[29px] xl:text-[30px]">
//                 <span className="text-[#188A31]">{card.title}</span> {card.highlight}
//               </h3>
//               <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
//                 <SmallBadge icon={<FaUsers />}>{card.seats}</SmallBadge>
//                 <SmallBadge icon={<span className="font-bold">₹</span>}>
//                   Starts from {card.price}
//                 </SmallBadge>
//                 <SmallBadge icon={<FaMapMarkerAlt />}>{card.location}</SmallBadge>
//               </div>
//               <p className="mt-4 text-[10px] font-medium leading-[1.7] text-[#4B5563] sm:mt-5 sm:text-[11px] md:text-[12px] lg:text-[12px] xl:text-[13px]">
//                 {card.description}
//               </p>
//               <div className="mt-4 sm:mt-5">
//                 <p className="mb-2.5 text-[10px] font-bold text-[#263449] sm:text-[11px]">
//                   Key Features:
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {card.features.map((feature) => (
//                     <FeatureItem key={feature} text={feature} />
//                   ))}
//                 </div>
//               </div>
//               <div className="mt-5 flex flex-wrap justify-between gap-3 sm:mt-6">
//                 <motion.button
//                   whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(247,148,30,0.30)" }}
//                   whileTap={{ scale: 0.97 }}
//                   type="button"
//                   className="flex min-h-[39px] items-center justify-center gap-2 rounded-full bg-[#F7941E] px-5 text-[9px] font-bold text-white shadow-[0_6px_18px_rgba(247,148,30,0.22)] sm:min-h-[42px] sm:px-6 sm:text-[10px]"
//                 >
//                   BOOK NOW
//                   <IoIosArrowForward className="text-[15px]" />
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.03, backgroundColor: "#F5FFF8" }}
//                   whileTap={{ scale: 0.97 }}
//                   type="button"
//                   className="flex min-h-[39px] items-center justify-center gap-2 rounded-full border border-[#03C35E] bg-white px-5 text-[9px] font-bold text-[#188A31] transition-all sm:min-h-[42px] sm:px-6 sm:text-[10px]"
//                 >
//                   READ MORE
//                   <IoIosArrowForward className="text-[15px]" />
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// // --- MAIN COMPONENT ---
// export default function DelhiVehicleForEveryOccasion() {
//   const [activeTabIndex, setActiveTabIndex] = useState(0);
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   const currentCards = occasions[activeTabIndex].cards;
//   const currentCard = currentCards[slideIndex];

//   const changeTab = (index: number) => {
//     setActiveTabIndex(index);
//     setSlideIndex(0);
//     setDirection(1);
//   };

//   const nextSlide = () => {
//     setDirection(1);
//     setSlideIndex((prev) => (prev + 1) % currentCards.length);
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setSlideIndex((prev) => (prev - 1 + currentCards.length) % currentCards.length);
//   };

//   const startAutoPlay = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setSlideIndex((prev) => (prev + 1) % currentCards.length);
//       setDirection(1);
//     }, 5000);
//   };

//   useEffect(() => {
//     startAutoPlay();
//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, [activeTabIndex, currentCards.length]);

//   return (
//     <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
//       <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mb-9 grid w-full items-center gap-7 min-[375px]:mb-10 min-[375px]:gap-8 min-[430px]:mb-10 min-[430px]:gap-8 sm:mb-12 sm:gap-9 md:mb-14 md:gap-10 lg:mb-16 lg:grid-cols-[1fr_1fr] lg:gap-6 xl:mb-[72px] xl:gap-8 2xl:mb-20 2xl:gap-10"
//         >
//           <div className="w-full max-w-[720px] text-left">
//             <div className="mb-3 flex w-full items-center justify-start gap-2 min-[430px]:mb-3.5 min-[430px]:gap-2.5 sm:mb-4 md:gap-3 lg:gap-3.5 xl:gap-4">
//               <span className="block h-px w-5 shrink-0 bg-gray-400/60 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14" />
//               <span className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.14em] text-[#03C35E] min-[375px]:text-[8.5px] min-[430px]:text-[9px] min-[430px]:tracking-[0.16em] sm:text-[9.5px] sm:tracking-[0.18em] md:text-[10px] md:tracking-[0.2em] lg:text-[11px] xl:text-xs">
//                 Tempo Traveller For Every Occasion
//               </span>
//               <span className="block h-px w-5 shrink-0 bg-gray-400/60 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14" />
//             </div>
//             <h2 className="text-[24px] font-extrabold leading-[1.05] tracking-[-0.04em] text-black min-[375px]:text-[25px] min-[430px]:text-[27px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px]">
//               FOR EVERY <span className="text-[#188A31]">OCCASION</span>
//             </h2>
//             <p className="mt-3 font-serif text-[19px] italic leading-tight text-[#03C35E] min-[375px]:text-[20px] min-[430px]:text-[21px] sm:text-[22px] md:text-[25px] lg:text-[27px] xl:text-[30px] 2xl:text-[32px]">
//               The Right Tempo Traveller For Every Occasion
//             </p>
//             <div className="mt-4 max-w-[620px] space-y-3 text-[10px] leading-[1.7] text-[#303944] min-[375px]:text-[10.5px] min-[430px]:text-[11px] sm:mt-5 sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
//               <p>
//                 Hire Tempo Traveller rent in Delhi for every occasion—weddings,
//                 pilgrimages, trips, corporate events, tours, and Delhi Darshan.
//                 Comfortable, affordable travel for groups of all sizes.
//               </p>
//             </div>
//           </div>
//           <div className="relative hidden w-full items-center justify-center lg:flex lg:justify-end" />
//         </motion.div>

//         {/* TABS */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.15 }}
//           viewport={{ once: true }}
//           className="mt-5 sm:mt-6 md:mt-7"
//         >
//           <OccasionTabs activeIndex={activeTabIndex} onChange={changeTab} />
//         </motion.div>

//         {/* CAROUSEL */}
//         <div className="relative mt-5 sm:mt-6 md:mt-7">
//           <motion.button
//             type="button"
//             onClick={prevSlide}
//             whileHover={{ scale: 1.12, boxShadow: "0 8px 20px rgba(3,195,94,0.3)" }}
//             whileTap={{ scale: 0.9 }}
//             aria-label="Previous occasion"
//             className="absolute left-[-7px] top-1/2 z-40 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#159A27] text-white shadow-[0_5px_15px_rgba(3,195,94,0.25)] transition sm:left-[-15px] sm:h-10 sm:w-10 md:left-[-20px] lg:left-[-27px]"
//           >
//             <IoIosArrowBack className="text-[17px]" />
//           </motion.button>

//           <motion.button
//             type="button"
//             onClick={nextSlide}
//             whileHover={{ scale: 1.12, boxShadow: "0 8px 20px rgba(3,195,94,0.3)" }}
//             whileTap={{ scale: 0.9 }}
//             aria-label="Next occasion"
//             className="absolute right-[-7px] top-1/2 z-40 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#159A27] text-white shadow-[0_5px_15px_rgba(3,195,94,0.25)] transition sm:right-[-15px] sm:h-10 sm:w-10 md:right-[-20px] lg:right-[-27px]"
//           >
//             <IoIosArrowForward className="text-[17px]" />
//           </motion.button>

//           <div
//             onMouseEnter={() => {
//               if (intervalRef.current) clearInterval(intervalRef.current);
//             }}
//             onMouseLeave={startAutoPlay}
//           >
//             <FeaturedOccasionCard card={currentCard} direction={direction} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// app/components/home/vehicleforeveryoccasion/DelhiVehicleForEveryOccasion.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FaBriefcase,
  FaCheck,
  FaMapMarkerAlt,
  FaSnowflake,
  FaUsers,
} from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineBeachAccess } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const GREEN = "#03C35E";
const ORANGE = "#F7941E";
const DARK = "#12233F";

type Card = {
  title: string;
  highlight: string;
  description: string;
  seats: string;
  price: string;
  location: string;
  image: string;
  features: string[];
};

type Occasion = {
  id: string;
  label: string;
  icon: React.ReactNode;
  cards: Card[];
};

// CurvedShapeLogo Props
type CurvedShapeLogoProps = {
  width?: number;
  height?: number;
  color?: string;
  logoSrc?: string;
  logoWidth?: number;
  logoHeight?: number;
  className?: string;
};

// CurvedShapeLogo Component
function CurvedShapeLogo({
  width = 140,
  height = 60,
  color = "#ffffff",
  logoSrc = "/images/logo.webp",
  logoWidth = 80,
  logoHeight = 42,
  className = "",
}: CurvedShapeLogoProps) {
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        style={{
          filter: "drop-shadow(-2px 4px 12px rgba(0,0,0,0.15))",
        }}
      >
        {/* Flipped path - mirror image */}
        <path
          d={`
            M 0 0
            L 0 ${height}
            L ${width * 0.78} ${height}
            C ${width * 0.95} ${height * 0.75}, 
              ${width * 0.82} ${height * 0.35}, 
              ${width} 0
            Z
          `}
          fill={color}
        />
      </svg>

      {logoSrc && (
        <div className="absolute inset-0 z-10 flex items-center justify-start pl-3 sm:pl-2.5">
          <Image
            src={logoSrc}
            alt="Urban Cruise"
            width={logoWidth}
            height={logoHeight}
            className="h-auto w-[65px] object-contain sm:w-[75px]"
            priority
          />
        </div>
      )}
    </div>
  );
}

const occasions: Occasion[] = [
  {
    id: "wedding",
    label: "WEDDING TRAVEL",
    icon: <FaUsers />,
    cards: [
      {
        title: "Tempo Traveller",
        highlight: "For Wedding",
        description:
          "A Tempo Traveller for weddings in Delhi, such as our Standard and Premium variants, is a multi-utility vehicle that comfortably accommodates 17–26 wedding guests, family members, and bridal party members. These spacious vans provide cost-effective group transportation for wedding ceremonies, functions, and celebrations. With comfortable seating, ample luggage space, air conditioning, and convenient interiors, Tempo Travellers make travelling between venues smooth and hassle-free. They are ideal for transporting guests to hotels, banquet halls, wedding venues, airports, and reception locations. Whether it is a small family gathering or a large wedding celebration, our Tempo Travellers offer a practical, comfortable, and reliable travel solution for everyone.",
        seats: "17 to 26 Seater",
        price: "₹21/km",
        location: "Delhi NCR",
        image: "/images/vehicleforeverygroupsize/7.jpeg",
        features: ["AC", "Music System", "Luggage Space", "Pushback Seats"],
      },
      {
        title: "Luxury Coach",
        highlight: "For Wedding",
        description: "Premium wedding transport with luxury interiors and more space.",
        seats: "30 to 40 Seater",
        price: "₹35/km",
        location: "Delhi NCR",
        image: "/images/vehicleforeverygroupsize/8.jpeg",
        features: ["AC", "Pushback Seats", "LED TV", "Music System"],
      },
    ],
  },
  {
    id: "corporate",
    label: "CORPORATE TRAVEL",
    icon: <FaBriefcase />,
    cards: [
      {
        title: "Tempo Traveller",
        highlight: "For Corporate",
        description: "Comfortable and professional group transportation for corporate meetings.",
        seats: "12 to 26 Seater",
        price: "₹21/km",
        location: "Delhi NCR",
        image: "/images/vehicleforeverygroupsize/8.jpeg",
        features: ["AC", "Comfort Seats", "Luggage Space", "Music System"],
      },
      {
        title: "Mini Bus",
        highlight: "For Corporate",
        description: "Perfect for larger corporate groups and offsite events.",
        seats: "30 to 40 Seater",
        price: "₹28/km",
        location: "Delhi NCR",
        image: "/images/vehicleforeverygroupsize/9.jpeg",
        features: ["AC", "Recliner Seats", "WiFi", "Charging Points"],
      },
    ],
  },
  {
    id: "vacation",
    label: "VACATIONS",
    icon: <MdOutlineBeachAccess />,
    cards: [
      {
        title: "Tempo Traveller",
        highlight: "For Vacation",
        description: "Plan comfortable family vacations and group tours.",
        seats: "12 to 26 Seater",
        price: "₹21/km",
        location: "Delhi NCR",
        image: "/images/vehicleforeverygroupsize/9.jpeg",
        features: ["AC", "Pushback Seats", "Luggage Space", "Experienced Driver"],
      },
      {
        title: "SUV",
        highlight: "For Vacation",
        description: "Ideal for small families and off-road adventures.",
        seats: "7 Seater",
        price: "₹15/km",
        location: "Delhi NCR",
        image: "/images/vehicleforeverygroupsize/10.jpeg",
        features: ["AC", "GPS", "Roof Carrier", "Comfort Seats"],
      },
    ],
  },
  {
    id: "local",
    label: "LOCAL TRAVEL",
    icon: <FaMapMarkerAlt />,
    cards: [
      {
        title: "Tempo Traveller",
        highlight: "For Local Travel",
        description: "Book a Tempo Traveller for comfortable local transportation.",
        seats: "12 to 26 Seater",
        price: "₹21/km",
        location: "Delhi NCR",
        image: "/images/vehicleforeverygroupsize/10.jpeg",
        features: ["AC", "Spacious Seating", "Luggage Space", "GPS"],
      },
    ],
  },
  {
    id: "pilgrimage",
    label: "PILGRIMAGE TOUR",
    icon: <FaMapMarkerAlt />,
    cards: [
      {
        title: "Tempo Traveller",
        highlight: "For Pilgrimage",
        description: "Comfortable travel for religious tours and group pilgrimages.",
        seats: "12 to 26 Seater",
        price: "₹21/km",
        location: "Delhi NCR",
        image: "/images/vehicleforeverygroupsize/7.jpeg",
        features: ["AC", "Pushback Seats", "Luggage Space", "Experienced Driver"],
      },
      {
        title: "Mini Bus",
        highlight: "For Pilgrimage",
        description: "Ideal for large pilgrimage groups with luggage.",
        seats: "30 to 40 Seater",
        price: "₹28/km",
        location: "Delhi NCR",
        image: "/images/vehicleforeverygroupsize/8.jpeg",
        features: ["AC", "Recliner Seats", "Luggage Space", "Music System"],
      },
    ],
  },
];

// --- Sub-components ---
function OccasionTabs({
  activeIndex,
  onChange,
}: {
  activeIndex: number;
  onChange: (index: number) => void;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const hasLeftScroll = container.scrollLeft > 5;
      const hasRightScroll = container.scrollLeft < container.scrollWidth - container.clientWidth - 5;
      setShowLeftArrow(hasLeftScroll);
      setShowRightArrow(hasRightScroll);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
    }
    return () => {
      window.removeEventListener('resize', checkScroll);
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  // Mouse drag to scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (container) {
      setIsDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
      container.style.cursor = 'grabbing';
      container.style.userSelect = 'none';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (container) {
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const container = scrollContainerRef.current;
    if (container) {
      container.style.cursor = 'grab';
      container.style.userSelect = 'auto';
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      const container = scrollContainerRef.current;
      if (container) {
        container.style.cursor = 'grab';
        container.style.userSelect = 'auto';
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 250;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative flex w-full items-center justify-center">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl focus:outline-none md:h-9 md:w-9"
          aria-label="Scroll left"
        >
          <IoIosArrowBack className="text-sm text-[#344054] md:text-base" />
        </button>
      )}

      {/* Left Gradient Fade */}
      {showLeftArrow && (
        <div className="pointer-events-none absolute left-0 z-10 h-full w-12 bg-gradient-to-r from-white via-white/80 to-transparent" />
      )}

      {/* Scrollable Container with drag support */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className="flex max-w-full items-center gap-2 overflow-x-auto px-1 -pb-1 scrollbar-hide sm:gap-3 md:gap-4"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          cursor: 'grab'
        }}
      >
        {occasions.map((occasion, index) => {
          const active = activeIndex === index;
          return (
            <button
              key={occasion.id}
              type="button"
              onClick={() => onChange(index)}
              className={`group flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-[9px] font-bold transition-all duration-300 sm:px-5 sm:py-3 sm:text-[10px] md:px-6 md:text-[11px] ${
                active
                  ? "border-[#F7941E] bg-[#F7941E] text-white shadow-[0_8px_25px_rgba(247,148,30,0.28)]"
                  : "border-[#E8E8E8] bg-white text-[#344054] shadow-[0_4px_15px_rgba(0,0,0,0.06)] hover:border-[#03C35E] hover:text-[#03C35E]"
              }`}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] transition-all duration-300 sm:h-6 sm:w-6 ${
                  active
                    ? "bg-white/20 text-white"
                    : "bg-[#03C35E]/10 text-[#03C35E]"
                }`}
              >
                {occasion.icon}
              </span>
              <span>{occasion.label}</span>
            </button>
          );
        })}
      </div>

      {/* Right Gradient Fade */}
      {showRightArrow && (
        <div className="pointer-events-none absolute right-0 z-10 h-full w-12 bg-gradient-to-l from-white via-white/80 to-transparent" />
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl focus:outline-none md:h-9 md:w-9"
          aria-label="Scroll right"
        >
          <IoIosArrowForward className="text-sm text-[#344054] md:text-base" />
        </button>
      )}
    </div>
  );
}

function SmallBadge({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <div className="flex min-w-0 items-center gap-1.5 rounded-full bg-[#F6F8F7] px-2.5 py-1.5 text-[8px] font-semibold text-[#344054] sm:px-3 sm:text-[9px] md:text-[10px]">
      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[#03C35E]">
        {icon}
      </span>
      <span className="truncate">{children}</span>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-[#B9DEBF] bg-white px-2.5 py-1.5 text-[8px] font-semibold text-[#344054] sm:px-3 sm:py-2 sm:text-[9px] md:text-[10px]">
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#03C35E]/10 text-[#03C35E]">
        <FaCheck className="text-[8px]" />
      </span>
      <span className="whitespace-nowrap">{text}</span>
    </div>
  );
}

function ImageFeature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-1 items-center gap-2 rounded-lg bg-black/60 px-2 py-2 backdrop-blur-md sm:gap-2.5 sm:px-3 sm:py-2.5">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#03C35E]/20 text-[#03C35E] sm:h-8 sm:w-8">
        {icon}
      </span>
      <span className="text-[7px] font-bold leading-tight text-white sm:text-[8px] md:text-[9px]">
        {title}
      </span>
    </div>
  );
}

function FeaturedOccasionCard({ card, direction }: { card: Card; direction: number }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={card.title + card.highlight}
        initial={{ opacity: 0, x: direction > 0 ? 35 : -35 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction > 0 ? -35 : 35 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-full"
      >
        <div className="relative overflow-hidden rounded-[18px]  bg-white shadow-[0_12px_45px_rgba(0,0,0,0.10)] sm:rounded-[20px] md:rounded-[22px]">
          {/* CurvedShapeLogo with WHITE background */}
          <div className="absolute left-0 top-0 z-20">
            <CurvedShapeLogo
              width={120}
              height={50}
              color="#FFFFFF" 
              logoSrc="/images/logo.webp"
              logoWidth={70}
              logoHeight={36}
            />
          </div>

          <div className="grid w-full grid-cols-1 md:grid-cols-[46%_54%] lg:grid-cols-[47%_53%]">
            {/* IMAGE */}
            <div className="relative min-h-[260px] overflow-hidden sm:min-h-[320px] md:min-h-[350px] lg:min-h-[390px] xl:min-h-[410px]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 46vw, 47vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-center px-5 py-6 sm:px-7 sm:py-7 md:px-7 md:py-8 lg:px-8 xl:px-10">
              <h3 className="text-[22px] font-extrabold leading-tight tracking-[-0.04em] text-[#12233F] sm:text-[25px] md:text-[27px] lg:text-[29px] xl:text-[30px]">
                <span className="text-[#188A31]">{card.title}</span> {card.highlight}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                <SmallBadge icon={<FaUsers />}>{card.seats}</SmallBadge>
                <SmallBadge icon={<span className="font-bold">₹</span>}>
                  Starts from {card.price}
                </SmallBadge>
                <SmallBadge icon={<FaMapMarkerAlt />}>{card.location}</SmallBadge>
              </div>
              <p className="mt-4 text-[10px] font-medium leading-[1.7] text-[#4B5563] sm:mt-5 sm:text-[11px] md:text-[12px] lg:text-[12px] xl:text-[13px] overflow-hidden"
              style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
          }}>
                {card.description}
              </p>
              <div className="mt-4 sm:mt-5">
                <p className="mb-2.5 text-[10px] font-bold text-[#263449] sm:text-[11px]">
                  Key Features:
                </p>
                <div className="flex flex-wrap gap-2">
                  {card.features.map((feature) => (
                    <FeatureItem key={feature} text={feature} />
                  ))}
                </div>
              </div>
              <div className="mt-5 flex flex-wrap justify-between gap-3 sm:mt-6">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(247,148,30,0.30)" }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  className="flex min-h-[39px] items-center justify-center gap-2 rounded-full bg-[#F7941E] px-5 text-[9px] font-bold text-white shadow-[0_6px_18px_rgba(247,148,30,0.22)] sm:min-h-[42px] sm:px-6 sm:text-[10px]"
                >
                  BOOK NOW
                  <IoIosArrowForward className="text-[15px]" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03, backgroundColor: "#F5FFF8" }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  className="flex min-h-[39px] items-center justify-center gap-2 rounded-full border border-[#03C35E] bg-white px-5 text-[9px] font-bold text-[#188A31] transition-all sm:min-h-[42px] sm:px-6 sm:text-[10px]"
                >
                  READ MORE
                  <IoIosArrowForward className="text-[15px]" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// --- MAIN COMPONENT ---
export default function DelhiVehicleForEveryOccasion() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentCards = occasions[activeTabIndex].cards;
  const currentCard = currentCards[slideIndex];

  const changeTab = (index: number) => {
    setActiveTabIndex(index);
    setSlideIndex(0);
    setDirection(1);
  };

  const nextSlide = () => {
    setDirection(1);
    setSlideIndex((prev) => (prev + 1) % currentCards.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setSlideIndex((prev) => (prev - 1 + currentCards.length) % currentCards.length);
  };

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % currentCards.length);
      setDirection(1);
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeTabIndex, currentCards.length]);

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-9 grid w-full items-center gap-7 min-[375px]:mb-10 min-[375px]:gap-8 min-[430px]:mb-10 min-[430px]:gap-8 sm:mb-12 sm:gap-9 md:mb-14 md:gap-10 lg:mb-16 lg:grid-cols-[1fr_1fr] lg:gap-6 xl:mb-[72px] xl:gap-8 2xl:mb-20 2xl:gap-10"
        >
          <div className="w-full max-w-[720px] text-left">
            <div className="mb-3 flex w-full items-center justify-start gap-2 min-[430px]:mb-3.5 min-[430px]:gap-2.5 sm:mb-4 md:gap-3 lg:gap-3.5 xl:gap-4">
              <span className="block h-px w-5 shrink-0 bg-gray-400/60 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14" />
              <span className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.14em] text-[#03C35E] min-[375px]:text-[8.5px] min-[430px]:text-[9px] min-[430px]:tracking-[0.16em] sm:text-[9.5px] sm:tracking-[0.18em] md:text-[10px] md:tracking-[0.2em] lg:text-[11px] xl:text-xs">
                Tempo Traveller For Every Occasion
              </span>
              <span className="block h-px w-5 shrink-0 bg-gray-400/60 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14" />
            </div>
            <h2 className="text-[24px] font-extrabold leading-[1.05] tracking-[-0.04em] text-black min-[375px]:text-[25px] min-[430px]:text-[27px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px]">
              FOR EVERY <span className="text-[#188A31]">OCCASION</span>
            </h2>
            <p className="mt-3 font-serif text-[19px] italic leading-tight text-[#03C35E] min-[375px]:text-[20px] min-[430px]:text-[21px] sm:text-[22px] md:text-[25px] lg:text-[27px] xl:text-[30px] 2xl:text-[32px]">
              The Right Tempo Traveller For Every Occasion
            </p>
            <div className="mt-4 max-w-[620px] space-y-3 text-[10px] leading-[1.7] text-[#303944] min-[375px]:text-[10.5px] min-[430px]:text-[11px] sm:mt-5 sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
              <p>
                Hire Tempo Traveller rent in Delhi for every occasion—weddings,
                pilgrimages, trips, corporate events, tours, and Delhi Darshan.
                Comfortable, affordable travel for groups of all sizes.
              </p>
            </div>
          </div>
          <div className="relative hidden w-full items-center justify-center lg:flex lg:justify-end" />
        </motion.div>

        {/* TABS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-5 sm:mt-6 md:mt-7"
        >
          <OccasionTabs activeIndex={activeTabIndex} onChange={changeTab} />
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative mt-5 sm:mt-6 md:mt-7">
          <motion.button
            type="button"
            onClick={prevSlide}
            whileHover={{ scale: 1.12, boxShadow: "0 8px 20px rgba(3,195,94,0.3)" }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous occasion"
            className="absolute left-[-7px] top-1/2 z-40 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#159A27] text-white shadow-[0_5px_15px_rgba(3,195,94,0.25)] transition sm:left-[-15px] sm:h-10 sm:w-10 md:left-[-20px] lg:left-[-27px]"
          >
            <IoIosArrowBack className="text-[17px]" />
          </motion.button>

          <motion.button
            type="button"
            onClick={nextSlide}
            whileHover={{ scale: 1.12, boxShadow: "0 8px 20px rgba(3,195,94,0.3)" }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next occasion"
            className="absolute right-[-7px] top-1/2 z-40 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#159A27] text-white shadow-[0_5px_15px_rgba(3,195,94,0.25)] transition sm:right-[-15px] sm:h-10 sm:w-10 md:right-[-20px] lg:right-[-27px]"
          >
            <IoIosArrowForward className="text-[17px]" />
          </motion.button>

          <div
            onMouseEnter={() => {
              if (intervalRef.current) clearInterval(intervalRef.current);
            }}
            onMouseLeave={startAutoPlay}
          >
            <FeaturedOccasionCard card={currentCard} direction={direction} />
          </div>
        </div>
      </div>
    </section>
  );
}


