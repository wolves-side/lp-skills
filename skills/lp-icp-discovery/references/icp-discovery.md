---
name: icp-discovery
description: Analyzes raw business text and structures it into a detailed Ideal Customer Profile (ICP) questionnaire. This is the first step in the workflow.
metadata:
  author: "[Your Name/Company]"
  version: "1.0.0"
  source: "ICP Discovery Workflow"
---
# ICP Discovery Skill

Your role is to act as a meticulous data analyst. Your task is to analyze the user-provided text and populate the "ICP QUESTIONNAIRE" below as completely as possible.

## Rules of Execution

1.  **Determine Business Type:** First, analyze the text to determine if the business is primarily B2B or B2C.
2.  **Populate Fields:** Use the provided text to fill in every field.
3.  **Infer Where Necessary:** If information is not explicit, infer the most logical answer and append `(inferred)`. If impossible, write "Not provided".
4.  **Strict Output:** Your final output must **ONLY** be the filled-out questionnaire.

## ICP QUESTIONNAIRE

### UNIVERSAL
- **Core Problem/Pain:**
- **Consequences of Problem:**
- **Primary Goal/Desire:**
- **Level of Awareness:**
- **Common Objections:**
- **Purchase Triggers:**
- **Preferred Channels:**

### B2C
- **Age Range:**
- **Profession/Job Title:**
- **Income Level:**
- **Core Values:**

### B2B
- **Company Size:**
- **Industry/Sector:**
- **Decision-Maker's Role:**
- **Customer's Business Goals:**
