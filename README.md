# Shweta Rawat — Portfolio Site

A single-page, mobile-first portfolio built with plain HTML, CSS, and JS (no framework/build step — fastest possible load time, and trivially easy to host).

## Files
- `index.html` — page structure and content
- `style.css` — all styling (design tokens at the top of the file)
- `script.js` — typed hero text, mobile nav toggle, scroll-reveal animation
- `resume.pdf` — **placeholder** — replace with your real resume, same filename

## Before you publish
1. Replace `resume.pdf` with your actual resume (keep the filename, or update the two `href="resume.pdf"` links in `index.html` if you rename it).
2. Fill in real tech stacks / impact numbers for any project where you want more detail — search `index.html` for the `<article class="project-card">` blocks.
3. Swap the placeholder location/timezone or GPA in the hero `profile.json` panel if anything changes.

## Editing content
Everything is plain text inside `index.html` — no build step, no npm install. Open it in any code editor, edit, save, refresh the browser.

## Deploying for free
**GitHub Pages (recommended, ties into your existing GitHub):**
1. Create a new repo (e.g. `portfolio` or `shwetarawat061.github.io` for a root-domain site).
2. Push these four files to it.
3. Repo → Settings → Pages → set source to the `main` branch, root folder.
4. Your site goes live at `https://shwetarawat061.github.io/portfolio/` (or `https://shwetarawat061.github.io/` if you used the special repo name).

**Netlify / Vercel (alternative, also free):**
Drag the `portfolio` folder into Netlify's deploy UI, or run `vercel` / `netlify deploy` from inside the folder — both auto-detect a static site with zero config.

## Design notes
- Palette: near-black ink on paper-white, with a single hot-orange accent and an electric-blue secondary accent for links/tags — the "high-contrast tech" direction you picked.
- Typography: IBM Plex Mono for headings/labels (datasheet/terminal feel), Inter for body copy (readability).
- The zigzag dividers between sections are inline SVG — no images to load, so they stay crisp at any size and cost near-zero on page weight.
