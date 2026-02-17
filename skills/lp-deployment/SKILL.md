---
name: lp-deployment
description: "Deployment guides for publishing the final landing page HTML to various hosting platforms (Vercel, Cloudflare Pages, Firebase Hosting). Activate after the final HTML is approved and QA passes clean. Guides step-by-step setup, CLI installation, upload, and custom domain configuration. Part of the Landing Page Pipeline (Phase 8)."
---
# LP Deployment

This skill provides step-by-step deployment guides for publishing the final landing page HTML to popular hosting platforms.

---

## Supported Platforms

| Platform | Guide |
|----------|-------|
| Vercel | `references/vercel-guide.md` |
| Cloudflare Pages | `references/cloudflare-guide.md` |
| Firebase Hosting | `references/firebase-guide.md` |

---

## Usage

After the pipeline produces the final HTML file, choose a deployment platform and follow the corresponding guide in `references/`.

Each guide covers:
- Account setup (if needed)
- CLI installation
- Project initialization
- Deploy command
- Custom domain configuration
