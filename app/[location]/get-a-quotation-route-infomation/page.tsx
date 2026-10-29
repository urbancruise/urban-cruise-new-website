// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { useParams, useSearchParams } from "next/navigation";
// import {
//   FaBus,
//   FaCalendarAlt,
//   FaCarSide,
//   FaCheck,
//   FaCrown,
//   FaEnvelope,
//   FaGem,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaRegUser,
//   FaRoute,
//   FaShieldAlt,
//   FaStar,
//   FaUserFriends,
//   FaWhatsapp,
// } from "react-icons/fa";
// import { MdOutlineLuggage } from "react-icons/md";
// import type { IconType } from "react-icons";

// const vehicleOptions = [
//   {
//     name: "Tempo Traveller",
//     category: "Economy",
//     image: "/images/hero/Hero image section tempo traveller.webp",
//     icon: FaBus,
//   },
//   {
//     name: "Urbania",
//     category: "Premium",
//     image: "/images/hero/Hero image section  urbania.webp",
//     icon: FaBus,
//   },
//   {
//     name: "Mini Bus",
//     category: "Premium",
//     image: "/images/hero/Hero image section bus.webp",
//     icon: FaBus,
//   },
//   {
//     name: "Luxury Bus",
//     category: "Royal",
//     image: "/images/hero/3 images.webp",
//     icon: FaBus,
//   },
//   {
//     name: "Sleeper / Semi Sleeper",
//     category: "Royal",
//     image: "/images/hero/Hero image section bus.webp",
//     icon: FaBus,
//   },
//   {
//     name: "Sedan",
//     category: "Economy",
//     image: "/images/hero/vehicleImage.webp",
//     icon: FaCarSide,
//   },
//   {
//     name: "SUV",
//     category: "Premium",
//     image: "/images/vehicleforeverybudget/2.webp",
//     icon: FaCarSide,
//   },
//   {
//     name: "Car",
//     category: "Economy",
//     image: "/images/vehicleforeverygroupsize/7.jpeg",
//     icon: FaCarSide,
//   },
// ];

// const categories = [
//   { name: "Economy", icon: FaCarSide },
//   { name: "Premium", icon: FaCrown },
//   { name: "Royal", icon: FaGem },
//   { name: "Royal VIP", icon: FaStar },
// ];

// type FormData = {
//   name: string;
//   phone: string;
//   email: string;
//   message: string;
//   pickup: string;
//   drop: string;
//   pickupDate: string;
//   dropDate: string;
//   itinerary: string;
//   passengers: string;
//   luggage: string;
// };

// const inputClassName =
//   "h-11 w-full rounded-md border border-[#d6e4f2] bg-white pl-10 pr-3 text-sm text-[#17365f] outline-none transition placeholder:text-[#91a5bd] focus:border-[#06a85f] focus:ring-2 focus:ring-[#06a85f]/15";

// function QuoteField({
//   label,
//   name,
//   icon: Icon,
//   placeholder,
//   type = "text",
//   required = false,
//   value,
//   onChange,
// }: {
//   label: string;
//   name: keyof FormData;
//   icon: IconType;
//   placeholder: string;
//   type?: string;
//   required?: boolean;
//   value: string;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }) {
//   return (
//     <label
//       className="block min-w-0 text-[11px] font-bold text-[#17365f]"
//       htmlFor={name}
//     >
//       {label}
//       {required && <span className="ml-1 text-red-500">*</span>}
//       <span className="relative mt-1 block">
//         <Icon
//           aria-hidden="true"
//           className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#00a85a]"
//         />
//         <input
//           id={name}
//           name={name}
//           type={type}
//           required={required}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           className={inputClassName}
//         />
//       </span>
//     </label>
//   );
// }

// function SectionHeading({
//   icon: Icon,
//   title,
//   description,
// }: {
//   icon: IconType;
//   title: string;
//   description: string;
// }) {
//   return (
//     <div className="mb-3 flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#e7f8f1] to-white px-2 py-1.5 sm:gap-4 sm:px-3">
//       <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#08b968] to-[#008c50] text-lg text-white shadow-md sm:h-12 sm:w-12">
//         <Icon aria-hidden="true" />
//       </span>
//       <span className="min-w-0">
//         <span className="block text-base font-extrabold leading-tight text-[#103b70] sm:text-lg">
//           {title}
//         </span>
//         <span className="mt-0.5 block text-[10px] leading-snug text-[#4c78a7] sm:text-[11px]">
//           {description}
//         </span>
//       </span>
//     </div>
//   );
// }

