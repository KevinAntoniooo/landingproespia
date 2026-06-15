import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  server: { port: 3000 },
  site: "https://proespia.cl",
  integrations: [
    sitemap({
      serialize(item) {
        if (item.url.includes("/admin/")) return undefined;
        item.changefreq = item.url === "https://proespia.cl/" ? "weekly" : "monthly";
        item.priority = item.url === "https://proespia.cl/" ? 1.0 : 0.8;
        return item;
      },
    }),
    tailwind(),
  ],
});

