/* eslint-disable react/no-unescaped-entities */
import { redirect } from "next/navigation";

export default async function LegacyBookingPage({
  params,
  searchParams,
}: {
  params: Promise<{ location: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const [{ location }, query] = await Promise.all([params, searchParams]);
  const queryString = new URLSearchParams();

  for (const [key, value] of Object.entries(query)) {
    if (Array.isArray(value)) {
      value.forEach((item) => queryString.append(key, item));
    } else if (value !== undefined) {
      queryString.set(key, value);
    }
  }

  const suffix = queryString.toString();
  redirect(
    `/${location}/get-a-quotation-route-infomation${suffix ? `?${suffix}` : ""}`,
  );
}
