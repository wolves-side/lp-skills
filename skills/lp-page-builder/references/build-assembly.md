# Build Assembly

How to bundle the multi-file project into a single deployable HTML file.

**The multi-file project is the PRIMARY deliverable.** The single-file bundle
is OPTIONAL — generated only when the client needs it for specific hosting
that doesn't support multi-file static sites.

---

## When to Bundle

| Scenario | Deliverable |
|----------|------------|
| Standard hosting (Netlify, Vercel, S3, GitHub Pages) | Multi-file project (just deploy the folder) |
| Email embed or preview | Single-file bundle |
| Client on shared hosting with no folder upload | Single-file bundle |
| Quick preview before deployment | Single-file bundle |
| Development and iteration | Multi-file project |

---

## Bundle Process

### Step 1: Concatenate CSS

Read all 7 CSS files in order and place inside a single `<style>` tag:

```html
<style>
  /* === 01-reset.css === */
  [contents of 01-reset.css]

  /* === 02-design-system.css === */
  [contents of 02-design-system.css]

  /* === 03-base.css === */
  [contents of 03-base.css]

  /* === 04-components.css === */
  [contents of 04-components.css]

  /* === 05-sections.css === */
  [contents of 05-sections.css]

  /* === 06-animations.css === */
  [contents of 06-animations.css]

  /* === 07-responsive.css === */
  [contents of 07-responsive.css]
</style>
```

Place this `<style>` tag in `<head>`, replacing all `<link rel="stylesheet">` tags.

### Step 2: Concatenate JS

Read all 6 JS files and place inside a single `<script>` tag:

```html
<script>
  /* === nav.js === */
  [contents of nav.js]

  /* === scroll-reveal.js === */
  [contents of scroll-reveal.js]

  /* === counters.js === */
  [contents of counters.js]

  /* === accordion.js === */
  [contents of accordion.js]

  /* === form-handler.js === */
  [contents of form-handler.js]

  /* === smooth-scroll.js === */
  [contents of smooth-scroll.js]
</script>
```

Place this `<script>` tag before `</body>`, where the `<script defer>` tags were.
Remove the `defer` attribute since inline scripts don't need it.

### Step 3: Update Asset Paths

If any images were referenced with relative paths (`assets/[image].png`),
either:
- Convert to base64 data URIs (for small images < 10KB)
- Update to absolute URLs pointing to hosted assets

### Step 4: Verify

Open the bundled file in a browser and verify:
- All sections render correctly
- Nav scroll behavior works
- Mobile hamburger works
- Animations fire on scroll
- Form validation works
- All anchor links scroll correctly

---

## Automated Bundle Script (Python)

If computer tools are available, use this script:

```python
import os

project_dir = '[company-slug]-lp'

# Read HTML
with open(os.path.join(project_dir, 'index.html'), 'r') as f:
    html = f.read()

# Read and concatenate CSS
css_files = sorted([f for f in os.listdir(os.path.join(project_dir, 'css')) if f.endswith('.css')])
css_content = ''
for css_file in css_files:
    with open(os.path.join(project_dir, 'css', css_file), 'r') as f:
        css_content += f'/* === {css_file} === */\n{f.read()}\n\n'

# Read and concatenate JS
js_files = ['nav.js', 'scroll-reveal.js', 'counters.js', 'accordion.js', 'form-handler.js', 'smooth-scroll.js']
js_content = ''
for js_file in js_files:
    filepath = os.path.join(project_dir, 'js', js_file)
    if os.path.exists(filepath):
        with open(filepath, 'r') as f:
            js_content += f'/* === {js_file} === */\n{f.read()}\n\n'

# Replace CSS links with inline style
import re
html = re.sub(
    r'<link rel="stylesheet" href="css/[^"]+">[\s]*',
    '',
    html
)
html = html.replace(
    '</head>',
    f'<style>\n{css_content}</style>\n</head>'
)

# Replace JS script tags with inline script
html = re.sub(
    r'<script defer src="js/[^"]+"></script>[\s]*',
    '',
    html
)
html = html.replace(
    '</body>',
    f'<script>\n{js_content}</script>\n</body>'
)

# Save bundled file
output_name = project_dir.replace('-lp', '-landing-page.html')
with open(output_name, 'w') as f:
    f.write(html)

print(f'Bundle created: {output_name}')
print(f'Size: {len(html.encode("utf-8")) / 1024:.1f} KB')
```

---

## File Size Targets

| Version | Target | Max |
|---------|--------|-----|
| Multi-file total | < 38 KB | 62 KB |
| Single-file bundle | < 40 KB | 65 KB |

The bundle is slightly larger due to CSS section comments.
Both targets exclude images and external fonts.
