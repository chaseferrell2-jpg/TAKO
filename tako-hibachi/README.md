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

Click **Owner login** in the footer. Passcode: `tako2026`
(set in `src/data.js`). Edits to the location banner, open/closed dot, and
menu prices save to `localStorage` on the device where they're made.

> Note: a front-end passcode keeps casual visitors out, but it is not real
> security — anyone reading the site's source code can find it. Since edits
> only persist in the owner's own browser, the worst a visitor could do is
> change what *their own* browser displays.
