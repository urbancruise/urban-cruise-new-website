import React from 'react';

const platforms = [
  {
    id: 1,
    initials: 'CNP',
    theme: {
      text: 'text-[#078D3A]',
      bg: 'bg-[#03C35E]/[0.07]',
      gradient: 'from-[#03C35E]/[0.08] to-transparent',
      buttonHover: 'group-hover:bg-[#087F35]',
      iconBg: 'bg-[#03C35E]/10 group-hover:bg-[#03C35E]',
      glow: 'bg-[#03C35E]/[0.07]',
      underline: 'bg-[#087F35]',
      badge: 'bg-gradient-to-br from-[#03C35E] to-[#087F35]',
      border: 'border-[#03C35E]/30',
      hoverShadow: 'hover:shadow-[0_12px_35px_rgba(3,195,94,0.28)]'
    },
    title: 'Corbett National Park',
    description: 'Official-style portal with direct safari permit booking for all zones.',
    link: '#',
  },
  {
    id: 2,
    initials: 'CV',
    theme: {
      text: 'text-[#F7941E]',
      bg: 'bg-[#F7941E]/[0.08]',
      gradient: 'from-[#F7941E]/[0.08] to-transparent',
      buttonHover: 'group-hover:bg-[#E66F00]',
      iconBg: 'bg-[#F7941E]/10 group-hover:bg-[#F7941E]',
      glow: 'bg-[#F7941E]/[0.08]',
      underline: 'bg-[#F7941E]',
      badge: 'bg-gradient-to-br from-[#F7941E] to-[#E66F00]',
      border: 'border-[#F7941E]/40',
      hoverShadow: 'hover:shadow-[0_12px_35px_rgba(247,148,30,0.28)]'
    },
    title: 'Corbett Vacations',
    description: 'Packages + safari combos with hotel stays and guided tours.',
    link: '#',
  },
  {
    id: 3,
    initials: 'JTG',
    theme: {
      text: 'text-[#078D3A]',
      bg: 'bg-[#03C35E]/[0.07]',
      gradient: 'from-[#03C35E]/[0.08] to-transparent',
      buttonHover: 'group-hover:bg-[#087F35]',
      iconBg: 'bg-[#03C35E]/10 group-hover:bg-[#03C35E]',
      glow: 'bg-[#03C35E]/[0.07]',
      underline: 'bg-[#087F35]',
      badge: 'bg-gradient-to-br from-[#03C35E] to-[#087F35]',
      border: 'border-[#03C35E]/30',
      hoverShadow: 'hover:shadow-[0_12px_35px_rgba(3,195,94,0.28)]'
    },
    title: 'Jim Corbett Travel Guide',
    description: 'Detailed travel info, zone guides and easy online safari booking.',
    link: '#',
  },
  {
    id: 4,
    initials: 'CT',
    theme: {
      text: 'text-[#F7941E]',
      bg: 'bg-[#F7941E]/[0.08]',
      gradient: 'from-[#F7941E]/[0.08] to-transparent',
      buttonHover: 'group-hover:bg-[#E66F00]',
      iconBg: 'bg-[#F7941E]/10 group-hover:bg-[#F7941E]',
      glow: 'bg-[#F7941E]/[0.08]',
      underline: 'bg-[#F7941E]',
      badge: 'bg-gradient-to-br from-[#F7941E] to-[#E66F00]',
      border: 'border-[#F7941E]/40',
      hoverShadow: 'hover:shadow-[0_12px_35px_rgba(247,148,30,0.28)]'
    },
    title: 'Corbett Tourism',
    description: 'Budget-friendly safari options with quick permit confirmation.',
    link: '#',
  },
  {
    id: 5,
    initials: 'JSI',
    theme: {
      text: 'text-[#078D3A]',
      bg: 'bg-[#03C35E]/[0.07]',
      gradient: 'from-[#03C35E]/[0.08] to-transparent',
      buttonHover: 'group-hover:bg-[#087F35]',
      iconBg: 'bg-[#03C35E]/10 group-hover:bg-[#03C35E]',
      glow: 'bg-[#03C35E]/[0.07]',
      underline: 'bg-[#087F35]',
      badge: 'bg-gradient-to-br from-[#03C35E] to-[#087F35]',
      border: 'border-[#03C35E]/30',
      hoverShadow: 'hover:shadow-[0_12px_35px_rgba(3,195,94,0.28)]'
    },
    title: 'Jungle Safari India',
    description: 'Specialised jeep & canter safari bookings with zone availability updates.',
    link: '#',
  },
];

