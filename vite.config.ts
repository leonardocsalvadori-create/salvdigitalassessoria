
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: process.env.GITHUB_ACTIONS
      ? "/salvdigitalassessoria/"
      : "/",
  },

  tanstackStart: {
    server: { entry: "server" },
  },

  nitro: {
    preset: "github_pages",
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
});

