import { z } from "zod";

// Review Schema
export const ReviewSchema = z.object({
  reviewer: z.string(),
  stars: z.number().min(1).max(5),
  review: z.string(),
  date: z.string(), // ISO date string
});

// Product Schema
export const ProductSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  reviews: z.array(ReviewSchema),
});

// Inter TypeScript Types from schemas
export type Review = z.infer<typeof ReviewSchema>;
export type Product = z.infer<typeof ProductSchema>;
