// // components/home/faq's/DelhiFaq's.tsx
// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   FaQuestionCircle,
//   FaShieldAlt,
//   FaCalendarCheck,
//   FaHeadset,
//   FaRupeeSign,
// } from "react-icons/fa";

// // COLORS
// const GREEN = "#087F35";
// const LIGHT_GREEN = "#03C35E";
// const ORANGE = "#F7941E";
// const NAVY = "#12233F";

// // FAQ DATA
// const faqData = [
//   {
//     id: 1,
//     question: "What documents do I need to book a car?",
//     answer:
//       "You need a valid driving license, ID proof (Aadhaar/PAN/Passport), and a booking confirmation (online or offline) to rent a car with Urban Cruise.",
//   },
//   {
//     id: 2,
//     question: "Can I drive the car outstation?",
//     answer:
//       "Yes, you can drive the vehicle outside the city depending on the booking type and rental terms. Please confirm your travel route with our support team before booking.",
//   },
//   {
//     id: 3,
//     question: "What is the fuel policy?",
//     answer:
//       "Fuel is generally not included unless specifically mentioned in your booking. The applicable fuel policy will be confirmed at the time of booking.",
//   },
//   {
//     id: 4,
//     question: "Is there a security deposit?",
//     answer:
//       "A security deposit may be applicable depending on the vehicle and rental package. Our team will clearly communicate any deposit requirements before confirmation.",
//   },
//   {
//     id: 5,
//     question: "Can I cancel or modify my booking?",
//     answer:
//       "Yes. Cancellation and modification are possible according to the booking terms. Contact our support team as early as possible for assistance.",
//   },
//   {
//     id: 6,
//     question: "What if the car breaks down?",
//     answer:
//       "Our support team is available to help in case of a breakdown. We coordinate roadside assistance or an appropriate replacement solution depending on the situation.",
//   },
//   {
//     id: 7,
//     question: "Do you provide a driver with the vehicle?",
//     answer:
//       "Yes, Urban Cruise provides professional driver services with selected vehicles and packages. Driver availability and charges depend on the vehicle type, route, and booking requirements.",
//   },
//   {
//     id: 8,
//     question: "Can I choose a specific vehicle for my booking?",
//     answer:
//       "Yes, you can request a specific vehicle based on availability. Our team will confirm the selected vehicle at the time of booking.",
//   },
// ];

