---
name: lp-deployment
description: "Deployment guides for publishing the final landing page HTML to various hosting platforms (Vercel, Cloudflare Pages, Firebase Hosting). Activate after the final HTML is approved and QA passes clean. Guides step-by-step setup, CLI installation, upload, and custom domain configuration. Part of the Landing Page Pipeline (Phase 8)."
---

<HARD-GATE>
Do NOT begin any deployment step until QA Report v2 has zero 🔴 issues AND the user
has explicitly approved the final page. Deploying with known issues is publishing a
broken experience to real users.
</HARD-GATE>

# LP Deployment

## Iron Law

**Clean QA Before Live**: QA Report v2 must be clean (zero 🔴) and the user must have explicitly approved the final page before any deployment command is run. No exceptions for "soft launches."

## Skill Type

**Rigid** — The deployment gate (QA v2 clean + user approval) is non-negotiable. Full deployment walkthrough including domain configuration is required.


This skill provides step-by-step deployment guides for publishing the final landing page HTML to popular hosting platforms.

---


## Checklist

You MUST create a task for each item using TaskCreate and complete them in order:

1. Verify QA Report v2 has zero 🔴 issues (block if not)
2. Confirm explicit user approval of final page
3. Present platform options and get user's choice (Vercel / Cloudflare Pages / Firebase)
4. Follow platform-specific guide from references/
5. Setup platform account if needed + install CLI
6. Upload project/HTML file
7. Execute deploy and verify page accessible via URL
8. Configure custom domain if applicable
9. Verify mobile functionality
10. Deliver final URL to user

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

## Red Flags — STOP and Follow the Process

| If you think... | Reality is... |
|----------------|---------------|
| "There's one 🔴 but it's not critical for deployment" | Zero 🔴 is the gate. Fix it first via lp-page-rebuild. |
| "The user said it looks good, that's implicit approval" | Implicit approval is not approval. Ask explicitly: "Aprovado para deploy?" |
| "I'll skip domain configuration, they can add it later" | Incomplete deployment = page not findable. Walk through it completely. |
| "Mobile verification is optional" | Mobile is where most conversions happen. Verify before declaring done. |

**ALL of these mean: STOP. Complete the current step.**

## User Signals You're Off Track

- "The page isn't loading" → Deployment had an error. Return to deploy step and diagnose.
- "The mobile version looks broken" → Mobile wasn't verified. Fix and re-verify.

## Integration

**Terminal skill** — No next skill. This is the end of the pipeline.
**Requires first**: HTML v2 (clean) + QA Report v2 (zero 🔴) + explicit user approval.
**Output**: Live URL accessible to users.