// export default function GetAQuotePage() {
//   const params = useParams();
//   const searchParams = useSearchParams();

//   // Safely normalize route param (may be string | string[] | undefined)
//   const rawLocation = params?.location;
//   const location = Array.isArray(rawLocation)
//     ? rawLocation[0]
//     : (rawLocation ?? "");

//   // Null-safe service id
//   const serviceId = searchParams?.get("service") ?? "";
//   const formattedService = serviceId ? serviceId.replace(/-/g, " ") : "";

//   const [selectedVehicle, setSelectedVehicle] = useState("Tempo Traveller");
//   const [selectedCategory, setSelectedCategory] = useState("Economy");
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//     pickup: "",
//     drop: "",
//     pickupDate: "",
//     dropDate: "",
//     itinerary: formattedService,
//     passengers: "",
//     luggage: "",
//   });

//   const handleChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value } = event.target;
//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log("Quote requested:", {
//       ...formData,
//       location,
//       serviceId,
//       selectedCategory,
//       selectedVehicle,
//     });
//     alert("Quote request submitted successfully! We will contact you shortly.");
//   };

//   // Filter vehicles by selected category (with fallback to all if none match)
//   const filteredVehicles = vehicleOptions.filter(
//     (vehicle) =>
//       vehicle.category === selectedCategory || selectedCategory === "Royal VIP", // Royal VIP has no dedicated vehicles yet
//   );
//   const vehiclesToRender =
//     filteredVehicles.length > 0 ? filteredVehicles : vehicleOptions;

//   return (
//     <div className="relative w-full bg-white">
//       <section className="relative h-[50vh] w-full overflow-hidden">
//         <Image
//           src="/images/Get A Quote.jpg"
//           alt="Urban Cruise Hero Background"
//           fill
//           priority
//           sizes="100vw"
//           className="object-cover object-center"
//         />

//         <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[30%] bg-gradient-to-b from-transparent via-white/70 to-white sm:h-[28%] md:h-[26%] lg:h-[24%] xl:h-[22%]" />

//         {/* <div className="absolute left-1/2 top-[52%] z-20 flex w-full -translate-x-1/2 items-center justify-center px-2 xs:top-[51%] sm:top-[30%] sm:px-4 md:top-[26%] lg:top-[36%] xl:top-[34%]">
//           <div className="relative mx-auto aspect-[1080/520] w-full max-w-[400px] scale-[1.15] xs:max-w-[400px] xs:scale-[1.15] sm:max-w-[560px] sm:scale-[1.12] md:max-w-[700px] md:scale-[1.12] lg:max-w-[820px] lg:scale-[1.1] xl:max-w-[960px] xl:scale-[1.1] 2xl:max-w-[1080px] 2xl:scale-[1.08]">
//             <Image
//               src="/images/hero/vehicleImage.webp"
//               alt="Urban Cruise Vehicle"
//               fill
//               priority
//               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1080px"
//               className="object-contain"
//             />
//           </div>
//         </div> */}
//       </section>

