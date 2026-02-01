import { type Product, ProductSchema } from "./types";

export const sampleProductsReviews: Record<string, Product> = {
  smartThermo: {
    slug: "smartThermo",
    name: "SmartThermo X",
    description:
      "Wi-Fi enabled smart thermostat with adaptive temperature control",
    reviews: [
      {
        reviewer: "Daniel P.",
        stars: 5,
        review:
          "Setup was straightforward and the learning mode actually works. After a week it adjusted perfectly to our schedule. Energy usage dropped noticeably.",
        date: "2025-10-12T09:40:00Z",
      },
      {
        reviewer: "Rachel N.",
        stars: 4,
        review:
          "Great thermostat overall. App is clean and responsive. Only downside is it occasionally disconnects from Wi-Fi.",
        date: "2025-10-22T14:05:00Z",
      },
      {
        reviewer: "Mark T.",
        stars: 3,
        review:
          "Does what it says, but I expected more automation out of the box. Took some tweaking to get it right.",
        date: "2025-11-03T18:30:00Z",
      },
    ],
  },

  airPure: {
    slug: "airPure",
    name: "AirPure Pro",
    description: "HEPA air purifier with real-time air quality monitoring",
    reviews: [
      {
        reviewer: "Olivia H.",
        stars: 5,
        review:
          "Huge difference in air quality. Allergies improved within days. The sensor display is very helpful.",
        date: "2025-09-28T10:10:00Z",
      },
      {
        reviewer: "Kevin B.",
        stars: 4,
        review:
          "Runs quietly and looks sleek. Replacement filters are a bit expensive but performance is solid.",
        date: "2025-10-11T16:55:00Z",
      },
      {
        reviewer: "Nina C.",
        stars: 4,
        review:
          "Good coverage for our living room. Auto mode works well, though fan can get loud at max speed.",
        date: "2025-11-02T13:20:00Z",
      },
    ],
  },

  smartLock: {
    slug: "smartLock",
    name: "SecureLock Touch",
    description: "Fingerprint and app-controlled smart door lock",
    reviews: [
      {
        reviewer: "Brian S.",
        stars: 5,
        review:
          "Fingerprint recognition is fast and accurate. Installation took about 20 minutes.",
        date: "2025-10-03T08:50:00Z",
      },
      {
        reviewer: "Laura M.",
        stars: 4,
        review:
          "Very convenient for the family. App access sharing is useful. Battery life could be better.",
        date: "2025-10-19T19:15:00Z",
      },
      {
        reviewer: "Ethan R.",
        stars: 3,
        review:
          "Works fine but the app UI feels clunky. Hardware itself is solid though.",
        date: "2025-11-07T11:45:00Z",
      },
    ],
  },

  roboVac: {
    slug: "roboVac",
    name: "RoboVac CleanMax",
    description: "Smart robotic vacuum with mapping and self-charging",
    reviews: [
      {
        reviewer: "Samantha G.",
        stars: 5,
        review:
          "Cleans better than expected and maps rooms accurately. Huge time saver.",
        date: "2025-10-08T12:30:00Z",
      },
      {
        reviewer: "Victor L.",
        stars: 4,
        review:
          "Does a great job on hardwood and carpet. Occasionally gets stuck under chairs.",
        date: "2025-10-27T17:00:00Z",
      },
      {
        reviewer: "Hannah W.",
        stars: 3,
        review:
          "Good cleaning but the app feels slow. Navigation could be smarter.",
        date: "2025-11-14T09:10:00Z",
      },
    ],
  },
};

// Validates data at runtime
Object.values(sampleProductsReviews).forEach((product) => {
  ProductSchema.parse(product);
});

export const Products = Object.values(sampleProductsReviews);

// helper functions to getProducts and Product
export function getProducts(): Product[] {
  return Products;
}

export function getProduct(slug: string): Product {
  const product = sampleProductsReviews[slug];

  if (!product) {
    throw new Error(`Product Not Found: ${slug}`);
  }

  return product;
}
