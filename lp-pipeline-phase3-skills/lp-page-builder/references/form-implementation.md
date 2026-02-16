# Form Implementation Patterns

Different LP types need different form submission strategies.
Choose based on the Page Spec → Form Specification → Submit Action.

---

## Pattern Selection

| Submit Action | Pattern | Best for |
|--------------|---------|----------|
| WhatsApp redirect | Pattern A | Service sales (Brazil), consultations |
| API endpoint | Pattern B | SaaS signups, lead capture with CRM |
| Calendly embed | Pattern C | Service sales with scheduling |
| Email (mailto) | Pattern D | Minimal setup, portfolio sites |
| Google Forms | Pattern E | Quick MVPs, low-budget |

---

## Pattern A: WhatsApp Redirect

Most common for Brazilian B2B. Collects info in form, opens WhatsApp with
pre-filled message containing form data.

**Submit handler:**
```javascript
function submitToWhatsApp(formData) {
  var name = formData.get('name') || '';
  var email = formData.get('email') || '';
  var phone = formData.get('phone') || '';
  var company = formData.get('company') || '';

  var message = encodeURIComponent(
    '🚀 Nova solicitação via Landing Page\n\n' +
    '👤 Nome: ' + name + '\n' +
    '📧 Email: ' + email + '\n' +
    '📱 Tel: ' + phone + '\n' +
    '🏢 Empresa: ' + company + '\n\n' +
    '[Custom message from Page Spec]'
  );

  var whatsappNumber = '[COUNTRY_CODE][PHONE_NUMBER]'; // e.g., 5592999999999
  var url = 'https://wa.me/' + whatsappNumber + '?text=' + message;

  window.open(url, '_blank');
}
```

**Notes:**
- WhatsApp number format: country code + area code + number, no spaces or dashes
- Brazil: 55 + DDD + number (e.g., 5592999999999)
- Message limit: ~4096 characters
- encodeURIComponent handles special chars and line breaks

---

## Pattern B: API Endpoint

For CRM integration (HubSpot, Pipedrive, ActiveCampaign, etc.)
or custom backend.

**Submit handler:**
```javascript
function submitToAPI(formData) {
  return fetch('[API_ENDPOINT]', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData))
  })
  .then(function(response) {
    if (!response.ok) throw new Error('HTTP ' + response.status);
    return response.json();
  });
}
```

**Common endpoints:**
- n8n webhook: `https://[n8n-instance]/webhook/[webhook-id]`
- Make.com: `https://hook.us1.make.com/[hook-id]`
- HubSpot: `https://api.hsforms.com/submissions/v3/integration/submit/[portalId]/[formGuid]`
- Custom API: `https://[domain]/api/leads`

**Webhook payload format for n8n/Make:**
```javascript
// Send as JSON, include metadata
{
  name: formData.get('name'),
  email: formData.get('email'),
  phone: formData.get('phone'),
  company: formData.get('company'),
  source: 'landing-page',
  page: window.location.href,
  timestamp: new Date().toISOString()
}
```

---

## Pattern C: Calendly Embed

For service sales where the CTA is scheduling a call.

**Option 1: Inline embed (in the offer section)**
```html
<div class="calendly-embed">
  <div class="calendly-inline-widget"
       data-url="https://calendly.com/[username]/[event]?hide_gdpr_banner=1"
       style="min-width:320px;height:700px;">
  </div>
  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
</div>
```

**Option 2: Popup on CTA click (lighter, no embed weight)**
```html
<!-- Add to head -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>

<!-- CTA button -->
<a href="#" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/[username]/[event]'});return false;"
   class="btn btn--primary btn--large">
  [CTA text]
</a>
```

**Option 3: Simple redirect (lightest, no script needed)**
```html
<a href="https://calendly.com/[username]/[event]" target="_blank"
   class="btn btn--primary btn--large">
  [CTA text]
</a>
```

---

## Pattern D: Email (mailto)

Minimal implementation. Opens user's email client.

```html
<a href="mailto:[email]?subject=[encoded subject]&body=[encoded body with form data]"
   class="btn btn--primary btn--large">
  [CTA text]
</a>
```

Better version with form that constructs the mailto:
```javascript
function submitToEmail(formData) {
  var name = formData.get('name') || '';
  var email = formData.get('email') || '';
  var subject = encodeURIComponent('[Subject from Spec]');
  var body = encodeURIComponent(
    'Nome: ' + name + '\n' +
    'Email: ' + email + '\n\n' +
    '[Additional context]'
  );
  window.location.href = 'mailto:[target-email]?subject=' + subject + '&body=' + body;
}
```

---

## Pattern E: Google Forms (hidden iframe)

For quick setups. Form submits to Google Forms in background.

```javascript
function submitToGoogleForm(formData) {
  var googleFormUrl = 'https://docs.google.com/forms/d/e/[FORM_ID]/formResponse';

  // Map form fields to Google Forms entry IDs
  var params = new URLSearchParams({
    'entry.[ENTRY_ID_1]': formData.get('name'),
    'entry.[ENTRY_ID_2]': formData.get('email'),
    'entry.[ENTRY_ID_3]': formData.get('phone'),
  });

  // Submit via hidden iframe to avoid CORS issues
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.name = 'hidden_iframe';
  document.body.appendChild(iframe);

  var form = document.createElement('form');
  form.method = 'POST';
  form.action = googleFormUrl;
  form.target = 'hidden_iframe';

  params.forEach(function(value, key) {
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();

  // Clean up
  setTimeout(function() {
    document.body.removeChild(form);
    document.body.removeChild(iframe);
  }, 2000);

  return Promise.resolve(); // Simulate success
}
```

---

## Form Accessibility Checklist

Regardless of submission pattern:

- [ ] Every `<input>` has a `<label>` with matching `for`/`id`
- [ ] Error messages use `role="alert"` and are linked with `aria-describedby`
- [ ] Required fields have `aria-required="true"`
- [ ] Form has `novalidate` attribute (to use custom validation, not browser default)
- [ ] Submit button has descriptive text (not just "Submit")
- [ ] Focus moves to first error field after failed validation
- [ ] Success message is announced to screen readers
- [ ] Tab order is logical (top to bottom, left to right)

## Form UX Rules

- Never more than 4-5 fields on an LP form. Each field reduces conversion ~5%.
- Name + Email + Phone/WhatsApp is the sweet spot for B2B Brazil.
- Company name is optional unless needed for qualification.
- NEVER use CAPTCHA on an LP. It kills conversion. Use honeypot field instead:

```html
<!-- Honeypot: hidden field that bots fill, humans don't -->
<div style="position: absolute; left: -9999px;" aria-hidden="true">
  <input type="text" name="website" tabindex="-1" autocomplete="off">
</div>
```

```javascript
// In submit handler, check honeypot
if (formData.get('website')) {
  // Bot detected — silently ignore
  showSuccess(); // Fake success so bot doesn't retry
  return;
}
```