//       <main className="mx-auto -mt-2 max-w-[1240px] px-3 pb-10 sm:px-6">
//         <form
//           onSubmit={handleSubmit}
//           className="relative z-10 rounded-2xl border border-white bg-white p-3 shadow-[0_12px_36px_rgba(27,52,75,0.12)] sm:rounded-[22px] sm:p-4 md:p-5"
//         >
//           <section className="rounded-xl border border-[#d9f0e7] p-2.5 sm:p-3">
//             <SectionHeading
//               icon={FaRegUser}
//               title="Your Contact Details"
//               description="We'll use this information to get in touch with you and confirm your booking."
//             />
//             <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2 sm:gap-y-4">
//               <QuoteField
//                 label="Full Name"
//                 name="name"
//                 icon={FaRegUser}
//                 placeholder="Enter your full name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-[11px] font-bold text-[#17365f]"
//                 >
//                   Phone Number <span className="text-red-500">*</span>
//                 </label>
//                 <div className="mt-1 flex h-11 overflow-hidden rounded-md border border-[#d6e4f2] bg-white focus-within:border-[#06a85f] focus-within:ring-2 focus-within:ring-[#06a85f]/15">
//                   <span className="flex items-center gap-2 border-r border-[#e1eaf2] px-3 text-sm text-[#355b81]">
//                     <FaPhoneAlt className="text-[#00a85a]" />
//                     <span aria-label="India country code">🇮🇳</span> +91
//                   </span>
//                   <input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     inputMode="tel"
//                     autoComplete="tel-national"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Enter 10 digit mobile number"
//                     className="min-w-0 flex-1 px-3 text-sm text-[#17365f] outline-none placeholder:text-[#91a5bd]"
//                   />
//                 </div>
//                 <div className="mt-1.5 flex items-center justify-between gap-2 rounded-md bg-[#e8f8f1] px-2.5 py-1.5">
//                   <span className="flex min-w-0 items-center gap-2 text-[#009d58]">
//                     <FaShieldAlt className="shrink-0 text-sm" />
//                     <span>
//                       <strong className="block text-[10px]">
//                         Verify your phone number
//                       </strong>
//                       <span className="block text-[9px] text-[#6d9a8b]">
//                         We&apos;ll send you an OTP to verify your number.
//                       </span>
//                     </span>
//                   </span>

//                   <button
//                     type="button"
//                     title="Verify your phone number"
//                     className="flex shrink-0 items-center gap-1 rounded-md bg-[#08ad65] px-2.5 py-2 text-[9px] font-bold text-white transition hover:bg-[#009e58]"
//                   >
//                     <FaCheck /> Verify
//                   </button>
//                 </div>
//               </div>
//               <QuoteField
//                 label="Email Address"
//                 name="email"
//                 icon={FaEnvelope}
//                 type="email"
//                 placeholder="Enter your email address"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               <label
//                 className="block min-w-0 text-[11px] font-bold text-[#17365f]"
//                 htmlFor="message"
//               >
//                 Message <span className="font-medium">(Optional)</span>
//                 <span className="relative mt-1 block">
//                   <FaWhatsapp
//                     aria-hidden="true"
//                     className="pointer-events-none absolute left-3 top-3 text-sm text-[#00a85a]"
//                   />
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={2}
//                     maxLength={500}
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Any special requests? (optional)"
//                     className="min-h-[48px] w-full resize-y rounded-md border border-[#d6e4f2] bg-white py-2 pl-10 pr-3 text-sm text-[#17365f] outline-none transition placeholder:text-[#91a5bd] focus:border-[#06a85f] focus:ring-2 focus:ring-[#06a85f]/15"
//                   />
//                   <span className="absolute bottom-2 right-3 text-[9px] text-[#6784a4]">
//                     {formData.message.length}/500
//                   </span>
//                 </span>
//               </label>
//             </div>
//           </section>

