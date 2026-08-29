"use client";
import { useEffect, useRef, useState } from "react";
import {
  FaCalendarCheck,
  FaMapPin,
  FaFileInvoice,
  FaShieldAlt,
  FaDownload,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  { icon: FaCalendarCheck, title: "Easy Booking", description: "Book in just a few taps" },
  { icon: FaMapPin, title: "Live Tracking", description: "Track your ride in real-time" },
  { icon: FaFileInvoice, title: "Smart Invoicing", description: "Get invoices instantly" },
  { icon: FaShieldAlt, title: "Safe & Trusted", description: "Verified drivers for your safety" },
];

const stats = [
  { icon: FaDownload, value: "10K+", label: "Downloads" },
  { icon: FaStar, value: "4.8", label: "Average Rating" },
  { icon: FaUsers, value: "10K+", label: "Happy Users" },
];

const vehicleCards = [
  { title: "Sedan", subtitle: "4 Seater", emoji: "🚗" },
  { title: "SUV", subtitle: "6 Seater", emoji: "🚙" },
  { title: "Premium", subtitle: "Luxury", emoji: "🏎️" },
];

// Simple scroll-reveal replacement for framer-motion's whileInView
function Reveal({ children, delay = 0, className = "", y = 25 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : `translateY(${y}px)`,
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function PhoneMockup() {
  return (
    <Reveal delay={0} y={40} className="relative z-20 mx-auto w-[280px] sm:w-[320px] md:w-[350px] lg:w-[390px]" >
      <div
        className="relative"
        style={{ transform: "rotate(5deg)" }}
      >
        {/* Phone outer body */}
        <div className="relative rounded-[48px] border-[8px] border-[#111] bg-[#111] p-[4px] shadow-[0_30px_70px_rgba(0,0,0,0.25)]">
          {/* Screen */}
          <div className="relative overflow-hidden rounded-[38px] bg-white">
            {/* Status bar */}
            <div className="flex h-12 items-center justify-between px-6 pt-2 text-[10px] text-gray-700">
              <span>9:41</span>
              <div className="absolute left-1/2 top-2 h-6 w-20 -translate-x-1/2 rounded-full bg-black" />
              <div className="flex items-center gap-1">
                <span>●</span>
                <span>▮▮</span>
                <span>▮</span>
              </div>
            </div>

            {/* App Header */}
            <div className="flex items-center justify-between px-5 py-3">
              <div className="text-lg">☰</div>
              <div className="flex-1 px-4 text-sm font-semibold text-[#17202b]">
                Hello, <span className="text-[#198b13]">Ravi</span>
              </div>
              <div className="text-gray-700">♧</div>
            </div>

            {/* Location Card */}
            <div className="mx-4 rounded-2xl bg-white p-4 shadow-[0_5px_25px_rgba(0,0,0,0.10)]">
              <p className="mb-3 text-[11px] font-semibold text-gray-700">
                Where are you going?
              </p>
              <div className="relative space-y-2">
                <div className="absolute left-[5px] top-4 h-7 border-l border-dashed border-gray-300" />
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#168b0e]" />
                  <div className="flex-1 rounded-lg border border-gray-100 px-3 py-2 text-[9px] text-gray-400">
                    Current Location
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="flex-1 rounded-lg border border-gray-100 px-3 py-2 text-[9px] text-gray-400">
                    Destination
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Book */}
            <div className="px-4 pt-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#17202b]">Quick Book</h3>
                <span className="text-[10px] font-semibold text-[#198b13]">View All</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {vehicleCards.map((vehicle) => (
                  <div
                    key={vehicle.title}
                    className="rounded-xl border border-gray-100 bg-white p-2 shadow-sm"
                  >
                    <div className="flex h-12 items-center justify-center text-2xl">
                      {vehicle.emoji}
                    </div>
                    <p className="mt-1 text-[9px] font-bold text-gray-800">{vehicle.title}</p>
                    <p className="text-[7px] text-gray-400">{vehicle.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Banner */}
            <div className="mx-4 mt-5 overflow-hidden rounded-xl bg-[#edf7e9] p-4">
              <div className="max-w-[145px]">
                <p className="text-[11px] font-bold leading-4 text-[#1f3020]">Corporate travel,</p>
                <p className="text-[11px] font-bold leading-4 text-[#198b13]">made effortless.</p>
                <p className="mt-2 text-[7px] text-gray-500">
                  Comfortable rides for your business journeys.
                </p>
              </div>
              <div className="mt-2 flex justify-end">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#263b27] text-lg">
                  💼
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="mt-5 flex justify-between border-t border-gray-100 px-5 py-4 text-[8px] text-gray-400">
              <div className="flex flex-col items-center gap-1 text-[#198b13]">
                <span>⌂</span>
                <span>Home</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span>▣</span>
                <span>Bookings</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span>♧</span>
                <span>Trips</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span>♙</span>
                <span>Profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function QRCode() {
  return (
    <div className="flex h-[78px] w-[78px] items-center justify-center rounded-lg border-2 border-[#198b13] bg-white p-1">
      <div className="grid h-full w-full grid-cols-7 gap-[2px] bg-white p-1">
        {Array.from({ length: 49 }).map((_, index) => (
          <span
            key={index}
            className={
              (index * 17 + index * 3) % 5 === 0 || index < 7 || index > 41
                ? "bg-black"
                : "bg-white"
            }
          />
        ))}
      </div>
    </div>
  );
}

export default function DownloadApp() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-14 md:py-16 lg:py-20">
      
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft green glow */}
        <div className="absolute left-1/2 top-20 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#087F35]/[0.025] blur-3xl" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-3 min-[375px]:px-4 min-[430px]:px-5 sm:px-6 md:px-8 lg:px-9 xl:px-10 2xl:px-12">

        {/* ================= HEADER - SAME AS TRUSTED PARTNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            mb-9
            grid
            w-full
            items-center
            gap-7
            min-[375px]:mb-10
            min-[375px]:gap-8
            min-[430px]:mb-10
            min-[430px]:gap-8
            sm:mb-12
            sm:gap-9
            md:mb-14
            md:gap-10
            lg:mb-16
            lg:grid-cols-[1fr_1fr]
            lg:gap-6
            xl:mb-[72px]
            xl:gap-8
            2xl:mb-20
            2xl:gap-10
          "
        >
          {/* LEFT CONTENT */}
          <div className="w-full max-w-[720px] text-left">
            {/* EYEBROW / BADGE */}
            <div
              className="
                mb-3
                flex
                w-full
                items-center
                justify-start
                gap-2
                min-[430px]:mb-3.5
                min-[430px]:gap-2.5
                sm:mb-4
                md:gap-3
                lg:gap-3.5
                xl:gap-4
              "
            >
              <span
                className="
                  block
                  h-px
                  w-5
                  shrink-0
                  bg-gray-400/60
                  sm:w-7
                  md:w-9
                  lg:w-11
                  xl:w-12
                  2xl:w-14
                "
              />

              <span
                className="
                  whitespace-nowrap
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#03C35E]
                  min-[375px]:text-[8.5px]
                  min-[430px]:text-[9px]
                  min-[430px]:tracking-[0.16em]
                  sm:text-[9.5px]
                  sm:tracking-[0.18em]
                  md:text-[10px]
                  lg:text-[11px]
                  xl:text-xs
                "
              >
                Download Our App
              </span>

              <span
                className="
                  block
                  h-px
                  w-5
                  shrink-0
                  bg-gray-400/60
                  sm:w-7
                  md:w-9
                  lg:w-11
                  xl:w-12
                  2xl:w-14
                "
              />
            </div>

            {/* MAIN HEADING */}
            <h2
              className="
                text-[24px]
                font-extrabold
                leading-[1.05]
                tracking-[-0.04em]
                text-[#142236]
                min-[375px]:text-[25px]
                min-[430px]:text-[27px]
                sm:text-[28px]
                md:text-[32px]
                lg:text-[40px]
                xl:text-[48px]
                2xl:text-[56px]
              "
            >
              Your Journey,{" "}
              <span className="text-[#188A31]">
                <br /> Simplified.
              </span>
            </h2>

            {/* SUB HEADING */}
            <p
              className="
                mt-3
                font-serif
                text-[19px]
                italic
                leading-tight
                text-[#03C35E]
                min-[375px]:text-[20px]
                min-[430px]:text-[21px]
                sm:text-[22px]
                md:text-[25px]
                lg:text-[27px]
                xl:text-[30px]
                2xl:text-[32px]
              "
            >
              In Your Pocket.
            </p>

            {/* DESCRIPTION */}
            <div
              className="
                mt-4
                max-w-[620px]
                space-y-3
                text-[10px]
                leading-[1.7]
                text-[#303944]
                min-[375px]:text-[10.5px]
                min-[430px]:text-[11px]
                sm:mt-5
                sm:text-[11px]
                md:text-xs
                lg:text-sm
                xl:text-base
              "
            >
              <p>
                Book rides, track in real-time, manage trips and more – 
                all from the <span className="font-bold text-[#188b10]">Urban Cruise</span> app.
                Experience seamless travel management at your fingertips.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - PHONE MOCKUP */}
          <div
            className="
              relative
              hidden
              w-full
              items-center
              justify-center
              lg:flex
              lg:justify-end
            "
          >
            <PhoneMockup />
          </div>
        </motion.div>

        {/* ================= FEATURES, DOWNLOAD & STATS ================= */}
        <div className="mx-auto max-w-[1140px]">
          
          {/* FEATURES */}
          <div className="mt-8 grid grid-cols-2 gap-y-7 sm:grid-cols-4 sm:gap-0">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`flex flex-col items-center px-3 text-center sm:px-4 lg:px-5 ${
                    index !== 0 ? "sm:border-l sm:border-[#dce2dc]" : ""
                  }`}
                >
                  <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#eef6eb] shadow-sm">
                    <Icon className="h-8 w-8 text-[#198b13]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#172333]">{feature.title}</h3>
                  <p className="mt-1 max-w-[120px] text-xs leading-5 text-[#58677a]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* DOWNLOAD CARD */}
          <div className="mt-8 flex max-w-[710px] flex-col overflow-hidden rounded-2xl border border-[#dfe5df] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:flex-row">
            <div className="relative flex min-h-[130px] w-full items-center justify-center overflow-hidden bg-[#198b13] sm:w-[170px]">
              <div className="absolute -right-12 top-1/2 h-32 w-32 -translate-y-1/2 rotate-45 rounded-[30px] bg-[#21991a]" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md">
                  <span className="text-2xl font-black tracking-[-2px] text-[#198b13]">UC</span>
                </div>
                <span className="mt-2 text-sm font-semibold text-white">Urban Cruise</span>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-center px-5 py-5 sm:px-6">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-lg font-bold text-[#182536]">Download the App</h3>
                  <p className="mt-1 text-sm text-[#627082]">Available on Android and iOS</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href="#"
                      className="flex h-10 items-center gap-2 rounded-md bg-black px-3 text-white transition hover:scale-105"
                    >
                      <span className="text-lg">▶</span>
                      <div className="leading-none">
                        <span className="block text-[7px]">GET IT ON</span>
                        <span className="text-xs font-medium">Google Play</span>
                      </div>
                    </a>

                    <a
                      href="#"
                      className="flex h-10 items-center gap-2 rounded-md bg-black px-3 text-white transition hover:scale-105"
                    >
                      <span className="text-lg">●</span>
                      <div className="leading-none">
                        <span className="block text-[7px]">Download on the</span>
                        <span className="text-xs font-medium">App Store</span>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-t border-[#e5e9e5] pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                  <div>
                    <p className="text-[10px] font-bold text-[#198b13]">OR SCAN TO DOWNLOAD</p>
                    <div className="mt-2 flex items-center gap-2 text-[#198b13]">
                      <span className="text-xs font-medium">Scan</span>
                    </div>
                  </div>
                  <QRCode />
                </div>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-5 flex max-w-[800px] flex-col rounded-2xl border border-[#dfe5df] bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex items-center gap-3 py-2 sm:flex-1 sm:justify-center ${
                    index !== 0 ? "border-t border-[#e1e6e1] sm:border-l sm:border-t-0" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#176d0e] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#176d0e]">{stat.value}</p>
                    <p className="text-xs text-[#334155]">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}