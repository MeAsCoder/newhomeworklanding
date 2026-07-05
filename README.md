# Homework Jobs — TikTok Landing Page

A Next.js (App Router + TypeScript + Tailwind) landing page for TikTok ad campaigns.
On load it shows a live countdown and automatically redirects to the Google Play
Store listing after 5 seconds:

```
https://play.google.com/store/apps/details?id=com.payingsurveys.homeworkjobs
```

## Run it locally in VS Code

1. Unzip the project and open the folder in VS Code.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for production

```bash
npm run build
npm run start
```

## Deploy

This project deploys cleanly to [Vercel](https://vercel.com) — connect the repo
or run `vercel` from the project root.

## Project structure

```
app/
  layout.tsx           # Root layout + page metadata
  page.tsx             # Landing page content
  RedirectCountdown.tsx # Client component: 5s countdown + redirect
  globals.css          # Design tokens (colors, fonts) + Tailwind
public/                # Static assets
```

## Before running real ad traffic

A couple of things worth double-checking before this goes live in a paid
campaign, since it currently ships with placeholder/example values:

- **Stats** (`1M+ Active Earners`, `KSh 1,000 Welcome Bonus`, etc.) in
  `app/page.tsx` are illustrative placeholders matching the original design —
  swap in real, verifiable numbers.
- **Privacy Policy / Terms of Service** links currently point to `#` —
  add real URLs once those pages exist. TikTok's ad review generally requires
  working policy links.
- **Auto-redirect**: some ad platforms restrict or flag automatic redirects
  on landing pages. Check TikTok's current ad policies for your account/region
  before running paid traffic to this page.
