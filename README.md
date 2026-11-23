# EN-DEV

React and Vite website for EN-DEV.

Live website: https://zaidoalkhateeb.github.io/en-dev/

## Local development

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
```

The standard production build is written to `dist/`.

## Publish updates

```sh
npm run build:pages
git add src public scripts package.json package-lock.json index.html vite.config.js docs
git commit -m "Update website"
git push origin main
```

GitHub Pages publishes the committed `docs/` directory on `main`. Rebuild it
before pushing website changes. The Pages build uses the `/en-dev/` base path
and creates entry points for direct links and refreshes.

Home, Services, About Us, Our Portfolio and Contact Us are available through
the shared navigation. The Partners page remains available at `/partners`.
The `/home` route redirects to the canonical home page at `/`.
