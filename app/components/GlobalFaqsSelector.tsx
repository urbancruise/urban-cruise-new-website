"use client";

import dynamic from "next/dynamic";

const GlobalFaqs = dynamic(() => import("./home/faq's/DelhiFaq’s"));

export default function GlobalFaqsSelector() {
  return <GlobalFaqs />;
}
