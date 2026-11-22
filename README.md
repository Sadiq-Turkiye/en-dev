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

The root and About Us routes redirect to Our Portfolio. The Home and About Us
source files are retained, but those pages are not linked or rendered.
