# Portfolio

Personal site.

## Deploy

- **Pull request** to `main`: lint + build only (no image push).
- **Push** to `main` (or manual run on that branch): lint + build, then push `ghcr.io/<owner>/portfolio:latest` and `:sha-<commit>`, then Coolify webhook.

Required GitHub Actions secrets: `COOLIFY_WEBHOOK`, `COOLIFY_TOKEN`. Configure application runtime environment in Coolify (not in this workflow). If Coolify should always pull, include `force=true` in the webhook URL secret.
