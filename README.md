# siftly-me

Marketing site and closed-beta signup flow for [siftly.me](https://siftly.me) — *Keep the photos that matter.*

A two-package monorepo deployed as two separate Cloudflare Workers:

| Package | What it is | Worker name |
|---|---|---|
| `/` | Vite + React SPA, prerendered for EN/TH and a `/privacy-policy` page. Deployed as a Worker that serves the static assets. | `siftly-me` |
| `workers/beta-signup/` | Standalone Worker handling `POST /api/beta`. Verifies a Cloudflare Turnstile token, then appends the signup row to a Google Sheet via service-account auth. | `siftly-beta-signup` |

Beta access is currently Gmail-only. The site auto-routes EN/TH based on a cookie + `Accept-Language`.

## Quick start

```bash
# in workers/beta-signup/
cp .dev.vars.example .dev.vars   # fill GOOGLE_SERVICE_ACCOUNT_JSON + TURNSTILE_SECRET_KEY
npm install
npm run dev                       # wrangler dev on :8787

# in repo root, in another terminal
cp .env.example .env.local
npm install
npm run dev                       # vite on :5173, /api/* proxied to :8787
```

The `1x000…` Turnstile testing key always passes — useful for local dev.

## Common commands

### Frontend (root)

```bash
npm run dev          # Vite dev server with /api proxied to localhost:8787
npm run build        # Production build → dist/ (includes prerender for EN/TH/privacy)
npm run preview      # Build then run wrangler dev locally
npm run deploy       # Build then wrangler deploy (siftly-me Worker)
```

### Beta-signup Worker (`workers/beta-signup/`)

```bash
npm run dev          # wrangler dev -c wrangler.toml --port 8787
npm run deploy       # wrangler deploy -c wrangler.toml
```

## Deployment

GitHub Actions auto-deploys to Cloudflare on push to `main`:

- `.github/workflows/deploy-frontend.yml` — fires on root/frontend changes.
- `.github/workflows/deploy-worker.yml` — fires on `workers/beta-signup/**` changes.

Custom domain DNS for `siftly.me` / `www.siftly.me` is configured at Cloudflare.

## Stack

- **Frontend**: Vite 6, React 18, custom CSS design tokens, locale-aware typography (Instrument Serif for EN, Sukhumvit Set / IBM Plex Sans Thai for TH).
- **Beta worker**: Cloudflare Worker (no framework), Turnstile siteverify, Google Sheets v4 with service-account JWT minted via `crypto.subtle`.
- **i18n**: EN/TH with auto-routing at the Worker entry (cookie > `Accept-Language`).
- **Hosting**: Cloudflare Workers (both packages).

## Where to look next

- [`CLAUDE.md`](CLAUDE.md) — architectural notes, secrets/vars layout, gotchas.
- [`workers/beta-signup/src/index.js`](workers/beta-signup/src/index.js) — the entire beta signup endpoint, single-file.
- [`src/components/CtaBand.jsx`](src/components/CtaBand.jsx) — the signup form, including Turnstile mounting.
- [`scripts/prerender.mjs`](scripts/prerender.mjs) — EN/TH/privacy prerender pipeline.
