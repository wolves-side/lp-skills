# Change Plan Template

Create this plan BEFORE editing any code.
Every change is sequenced, categorized, and traceable to expert feedback.

---

```markdown
# 📋 CHANGE PLAN
## [Company Name] — Landing Page Rebuild
> Created: [date]
> Source: Expert Panel Review v[X]
> Current build: [filename] v[current]
> Target build: [filename] v[next]

---

## TRIAGE SUMMARY

| Category | Count | Description |
|----------|-------|-------------|
| A — Direct Edits | [N] | Self-contained, low-risk changes |
| B — Structural Changes | [N] | Multi-element or flow changes |
| C — Conflicts | [N] | Contradicting expert feedback |
| D — Out of Scope | [N] | Logged, not applied |

---

## CONFLICT RESOLUTIONS

### Conflict 1: [Short description]
**Expert A:** [What they recommend]
**Expert B:** [What they recommend — contradicts A]
**Resolution:** [What we're doing]
**Reasoning:** [Why — reference priority framework:
  data > spec > conversion > simplicity > reversibility]

### Conflict 2: [if applicable]
[Same format]

---

## OUT OF SCOPE (Category D)

Items logged but NOT applied in this rebuild:

| # | Expert | Recommendation | Why Out of Scope |
|---|--------|---------------|-----------------|
| 1 | [expert] | [recommendation] | [Too vague / Requires external work / Post-launch task] |
| 2 | [expert] | [recommendation] | [reason] |

---

## CHANGE SEQUENCE

Execute in this exact order. Do not skip or reorder.

### 🔴 Priority 1 — Critical Fixes

| # | Change | Type | Expert | Target | Cascade Risk |
|---|--------|------|--------|--------|-------------|
| 1.1 | [Description of change] | [CSS/HTML/JS/Copy] | [Which expert] | [Section/selector] | [None / Low / Check responsive / Check anchors] |
| 1.2 | [Description] | [Type] | [Expert] | [Target] | [Risk] |

### 🟡 Priority 2 — High-Impact Improvements

| # | Change | Type | Expert | Target | Cascade Risk |
|---|--------|------|--------|--------|-------------|
| 2.1 | [Description] | [Type] | [Expert] | [Target] | [Risk] |
| 2.2 | [Description] | [Type] | [Expert] | [Target] | [Risk] |

### 🟢 Priority 3 — Polish

| # | Change | Type | Expert | Target | Cascade Risk |
|---|--------|------|--------|--------|-------------|
| 3.1 | [Description] | [Type] | [Expert] | [Target] | [Risk] |
| 3.2 | [Description] | [Type] | [Expert] | [Target] | [Risk] |

---

## DEPENDENCY MAP

Changes that MUST happen in order:

```
[Change 1.1] → must happen before → [Change 2.3]
  (reason: structural change affects where copy goes)

[Change 2.1] → must happen before → [Change 2.2]
  (reason: CSS variable change cascades to component)
```

---

## REGRESSION WATCH LIST

After all changes, pay extra attention to:

| Area | Why | What to check |
|------|-----|---------------|
| [e.g., Mobile hero] | [Hero copy was changed — might overflow] | [CTA still above fold at 375px] |
| [e.g., FAQ section] | [New question added — might break accordion] | [All items open/close correctly] |
| [e.g., Nav anchors] | [Section reordered — anchors might be wrong] | [All nav links scroll to correct sections] |

---

## ESTIMATED EFFORT

| Priority | Changes | Estimated time |
|----------|---------|---------------|
| 🔴 Critical | [N] | [X min] |
| 🟡 High-impact | [N] | [X min] |
| 🟢 Polish | [N] | [X min] |
| **Total** | **[N]** | **[X min]** |
```
