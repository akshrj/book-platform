import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const reviewsCollection = defineCollection({
  // The 'loader' replaces the legacy 'type: content' declaration
  loader: glob({ pattern: "**/*.md", base: "./src/content/reviews" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    category: z.string(),
    subcategory: z.string(),
    rating: z.number().min(1).max(5),
    paperbackFormat: z.string().optional(),
  }),
});

const listsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lists" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datePublished: z.string(),
  }),
});

export const collections = {
  reviews: reviewsCollection,
  lists: listsCollection,
};