//           <section className="mt-3 rounded-xl border border-[#d9f0e7] p-2.5 sm:mt-4 sm:p-3">
//             <SectionHeading
//               icon={FaRoute}
//               title="Trip Details"
//               description="Tell us where you're going and when. We'll handle the rest."
//             />
//             <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2 sm:gap-y-4">
//               <QuoteField
//                 label="Pickup Address"
//                 name="pickup"
//                 icon={FaMapMarkerAlt}
//                 placeholder="Enter a location"
//                 required
//                 value={formData.pickup}
//                 onChange={handleChange}
//               />
//               <QuoteField
//                 label="Pickup Date"
//                 name="pickupDate"
//                 icon={FaCalendarAlt}
//                 type="date"
//                 placeholder="dd-mm-yyyy"
//                 required
//                 value={formData.pickupDate}
//                 onChange={handleChange}
//               />
//               <QuoteField
//                 label="Drop Address"
//                 name="drop"
//                 icon={FaMapMarkerAlt}
//                 placeholder="Enter a location"
//                 required
//                 value={formData.drop}
//                 onChange={handleChange}
//               />
//               <QuoteField
//                 label="Drop Date"
//                 name="dropDate"
//                 icon={FaCalendarAlt}
//                 type="date"
//                 placeholder="dd-mm-yyyy"
//                 required
//                 value={formData.dropDate}
//                 onChange={handleChange}
//               />
//               <label
//                 className="block min-w-0 text-[11px] font-bold text-[#17365f] sm:col-span-2"
//                 htmlFor="itinerary"
//               >
//                 Travel Itinerary <span className="text-red-500">*</span>
//                 <span className="relative mt-1 block">
//                   <FaRoute
//                     aria-hidden="true"
//                     className="pointer-events-none absolute left-3 top-3 text-sm text-[#00a85a]"
//                   />
//                   <textarea
//                     id="itinerary"
//                     name="itinerary"
//                     rows={2}
//                     required
//                     value={formData.itinerary}
//                     onChange={handleChange}
//                     placeholder="Share complete travel itinerary"
//                     className="min-h-[56px] w-full resize-y rounded-md border border-[#d6e4f2] bg-white py-2 pl-10 pr-3 text-sm text-[#17365f] outline-none transition placeholder:text-[#91a5bd] focus:border-[#06a85f] focus:ring-2 focus:ring-[#06a85f]/15"
//                   />
//                 </span>
//                 <span className="mt-1 block text-[10px] font-normal text-[#4c78a7]">
//                   e.g. Delhi → Manali → Shimla → Delhi
//                 </span>
//               </label>
//               <QuoteField
//                 label="No. of Passengers"
//                 name="passengers"
//                 icon={FaUserFriends}
//                 placeholder="e.g. 2 Adults, 1 Child"
//                 required
//                 value={formData.passengers}
//                 onChange={handleChange}
//               />
//               <QuoteField
//                 label="No. of Luggage"
//                 name="luggage"
//                 icon={MdOutlineLuggage}
//                 placeholder="e.g. 2 Bags"
//                 required
//                 value={formData.luggage}
//                 onChange={handleChange}
//               />
//             </div>
//           </section>

//           <section className="mt-3 rounded-xl border border-[#d9f0e7] p-2.5 sm:mt-4 sm:p-3">
//             <SectionHeading
//               icon={FaCarSide}
//               title="Select a Vehicle"
//               description="Choose from our wide range of vehicles for a comfortable and safe journey."
//             />
//             <div className="mb-2 grid grid-cols-2 gap-1.5 sm:grid-cols-4 sm:gap-2">
//               {categories.map(({ name, icon: Icon }) => {
//                 const isSelected = selectedCategory === name;
//                 return (
//                   <button
//                     key={name}
//                     type="button"
//                     onClick={() => setSelectedCategory(name)}
//                     aria-pressed={isSelected}
//                     className={`flex min-h-9 items-center justify-center gap-2 rounded-lg border px-2 text-[10px] font-bold transition sm:min-h-10 sm:text-xs ${
//                       isSelected
//                         ? "border-[#00a85a] bg-gradient-to-r from-[#08b968] to-[#009e58] text-white shadow-sm"
//                         : "border-[#e0e9f1] bg-white text-[#17365f] hover:border-[#08b968]"
//                     }`}
//                   >
//                     <Icon className="text-sm" />
//                     {name}
//                   </button>
//                 );
//               })}
//             </div>

//             <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
//               {vehiclesToRender.map(({ name, image, category, icon: Icon }) => {
//                 const isSelected = selectedVehicle === name;
//                 return (
//                   <button
//                     key={name}
//                     type="button"
//                     onClick={() => {
//                       setSelectedVehicle(name);
//                       setSelectedCategory(category);
//                     }}
//                     aria-pressed={isSelected}
//                     className={`relative flex min-h-[100px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-white px-2 py-2 text-center transition hover:-translate-y-0.5 hover:shadow-md sm:min-h-[112px] ${
//                       isSelected
//                         ? "border-2 border-[#08ae63] shadow-[0_4px_14px_rgba(0,168,90,0.12)]"
//                         : "border-[#e0e9f1] hover:border-[#08ae63]"
//                     }`}
//                   >
//                     {isSelected ? (
//                       <span className="absolute right-1.5 top-1.5 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-[#08ae63] text-[9px] text-white">
//                         <FaCheck />
//                       </span>
//                     ) : (
//                       <span className="absolute right-1.5 top-1.5 z-10 h-3 w-3 rounded-full border border-[#a5b8c8]" />
//                     )}
//                     <span className="relative flex h-[62px] w-full items-center justify-center sm:h-[70px]">
//                       <Image
//                         src={image}
//                         alt=""
//                         aria-hidden="true"
//                         fill
//                         sizes="(max-width: 639px) 45vw, 22vw"
//                         className="object-contain"
//                       />
//                       <Icon className="absolute bottom-0 right-2 rounded-full bg-white/90 p-1 text-lg text-[#00a85a] shadow-sm" />
//                     </span>
//                     <span className="mt-1 text-[9px] font-bold leading-tight text-[#17365f] sm:text-[10px]">
//                       {name}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           </section>

