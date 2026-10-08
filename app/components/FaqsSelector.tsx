"use client";

import React from "react";
import FaqsSelectorImpl from "./Faq'sSelector";

export type { FaqItem, FaqsContent, FaqsProps } from "./Faq'sSelector";

export default function FaqsSelector(props: React.ComponentProps<typeof FaqsSelectorImpl>) {
  return <FaqsSelectorImpl {...props} />;
}