export default function SafariPlatforms() {
  return (
    <section className="w-full bg-white px-4 py-12 font-sans">
      <div className="mx-auto max-w-6xl">

        {/* Header Section */}
        <div className="mb-10">
          <div className="mb-2 flex w-full items-center justify-start gap-1.5">
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
            <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.15em] text-[#03C35E] xs:text-[10px] sm:text-[10px] sm:tracking-[0.2em] md:text-[11px] lg:text-[12px] lg:tracking-[0.25em] xl:text-[13px]">
              BEST PLATFORM
            </span>
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
          </div>

          <h2 className="text-[21px] font-extrabold leading-[1] tracking-[-0.04em] text-[#142236] xs:text-[23px] sm:text-[27px] md:text-[29px]">
            TO BOOK JIM CORBETT SAFARI
          </h2>

          <p className="mt-2 font-serif text-[21px] italic leading-tight text-[#03C35E] xs:text-[23px] sm:text-[27px] md:text-[29px]">
            Find a Trusted Platform for Your Safari
          </p>

          <p className="mt-5 max-w-[900px] text-[10px] leading-[1.75] text-[#303944] xs:text-[11px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
            Book your Jim Corbett jeep safari at least 45–90 days in advance, especially for peak season (October–June). Permits are limited per zone per day, so early booking secures your preferred zone, time slot, and the best per-person rates before they fill up.
          </p>
        </div>

        {/* Redesigned Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {platforms.map((platform) => (
            <div
              key={platform.id}
              className={`group relative flex min-h-[265px] flex-col overflow-hidden rounded-[17px] border border-[#dce4dc] bg-white p-6 shadow-[0_5px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 sm:min-h-[275px] sm:p-7 ${platform.theme.hoverShadow}`}
            >

              <div className={`pointer-events-none absolute -right-16 bottom-[-90px] h-[230px] w-[230px] rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-80 ${platform.theme.glow}`} />
              <div className={`absolute right-0 top-0 z-10 flex h-[38px] w-[51px] items-center justify-center rounded-bl-[16px] font-extrabold text-[17px] text-white shadow-sm sm:h-[40px] sm:w-[53px] sm:text-[18px] ${platform.theme.badge}`}>
                {String(platform.id).padStart(2, '0')}
              </div>

              <div className={`relative z-10 mb-5 flex h-[48px] w-[48px] items-center justify-center rounded-full border bg-white text-sm font-extrabold shadow-[0_2px_8px_rgba(0,0,0,0.12)] ${platform.theme.border} ${platform.theme.text}`}>
                <span className={`flex h-[37px] w-[37px] items-center justify-center rounded-full text-[11px] text-white ${platform.theme.badge}`}>
                  {platform.initials}
                </span>
              </div>

              {/* Card Content */}
              <div className="relative z-10 flex-grow">
                <h2 className="text-[16px] font-extrabold leading-tight tracking-[-0.01em] text-[#142236] sm:text-[17px]">
                  {platform.title}
                </h2>
                <div className={`mb-3 mt-2 h-[2px] w-[29px] ${platform.theme.underline}`} />
                <p className="mb-6 text-[13px] leading-relaxed text-[#4B5563]">
                  {platform.description}
                </p>
              </div>

              {/* Redesigned Button */}
              <div className="relative z-10 mt-auto">
                <a
                  href={platform.link}
                  className={`group/btn relative inline-flex w-full items-center justify-between overflow-hidden rounded-full border bg-white px-5 py-2.5 text-sm font-bold transition-all duration-300 hover:text-white sm:w-auto ${platform.theme.border} ${platform.theme.text}`}
                >
                  <span className={`absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 ${platform.theme.buttonHover} group-hover/btn:opacity-100`}></span>
                  <span className="relative z-10">Visit site</span>

                  {/* Animated Arrow Icon */}
                  <div className={`relative z-10 ml-3 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${platform.theme.iconBg} group-hover/btn:bg-white`}>
                    <svg
                      className="w-3.5 h-3.5 text-white group-hover/btn:text-gray-900 transition-transform duration-300 transform group-hover/btn:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}