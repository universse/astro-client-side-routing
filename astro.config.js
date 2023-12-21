import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
  adapter: cloudflare({
    mode: `directory`,
    runtime: {
      mode: `local`,
      type: `pages`,
    },
  }),
  image: {
    service: passthroughImageService(),
  },
  integrations: [react()],
  output: `hybrid`,
  prefetch: {
    prefetchAll: true,
  },
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
