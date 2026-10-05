// app/components/GlobalFaqsSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const DelhiFaqs = dynamic(() => import("./home/faq's/DelhiFaq’s"));
const GurugramFaqs = dynamic(() => import("./home/faq's/GurugramFaq’s"));
const MumbaiFaqs = dynamic(() => import("./home/faq's/MumbaiFaq's"));
const PuneFaqs = dynamic(() => import("./home/faq's/PuneFaq’s"));
const DefaultFaqs = dynamic(() => import("./home/faq's/DefaultFaq's"));

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
}

interface Props {
  content?: FaqsContent;
}

export default function GlobalFaqsSelector({ content }: Props) {
  const { selectedLocation } = useLocation();
  const pathname = usePathname();

  const pathSegments = pathname?.split("/").filter(Boolean) ?? [];
  const isGlobalRoute = pathSegments.length === 0;

  const map: Record<string, React.ComponentType<{ content?: FaqsContent }>> = {
    delhi: DelhiFaqs as any,
    gurugram: GurugramFaqs as any,
    mumbai: MumbaiFaqs as any,
    pune: PuneFaqs as any,
  };

  const Component = isGlobalRoute
    ? (DefaultFaqs as any)
    : map[selectedLocation || ""] || (DefaultFaqs as any);

  if (!Component) return null;

  return <Component content={content} />;
}