//           <div className="mt-3 flex flex-col items-center justify-between gap-3 rounded-b-xl bg-gradient-to-r from-[#e7f8f1] via-white to-[#e7f8f1] px-3 py-3 sm:mt-4 sm:flex-row sm:px-5">
//             <div className="flex items-center gap-3 text-center sm:text-left">
//               <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#08ae63] text-lg text-[#08ae63]">
//                 <FaShieldAlt />
//               </span>
//               <span>
//                 <strong className="block text-[10px] text-[#009e58]">
//                   Your information is secure with us.
//                 </strong>
//                 <span className="mt-0.5 block text-[9px] text-[#6d879d]">
//                   We never share your details.
//                 </span>
//               </span>
//             </div>
//             <button
//               type="submit"
//               className="flex min-h-11 w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#ff8c00] to-[#ff7800] px-6 text-xs font-extrabold text-white shadow-md transition hover:brightness-105 hover:shadow-lg sm:w-[min(100%,360px)]"
//             >
//               <FaRoute className="text-sm" />
//               SUBMIT ENQUIRY
//               <span aria-hidden="true" className="text-base">
//                 ›
//               </span>
//             </button>
//           </div>
//         </form>

//         {formattedService && (
//           <p className="mt-3 text-center text-xs text-[#54728f]">
//             Enquiry for: {formattedService.toUpperCase()}
//           </p>
//         )}
//       </main>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import {
  FaBus,
  FaCalendarAlt,
  FaCarSide,
  FaCheck,
  FaCrown,
  FaEnvelope,
  FaGem,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegUser,
  FaRoute,
  FaShieldAlt,
  FaStar,
  FaUserFriends,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineLuggage } from "react-icons/md";
import type { IconType } from "react-icons";

const vehicleOptions = [
  {
    name: "Tempo Traveller",
    category: "Economy",
    image: "/images/hero/Hero image section tempo traveller.webp",
    icon: FaBus,
  },
  {
    name: "Urbania",
    category: "Premium",
    image: "/images/hero/Hero image section  urbania.webp",
    icon: FaBus,
  },
  {
    name: "Mini Bus",
    category: "Premium",
    image: "/images/hero/Hero image section bus.webp",
    icon: FaBus,
  },
  {
    name: "Luxury Bus",
    category: "Royal",
    image: "/images/hero/3 images.webp",
    icon: FaBus,
  },
  {
    name: "Sleeper / Semi Sleeper",
    category: "Royal",
    image: "/images/hero/Hero image section bus.webp",
    icon: FaBus,
  },
  {
    name: "Sedan",
    category: "Economy",
    image: "/images/hero/vehicleImage.webp",
    icon: FaCarSide,
  },
  {
    name: "SUV",
    category: "Premium",
    image: "/images/vehicleforeverybudget/2.webp",
    icon: FaCarSide,
  },
  {
    name: "Car",
    category: "Economy",
    image: "/images/vehicleforeverygroupsize/7.jpeg",
    icon: FaCarSide,
  },
];

const categories = [
  { name: "Economy", icon: FaCarSide },
  { name: "Premium", icon: FaCrown },
  { name: "Royal", icon: FaGem },
  { name: "Royal VIP", icon: FaStar },
];

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
  pickup: string;
  drop: string;
  pickupDate: string;
  dropDate: string;
  itinerary: string;
  passengers: string;
  luggage: string;
};

const inputClassName =
  "h-11 w-full rounded-md border border-[#d6e4f2] bg-white pl-10 pr-3 text-sm text-[#17365f] outline-none transition placeholder:text-[#91a5bd] focus:border-[#06a85f] focus:ring-2 focus:ring-[#06a85f]/15";

