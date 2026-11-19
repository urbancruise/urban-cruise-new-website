"use client";

import { categories } from "./TestimonialsData";

interface CategoryFilterProps {
  activeFilter: string;
  onChange: (id: string) => void;
  totalReviews: number;
}

export default function CategoryFilter({
  activeFilter,
  onChange,
  totalReviews,
}: CategoryFilterProps) {
  return (
    <div className="mb-10">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-bold text-[#142236]">Explore Reviews</h3>
        <span className="text-sm text-gray-500">{totalReviews} reviews</span>
      </div>

      <div
        role="tablist"
        aria-label="Filter reviews by trip type"
        className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin"
      >
        {categories.map((category) => {
          const active = activeFilter === category.id;
          return (
            <button
              key={category.id}
              role="tab"
              aria-selected={active}
              onClick={() => onChange(category.id)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                active
                  ? "border-[#142236] bg-[#142236] text-white shadow-lg shadow-[#142236]/20"
                  : "border-gray-200 bg-white text-gray-600 hover:border-[#142236] hover:text-[#142236]"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}