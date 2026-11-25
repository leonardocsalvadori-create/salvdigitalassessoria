
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: process.env.GITHUB_ACTIONS
      ? "/salvdigitalassessoria/"
      : "/",
  },

  tanstackStart: {
    server: { entry: "server" },
    spa: {
      enabled: true,
    },
  },

  nitro: {
    preset: "github-pages",
    output: {
      dir: "dist",
      serverDir: "dist/server",
      publicDir: "dist/client",
    },
  },
});
