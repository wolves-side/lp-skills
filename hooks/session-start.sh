#!/usr/bin/env bash
# LP Skills — Session Start Hook
# Injects lp-master context into the session so Claude knows how to use the LP pipeline.

set -euo pipefail

PLUGIN_ROOT="${CLAUDE_PLUGIN_ROOT:-$(cd "$(dirname "$0")/.." && pwd)}"
MASTER_SKILL="$PLUGIN_ROOT/skills/lp-master/SKILL.md"

if [ ! -f "$MASTER_SKILL" ]; then
  echo "Warning: lp-master SKILL.md not found at $MASTER_SKILL" >&2
  exit 0
fi

cat <<'CONTEXT'
<EXTREMELY_IMPORTANT>
The LP Skills plugin (AILD — AI Landing Page Design Pipeline) is installed.

When the user asks to create a landing page, website, or sales page, invoke the `lp-skills:lp-master` skill to orchestrate the full pipeline.

Available LP skills (invoke via Skill tool with prefix `lp-skills:`):
- lp-master → Pipeline orchestrator (start here)
- lp-icp-discovery → ICP research (Phase 1)
- lp-brand-strategist → Brand interview (Phase 2)
- lp-product-architect → Product/offer mapping (Phase 2)
- lp-competitive-intel → Competitor analysis (Phase 2)
- lp-brief-synthesizer → Master Brief synthesis (Phase 2)
- lp-copywriter → Landing page copy (Phase 3)
- lp-page-architect → Page structure/blueprint (Phase 3)
- lp-page-spec-assembler → Spec assembly (Phase 3)
- lp-design-system → Visual design system (Phase 4)
- lp-page-builder → HTML builder (Phase 5)
- lp-page-qa → QA validation (Phase 6)
- lp-expert-panel → Expert review panel (Phase 6)
- lp-page-rebuild → Apply feedback (Phase 7)
- lp-deployment → Deploy guides (Phase 8)

Shortcut: User can say `/create-lp` to start the pipeline.
</EXTREMELY_IMPORTANT>
CONTEXT
