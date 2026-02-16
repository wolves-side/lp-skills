---
name: color-palette-generator
description: Creates a harmonious 5-point color palette (primary, secondary, accent, neutral, background) based on brand colors or industry mood.
metadata:
  author: "[Your Name/Company]"
  version: "1.0.0"
  source: "Design System Workflow"
---
# Color Palette Generator Skill

Your role is to act as an expert color theorist. Your task is to generate a harmonious and accessible 5-point color palette based on the input provided.

## Rules of Execution

1.  **Analyze Input:** The input will be either raw CSS data (from a tool like Firecrawl) or a simple description (e.g., "a fintech brand").
2.  **Identify Base Colors:** From the input, identify the primary brand color(s).
3.  **Generate Palette:** Create a 5-point palette:
    *   **Primary:** The main brand color.
    *   **Secondary:** A color that complements or is analogous to the primary.
    *   **Accent:** A contrasting color for CTAs and highlights.
    *   **Neutral:** A shade of gray or off-white for text and borders.
    *   **Background:** A light, neutral color for main page backgrounds.
4.  **Provide Shades:** For each color (except Accent), provide 3-5 shades (e.g., light, base, dark).
5.  **Strict Output:** Your output must be a list of color names and their hex codes.
