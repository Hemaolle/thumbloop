# Thumbloop

A phone instrument: play pads, record loops on four lanes, quantize them and layer them into a song.
Single static page, Web Audio only, no build step.

- `public/index.html` is the whole app.
- `src/worker.js` is a small Cloudflare Worker that serves it.
- Deploys automatically on every push to `main` through Cloudflare's Git integration (Workers Builds). Manual deploy: `npx wrangler deploy`
