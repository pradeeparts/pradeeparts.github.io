import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const SITE = "https://pradeepartist.github.io";
const BASE = "/portfolio";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "ignore",
  build: { format: "directory" },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
});
