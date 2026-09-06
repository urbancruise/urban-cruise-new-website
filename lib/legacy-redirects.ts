/**
 * Legacy WordPress paths with a clear equivalent in the App Router.
 * Values are canonical paths, so legacy requests never redirect through
 * another legacy URL.
 */
export const legacyRedirects: Record<string, string> = {
  "/about-urban-cruise": "/delhi/about-us",
  "/careers-at-urban-cruise": "/delhi/careers-at-urban-cruise",
  "/partner-program": "/delhi/partner-program",
  "/testimonials": "/delhi/testimonials",
  "/contact-urban-cruise": "/delhi/contact-us",
  "/faqs": "/delhi/faqs",
  "/blog": "/delhi/blog",
  "/news-media": "/delhi/news-media",
  "/get-a-quotation-trip-information": "/delhi/book",
  "/get-a-quotation-route-infomation": "/mumbai/book",
  "/hire-car-on-rent-suv-on-rent": "/delhi/car-rental-delhi",
  "/hire-hycross-rent": "/delhi/innova-hycross-on-rent",
  "/hire-luxury-cars-luxury-suvs-luxury-vans-on-rent":
    "/delhi/luxury-car-rental-delhi",
  "/hire-tempo-traveller-on-rent": "/delhi/tempo-traveller-delhi",
  "/hire-minibus-on-rent": "/delhi/mini-bus-delhi",
  "/hire-luxury-bus-on-rent": "/delhi/bus-rental-delhi",
  "/car-listing": "/delhi/car-rental-delhi",
  "/car-suv-gallery": "/delhi/car-rental-delhi",
  "/tempo-traveler-gallery": "/delhi/tempo-traveller-delhi",
  "/mini-bus-gallery": "/delhi/mini-bus-delhi",
  "/luxury-bus-gallery": "/delhi/bus-rental-delhi",
  "/category/char-dham-yatra": "/delhi/char-dham-yatra-package",
  "/category/delhi-darshan": "/delhi/bus-and-car-rental-for-local-travel",
  "/category/tempo-traveller": "/delhi/tempo-traveller-delhi",
};

