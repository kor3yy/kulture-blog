# Turath Blog

A clean, fast blog built with [Astro](https://astro.build) and deployed on Cloudflare.

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
turath-blog/
├── src/
│   ├── content/
│   │   ├── config.ts          # Content collection schema
│   │   └── blog/               # Your blog posts (Markdown)
│   │       ├── welcome-to-turath.md
│   │       ├── why-static-sites-still-matter.md
│   │       └── the-art-of-starting-simple.md
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── about.astro         # About page
│   │   └── blog/
│   │       ├── index.astro     # Blog listing page
│   │       └── [slug].astro    # Individual post template
│   └── styles/
│       └── global.css         # Site styles
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Writing a New Post

1. Create a new `.md` file in `src/content/blog/`
2. Add the frontmatter at the top:

```markdown
---
title: "Your Post Title"
pubDate: 2026-08-20
description: "A short summary of your post."
---

Your content here in Markdown...
```

3. Save — the post automatically appears on your homepage and blog listing.

## Deploying to Cloudflare

### Option A: Connect Git (recommended)
1. Push this project to a GitHub or GitLab repository
2. Go to [Cloudflare's create page](https://dash.cloudflare.com/93db0a6ba4761cc48262471c45d2cd3a/workers-and-pages/create)
3. Choose **Connect Git** and select your repo
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Deploy — you'll get a free `*.workers.dev` URL

### Option B: Upload directly
1. Run `npm run build` locally
2. Go to the [create page](https://dash.cloudflare.com/93db0a6ba4761cc48262471c45d2cd3a/workers-and-pages/create)
3. Choose **Upload your static files**
4. Upload the `dist/` folder

## Adding a Custom Domain Later

When you're ready, you can register a domain (like `turath.com`) and add it to your Pages project in the Cloudflare dashboard under **Custom domains**.
