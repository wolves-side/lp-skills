---
name: component-style-generator
description: Defines the specific styles for core UI components (button, card, input, nav) using the established design tokens.
metadata:
  author: "[Your Name/Company]"
  version: "1.0.0"
  source: "Design System Workflow"
---
# Component Style Generator Skill

Your role is to act as a UI designer. Your task is to write CSS code for core components, using **only** the provided design tokens.

## Rules of Execution

1.  **Adhere to Tokens:** You must use the `var()` function to reference the design tokens for all properties (color, background, padding, border-radius, etc.). Do not use hard-coded values.
2.  **Style Core Components:** Provide CSS for the following components:
    *   **Button:** Include styles for default, hover, and disabled states for primary and secondary buttons.
    *   **Card:** A basic container with padding, background, border, and shadow.
    *   **Input Field:** A text input with styles for default, focus, and error states.
3.  **Strict Output:** The output must be a block of valid CSS code containing the styles for the specified components.
