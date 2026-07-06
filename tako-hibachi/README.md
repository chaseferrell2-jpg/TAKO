# TAKO Hibachi Sushi — Food Truck Website

Dark-mode single-page site built with Vite + React 19, Tailwind CSS v4, and Motion.

## Setup (Windows PowerShell)

```powershell
npm create vite@latest tako-hibachi -- --template react
cd tako-hibachi
npm install
npm install tailwindcss @tailwindcss/vite
npm install motion
```

Then replace the scaffolded `index.html`, `vite.config.js`, and the entire `src/`
folder with the files in this project, and run:

```powershell
npm run dev
```

## Before you deploy

- **Hero photo:** drop your sizzling-hibachi photo at `public/hero.jpg`. The site
  looks fine without it (gradient fallback), but the photo makes it.
- **Netlify:** build command `npm run build`, publish directory `dist`. No extra
  config needed for a single-page app with no client-side router.

## Owner dashboard

Go to `yoursite.com/admin` (the URL works because of `public/_redirects`,
which tells Netlify to route every path to the app). Default passcode:
`tako2026` — change it by setting an `ADMIN_PASSCODE` environment variable
in Netlify (Site configuration → Environment variables), or by editing
`netlify/functions/site-data.mjs`.

The owner can edit the location banner, the open/closed dot, an
announcement banner, daily hours, and the full menu (names, descriptions,
prices, add/remove items). Saves go to Netlify Blobs via the serverless
function in `netlify/functions/site-data.mjs`, so **changes are live for
every visitor immediately** — no redeploy needed. The passcode is checked
on the server and never appears in the public site code.

Note: the admin save/load only works on the deployed Netlify site (or via
`netlify dev`), not with plain `npm run dev`.

 
> security — anyone reading the site's source code can find it. Since edits
> only persist in the owner's own browser, the worst a visitor could do is
> change what *their own* browser displays.
