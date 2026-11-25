
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: process.env.GITHUB_ACTIONS
      ? "/salvdigitalassessoria/"
      : "/",
  },

  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
  },
});
