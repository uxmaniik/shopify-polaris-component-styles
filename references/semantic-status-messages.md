# Semantic Status Messages

Use this for Shopify admin status boxes like warnings, success confirmations, informational notices, critical errors, review/install warnings, and required-action callouts.

## Core Rule

Do not recreate semantic status boxes with custom yellow, red, green, or blue `div` styles. Use the app's established Polaris banner/status component first.

## Stack Decision

| App stack | Use |
| --- | --- |
| App already uses `@shopify/polaris` React | Shared `Banner` wrapper or Polaris `Banner` |
| App uses App Home web components | `s-banner` |
| App has a shared alert/status wrapper | Reuse it and map semantics to Polaris tones |

Do not mix React Polaris `Banner` and `s-banner` in the same surface unless the app already does.

## Tone Mapping

| Message type | Polaris tone | Use for |
| --- | --- | --- |
| Informational | `info` or `auto` | Helpful neutral guidance, setup tips |
| Success | `success` | Save confirmations, completed setup |
| Warning | `warning` | Trust/review warnings, missing configuration, important caution that is not destructive |
| Caution | `caution` when supported | Lower-severity warning states |
| Critical | `critical` | Errors, destructive failures, blocked workflows |

For the screenshot pattern, "This app hasn't been reviewed" is a warning/trust message. Prefer:

```tsx
<s-banner tone="warning" heading="This app hasn't been reviewed">
  Shopify reviews apps to ensure your security is protected. Be sure you trust this app developer before installing.
</s-banner>
```

In a React Polaris app, prefer the existing shared wrapper or Polaris `Banner` with the equivalent warning tone/title.

## Placement

- Put important page-level status messages near the top of the page, below the page title or main heading.
- Keep status messages inside the page content width, aligned with the main page layout.
- Do not place banners inside nested cards unless the status belongs only to that card.
- Use one dominant page-level banner at a time when possible.

## Styling

- Do not hard-code semantic colors. Let Polaris own background, border, icon, text, radius, and shadow.
- Do not use custom `background-color`, `border-color`, `box-shadow`, or `border-radius` to imitate warning/success/critical states.
- If exact values are required, open `references/feedback-and-status-indicators/banner.md` and use the measured tone sections.

## Content

- Lead with a short heading that names the condition.
- Use body text for consequence and next action.
- Use secondary actions only when the message has a clear follow-up action.
- Do not put unrelated app marketing copy inside status banners.
