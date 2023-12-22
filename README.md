# Client-side routing with Astro

This is a demo of client-side routing with `react-router` in a website built with Astro. The same technique can be used to set up client-side routing with any of the supported UI frameworks.

## Set up `/app` page

```js
// src/pages/app.astro
---
import { App } from '../app'
---

<App client:only='react' />
```

## Set up rewrite/proxying

All paths starting with `/app/` (e.g. `/app/login`, `/app/settings`) need to be redirected to `/app`

For development server, set up Vite plugin like so:

```js
// astro.config.js
export default defineConfig({
  // ...
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
```

For production, different hosting providers will have different ways to set up rewrite/proxying. This demo is using Cloudflare Pages, and rewrite/proxying is configured in `public/_redirects`:

```
/app/* /app 200
```

## Bonus: preload JS for `/app`

JS assets for `/app` can simply be preloaded with `import`.

```js
import("../src/app");
```
