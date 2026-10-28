"use client";

import { useState } from "react";

interface AboutParagraphsProps {
  paragraphs: string[];
  wordLimit?: number;
}

export default function AboutParagraphs({
  paragraphs,
  wordLimit = 50,
}: AboutParagraphsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const totalWords = paragraphs.reduce(
    (total, paragraph) => total + paragraph.trim().split(/\s+/).filter(Boolean).length,
    0,
  );
  let remainingWords = wordLimit;

  const visibleParagraphs = isExpanded
    ? paragraphs
    : paragraphs.flatMap((paragraph) => {
        if (remainingWords <= 0) return [];

        const words = paragraph.trim().split(/\s+/).filter(Boolean);
        const visibleWords = words.slice(0, remainingWords);
        remainingWords -= visibleWords.length;

        return [
          `${visibleWords.join(" ")}${visibleWords.length < words.length ? "..." : ""}`,
        ];
      });

  return (
    <>
      {visibleParagraphs.map((paragraph, index) => (
        <p key={index}>
          {paragraph}
          {totalWords > wordLimit && index === visibleParagraphs.length - 1 && (
            <>
              {" "}
              <button
                type="button"
                aria-expanded={isExpanded}
                onClick={() => setIsExpanded((expanded) => !expanded)}
                className="font-semibold text-[#03C35E] underline underline-offset-2"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </>
          )}
        </p>
      ))}
    </>
  );
}
