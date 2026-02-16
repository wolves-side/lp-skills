---
name: lp-icp-discovery
description: Extracts and analyzes raw business data to produce structured ICP data and objective persona archetypes.
metadata:
  author: "[Your Name/Company]"
  version: "1.0.0"
  phase: "Extra — ICP Discovery"
---
# LP ICP Discovery

This skill processes unstructured business information and converts it into structured customer segments and persona archetypes.

---

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
