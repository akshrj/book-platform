import { z, defineCollection } from "astro:content";

const reviewsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    category: z.string(), // e.g., "Mystery", "Sci-Fi"
    subcategory: z.string(), // e.g., "Honkaku", "Hard Sci-Fi"
    rating: z.number().min(1).max(5),
    paperbackFormat: z.string().optional(),
  }),
});

const listsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(), // e.g., "The Best 5 Orthodox Locked-Room Mysteries"
    description: z.string(), // Summary of the list's core objective
    datePublished: z.string(),
  }),
});

export const collections = {
  reviews: reviewsCollection,
  lists: listsCollection,
};
