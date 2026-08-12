# Portfolio

Personal site.

## Deploy

Push to `main` (or run the Deploy workflow from `main` only) builds and pushes `ghcr.io/<owner>/portfolio:latest` and `:sha-<commit>`, then triggers Coolify via webhook.

Required GitHub Actions secrets: `COOLIFY_WEBHOOK`, `COOLIFY_TOKEN`. Configure application runtime environment in Coolify (not in this workflow).
