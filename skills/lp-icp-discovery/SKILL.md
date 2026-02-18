---
name: lp-icp-discovery
description: "Extracts and analyzes raw business data to produce structured ICP data and objective persona archetypes. Activate when starting a new landing page project and need to identify ideal customer profiles. Conducts discovery interview, analyzes market data, and builds 3-5 detailed persona archetypes. Part of the Landing Page Pipeline (Phase 1)."
---

<HARD-GATE>
Do NOT produce Persona Profiles without first contextualizing every discovery question
against both the Brand Brief AND the Product Brief. Generic ICP questions produce
generic personas that convert nobody.
</HARD-GATE>

# LP ICP Discovery

## Iron Law

**Context-First Discovery**: Every interview question must be informed by what the brand sells and who they say their customers are. Personas built without product context are marketing archetypes, not real ICPs.

## Skill Type

**Rigid** — The discovery-analysis-persona-building sequence is mandatory. Generic frameworks are starting points, not substitutes for actual client data.


This skill processes unstructured business information and converts it into structured customer segments and persona archetypes.

---


## Checklist

You MUST create a task for each item using TaskCreate and complete them in order:

1. Receive and read complete Brand Brief AND Product Brief (both required)
2. Contextualize all discovery questions against what the brand sells
3. Conduct ICP discovery interview with contextualized questions
4. Run ICP Analysis on collected data
5. Build 3-5 detailed Persona Profiles
6. Identify and mark the priority persona for this landing page
7. Present profiles to user for validation and apply corrections
8. Invoke lp-brief-synthesizer

## ICP Data Miner Agent

Your role is to act as a data engineering and analysis agent. Your goal is to process unstructured information and convert it into structured data and potential customer segments.

### Internal Workflow

1.  **Invoke `icp-discovery` reference:** Use the raw text provided by the user to execute the icp-discovery methodology, generating a structured JSON output of the ICP Questionnaire. This is your foundational data asset.
2.  **Invoke `icp-analyzer` reference:** Immediately take the generated JSON as input for the icp-analyzer methodology. This produces 3-5 persona archetypes.
3.  **Invoke `icp-persona-builder` reference:** Take the persona archetypes and build detailed, actionable persona profiles.

### Rules of Execution

*   Your process is purely data-driven. Avoid creative interpretation.
*   Your final output must **ONLY** be the list of detailed persona profiles.

---

## Reference Files

| Reference | Purpose |
|-----------|---------|
| `references/icp-discovery.md` | ICP questionnaire methodology |
| `references/icp-analyzer.md` | Persona archetype analysis |
| `references/icp-persona-builder.md` | Detailed persona profile building |

## Red Flags — STOP and Follow the Process

| If you think... | Reality is... |
|----------------|---------------|
| "I can infer the ICP from the brand brief" | You cannot. The interview surfaces what founders don't think to mention. |
| "3 personas is enough if they seem similar" | If the product genuinely serves different segments, document all. |
| "I'll use standard B2B/B2C persona frameworks" | Use actual data from the interview, not marketing archetypes. |
| "I don't need the Product Brief to start the interview" | Product context changes every ICP question. Both briefs required. |

**ALL of these mean: STOP. Return to the appropriate step.**

## User Signals You're Off Track

- "These don't represent our actual customers" → You used generic frameworks. Re-run the interview.
- "You missed our main segment" → Discovery was incomplete. Ask about that segment specifically.
- "The priority persona is wrong" → You chose priority without user confirmation. Ask explicitly.

## Integration

**Next required skill**: After Persona Profiles are validated, invoke `lp-brief-synthesizer`.
**Requires first**: Brand Brief + Product Brief (both approved).
**Feeds into**: `lp-brief-synthesizer` (all 3 Phase 0 outputs combine here).