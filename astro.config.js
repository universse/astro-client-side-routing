import react from "@astrojs/react";
import { defineConfig } from "astro/config";

export default defineConfig({
  build: {
    format: "file",
  },
  integrations: [react()],
  prefetch: {
    prefetchAll: true,
  },
  trailingSlash: `never`,
  vite: {
    plugins: [
      {
        configureServer(serve) {
          serve.middlewares.use((req, _, next) => {
            if (req.url.startsWith("/app/")) {
              req.url = "/app";
            }
            next();
          });
        },
      },
    ],
  },
});
