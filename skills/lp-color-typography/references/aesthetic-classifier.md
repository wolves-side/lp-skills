# Aesthetic Classifier

Classify the landing page's visual identity before any design decisions.

## Process

1. **Read** the Master Brief: industry, audience, brand personality, competitive positioning
2. **Match** to the closest aesthetic category
3. **Select** the corresponding preset as starting point
4. **Customize** from there based on brand differentiation

## Categories

| Aesthetic | Key Signals | Color Temp | Motion | Typography |
|-----------|------------|------------|--------|------------|
| **Corporate/Enterprise** | B2B, regulated industry, trust-centric, established | Cool neutral | Subtle, professional (0.5-0.7s) | Conservative, high readability |
| **Startup/Tech** | SaaS, developer tools, innovation-forward, gradient-heavy | Cool vivid | Energetic, spring-based (0.4-0.6s) | Modern, geometric sans |
| **Creative/Agency** | Portfolio, design studio, unconventional, bold | Varies (often warm) | Dramatic, cinematic (0.6-1.0s) | Expressive, mixed weights |
| **SaaS/Product** | Product-led, functional, clean, feature-focused | Neutral | Clean, functional (0.4-0.5s) | Clean sans, high density |
| **Premium/Luxury** | High-end, editorial, minimal, refined | Dark/neutral | Slow, elegant (0.8-1.2s) | Serif or refined sans, tight tracking |
| **Health/Wellness** | Organic, human-centered, warm, approachable | Warm | Soft, natural (0.5-0.8s) | Rounded, friendly |

## Decision Matrix

When the brand doesn't fit cleanly into one category, use this priority:

1. **Audience expectation** — What does the buyer expect to see? (B2B enterprise buyer expects Corporate, even if the product is "innovative")
2. **Competitive differentiation** — What do competitors look like? Diverge slightly, don't copy.
3. **Brand personality** — The tone of voice and values from the Master Brief.

## Output

```
AESTHETIC CLASSIFICATION
========================
Category: [Primary category]
Secondary influence: [If hybrid, e.g., "Corporate with Startup accent"]
Preset: [preset-name.md]
Mood keywords: [3-5 words, e.g., "refined, confident, precise, dark, editorial"]
Intensity: [subtle | moderate | dramatic]
Color temperature: [warm | cool | neutral]
Motion personality: [professional | energetic | cinematic | functional | elegant | soft]
```

## Anti-Patterns

- **Don't classify based on the industry alone.** A fintech can be Premium, not just Corporate.
- **Don't default to Startup/Tech.** It's the most common classification error — not every product with gradients is a startup.
- **Don't mix more than 2 categories.** A hybrid of 3+ produces incoherent design.