function QuoteField({
  label,
  name,
  icon: Icon,
  placeholder,
  type = "text",
  required = false,
  value,
  onChange,
}: {
  label: string;
  name: keyof FormData;
  icon: IconType;
  placeholder: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label
      className="block min-w-0 text-[11px] font-bold text-[#17365f]"
      htmlFor={name}
    >
      {label}
      {required && <span className="ml-1 text-red-500">*</span>}
      <span className="relative mt-1 block">
        <Icon
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#00a85a]"
        />
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClassName}
        />
      </span>
    </label>
  );
}

function SectionHeading({
  icon: Icon,
  title,
  description,
}: {
  icon: IconType;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-3 flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#e7f8f1] to-white px-2 py-1.5 sm:gap-4 sm:px-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#08b968] to-[#008c50] text-lg text-white shadow-md sm:h-12 sm:w-12">
        <Icon aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-base font-extrabold leading-tight text-[#103b70] sm:text-lg">
          {title}
        </span>
        <span className="mt-0.5 block text-[10px] leading-snug text-[#4c78a7] sm:text-[11px]">
          {description}
        </span>
      </span>
    </div>
  );
}

export default function GetAQuotePage() {
  const params = useParams();
  const searchParams = useSearchParams();

  // Safely normalize route param (may be string | string[] | undefined)
  const rawLocation = params?.location;
  const location = Array.isArray(rawLocation)
    ? rawLocation[0]
    : (rawLocation ?? "");

  // Null-safe service id
  const serviceId = searchParams?.get("service") ?? "";
  const formattedService = serviceId ? serviceId.replace(/-/g, " ") : "";

  const [selectedVehicle, setSelectedVehicle] = useState("Tempo Traveller");
  const [selectedCategory, setSelectedCategory] = useState("Economy");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
    pickup: "",
    drop: "",
    pickupDate: "",
    dropDate: "",
    itinerary: formattedService,
    passengers: "",
    luggage: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Quote requested:", {
      ...formData,
      location,
      serviceId,
      selectedCategory,
      selectedVehicle,
    });
    alert("Quote request submitted successfully! We will contact you shortly.");
  };

  // ✅ FIXED: Filter strictly by selected category.
  // "Royal VIP" has no dedicated vehicles, so it intentionally shows ALL vehicles.
  const vehiclesToRender =
    selectedCategory === "Royal VIP"
      ? vehicleOptions
      : vehicleOptions.filter(
          (vehicle) => vehicle.category === selectedCategory,
        );

  return (
    <div className="relative w-full bg-white">
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/images/Get A Quote.jpg"
          alt="Urban Cruise Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[30%] bg-gradient-to-b from-transparent via-white/70 to-white sm:h-[28%] md:h-[26%] lg:h-[24%] xl:h-[22%]" />
      </section>

      <main className="mx-auto -mt-2 max-w-[1240px] px-3 pb-10 sm:px-6">
        <form
          onSubmit={handleSubmit}
          className="relative z-10 rounded-2xl border border-white bg-white p-3 shadow-[0_12px_36px_rgba(27,52,75,0.12)] sm:rounded-[22px] sm:p-4 md:p-5"
        >
          <section className="rounded-xl border border-[#d9f0e7] p-2.5 sm:p-3">
            <SectionHeading
              icon={FaRegUser}
              title="Your Contact Details"
              description="We'll use this information to get in touch with you and confirm your booking."
            />
            <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2 sm:gap-y-4">
              <QuoteField
                label="Full Name"
                name="name"
                icon={FaRegUser}
                placeholder="Enter your full name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[11px] font-bold text-[#17365f]"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 flex h-11 overflow-hidden rounded-md border border-[#d6e4f2] bg-white focus-within:border-[#06a85f] focus-within:ring-2 focus-within:ring-[#06a85f]/15">
                  <span className="flex items-center gap-2 border-r border-[#e1eaf2] px-3 text-sm text-[#355b81]">
                    <FaPhoneAlt className="text-[#00a85a]" />
                    <span aria-label="India country code">🇮🇳</span> +91
                  </span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel-national"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10 digit mobile number"
                    className="min-w-0 flex-1 px-3 text-sm text-[#17365f] outline-none placeholder:text-[#91a5bd]"
                  />
                </div>
                <div className="mt-1.5 flex items-center justify-between gap-2 rounded-md bg-[#e8f8f1] px-2.5 py-1.5">
                  <span className="flex min-w-0 items-center gap-2 text-[#009d58]">
                    <FaShieldAlt className="shrink-0 text-sm" />
                    <span>
                      <strong className="block text-[10px]">
                        Verify your phone number
                      </strong>
                    </span>
                  </span>

                  <button
                    type="button"
                    title="Verify your phone number"
                    className="flex shrink-0 items-center gap-1 rounded-md bg-[#08ad65] px-2.5 py-2 text-[9px] font-bold text-white transition hover:bg-[#009e58]"
                  >
                    <FaCheck /> Verify
                  </button>
                </div>
              </div>
              <QuoteField
                label="Email Address"
                name="email"
                icon={FaEnvelope}
                type="email"
                placeholder="Enter your email address"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <label
                className="block min-w-0 text-[11px] font-bold text-[#17365f]"
                htmlFor="message"
              >
                Message <span className="font-medium">(Optional)</span>
                <span className="relative mt-1 block">
                  <FaWhatsapp
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3 top-3 text-sm text-[#00a85a]"
                  />
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    maxLength={500}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any special requests? (optional)"
                    className="min-h-[48px] w-full resize-y rounded-md border border-[#d6e4f2] bg-white py-2 pl-10 pr-3 text-sm text-[#17365f] outline-none transition placeholder:text-[#91a5bd] focus:border-[#06a85f] focus:ring-2 focus:ring-[#06a85f]/15"
                  />
                  <span className="absolute bottom-2 right-3 text-[9px] text-[#6784a4]">
                    {formData.message.length}/500
                  </span>
                </span>
              </label>
            </div>
          </section>

          <section className="mt-3 rounded-xl border border-[#d9f0e7] p-2.5 sm:mt-4 sm:p-3">
            <SectionHeading
              icon={FaRoute}
              title="Trip Details"
              description="Tell us where you're going and when. We'll handle the rest."
            />
            <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2 sm:gap-y-4">
              <QuoteField
                label="Pickup Address"
                name="pickup"
                icon={FaMapMarkerAlt}
                placeholder="Enter a location"
                required
                value={formData.pickup}
                onChange={handleChange}
              />
              <QuoteField
                label="Pickup Date"
                name="pickupDate"
                icon={FaCalendarAlt}
                type="date"
                placeholder="dd-mm-yyyy"
                required
                value={formData.pickupDate}
                onChange={handleChange}
              />
              <QuoteField
                label="Drop Address"
                name="drop"
                icon={FaMapMarkerAlt}
                placeholder="Enter a location"
                required
                value={formData.drop}
                onChange={handleChange}
              />
              <QuoteField
                label="Drop Date"
                name="dropDate"
                icon={FaCalendarAlt}
                type="date"
                placeholder="dd-mm-yyyy"
                required
                value={formData.dropDate}
                onChange={handleChange}
              />
              <label
                className="block min-w-0 text-[11px] font-bold text-[#17365f] sm:col-span-2"
                htmlFor="itinerary"
              >
                Travel Itinerary <span className="text-red-500">*</span>
                <span className="relative mt-1 block">
                  <FaRoute
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3 top-3 text-sm text-[#00a85a]"
                  />
                  <textarea
                    id="itinerary"
                    name="itinerary"
                    rows={2}
                    required
                    value={formData.itinerary}
                    onChange={handleChange}
                    placeholder="Share complete travel itinerary"
                    className="min-h-[56px] w-full resize-y rounded-md border border-[#d6e4f2] bg-white py-2 pl-10 pr-3 text-sm text-[#17365f] outline-none transition placeholder:text-[#91a5bd] focus:border-[#06a85f] focus:ring-2 focus:ring-[#06a85f]/15"
                  />
                </span>
                <span className="mt-1 block text-[10px] font-normal text-[#4c78a7]">
                  e.g. Delhi → Manali → Shimla → Delhi
                </span>
              </label>
              <QuoteField
                label="No. of Passengers"
                name="passengers"
                icon={FaUserFriends}
                placeholder="e.g. 2 Adults, 1 Child"
                required
                value={formData.passengers}
                onChange={handleChange}
              />
              <QuoteField
                label="No. of Luggage"
                name="luggage"
                icon={MdOutlineLuggage}
                placeholder="e.g. 2 Bags"
                required
                value={formData.luggage}
                onChange={handleChange}
              />
            </div>
          </section>

          <section className="mt-3 rounded-xl border border-[#d9f0e7] p-2.5 sm:mt-4 sm:p-3">
            <SectionHeading
              icon={FaCarSide}
              title="Select a Vehicle"
              description="Choose from our wide range of vehicles for a comfortable and safe journey."
            />
            <div className="mb-2 grid grid-cols-2 gap-1.5 sm:grid-cols-4 sm:gap-2">
              {categories.map(({ name, icon: Icon }) => {
                const isSelected = selectedCategory === name;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setSelectedCategory(name)}
                    aria-pressed={isSelected}
                    className={`flex min-h-9 items-center justify-center gap-2 rounded-lg border px-2 text-[10px] font-bold transition sm:min-h-10 sm:text-xs ${
                      isSelected
                        ? "border-[#00a85a] bg-gradient-to-r from-[#08b968] to-[#009e58] text-white shadow-sm"
                        : "border-[#e0e9f1] bg-white text-[#17365f] hover:border-[#08b968]"
                    }`}
                  >
                    <Icon className="text-sm" />
                    {name}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
              {vehiclesToRender.map(({ name, image, category, icon: Icon }) => {
                const isSelected = selectedVehicle === name;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => {
                      setSelectedVehicle(name);
                      setSelectedCategory(category);
                    }}
                    aria-pressed={isSelected}
                    className={`relative flex min-h-[100px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-white px-2 py-2 text-center transition hover:-translate-y-0.5 hover:shadow-md sm:min-h-[112px] ${
                      isSelected
                        ? "border-2 border-[#08ae63] shadow-[0_4px_14px_rgba(0,168,90,0.12)]"
                        : "border-[#e0e9f1] hover:border-[#08ae63]"
                    }`}
                  >
                    {isSelected ? (
                      <span className="absolute right-1.5 top-1.5 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-[#08ae63] text-[9px] text-white">
                        <FaCheck />
                      </span>
                    ) : (
                      <span className="absolute right-1.5 top-1.5 z-10 h-3 w-3 rounded-full border border-[#a5b8c8]" />
                    )}
                    <span className="relative flex h-[62px] w-full items-center justify-center sm:h-[70px]">
                      <Image
                        src={image}
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes="(max-width: 639px) 45vw, 22vw"
                        className="object-contain"
                      />
                      <Icon className="absolute bottom-0 right-2 rounded-full bg-white/90 p-1 text-lg text-[#00a85a] shadow-sm" />
                    </span>
                    <span className="mt-1 text-[9px] font-bold leading-tight text-[#17365f] sm:text-[10px]">
                      {name}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          <div className="mt-3 flex flex-col items-center justify-between gap-3 rounded-b-xl bg-gradient-to-r from-[#e7f8f1] via-white to-[#e7f8f1] px-3 py-3 sm:mt-4 sm:flex-row sm:px-5">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#08ae63] text-lg text-[#08ae63]">
                <FaShieldAlt />
              </span>
              <span>
                <strong className="block text-[10px] text-[#009e58]">
                  Your information is secure with us.
                </strong>
                <span className="mt-0.5 block text-[9px] text-[#6d879d]">
                  We never share your details.
                </span>
              </span>
            </div>
            <button
              type="submit"
              className="flex min-h-11 w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#ff8c00] to-[#ff7800] px-6 text-xs font-extrabold text-white shadow-md transition hover:brightness-105 hover:shadow-lg sm:w-[min(100%,360px)]"
            >
              <FaRoute className="text-sm" />
              SUBMIT ENQUIRY
              <span aria-hidden="true" className="text-base">
                ›
              </span>
            </button>
          </div>
        </form>

        {formattedService && (
          <p className="mt-3 text-center text-xs text-[#54728f]">
            Enquiry for: {formattedService.toUpperCase()}
          </p>
        )}
      </main>
    </div>
  );
}