# Premium Font Catalog

Curated fonts that elevate design above the "default Google Fonts" feel. Priority: Fontshare first, then select Google Fonts.

## Fontshare Picks (fontshare.com)

All free for commercial use. Less overused = instantly more distinctive.

### Display / Headings

| Font | Style | Best For | Weights |
|------|-------|----------|---------|
| **Cabinet Grotesk** | Geometric grotesque, tight | Tech, startup, modern | 400-900 |
| **Clash Display** | Bold geometric, high contrast | Creative, agency, impact | 200-700 |
| **Satoshi** | Clean neo-grotesque | SaaS, product, versatile | 300-900 |
| **Boska** | Modern serif, editorial | Premium, editorial, luxury | 300-700 |
| **Zodiak** | Elegant didone serif | Luxury, fashion, high-end | 200-800 |
| **Switzer** | Humanist sans, warm | Corporate, health, approachable | 100-900 |
| **General Sans** | Versatile, well-proportioned | Any — excellent all-rounder | 200-700 |
| **Synonym** | Round, friendly geometric | Health, wellness, friendly brands | 200-700 |

### Body / Text

| Font | Style | Best For | Weights |
|------|-------|----------|---------|
| **General Sans** | Readable, balanced | Pairs with any display serif | 200-700 |
| **Switzer** | Humanist, warm readability | Long-form, approachable brands | 100-900 |
| **Satoshi** | Clean, functional | Technical/product content | 300-900 |
| **Ranade** | Rounded, soft | Wellness, friendly brands | 100-700 |

## Google Fonts — Non-Obvious Picks

Skip the overused defaults. These are Google Fonts that feel premium:

### Display

| Font | Style | Why Pick It |
|------|-------|-------------|
| **Space Grotesk** | Mono-inspired geometric | Unique character shapes, tech feel without being cold |
| **Outfit** | Modern, comprehensive weights | Variable font, super smooth weight transitions |
| **Sora** | Geometric, Japanese-inspired | Distinctive curves, great for tech/innovation |
| **Plus Jakarta Sans** | Refined, contemporary | Feels premium without being flashy |
| **Bricolage Grotesque** | Character-rich display | Distinctive terminals, stands out in SaaS |

### Body

| Font | Style | Why Pick It |
|------|-------|-------------|
| **Inter** | Optimized for screens | Still excellent — overused as display, perfect as body |
| **DM Sans** | Google's best geometric body | Clean, versatile, good at small sizes |
| **Source Sans 3** | Adobe's open source workhorse | Excellent readability, comprehensive character set |
| **Geist** | Vercel's system font | Modern, functional, developer-friendly |
| **Literata** | Google serif, screen-optimized | Excellent for body in editorial/premium contexts |

## Recommended Pairings

| Context | Display | Body | Vibe |
|---------|---------|------|------|
| **Tech SaaS** | Cabinet Grotesk | Inter | Stripe/Linear energy |
| **Creative Agency** | Clash Display | Switzer | Bold, intentional |
| **Enterprise** | Plus Jakarta Sans | Source Sans 3 | Refined professionalism |
| **Premium/Editorial** | Boska | General Sans | Editorial luxury |
| **Health/Wellness** | Synonym | Ranade | Human, warm |
| **Developer Tools** | Space Grotesk | Geist | Technical precision |
| **Modern Startup** | Satoshi | DM Sans | Clean modernity |

## Variable Fonts Rule

When available, **always use the variable font version**. Benefits:
- Single file instead of 6+ weight files
- Smoother weight transitions in animations
- Smaller total file size
- Enable `font-weight` within sentences for emphasis

```css
/* Variable font import pattern */
@font-face {
  font-family: 'Cabinet Grotesk';
  src: url('/fonts/CabinetGrotesk-Variable.woff2') format('woff2');
  font-weight: 400 900;
  font-display: swap;
}
```
