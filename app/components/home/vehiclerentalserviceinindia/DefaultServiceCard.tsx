"use client";

import DelhiServiceCard from "./DelhiServiceCard";

export default function DefaultServiceCard({
  content,
}: {
  content?: any;
}) {
  return <DelhiServiceCard content={content} />;
}