---
name: lp-competitive-intel
description: "Research and analyze competitors for landing page differentiation. Activate after brand-strategist identifies competitors, or when user wants competitive analysis for LP positioning. Scrapes competitor landing pages, analyzes copy/design/offers, identifies market patterns and exploitable gaps. Outputs a Competitive Analysis document. Part of the Landing Page Pipeline (Phase 0, Agent 3 of 3)."
---

<HARD-GATE>
Do NOT produce the Competitive Analysis without first reviewing the Brand Brief to
understand what differentiators to look for. Analyzing competitors without brand context
produces generic comparisons that add no strategic value.
</HARD-GATE>


# LP Competitive Intelligence

## Iron Law

**Strategic Analysis Only**: Every competitor insight must be mapped to a specific actionable differentiation opportunity. Observations without strategic implications are noise, not intelligence.

## Skill Type

**Rigid** — The analysis must cover all 3 dimensions: copy, design, and offer. Missing one dimension produces an incomplete competitive picture.



## Checklist

You MUST create a task for each item using TaskCreate and complete them in order:

1. Receive Brand Brief and competitor list (minimum 3 competitors)
2. Analyze each competitor's landing page: copy angle, design pattern, offer structure
3. Identify market patterns (what everyone is saying/doing)
4. Identify exploitable gaps (what nobody is saying/doing)
5. Map attack angles: specific claims our brand can make that competitors cannot
6. Deliver Competitive Analysis document

## Purpose

Analyze the competitive landscape to find positioning gaps, visual differentiation
opportunities, and copy angles that competitors miss. This agent works AUTOMATICALLY
— no client input needed after receiving competitor names/URLs.

This is Agent 3 of the Landing Page Pipeline Phase 0 (Intake).

**Requires**: Competitor names/URLs from Brand Brief (`lp-brand-strategist`).

## Process

### 1. Identify Competitors

**If URLs provided:** Use them directly.

**If only names provided:** Search for their landing pages:
```
web_search: "[competitor name] [industry] landing page"
web_search: "[competitor name] site"
```

**If no competitors identified:** Search for them:
```
web_search: "[client industry] [client location] companies"
web_search: "[client industry] agency/consultancy/service [country]"
web_search: "best [client service type] companies [year]"
```

Target: 5-8 competitors (3 direct + 2-3 indirect/aspirational).

### 2. Scrape & Extract

For each competitor landing page, use `web_fetch` to extract:

See `references/extraction-checklist.md` for the complete data points to capture per competitor.

**Extract systematically:**
- Hero headline + subheadline (exact text)
- CTA text, color, and position
- Social proof type and format
- Pricing (if visible)
- Page structure (section order)
- Visual style (colors, fonts, imagery style)
- Tone of voice
- Guarantee or risk reversal

**If a page can't be fetched**, note it and move to the next. Don't block on one competitor.

### 3. Analyze Patterns

After extracting all competitors, identify:

**Copy patterns** (what EVERYONE says):
- Common headlines/phrases → these are clichés to AVOID
- Shared value propositions → where differentiation is hardest
- Missing angles → what NOBODY talks about (opportunity)

**Visual patterns** (what EVERYONE looks like):
- Dominant color schemes → opportunity to stand out
- Common layout structures → opportunity to break the mold
- Imagery styles (stock photos, illustrations, screenshots)

**Offer patterns** (how EVERYONE sells):
- Pricing transparency (shown vs hidden)
- Guarantee types used
- CTA language
- Social proof strategies (testimonials, logos, case studies, numbers)

**Weakness patterns** (where competitors fail):
- Generic copy (no specificity, no real numbers)
- Weak or missing social proof
- No clear differentiation from each other
- Poor mobile experience or slow load
- Missing guarantee or risk reversal

### 4. Generate Attack Angles

For each pattern identified, generate a specific counter-positioning:

```
PATTERN: "All competitors use glassmorphism and gradient backgrounds"
ATTACK: "Use editorial minimalism with heavy typography — instant visual differentiation"

PATTERN: "No competitor shows real client results with numbers"
ATTACK: "Lead with specific ROI numbers from real cases — own the credibility gap"

PATTERN: "Everyone says 'AI-powered solutions'"
ATTACK: "Show the specific technology stack and explain WHY it matters"
```

### 5. Research Industry Benchmarks

Use web_search to find:
- Market size and growth rate for the client's industry
- Average LP conversion rates for this type of LP
- Industry-specific trends that affect messaging
- Reference LPs from adjacent industries that perform well

### 6. Generate the Competitive Analysis

Compile everything into the structured document.
Follow template in `references/competitive-analysis-template.md`.

## Output Format

Deliver as structured markdown following `references/competitive-analysis-template.md`.

## Validation Checklist

Before delivering, verify:
- [ ] 5-8 competitors analyzed (minimum 3 direct)
- [ ] Each competitor has headline, CTA, social proof, and visual style captured
- [ ] At least 3 copy patterns identified
- [ ] At least 3 visual patterns identified
- [ ] At least 5 attack angles generated
- [ ] Weakness map complete (what competitors do poorly)
- [ ] Industry benchmarks researched
- [ ] All data from real sources (no fabricated competitor info)

## Integration

**Input from**: `lp-brand-strategist` Brand Brief (competitor names, URLs, industry)

**Output to**: `lp-brief-synthesizer` (combines with Brand + Product briefs)

**Key for Phase 1**: The attack angles feed directly into positioning strategy.
The visual patterns feed directly into design system generation (Phase 2).

## Red Flags — STOP and Follow the Process

| If you think... | Reality is... |
|----------------|---------------|
| "I can describe what competitors do generally" | Specific observations only. Generic descriptions produce generic strategy. |
| "All competitors look similar, there are no gaps" | There are always gaps. Look harder at messaging tone, guarantee structure, proof types. |
| "I don't need the Brand Brief to research competitors" | You need to know what differentiators to look for. Brand Brief is required. |

**ALL of these mean: STOP. Return to the current step.**

## Integration

**Feeds into**: `lp-brief-synthesizer` (competitive gaps inform positioning strategy).
**Requires first**: Brand Brief (to know what to look for).

## References

- `references/extraction-checklist.md` — Data points to capture per competitor
- `references/competitive-analysis-template.md` — Output template
