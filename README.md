# Routiq Changelog & Roadmap

Public-facing site at [changelog.routiq.ai](https://changelog.routiq.ai). Built with [Astro](https://astro.build) + MDX + Tailwind v4. Deployed on Vercel.

## What lives here

- **Changelog** — what we shipped recently. Short, dev-friendly entries.
- **Roadmap** — what we're building next, organised as Now / Next / Later.

## Contributing

You don't need to be an engineer. To add a changelog entry:

1. Add a new `.mdx` file under `src/content/changelog/`. Use the date prefix `YYYY-MM-DD-slug.mdx`.
2. Front-matter fields:
   ```yaml
   ---
   title: "Short, action-oriented title"
   date: 2026-05-15
   category: feature | improvement | fix | docs
   ---
   ```
3. Body is markdown. Keep it tight: 1-3 short paragraphs, links to docs if relevant.
4. Open a PR.

For roadmap updates: same idea, drop `.mdx` files under `src/content/roadmap/`.

## Local dev

```bash
npm install
npm run dev
```

Site runs on `http://localhost:4321`.

## Deploy

Connected to Vercel via the `main` branch. Pushes auto-deploy. Subdomain `changelog.routiq.ai` is configured in Vercel's domain settings.

## Stack

- [Astro 5](https://astro.build) — static-first content site
- [MDX](https://mdxjs.com/) — markdown with optional React/Astro components
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling
- [Vercel](https://vercel.com) — hosting + previews on every PR

## License

Content licensed under CC BY 4.0. Site code (the Astro scaffold) is MIT.
