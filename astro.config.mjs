// @ts-check
import { defineConfig } from "astro/config";

// Kuma AI Tech Radar — blog/knowledge base
// site: ปรับเป็น URL จริงตอน deploy (ใช้สำหรับ canonical + sitemap)
export default defineConfig({
  site: "https://tech-radar.local",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
});
