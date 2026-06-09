import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// คลังความรู้ Tech Radar — โพสต์ markdown หนึ่งไฟล์ = หนึ่งวัน
const radar = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/radar" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    // หัวข้อที่ครอบคลุมในโพสต์ (ใช้ทำ tag / filter)
    topics: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { radar };
