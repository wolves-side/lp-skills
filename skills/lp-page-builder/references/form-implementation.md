# Form Implementation Patterns

Different LP types need different form submission strategies.
Choose based on the Page Spec → Form Specification → Submit Action.

---

## Pattern Selection

| Submit Action | CONFIG.mode | Best for |
|--------------|-------------|----------|
| WhatsApp redirect | `'whatsapp'` | Service sales (Brazil), consultations |
| API endpoint (n8n, Make, CRM) | `'api'` | SaaS signups, lead capture with CRM |
| Calendly embed | `'calendly'` | Service sales with scheduling |
| Email (mailto) | `'mailto'` | Minimal setup, portfolio sites |

---

## File Map

| Concern | File |
|---------|------|
| Form HTML + fields | `index.html` (see section-build-patterns.md → Form Section) |
| Field + error styling | `css/04-components.css` → `.form-*` classes |
| Mobile form styles | `css/07-responsive.css` |
| Validation + submission | `js/form-handler.js` (configure `CONFIG` at top) |

---

## Configuration (in js/form-handler.js)

All project-specific settings are in the `CONFIG` object at the top of `form-handler.js`.
Edit these values per project:

```javascript
var CONFIG = {
  mode: 'whatsapp',  // Change this per project

  whatsapp: {
    number: '55XXXXXXXXXXX',  // Country code + DDD + number
    messageTemplate: function (data) { /* customize */ }
  },

  api: {
    endpoint: 'https://...',  // n8n webhook, Make, HubSpot, etc.
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  },

  success: {
    title: '✅ Enviado com sucesso!',
    text: '[Success message from Page Spec]'
  }
};
```

---

## Common API Endpoints

| Service | Endpoint Pattern |
|---------|-----------------|
| n8n webhook | `https://[n8n-instance]/webhook/[webhook-id]` |
| Make.com | `https://hook.us1.make.com/[hook-id]` |
| HubSpot | `https://api.hsforms.com/submissions/v3/integration/submit/[portalId]/[formGuid]` |
| Custom API | `https://[domain]/api/leads` |

---

## Calendly Integration

Calendly doesn't use the form handler. Instead, add directly to HTML:

**Option 1: Popup on CTA click**
```html
<!-- In <head> -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" async></script>

<!-- CTA button (in index.html) -->
<a href="#"
   onclick="Calendly.initPopupWidget({url:'https://calendly.com/[user]/[event]'});return false;"
   class="btn btn--primary btn--large">
  [CTA text]
</a>
```

**Option 2: Simple redirect (lightest)**
```html
<a href="https://calendly.com/[user]/[event]" target="_blank"
   class="btn btn--primary btn--large">
  [CTA text]
</a>
```

---

## Honeypot Anti-Spam

Always include in form HTML (already in the form section pattern):

```html
<div style="position: absolute; left: -9999px;" aria-hidden="true">
  <input type="text" name="website" tabindex="-1" autocomplete="off">
</div>
```

The `form-handler.js` checks this automatically and silently ignores bot submissions.

---

## Accessibility Checklist

- [ ] Every `<input>` has a `<label>` with matching `for`/`id`
- [ ] Error messages use `role="alert"` and are linked via `aria-describedby`
- [ ] Required fields have `aria-required="true"`
- [ ] Form has `novalidate` attribute (custom validation, not browser default)
- [ ] Submit button has descriptive text (not just "Submit")
- [ ] Focus moves to first error field after failed validation
- [ ] Success message replaces form (announced to screen readers)
- [ ] Tab order is logical (top to bottom)

## UX Rules

- Max 4-5 fields. Each extra field reduces conversion ~5%.
- Name + Email + Phone/WhatsApp is the sweet spot for B2B Brazil.
- Company name is optional unless needed for qualification.
- NEVER use CAPTCHA on an LP. Use honeypot instead.
