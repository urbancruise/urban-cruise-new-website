"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import {
  FaHeadset,
  FaLock,
  FaPaperPlane,
  FaPhoneAlt,
  FaRupeeSign,
  FaShieldAlt,
  FaTimes,
  FaUser,
  FaUserTie,
} from "react-icons/fa";
import { useLocation } from "@/app/context/LocationContext";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

const locationOffers: Record<
  string,
  { headline: string; description: string }
> = {
  delhi: {
    headline: "Delhi Tempo Traveller Offer!",
    description:
      "Share your details to hear about current Tempo Traveller offers for trips from Delhi.",
  },
  gurugram: {
    headline: "Gurugram Group Travel Offer!",
    description:
      "Share your details to hear about current group travel offers from Gurugram.",
  },
  mumbai: {
    headline: "Mumbai Tempo Traveller Offer!",
    description:
      "Share your details to hear about current Tempo Traveller offers for trips from Mumbai.",
  },
  pune: {
    headline: "Pune Group Travel Offer!",
    description:
      "Share your details to hear about current group travel offers from Pune.",
  },
  global: {
    headline: "Tempo Traveller Offer!",
    description:
      "Share your details and our team will tell you about current offers in your area.",
  },
};

export default function OfferPopup() {
  const { location } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const offer = locationOffers[location] ?? locationOffers.global;

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 10_000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "")
      .replace(/\D/g, "")
      .slice(0, 10);

    setFormError("");
    setFormSuccess("");

    if (!name || !/^\d{10}$/.test(phone)) {
      setFormError("Please enter your name and a valid 10-digit phone number.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/quick-calls", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone_number: `+91 ${phone}`,
          page_url: `${window.location.origin}${window.location.pathname}`,
        }),
      });

      if (!response.ok) {
        const result: unknown = await response.json();
        const message =
          isRecord(result) && typeof result.error === "string"
            ? result.error
            : "Unable to submit your offer request right now.";
        setFormError(message);
        return;
      }

      setFormSuccess("Thank you! Our team will contact you shortly.");
      form.reset();
    } catch (error) {
      console.error("[OfferPopup] offer request failed:", error);
      setFormError("Unable to submit your offer request right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1100] flex h-dvh w-screen items-center justify-center bg-[#092c3b]/75 p-0 backdrop-blur-sm md:p-3"
      onClick={() => setIsOpen(false)}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="offer-popup-title"
        aria-describedby="offer-popup-description"
        className="relative grid h-fit max-h-[calc(100dvh-24px)] w-full max-w-6xl grid-cols-1 grid-rows-[clamp(128px,24dvh,168px)_auto] overflow-hidden rounded-3xl bg-white shadow-2xl sm:h-dvh sm:max-h-none sm:grid-cols-2 sm:grid-rows-1 md:h-[calc(100dvh-24px)] md:max-h-[760px]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close offer"
          className="absolute right-2 top-2 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-[#142236] shadow-md transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#03C35E] sm:right-3 sm:top-3 md:right-4 md:top-4 md:h-10 md:w-10"
        >
          <FaTimes aria-hidden="true" />
        </button>

        <div className="relative flex h-[clamp(128px,24dvh,168px)] min-h-0 flex-col overflow-hidden bg-gradient-to-b from-[#a9e3ff] via-[#edf9ff] to-[#ddf5e4] p-3 sm:h-auto sm:p-4 md:p-8 lg:p-9">
          <div className="absolute -left-16 top-32 h-48 w-48 rounded-full bg-white/40 blur-3xl" />
          <div className="absolute -right-10 top-4 h-56 w-36 rotate-12 bg-gradient-to-b from-[#03C35E]/60 to-[#f7941e]/60 blur-[1px] [clip-path:polygon(0_0,100%_0,55%_100%)]" />
          <div className="absolute inset-x-0 bottom-24 h-28 bg-gradient-to-t from-[#4c9f69]/35 to-transparent" />

          <div className="relative z-10">
            <Image
              src="/images/logo.webp"
              alt="Urban Cruise"
              width={190}
              height={45}
              className="h-auto w-24 object-contain md:w-40 lg:w-44"
            />
            <p className="mt-1 text-sm font-extrabold italic leading-tight text-[#142236] md:mt-5 md:text-3xl lg:text-4xl">
              Tempo Traveller
            </p>
            <h2 className="mt-1 inline-block -rotate-2 rounded-lg bg-gradient-to-r from-[#078b36] to-[#03c35e] px-2 py-1 text-base font-black italic text-white shadow-lg md:mt-2 md:rounded-xl md:px-4 md:py-2 md:text-4xl lg:text-5xl">
              Special Offer
            </h2>
            <p className="mt-1 text-[10px] font-bold italic text-[#142236] md:mt-3 md:text-base lg:text-lg">
              Travel More <span className="text-[#f7941e]">•</span> Pay Less
            </p>
          </div>

          <div className="absolute bottom-1 right-1 z-10 h-16 w-28 md:relative md:bottom-auto md:right-auto md:mt-auto md:h-0 md:min-h-0 md:w-full md:flex-1">
            <Image
              src="/images/hero/Hero image section tempo traveller.webp"
              alt="Tempo Traveller for group travel"
              fill
              sizes="(max-width: 767px) 35vw, 50vw"
              className="object-contain object-bottom"
              priority
            />
          </div>

          <ul className="relative z-10 mt-2 hidden grid-cols-4 gap-1 border-t border-[#078b36]/20 pt-3 text-center text-[10px] font-semibold leading-tight text-[#142236] md:grid md:gap-3 md:text-xs">
            <li className="flex flex-col items-center gap-1">
              <FaShieldAlt className="text-base text-[#078b36] sm:text-xl" />
              <span>Safe &amp; Reliable</span>
            </li>
            <li className="flex flex-col items-center gap-1">
              <FaUserTie className="text-base text-[#078b36] sm:text-xl" />
              <span>Professional Drivers</span>
            </li>
            <li className="flex flex-col items-center gap-1">
              <FaHeadset className="text-base text-[#078b36] sm:text-xl" />
              <span>24/7 Support</span>
            </li>
            <li className="flex flex-col items-center gap-1">
              <FaRupeeSign className="text-base text-[#078b36] sm:text-xl" />
              <span>Transparent Pricing</span>
            </li>
          </ul>
        </div>

        <div className="relative flex min-h-0 flex-col justify-start px-3 py-3 sm:justify-center sm:px-4 sm:py-0 md:px-8 md:py-6 lg:px-12 [@media(max-height:639px)]:justify-center [@media(max-height:600px)]:py-0 [@media(max-height:600px)]:pb-2">
          <div className="mx-auto w-full max-w-md text-center">
            <p className="text-xl font-extrabold leading-tight text-[#142236] md:text-3xl lg:text-4xl [@media(max-height:600px)]:text-xl">
              Get Exclusive
            </p>
            <h2
              id="offer-popup-title"
              className="mt-1 text-xl font-extrabold leading-tight text-[#078b36] md:text-3xl lg:text-4xl [@media(max-height:600px)]:text-xl"
            >
              {offer.headline}
            </h2>
            <div className="mx-auto mt-3 hidden h-1 w-32 rounded-full bg-[#f7941e] md:block [@media(max-height:600px)]:hidden" />
            <p
              id="offer-popup-description"
              className="mx-auto mt-1 max-w-sm text-[11px] leading-tight text-[#142236] md:mt-4 md:text-base md:leading-relaxed lg:text-lg [@media(max-height:600px)]:mt-1 [@media(max-height:600px)]:text-[11px] [@media(max-height:600px)]:leading-tight"
            >
              {offer.description}
            </p>

            <form className="mt-2 space-y-1.5 md:mt-5 md:space-y-3 [@media(max-height:600px)]:mt-2 [@media(max-height:600px)]:space-y-1" onSubmit={handleSubmit}>
              <label className="flex h-10 items-center gap-3 rounded-full border border-gray-300 px-4 transition focus-within:border-[#03c35e] focus-within:ring-2 focus-within:ring-[#03c35e]/15 md:h-14 md:gap-4 md:px-5 lg:h-[60px] [@media(max-height:600px)]:h-10">
                <FaUser
                  aria-hidden="true"
                  className="shrink-0 text-base text-[#142236] md:text-xl"
                />
                <span className="sr-only">Your name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  autoComplete="name"
                  maxLength={120}
                  required
                  className="h-full w-full bg-transparent text-sm text-[#142236] outline-none placeholder:text-gray-400 md:text-base"
                />
              </label>

              <label className="flex h-10 items-center gap-3 rounded-full border border-gray-300 px-4 transition focus-within:border-[#03c35e] focus-within:ring-2 focus-within:ring-[#03c35e]/15 md:h-14 md:gap-4 md:px-5 lg:h-[60px] [@media(max-height:600px)]:h-10">
                <FaPhoneAlt
                  aria-hidden="true"
                  className="shrink-0 text-base text-[#142236] md:text-xl"
                />
                <span className="sr-only">Phone number</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  autoComplete="tel-national"
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  required
                  onChange={(event) => {
                    event.currentTarget.value = event.currentTarget.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                  }}
                  className="h-full w-full bg-transparent text-sm text-[#142236] outline-none placeholder:text-gray-400 md:text-base"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex h-10 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#17b943] to-[#078b36] px-5 text-base font-bold text-white shadow-lg shadow-green-700/20 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#078b36] disabled:cursor-not-allowed disabled:opacity-70 md:h-14 md:gap-3 md:px-6 md:text-xl lg:h-[62px] lg:text-2xl [@media(max-height:600px)]:h-10"
              >
                <FaPaperPlane aria-hidden="true" />
                {isSubmitting ? "Submitting..." : "Get Offer"}
              </button>
            </form>

            {formError && (
              <p role="alert" className="mt-3 text-sm text-red-600">
                {formError}
              </p>
            )}
            {formSuccess && (
              <p
                role="status"
                aria-live="polite"
                className="mt-3 text-sm font-medium text-[#078b36]"
              >
                {formSuccess}
              </p>
            )}

            <p className="mt-1 flex items-center justify-center gap-2 text-[9px] text-gray-500 md:mt-4 md:text-xs lg:text-sm [@media(max-height:600px)]:mt-1 [@media(max-height:600px)]:text-[9px]">
              <FaLock aria-hidden="true" className="text-[#142236]" />
              Your information is safe with us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
