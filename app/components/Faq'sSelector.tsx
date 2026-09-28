// ============================================================
// Location-aware selector for FAQs section
// Passes CMS content (optional) to the correct city component.
// ============================================================
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLocation } from "@/app/context/LocationContext";

// ======================================================
// LAZY LOAD COMPONENTS
// ======================================================

const DelhiFaqs = dynamic(
  () => import("./home/faq's/DelhiFaq’s")
);

const GurugramFaqs = dynamic(
  () => import("./home/faq's/GurugramFaq’s")
);

const MumbaiFaqs = dynamic(
  () => import("./home/faq's/MumbaiFaq's")
);

const PuneFaqs = dynamic(
  () => import("./home/faq's/PuneFaq’s")
);

// ======================================================
// TYPES
// ======================================================

export interface FaqItem {
  number?: string;
  question: string;
  answer: string;
}

export interface FaqsContent {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  titleAccent?: string;
  description?: string;
  items?: FaqItem[];
  supportTitle?: string;
  supportSubtitle?: string;
  supportButtonLabel?: string;
  supportButtonHref?: string;
}

export interface FaqsProps {
  content?: FaqsContent;
}

// ======================================================
// COMPONENT
// ======================================================

export default function FaqsSelector({ content }: FaqsProps) {
  const { location } = useLocation();

  const map: Record<string, React.ComponentType<FaqsProps>> = {
    delhi: DelhiFaqs,
    gurugram: GurugramFaqs,
    mumbai: MumbaiFaqs,
    pune: PuneFaqs,
  };

  const Component = map[location];

  if (!Component) {
    return null;
  }

  return <Component content={content} />;
}
