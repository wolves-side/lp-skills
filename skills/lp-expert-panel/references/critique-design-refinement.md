# Design Refinement Critique

Methodology for Expert 6 (Akira Kobayashi) — the "last 1%" polish review.

## Focus Areas

This expert catches what the other 5 miss: the subtle details that make the difference between "AI-generated" and "hand-crafted premium".

### 1. Optical Alignment

- Text blocks that are mathematically centered but look visually off-center
- Icons that need 1-2px vertical adjustment to look aligned with text
- Button padding that needs optical correction (bottom padding slightly less than top)
- Card heights in grids that should use `min-height` not forced equal heights
- Logo alignment in trust bars (different logos need different scaling)

### 2. Typography Micro-Details

- Heading tracking: is it tight enough for large text? (-0.03em to -0.05em at 48px+)
- Body line-height: is it comfortable? (1.5–1.7 for body text)
- `text-wrap: balance` on headlines to avoid orphan words
- Font weight consistency: are weights used intentionally or randomly?
- Small text legibility: is caption text at least 12px with adequate contrast?

### 3. Animation Polish

- Entry animation timing: does it feel natural or robotic?
- Stagger delays: are they creating a reading rhythm or just showing sequence?
- Hover transitions: are they too fast (< 0.1s = jarring) or too slow (> 0.4s = sluggish)?
- Easing curves: are they using proper ease-out for entries? No `linear` or `ease` defaults?
- `prefers-reduced-motion`: is it actually implemented, not just mentioned?

### 4. Color & Contrast Edge Cases

- Muted text on muted backgrounds: does it pass 3:1 contrast?
- Gradient text: is it readable or just decorative?
- Dark section borders: are they visible but not prominent? (8-12% opacity)
- Shadow consistency: are all shadows using the same scale?
- Focus ring visibility: can you see the focus state on all interactive elements?

### 5. Consistency Audit

- Border radius: is it consistent per component type? (not 3 different radii for buttons)
- Spacing rhythms: does section padding follow a consistent pattern?
- Transition durations: are similar elements using similar timing?
- Color usage: is the accent color used sparingly (only CTAs + links) or splashed everywhere?
- Z-index: are decorative layers behind content? (no accidental overlap)

## Output Format

Same as other experts: TOP 5 most impactful recommendations.

Category prefix: `[Refinement]`

Example outputs:
- `[Refinement] #1 Hero headline tracking too loose` — "The H1 at 64px has default letter-spacing. At this size, it needs -0.04em tracking to look optically correct. Also add `text-wrap: balance` to prevent orphan words."
- `[Refinement] #2 Card hover timing inconsistent` — "Feature cards use 300ms hover transition but CTA buttons use 150ms. Align to the aesthetic's interaction duration (200ms for this Corporate project)."
