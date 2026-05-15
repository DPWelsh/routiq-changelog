# Routiq Brand — Quick Reference

Site styling decisions live in `src/styles/global.css`. This file is the rationale, not the source of truth — when the two disagree, prefer the CSS, then fix the rationale.

## V3 Brand Strategy (March 2026)

Position: **"Aesop meets Stripe"** — premium wellness warmth + technology precision. Not generic SaaS.

The confidential V3 brand strategy doc lives outside this repo (in `routiq-reactivation-dev`). Pulling the key decisions here so anyone touching the site has the rationale.

### Palette

| Token | Hex | Use |
|---|---|---|
| Cream | `#F5F0EB` | Primary surface (replaces all-white) |
| Cream Dim | `#EDE6DD` | Elevated surface (cards on cream) |
| Stone | `#D9D0C2` | Mid-tone neutral — secondary surfaces, "Later" phase |
| Blackberry | `#1a1c12` | Primary text + dark sections ("Shipped" phase) |
| Clay | `#C98B7A` | Single accent — CTAs, key highlights only. Used sparingly. |
| Clay Deep | `#A86B5A` | Clay hover state |

**Blue is dropped entirely.** The previous brand v2 had a `prompt` blue accent — the v3 strategy explicitly removes it because it "reads as generic SaaS/tech."

### Typography

| Use | Family | Weight | Notes |
|---|---|---|---|
| Headlines | Playfair Display | 700/900 + italic | High-contrast modern serif. Italic for emphasis (à la the brand-strategy doc cover). |
| Body / UI | Inter | 300/400/500 | Loaded via `rsms.me` CDN |
| Eyebrows / data | Inter | 500, tabular-nums | Used for numbers, dates, small caps eyebrows |

**Raptor V3 Black is dropped.** The v2 guidelines recommended it; the v3 strategy explicitly calls it "startup energy, not quiet luxury."

### Voice

"Educated Friend meets Authoritative Results-Driven." Warm but never casual. Data-backed but never dry. Confident but never arrogant. **Stop selling features; start selling predictable revenue protection.**

Avoid: "streamline", "platform", "scalable", "pain points", "ROI", "industry-leading", "disrupting".

Use instead: "spend less time on admin", "your booking system", "ready for when you open that second location", "the parts of the day that drain you", "how many rebookings you're getting", specific proof.

## Assets in this repo

- `public/routiq-wordmark-blackberry.svg` — dark wordmark for cream backgrounds (default)
- `public/routiq-wordmark-cloud.svg` — light wordmark for blackberry backgrounds (Shipped phase, footer if reversed)
- `public/favicon.*` — favicon variants
- `routiq_brand_guidelines_v2.pdf` — original v2 brand book (the v3 strategy doc supersedes its colour & type recommendations and is intentionally not in this public repo)
