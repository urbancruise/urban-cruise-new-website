"use client";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  size?: string;
}

export default function StarRating({
  rating,
  size = "text-[10px]",
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-0.5 text-[#F5A623]">
      {Array.from({ length: fullStars }).map((_, index) => (
        <FaStar key={index} className={size} />
      ))}
      {hasHalfStar && <FaStarHalfAlt className={size} />}
    </div>
  );
}