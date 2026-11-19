"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-[#142236] transition-all hover:border-[#142236] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <FaArrowLeft />
        Previous
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            aria-label={`Go to page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
            className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all ${
              currentPage === page
                ? "bg-[#142236] text-white shadow-lg shadow-[#142236]/20"
                : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-[#142236]/5 hover:text-[#142236]"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 rounded-full bg-[#03C35E] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#03C35E]/20 transition-all hover:bg-[#087F35] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
        <FaArrowRight />
      </button>
    </div>
  );
}