// // FLOATING ICON
// function FloatingIcon({
//   icon: Icon,
//   position,
//   delay = 0,
// }: {
//   icon: React.ElementType;
//   position: string;
//   delay?: number;
// }) {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         scale: 0.7,
//       }}
//       whileInView={{
//         opacity: 1,
//         scale: 1,
//       }}
//       animate={{
//         y: [0, -5, 0],
//       }}
//       transition={{
//         opacity: {
//           duration: 0.5,
//           delay,
//         },
//         scale: {
//           duration: 0.5,
//           delay,
//         },
//         y: {
//           duration: 3,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay,
//         },
//       }}
//       viewport={{
//         once: true,
//       }}
//       className={`absolute z-20 ${position}`}
//     >
//       <div
//         className="
//           flex
//           h-[34px]
//           w-[34px]
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-[#dcebd8]
//           bg-white
//           shadow-[0_5px_18px_rgba(8,127,53,0.12)]

//           sm:h-[38px]
//           sm:w-[38px]

//           md:h-[42px]
//           md:w-[42px]

//           lg:h-[44px]
//           lg:w-[44px]

//           xl:h-[48px]
//           xl:w-[48px]
//         "
//       >
//         <Icon
//           className="
//             text-[14px]
//             text-[#087F35]

//             sm:text-[15px]
//             md:text-[17px]
//             lg:text-[18px]
//             xl:text-[20px]
//           "
//         />
//       </div>
//     </motion.div>
//   );
// }

// // FAQ ITEM
// function FAQItem({
//   item,
//   isOpen,
//   onClick,
// }: {
//   item: (typeof faqData)[number];
//   isOpen: boolean;
//   onClick: () => void;
// }) {
//   return (
//     <motion.div
//       layout
//       className={`
//         relative
//         shrink-0
//         overflow-hidden
//         rounded-[12px]
//         border
//         bg-white
//         transition-all
//         duration-300

//         ${
//           isOpen
//             ? "border-[#087F35] shadow-[0_7px_22px_rgba(8,127,53,0.08)]"
//             : "border-[#e7e9e7] shadow-[0_4px_15px_rgba(0,0,0,0.045)]"
//         }
//       `}
//     >
//       {/* ACTIVE GREEN BORDER */}

//       {isOpen && (
//         <motion.div
//           layoutId="activeFaq"
//           className="
//             absolute
//             bottom-0
//             left-0
//             top-0
//             w-[3px]
//             bg-[#087F35]
//           "
//         />
//       )}

//       {/* QUESTION */}

//       <button
//         type="button"
//         onClick={onClick}
//         aria-expanded={isOpen}
//         className="
//           flex
//           min-h-[54px]
//           w-full
//           items-center
//           gap-3
//           px-3
//           py-2
//           text-left

//           sm:min-h-[58px]
//           sm:px-4

//           md:min-h-[61px]

//           lg:min-h-[63px]
//           lg:px-4

//           xl:min-h-[66px]
//         "
//       >
//         {/* NUMBER */}

//         <span
//           className={`
//             flex
//             h-[28px]
//             w-[28px]
//             shrink-0
//             items-center
//             justify-center
//             rounded-full
//             text-[10px]
//             font-bold
//             text-white

//             sm:h-[31px]
//             sm:w-[31px]
//             sm:text-[11px]

//             md:h-[33px]
//             md:w-[33px]

//             lg:h-[34px]
//             lg:w-[34px]

//             ${isOpen ? "bg-[#087F35]" : "bg-[#4B9824]"}
//           `}
//         >
//           {String(item.id).padStart(2, "0")}
//         </span>

//         {/* DIVIDER */}

//         <span
//           className="
//             h-[25px]
//             w-px
//             shrink-0
//             bg-[#dfe6df]

//             sm:h-[30px]
//             md:h-[32px]
//           "
//         />

//         {/* QUESTION */}

//         <span
//           className="
//             min-w-0
//             flex-1
//             pr-1
//             text-[10px]
//             font-extrabold
//             leading-[1.35]
//             text-[#1d2735]

//             min-[375px]:text-[10.5px]

//             sm:text-[11px]

//             md:text-[11.5px]

//             lg:text-[12px]

//             xl:text-[13px]

//             2xl:text-[14px]
//           "
//         >
//           {item.question}
//         </span>

//         {/* PLUS / MINUS */}

//         <span
//           className={`
//             flex
//             h-[25px]
//             w-[25px]
//             shrink-0
//             items-center
//             justify-center
//             rounded-full
//             border
//             text-[15px]
//             font-medium
//             transition-all
//             duration-300

//             sm:h-[27px]
//             sm:w-[27px]

//             md:h-[28px]
//             md:w-[28px]

//             lg:h-[29px]
//             lg:w-[29px]

//             ${
//               isOpen
//                 ? "border-[#087F35] bg-[#087F35] text-white"
//                 : "border-[#e1e5e1] bg-white text-[#087F35]"
//             }
//           `}
//         >
//           {isOpen ? "−" : "+"}
//         </span>
//       </button>

//       {/* ANSWER */}

//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             initial={{
//               height: 0,
//               opacity: 0,
//             }}
//             animate={{
//               height: "auto",
//               opacity: 1,
//             }}
//             exit={{
//               height: 0,
//               opacity: 0,
//             }}
//             transition={{
//               duration: 0.25,
//             }}
//           >
//             <div
//               className="
//                 border-t
//                 border-[#edf1ed]
//                 px-[47px]
//                 pb-3
//                 pt-2.5
//                 text-[9px]
//                 leading-[1.55]
//                 text-[#5b6470]

//                 sm:px-[53px]
//                 sm:text-[9.5px]

//                 md:px-[57px]
//                 md:text-[10px]

//                 lg:pr-10

//                 xl:text-[10.5px]
//               "
//             >
//               {item.answer}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }

// // SUPPORT CARD
// function SupportCard() {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 15,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       transition={{
//         duration: 0.6,
//       }}
//       viewport={{
//         once: true,
//       }}
//       className="
//         relative
//         z-30
//         mx-auto
//         mt-[-4px]
//         w-[88%]
//         max-w-[290px]
//         rounded-[13px]
//         border
//         border-[#e1e9dd]
//         bg-white
//         px-3
//         py-2.5
//         shadow-[0_7px_22px_rgba(0,0,0,0.09)]

//         sm:w-[82%]
//         sm:max-w-[310px]
//         sm:px-4
//         sm:py-3

//         md:max-w-[320px]

//         lg:absolute
//         lg:bottom-[4px]
//         lg:left-[7%]
//         lg:mt-0
//         lg:w-[250px]
//         lg:px-3
//         lg:py-2.5

//         xl:left-[6%]
//         xl:w-[270px]
//         xl:px-4
//         xl:py-3
//       "
//     >
//       <div className="flex items-center gap-2.5">
//         {/* ICON */}

//         <div
//           className="
//             flex
//             h-[34px]
//             w-[34px]
//             shrink-0
//             items-center
//             justify-center
//             rounded-full
//             bg-[#EAF5E5]
//             text-[#087F35]

//             sm:h-[38px]
//             sm:w-[38px]

//             xl:h-[42px]
//             xl:w-[42px]
//           "
//         >
//           <FaHeadset
//             className="
//               text-[17px]
//               sm:text-[19px]
//               xl:text-[20px]
//             "
//           />
//         </div>

//         {/* CONTENT */}

//         <div className="min-w-0">
//           <p
//             className="
//               text-[9px]
//               font-extrabold
//               text-[#1f2937]

//               sm:text-[10px]

//               xl:text-[11px]
//             "
//           >
//             Still have questions?
//           </p>

//           <p
//             className="
//               mt-[1px]
//               text-[7px]
//               leading-[1.4]
//               text-[#727b84]

//               sm:text-[8px]

//               xl:text-[9px]
//             "
//           >
//             Our support team is here to help you!
//           </p>

//           <button
//             type="button"
//             className="
//               mt-[2px]
//               text-[8px]
//               font-extrabold
//               text-[#087F35]
//               transition-colors
//               hover:text-[#03C35E]

//               sm:text-[9px]

//               xl:text-[10px]
//             "
//           >
//             Contact Us →
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // MAIN COMPONENT
// export default function DelhiFaqs() {
//   const [openFaq, setOpenFaq] = useState(0);

//   // FAQ scroll container
//   const faqScrollRef = useRef<HTMLDivElement>(null);

//   // Pause auto scroll when user hovers
//   const [isFaqHovered, setIsFaqHovered] = useState(false);

//   // FAQ TOGGLE
//   const toggleFaq = (index: number) => {
//     setOpenFaq((current) => (current === index ? -1 : index));
//   };

//   // AUTOMATIC INFINITE FAQ SCROLL
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(min-width: 1024px)");

//     const handleAutoScroll = () => {
//       const container = faqScrollRef.current;

//       if (!container) return;

//       // Do not auto-scroll while hovering
//       if (isFaqHovered) return;

//       // Desktop only
//       if (!mediaQuery.matches) return;

//       const maxScroll =
//         container.scrollHeight - container.clientHeight;

//       // Nothing to scroll
//       if (maxScroll <= 0) return;

//       const currentScroll = container.scrollTop;

//       // Scroll amount
//       const scrollAmount = 75;

//       // Reached bottom
//       if (currentScroll >= maxScroll - 5) {
//         container.scrollTo({
//           top: 0,
//           behavior: "smooth",
//         });
//       } else {
//         container.scrollBy({
//           top: scrollAmount,
//           behavior: "smooth",
//         });
//       }
//     };

//     const interval = window.setInterval(
//       handleAutoScroll,
//       2500
//     );

//     return () => {
//       window.clearInterval(interval);
//     };
//   }, [isFaqHovered]);

//   return (
//     <section
//       className="
//         relative
//         w-full
//         overflow-hidden
//         bg-[#ffffff]
//         px-3
//         py-5

//         min-[375px]:px-4
//         min-[375px]:py-6

//         sm:px-5
//         sm:py-8

//         md:px-7
//         md:py-10

//         lg:px-4
//         lg:py-5

//         xl:px-6
//         xl:py-7
//       "
//     >
//           {/* OUTER FAQ CONTAINER */}
//       <div
//         className="
//           relative
//           mx-auto
//           w-full
//           max-w-[1440px]
//           overflow-hidden
//           rounded-[15px]
//           border
//           border-[#e8ebe8]
//           bg-white
//           shadow-[0_5px_25px_rgba(0,0,0,0.06)]

//           lg:min-h-[515px]

//           xl:min-h-[535px]

//           2xl:min-h-[550px]
//         "
//       >
//             {/* BACKGROUND DECORATION */}
//         <div className="pointer-events-none absolute inset-0 overflow-hidden">
//           {/* LEFT GREEN GLOW */}

//           <div
//             className="
//               absolute
//               -left-[120px]
//               top-[130px]
//               h-[300px]
//               w-[300px]
//               rounded-full
//               bg-[#03C35E]/[0.035]
//               blur-3xl

//               lg:h-[430px]
//               lg:w-[430px]
//             "
//           />

//           {/* RIGHT GREEN GLOW */}

//           <div
//             className="
//               absolute
//               right-[-150px]
//               top-[20px]
//               h-[350px]
//               w-[350px]
//               rounded-full
//               bg-[#087F35]/[0.018]
//               blur-3xl
//             "
//           />

//           {/* CENTER SOFT GLOW */}

//           <div
//             className="
//               absolute
//               left-[27%]
//               top-[32%]
//               h-[220px]
//               w-[220px]
//               rounded-full
//               bg-[#03C35E]/[0.018]
//               blur-3xl
//             "
//           />
//         </div>

//             {/* CONTENT */}
//         <div
//           className="
//             relative
//             z-10
//             px-4
//             py-6

//             min-[375px]:px-5

//             sm:px-7
//             sm:py-8

//             md:px-9
//             md:py-9

//             lg:px-7
//             lg:py-6

//             xl:px-9
//             xl:py-7
//           "
//         >
//               {/* MAIN GRID */}
//           <div
//             className="
//               grid
//               items-start
//               gap-7

//               lg:grid-cols-[0.87fr_1.13fr]
//               lg:gap-7

//               xl:grid-cols-[0.88fr_1.12fr]
//               xl:gap-9

//               2xl:grid-cols-[0.9fr_1.1fr]
//               2xl:gap-12
//             "
//           >
//                 {/* LEFT SIDE */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: -25,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               transition={{
//                 duration: 0.65,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               className="
//                 relative
//                 flex
//                 min-h-[420px]
//                 flex-col
//                 items-center
//                 text-center

//                 sm:min-h-[460px]

//                 md:min-h-[480px]

//                 lg:min-h-[455px]
//                 lg:items-start
//                 lg:text-left

//                 xl:min-h-[475px]

//                 2xl:min-h-[490px]
//               "
//             >
//                   {/* EYEBROW */}
//               <div
//                 className="
//                   relative
//                   z-30
//                   flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   border
//                   border-[#e5ecdf]
//                   bg-[#f7fbf5]
//                   px-2.5
//                   py-1

//                   sm:px-3
//                   sm:py-1.5
//                 "
//               >
//                 <div
//                   className="
//                     flex
//                     h-[18px]
//                     w-[18px]
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-[#eaf5e5]

//                     sm:h-[20px]
//                     sm:w-[20px]
//                   "
//                 >
//                   <FaQuestionCircle
//                     className="
//                       text-[10px]
//                       text-[#4B9824]

//                       sm:text-[12px]
//                     "
//                   />
//                 </div>

//                 <span
//                   className="
//                     text-[7px]
//                     font-extrabold
//                     uppercase
//                     tracking-[0.04em]
//                     text-[#4B9824]

//                     sm:text-[8px]

//                     md:text-[9px]
//                   "
//                 >
//                   Help & Support
//                 </span>
//               </div>

//                   {/* HEADING */}
//               <div
//                 className="
//                   relative
//                   z-30
//                   mt-3
//                   w-full

//                   sm:mt-3.5

//                   lg:mt-3
//                 "
//               >
//                 <h2
//                   className="
//                     text-[42px]
//                     font-black
//                     leading-[0.9]
//                     tracking-[-0.045em]
//                     text-[#142236]

//                     min-[375px]:text-[45px]

//                     min-[430px]:text-[48px]

//                     sm:text-[52px]

//                     md:text-[55px]

//                     lg:text-[47px]

//                     xl:text-[53px]

//                     2xl:text-[58px]
//                   "
//                 >
//                   FAQs
//                 </h2>

//                 <h3
//                   className="
//                     mt-1
//                     text-[19px]
//                     font-extrabold
//                     leading-none
//                     text-[#4B9824]

//                     sm:text-[21px]

//                     md:text-[23px]

//                     lg:text-[21px]

//                     xl:text-[24px]

//                     2xl:text-[26px]
//                   "
//                 >
//                   Frequently Asked
//                 </h3>

//                 <div
//                   className="
//                     relative
//                     mt-[-1px]
//                     inline-block
//                     font-serif
//                     text-[26px]
//                     italic
//                     leading-none
//                     text-[#F7941E]

//                     sm:text-[28px]

//                     md:text-[30px]

//                     lg:text-[29px]

//                     xl:text-[32px]

//                     2xl:text-[34px]
//                   "
//                 >
//                   Question

//                   <span
//                     className="
//                       absolute
//                       -bottom-[5px]
//                       left-0
//                       h-[1px]
//                       w-[105%]
//                       rotate-[-1deg]
//                       bg-[#F7941E]
//                     "
//                   />
//                 </div>
//               </div>

//                   {/* DESCRIPTION */}
//               <p
//                 className="
//                   relative
//                   z-30
//                   mt-4
//                   max-w-[285px]
//                   text-[9px]
//                   font-medium
//                   leading-[1.6]
//                   text-[#59636d]

//                   sm:max-w-[310px]
//                   sm:text-[10px]

//                   md:text-[10.5px]

//                   lg:max-w-[280px]
//                   lg:text-[9px]

//                   xl:max-w-[300px]
//                   xl:text-[10px]
//                 "
//               >
//                 Everything you need to know
//                 <br />
//                 before you book your ride.
//               </p>

//                   {/* CAR VISUAL */}
//               <div
//                 className="
//                   relative
//                   mt-2
//                   h-[230px]
//                   w-full
//                   max-w-[430px]

//                   sm:mt-1
//                   sm:h-[255px]

//                   md:h-[275px]

//                   lg:absolute
//                   lg:bottom-[0px]
//                   lg:left-[-24px]
//                   lg:mt-0
//                   lg:h-[300px]
//                   lg:w-[500px]
//                   lg:max-w-none

//                   xl:left-[-30px]
//                   xl:h-[315px]
//                   xl:w-[530px]

//                   2xl:left-[-35px]
//                   2xl:h-[330px]
//                   2xl:w-[550px]
//                 "
//               >
//                 {/* MAIN ORBIT */}

//                 <div
//                   className="
//                     absolute
//                     left-1/2
//                     top-[30px]
//                     h-[195px]
//                     w-[315px]
//                     -translate-x-1/2
//                     rotate-[-7deg]
//                     rounded-[50%]
//                     border
//                     border-[#087F35]/20

//                     sm:top-[34px]
//                     sm:h-[215px]
//                     sm:w-[350px]

//                     md:h-[235px]
//                     md:w-[390px]

//                     lg:top-[36px]
//                     lg:h-[255px]
//                     lg:w-[430px]

//                     xl:h-[270px]
//                     xl:w-[455px]

//                     2xl:h-[280px]
//                     2xl:w-[475px]
//                   "
//                 />

//                 {/* SECOND ORBIT */}

//                 <div
//                   className="
//                     absolute
//                     left-1/2
//                     top-[45px]
//                     h-[165px]
//                     w-[275px]
//                     -translate-x-1/2
//                     rotate-[-7deg]
//                     rounded-[50%]
//                     border
//                     border-[#087F35]/10

//                     sm:h-[180px]
//                     sm:w-[305px]

//                     md:h-[198px]
//                     md:w-[340px]

//                     lg:h-[215px]
//                     lg:w-[370px]

//                     xl:h-[230px]
//                     xl:w-[395px]
//                   "
//                 />

//                 {/* DOT LEFT */}

//                 <div
//                   className="
//                     absolute
//                     left-[12%]
//                     top-[118px]
//                     h-[4px]
//                     w-[4px]
//                     rounded-full
//                     bg-[#087F35]
//                     shadow-[0_0_0_5px_rgba(8,127,53,0.06)]
//                   "
//                 />

//                 {/* DOT RIGHT */}

//                 <div
//                   className="
//                     absolute
//                     right-[9%]
//                     top-[108px]
//                     h-[4px]
//                     w-[4px]
//                     rounded-full
//                     bg-[#03C35E]
//                   "
//                 />

//                 {/* FLOATING CALENDAR */}

//                 <FloatingIcon
//                   icon={FaCalendarCheck}
//                   position="
//                     left-[15%]
//                     top-[50px]
//                   "
//                   delay={0.1}
//                 />

//                 {/* FLOATING SHIELD */}

//                 <FloatingIcon
//                   icon={FaShieldAlt}
//                   position="
//                     right-[14%]
//                     top-[40px]
//                   "
//                   delay={0.2}
//                 />

//                 {/* FLOATING HEADSET */}

//                 <FloatingIcon
//                   icon={FaHeadset}
//                   position="
//                     right-[5%]
//                     top-[112px]
//                   "
//                   delay={0.3}
//                 />

//                 {/* FLOATING RUPEE */}

//                 <FloatingIcon
//                   icon={FaRupeeSign}
//                   position="
//                     right-[19%]
//                     bottom-[20px]
//                   "
//                   delay={0.4}
//                 />

//                     {/* CAR - LEFT FACING */}
//                 <motion.div
//                   initial={{
//                     opacity: 0,
//                     y: 20,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   transition={{
//                     duration: 0.7,
//                     delay: 0.15,
//                   }}
//                   viewport={{
//                     once: true,
//                   }}
//                   className="
//                     absolute
//                     bottom-[18px]
//                     left-1/2
//                     z-10
//                     w-[78%]
//                     -translate-x-1/2

//                     sm:w-[76%]

//                     md:w-[74%]

//                     lg:bottom-[20px]
//                     lg:w-[79%]

//                     xl:w-[81%]
//                   "
//                 >
//                   <Image
//                     src="/images/faq/car.webp"
//                     alt="Urban Cruise car rental"
//                     width={700}
//                     height={400}
//                     priority
//                     className="
//                       h-auto
//                       w-full
//                       object-contain
//                       scale-x-[-1]
//                       drop-shadow-[0_14px_17px_rgba(0,0,0,0.14)]
//                     "
//                   />
//                 </motion.div>

//                 {/* FLOOR SHADOW */}

//                 <div
//                   className="
//                     absolute
//                     bottom-[22px]
//                     left-1/2
//                     z-[5]
//                     h-[16px]
//                     w-[68%]
//                     -translate-x-1/2
//                     rounded-[50%]
//                     bg-black/[0.08]
//                     blur-md

//                     lg:bottom-[27px]
//                   "
//                 />
//               </div>

//                   {/* SUPPORT CARD */}
//               <SupportCard />
//             </motion.div>

//                 {/* RIGHT FAQ SIDE */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: 25,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               transition={{
//                 duration: 0.65,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               className="
//                 relative
//                 z-30
//                 w-full

//                 lg:pt-[0px]
//               "
//             >
//                   {/* FAQ SCROLL CONTAINER */}
//               <div
//                 ref={faqScrollRef}
//                 onMouseEnter={() => setIsFaqHovered(true)}
//                 onMouseLeave={() => setIsFaqHovered(false)}
//                 className="
//                   flex
//                   flex-col
//                   gap-2.5

//                   sm:gap-3

//                   md:gap-3.5

//                   lg:max-h-[405px]
//                   lg:gap-2.5
//                   lg:overflow-y-auto
//                   lg:pr-0

//                   xl:max-h-[425px]
//                   xl:gap-3

//                   2xl:max-h-[440px]

//                   [scrollbar-width:none]
//                   [-ms-overflow-style:none]
//                   [&::-webkit-scrollbar]:hidden
//                 "
//               >
//                 {faqData.map((item, index) => (
//                   <FAQItem
//                     key={item.id}
//                     item={item}
//                     isOpen={openFaq === index}
//                     onClick={() => toggleFaq(index)}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// components/home/faq's/DelhiFaq's.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaQuestionCircle,
  FaShieldAlt,
  FaCalendarCheck,
  FaHeadset,
  FaRupeeSign,
} from "react-icons/fa";

// ======================================================
// COLORS
// ======================================================

const GREEN = "#087F35";
const LIGHT_GREEN = "#03C35E";
const ORANGE = "#F7941E";
const NAVY = "#12233F";

// ======================================================
// FAQ DATA
// ======================================================

const faqData = [
  {
    id: 1,
    question: "What documents do I need to book a car?",
    answer:
      "You need a valid driving license, ID proof (Aadhaar/PAN/Passport), and a booking confirmation (online or offline) to rent a car with Urban Cruise.",
  },
  {
    id: 2,
    question: "Can I drive the car outstation?",
    answer:
      "Yes, you can drive the vehicle outside the city depending on the booking type and rental terms. Please confirm your travel route with our support team before booking.",
  },
  {
    id: 3,
    question: "What is the fuel policy?",
    answer:
      "Fuel is generally not included unless specifically mentioned in your booking. The applicable fuel policy will be confirmed at the time of booking.",
  },
  {
    id: 4,
    question: "Is there a security deposit?",
    answer:
      "A security deposit may be applicable depending on the vehicle and rental package. Our team will clearly communicate any deposit requirements before confirmation.",
  },
  {
    id: 5,
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes. Cancellation and modification are possible according to the booking terms. Contact our support team as early as possible for assistance.",
  },
  {
    id: 6,
    question: "What if the car breaks down?",
    answer:
      "Our support team is available to help in case of a breakdown. We coordinate roadside assistance or an appropriate replacement solution depending on the situation.",
  },
  {
    id: 7,
    question: "Do you provide a driver with the vehicle?",
    answer:
      "Yes, Urban Cruise provides professional driver services with selected vehicles and packages. Driver availability and charges depend on the vehicle type, route, and booking requirements.",
  },
  {
    id: 8,
    question: "Can I choose a specific vehicle for my booking?",
    answer:
      "Yes, you can request a specific vehicle based on availability. Our team will confirm the selected vehicle at the time of booking.",
  },
];

// ======================================================
// FLOATING ICON
// ======================================================

function FloatingIcon({
  icon: Icon,
  position,
  delay = 0,
}: {
  icon: React.ElementType;
  position: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        opacity: {
          duration: 0.5,
          delay,
        },
        scale: {
          duration: 0.5,
          delay,
        },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      viewport={{
        once: true,
      }}
      className={`absolute z-20 ${position}`}
    >
      <div
        className="
          flex
          h-[34px]
          w-[34px]
          items-center
          justify-center
          rounded-full
          border
          border-[#dcebd8]
          bg-white
          shadow-[0_5px_18px_rgba(8,127,53,0.12)]

          sm:h-[38px]
          sm:w-[38px]

          md:h-[42px]
          md:w-[42px]

          lg:h-[44px]
          lg:w-[44px]

          xl:h-[48px]
          xl:w-[48px]
        "
      >
        <Icon
          className="
            text-[14px]
            text-[#087F35]

            sm:text-[15px]
            md:text-[17px]
            lg:text-[18px]
            xl:text-[20px]
          "
        />
      </div>
    </motion.div>
  );
}

// ======================================================
// FAQ ITEM
// ======================================================

function FAQItem({
  item,
  isOpen,
  onClick,
}: {
  item: (typeof faqData)[number];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      className={`
        relative
        shrink-0
        overflow-hidden
        rounded-[12px]
        border
        bg-white
        transition-all
        duration-300

        ${
          isOpen
            ? "border-[#087F35] shadow-[0_7px_22px_rgba(8,127,53,0.08)]"
            : "border-[#e7e9e7] shadow-[0_4px_15px_rgba(0,0,0,0.045)]"
        }
      `}
    >
      {/* ACTIVE GREEN BORDER */}

      {isOpen && (
        <motion.div
          layoutId="activeFaq"
          className="
            absolute
            bottom-0
            left-0
            top-0
            w-[3px]
            bg-[#087F35]
          "
        />
      )}

      {/* QUESTION */}

      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="
          flex
          min-h-[54px]
          w-full
          items-center
          gap-3
          px-3
          py-2
          text-left

          sm:min-h-[58px]
          sm:px-4

          md:min-h-[61px]

          lg:min-h-[63px]
          lg:px-4

          xl:min-h-[66px]
        "
      >
        {/* NUMBER */}

        <span
          className={`
            flex
            h-[28px]
            w-[28px]
            shrink-0
            items-center
            justify-center
            rounded-full
            text-[10px]
            font-bold
            text-white

            sm:h-[31px]
            sm:w-[31px]
            sm:text-[11px]

            md:h-[33px]
            md:w-[33px]

            lg:h-[34px]
            lg:w-[34px]

            ${isOpen ? "bg-[#087F35]" : "bg-[#4B9824]"}
          `}
        >
          {String(item.id).padStart(2, "0")}
        </span>

        {/* DIVIDER */}

        <span
          className="
            h-[25px]
            w-px
            shrink-0
            bg-[#dfe6df]

            sm:h-[30px]
            md:h-[32px]
          "
        />

        {/* QUESTION */}

        <span
          className="
            min-w-0
            flex-1
            pr-1
            text-[10px]
            font-extrabold
            leading-[1.35]
            text-[#1d2735]

            min-[375px]:text-[10.5px]

            sm:text-[11px]

            md:text-[11.5px]

            lg:text-[12px]

            xl:text-[13px]

            2xl:text-[14px]
          "
        >
          {item.question}
        </span>

        {/* PLUS / MINUS */}

        <span
          className={`
            flex
            h-[25px]
            w-[25px]
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            text-[15px]
            font-medium
            transition-all
            duration-300

            sm:h-[27px]
            sm:w-[27px]

            md:h-[28px]
            md:w-[28px]

            lg:h-[29px]
            lg:w-[29px]

            ${
              isOpen
                ? "border-[#087F35] bg-[#087F35] text-white"
                : "border-[#e1e5e1] bg-white text-[#087F35]"
            }
          `}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* ANSWER */}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <div
              className="
                border-t
                border-[#edf1ed]
                px-[47px]
                pb-3
                pt-2.5
                text-[9px]
                leading-[1.55]
                text-[#5b6470]

                sm:px-[53px]
                sm:text-[9.5px]

                md:px-[57px]
                md:text-[10px]

                lg:pr-10

                xl:text-[10.5px]
              "
            >
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ======================================================
// SUPPORT CARD
// ======================================================

function SupportCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      viewport={{
        once: true,
      }}
      className="
        relative
        z-30
        mx-auto
        mt-[-4px]
        w-[88%]
        max-w-[290px]
        rounded-[13px]
        border
        border-[#e1e9dd]
        bg-white
        px-3
        py-2.5
        shadow-[0_7px_22px_rgba(0,0,0,0.09)]

        sm:w-[82%]
        sm:max-w-[310px]
        sm:px-4
        sm:py-3

        md:max-w-[320px]

        lg:absolute
        lg:bottom-[4px]
        lg:left-[7%]
        lg:mt-0
        lg:w-[250px]
        lg:px-3
        lg:py-2.5

        xl:left-[6%]
        xl:w-[270px]
        xl:px-4
        xl:py-3
      "
    >
      <div className="flex items-center gap-2.5">
        {/* ICON */}

        <div
          className="
            flex
            h-[34px]
            w-[34px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#EAF5E5]
            text-[#087F35]

            sm:h-[38px]
            sm:w-[38px]

            xl:h-[42px]
            xl:w-[42px]
          "
        >
          <FaHeadset
            className="
              text-[17px]
              sm:text-[19px]
              xl:text-[20px]
            "
          />
        </div>

        {/* CONTENT */}

        <div className="min-w-0">
          <p
            className="
              text-[9px]
              font-extrabold
              text-[#1f2937]

              sm:text-[10px]

              xl:text-[11px]
            "
          >
            Still have questions?
          </p>

          <p
            className="
              mt-[1px]
              text-[7px]
              leading-[1.4]
              text-[#727b84]

              sm:text-[8px]

              xl:text-[9px]
            "
          >
            Our support team is here to help you!
          </p>

          <button
            type="button"
            className="
              mt-[2px]
              text-[8px]
              font-extrabold
              text-[#087F35]
              transition-colors
              hover:text-[#03C35E]

              sm:text-[9px]

              xl:text-[10px]
            "
          >
            Contact Us →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ======================================================
// MAIN COMPONENT
// ======================================================

export default function DelhiFaqs() {
  const [openFaq, setOpenFaq] = useState(0);

  // FAQ scroll container
  const faqScrollRef = useRef<HTMLDivElement>(null);

  // Pause auto scroll when user hovers
  const [isFaqHovered, setIsFaqHovered] = useState(false);

  // ====================================================
  // FAQ TOGGLE
  // ====================================================

  const toggleFaq = (index: number) => {
    setOpenFaq((current) => (current === index ? -1 : index));
  };

  // ====================================================
  // AUTOMATIC INFINITE FAQ SCROLL
  // ====================================================

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleAutoScroll = () => {
      const container = faqScrollRef.current;

      if (!container) return;

      // Do not auto-scroll while hovering
      if (isFaqHovered) return;

      // Desktop only
      if (!mediaQuery.matches) return;

      const maxScroll = container.scrollHeight - container.clientHeight;

      // Nothing to scroll
      if (maxScroll <= 0) return;

      const currentScroll = container.scrollTop;

      // Scroll amount
      const scrollAmount = 75;

      // Reached bottom
      if (currentScroll >= maxScroll - 5) {
        container.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          top: scrollAmount,
          behavior: "smooth",
        });
      }
    };

    const interval = window.setInterval(handleAutoScroll, 2500);

    return () => {
      window.clearInterval(interval);
    };
  }, [isFaqHovered]);

  // ====================================================
  // RETURN
  // ====================================================

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-cover
        bg-bottom
        bg-no-repeat
        px-3
        py-5

        min-[375px]:px-4
        min-[375px]:py-6

        sm:px-5
        sm:py-8

        md:px-7
        md:py-10

        lg:px-4
        lg:py-5

        xl:px-6
        xl:py-7
      "
      style={{
        backgroundImage: "url('/images/faq/bg.webp')",
      }}
    >
      {/* ==================================================
          BACKGROUND OVERLAY
          ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-white/[0.82]
        "
      />

      {/* ==================================================
          OUTER FAQ CONTAINER
          ================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          overflow-hidden
          rounded-[15px]
          border
          border-[#e8ebe8]
          bg-white
          shadow-[0_5px_25px_rgba(0,0,0,0.06)]

          lg:min-h-[515px]

          xl:min-h-[535px]

          2xl:min-h-[550px]
        "
      >
            {/* BACKGROUND DECORATION */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* LEFT GREEN GLOW */}
          <div
            className=" absolute -left-[120px] top-[130px] h-[300px] w-[300px] rounded-full bg-[#03C35E]/[0.035] blur-3xl lg:h-[430px] lg:w-[430px]"
          />
          {/* RIGHT GREEN GLOW */}
          <div
            className=" absolute right-[-150px] top-[20px] h-[350px] w-[350px] rounded-full bg-[#087F35]/[0.018] blur-3xl"
          />
          {/* CENTER SOFT GLOW */}
          <div
            className=" absolute left-[27%] top-[32%] h-[220px] w-[220px] rounded-full bg-[#03C35E]/[0.018] blur-3xl "
          />
        </div>
            {/* CONTENT */}
        <div
          className=" relative z-10 px-4 py-6 min-[375px]:px-5 sm:px-7 sm:py-8 md:px-9 md:py-9 lg:px-7 lg:py-6 xl:px-9 xl:py-7 "
        >
              {/* MAIN GRID */}
          <div
            className=" grid items-start gap-7 lg:grid-cols-[0.87fr_1.13fr] lg:gap-7 xl:grid-cols-[0.88fr_1.12fr] xl:gap-9 2xl:grid-cols-[0.9fr_1.1fr] 2xl:gap-12 "
          >
                {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -25, }}
              whileInView={{ opacity: 1, x: 0, }}
              transition={{ duration: 0.65, }}
              viewport={{ once: true, }}
              className=" relative flex min-h-[420px] flex-col items-center text-center sm:min-h-[460px] md:min-h-[480px] lg:min-h-[455px] lg:items-start lg:text-left xl:min-h-[475px] 2xl:min-h-[490px] "
            >
                  {/* EYEBROW */}
              <div
                className=" relative z-30 flex items-center gap-2 rounded-full border border-[#e5ecdf] bg-[#f7fbf5] px-2.5 py-1 sm:px-3 sm:py-1.5 "
              >
                <div
                  className=" flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#eaf5e5] sm:h-[20px] sm:w-[20px] "
                >
                  <FaQuestionCircle
                    className=" text-[10px] text-[#4B9824] sm:text-[12px] "
                  />
                </div>

                <span
                  className=" text-[7px] font-extrabold uppercase tracking-[0.04em] text-[#4B9824] sm:text-[8px] md:text-[9px] "
                >
                  Help & Support
                </span>
              </div>
                  {/* HEADING */}
              <div
                className=" relative z-30 mt-3 w-full sm:mt-3.5 lg:mt-3 "
              >
                <h2
                  className=" text-[42px] font-black leading-[0.9] tracking-[-0.045em] text-[#142236] min-[375px]:text-[45px] min-[430px]:text-[48px] sm:text-[52px] md:text-[55px] lg:text-[47px] xl:text-[53px] 2xl:text-[58px] "
                >
                  FAQs
                </h2>

                <h3
                  className=" mt-1 text-[19px] font-extrabold leading-none text-[#4B9824] sm:text-[21px] md:text-[23px] lg:text-[21px] xl:text-[24px] 2xl:text-[26px] "
                >
                  Frequently Asked
                </h3>
                <div
                  className=" relative mt-[-1px] inline-block font-serif text-[26px] italic leading-none text-[#F7941E] sm:text-[28px] md:text-[30px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] "
                >
                  Question
                  <span
                    className=" absolute -bottom-[5px] left-0 h-[1px] w-[105%] rotate-[-1deg] bg-[#F7941E] "
                  />
                </div>
              </div>
                  {/* DESCRIPTION */}
              <p
                className=" relative z-30 mt-4 max-w-[285px] text-[9px] font-medium leading-[1.6] text-[#59636d] sm:max-w-[310px] sm:text-[10px] md:text-[10.5px] lg:max-w-[280px] lg:text-[9px] xl:max-w-[300px] xl:text-[10px] "
              >
                Everything you need to know
                <br />
                before you book your ride.
              </p>
                  {/* CAR VISUAL */}
              <div
                className=" relative mt-2 h-[230px] w-full max-w-[430px] sm:mt-1 sm:h-[255px] md:h-[275px] lg:absolute lg:bottom-[0px] lg:left-[-24px] lg:mt-0 lg:h-[300px] lg:w-[500px] lg:max-w-none xl:left-[-30px] xl:h-[315px] xl:w-[530px] 2xl:left-[-35px] 2xl:h-[330px] 2xl:w-[550px]"
              >
                {/* MAIN ORBIT */}
                <div
                  className=" absolute left-1/2 top-[30px] h-[195px] w-[315px] -translate-x-1/2 rotate-[-7deg] rounded-[50%] border border-[#087F35]/20 sm:top-[34px] sm:h-[215px] sm:w-[350px] md:h-[235px] md:w-[390px] lg:top-[36px] lg:h-[255px] lg:w-[430px] xl:h-[270px] xl:w-[455px] 2xl:h-[280px] 2xl:w-[475px] "
                />
                {/* SECOND ORBIT */}
                <div
                  className=" absolute left-1/2 top-[45px] h-[165px] w-[275px] -translate-x-1/2 rotate-[-7deg] rounded-[50%] border border-[#087F35]/10 sm:h-[180px] sm:w-[305px] md:h-[198px] md:w-[340px] lg:h-[215px] lg:w-[370px] xl:h-[230px] xl:w-[395px] "
                />
                {/* DOT LEFT */}
                <div
                  className=" absolute left-[12%] top-[118px] h-[4px] w-[4px] rounded-full bg-[#087F35] shadow-[0_0_0_5px_rgba(8,127,53,0.06)] "
                />
                {/* DOT RIGHT */}
                <div
                  className=" absolute right-[9%] top-[108px] h-[4px] w-[4px] rounded-full bg-[#03C35E]"
                />
                {/* FLOATING CALENDAR */}
                <FloatingIcon
                  icon={FaCalendarCheck}
                  position=" left-[15%] top-[50px] "
                  delay={0.1}
                />
                {/* FLOATING SHIELD */}
                <FloatingIcon
                  icon={FaShieldAlt}
                  position=" right-[14%] top-[40px] "
                  delay={0.2}
                />
                {/* FLOATING HEADSET */}
                <FloatingIcon
                  icon={FaHeadset}
                  position=" right-[5%] top-[112px]"
                  delay={0.3}
                />
                {/* FLOATING RUPEE */}
                <FloatingIcon
                  icon={FaRupeeSign}
                  position=" right-[19%] bottom-[20px] "
                  delay={0.4}
                />
                    {/* CAR - LEFT FACING */}
                <motion.div
                  initial={{ opacity: 0, y: 20, }}
                  whileInView={{ opacity: 1, y: 0, }}
                  transition={{ duration: 0.7, delay: 0.15, }}
                  viewport={{ once: true, }}
                  className=" absolute bottom-[18px] left-1/2 z-10 w-[62%] -translate-x-1/2 sm:w-[60%] md:w-[58%] lg:bottom-[65px] lg:w-[63%] xl:w-[65%] ">
                  <Image
                    src="/images/faq/bus1.webp"
                    alt="Urban Cruise car rental"
                    width={700}
                    height={400}
                    priority
                    className=" h-auto w-full object-contain scale-x-[-1] drop-shadow-[0_14px_17px_rgba(0,0,0,0.14)] "
                  />
                </motion.div>

                {/* FLOOR SHADOW */}
                <div
                  className=" absolute bottom-[22px] left-1/2 z-[5] h-[16px] w-[68%] -translate-x-1/2 rounded-[50%] bg-black/[0.08] blur-md lg:bottom-[27px]"
                />
              </div>
                  {/* SUPPORT CARD */}
              <SupportCard />
            </motion.div>

                {/* RIGHT FAQ SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 25,}}
              whileInView={{ opacity: 1, x: 0,}}
              transition={{
                duration: 0.65,
              }}
              viewport={{ once: true,}}
              className=" relative z-30 w-full lg:pt-[0px]"
            >
                  {/* FAQ SCROLL CONTAINER */}
              <div
                ref={faqScrollRef}
                onMouseEnter={() => setIsFaqHovered(true)}
                onMouseLeave={() => setIsFaqHovered(false)}
                className=" flex flex-col gap-2.5 sm:gap-3 md:gap-3.5 lg:max-h-[405px] lg:gap-2.5 lg:overflow-y-auto lg:pr-0 xl:max-h-[425px] xl:gap-3 2xl:max-h-[440px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
                "
              >
                {faqData.map((item, index) => (
                  <FAQItem
                    key={item.id}
                    item={item}
                    isOpen={openFaq === index}
                    onClick={() => toggleFaq(index)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
