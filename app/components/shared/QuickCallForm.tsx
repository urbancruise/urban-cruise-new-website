// app/components/shared/QuickCallForm.tsx
"use client";

import { FaPhoneAlt, FaUser, FaArrowRight } from "react-icons/fa";

interface QuickCallContent {
  icon?: string;
  title?: string;
  subtitle?: string;
  namePlaceholder?: string;
  phonePlaceholder?: string;
  submitLabel?: string;
  submitIcon?: string;
  formAction?: string;
  successMessage?: string;
}

interface QuickCallFormProps {
  className?: string;
  content?: QuickCallContent;
}

export default function QuickCallForm({
  className = "",
  content,
}: QuickCallFormProps) {
  const title = content?.title || "Get a Quick Call";
  const subtitle =
    content?.subtitle ||
    "Fill in your details and we will call you within 10 mins.";
  const namePlaceholder = content?.namePlaceholder || "Your Name";
  const phonePlaceholder = content?.phonePlaceholder || "+91 98765 43210";
  const submitLabel = content?.submitLabel || "Submit";

  return (
    <div className={`relative z-20 w-full max-w-[700px] mx-auto ${className}`}>
      {/* Floating phone icon */}
      <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-100 shadow-[0_5px_20px_rgba(0,0,0,0.15)] flex items-center justify-center">
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#03C35E] flex items-center justify-center">
          <FaPhoneAlt className="text-white text-[10px] sm:text-sm" />
        </div>
      </div>

      <div className="relative bg-white rounded-[20px] sm:rounded-[24px] md:rounded-[28px] shadow-[0_-8px_35px_rgba(0,0,0,0.14)] border border-white px-4 sm:px-6 md:px-8 pt-6 sm:pt-7 md:pt-8 pb-4 sm:pb-5 md:pb-6">
        <div className="text-center">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-[#142236]">
            {title}
          </h2>
          <p className="mt-1 text-[8px] sm:text-[9px] md:text-xs text-gray-500">
            {subtitle}
          </p>
        </div>

        <form
          className=" mt-2.5 xs:mt-3 sm:mt-3.5 md:mt-4 lg:mt-4.5 xl:mt-5 flex flex-col xs:flex-col sm:flex-row gap-2 xs:gap-2 sm:gap-2.5 md:gap-2.5 lg:gap-3"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-2.5 md:gap-3 flex-[2] h-9 xs:h-9.5 sm:h-10 md:h-10.5 lg:h-11 xl:h-12 px-2.5 xs:px-3 sm:px-3.5 md:px-3.5 lg:px-4 rounded-lg border border-gray-200 bg-white transition-all focus-within:border-[#03C35E] focus-within:ring-2 focus-within:ring-[#03C35E]/10 ">
            <FaUser className=" text-gray-400 text-[10px] xs:text-[10px] sm:text-[11px] md:text-xs lg:text-sm shrink-0 " />
            <input
              type="text"
              name="name"
              placeholder={namePlaceholder}
              autoComplete="name"
              className="h-9 xs:h-9.5 sm:h-10 md:h-10.5 lg:h-11 w-full outline-none border-none bg-transparent text-[10px] xs:text-[10.5px] sm:text-[11px] md:text-xs lg:text-sm text-gray-800 placeholder:text-gray-400 "
            />
          </div>

          <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-2.5 md:gap-3 flex-[2] h-9 xs:h-9.5 sm:h-10 md:h-10.5 lg:h-11 xl:h-12 px-2.5 xs:px-3 sm:px-3.5 md:px-3.5 lg:px-4 rounded-lg border border-gray-200 bg-white transition-all focus-within:border-[#03C35E] focus-within:ring-2 focus-within:ring-[#03C35E]/10">
            <FaPhoneAlt className="text-gray-400 text-[10px] xs:text-[10px] sm:text-[11px] md:text-xs lg:text-sm shrink-0" />
            <input
              type="tel"
              name="phone"
              placeholder={phonePlaceholder}
              autoComplete="tel"
              className=" h-9 xs:h-9.5 sm:h-10 md:h-10.5 lg:h-11 w-full outline-none border-none bg-transparent text-[10px] xs:text-[10.5px] sm:text-[11px] md:text-xs lg:text-sm text-gray-800 placeholder:text-gray-400 "
            />
          </div>

          <button
            type="submit"
            className="h-9 xs:h-9.5 sm:h-10 md:h-10.5 lg:h-11 xl:h-12 w-full xs:w-full sm:w-auto sm:min-w-[100px] md:min-w-[120px] lg:min-w-[140px] xl:min-w-[160px] 2xl:min-w-[175px] px-3 xs:px-4 sm:px-4.5 md:px-5 lg:px-5.5 xl:px-6 rounded-lg bg-[#03C35E] hover:bg-[#02A950] active:scale-[0.98] text-white text-[10px] xs:text-[10.5px] sm:text-[11px] md:text-xs lg:text-sm font-semibold flex items-center justify-center gap-2 xs:gap-2 sm:gap-2.5 md:gap-2.5 lg:gap-3 shadow-[0_6px_18px_rgba(3,195,94,0.25)] transition-all duration-300 "
          >
            <span>{submitLabel}</span>
            <FaArrowRight className="text-[9px] xs:text-[9px] sm:text-[10px] md:text-[10px] lg:text-xs" />
          </button>
        </form>
      </div>
    </div>
  );
}