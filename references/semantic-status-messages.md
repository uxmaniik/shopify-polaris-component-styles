# Semantic Status Messages

Use this for every Shopify admin status surface: page banners, section banners, inline notices, setup prompts, save confirmations, errors, warnings, trust/review notices, payment/test-mode notices, table/resource statuses, and small status pills.

## Core Rule

Do not recreate semantic status with custom yellow, red, green, blue, or gray `div` styles. Use the app's established Polaris banner, badge, inline text, or shared status wrapper first.

## Stack Decision

| App stack | Use |
| --- | --- |
| App already uses `@shopify/polaris` React | Shared `Banner` wrapper or Polaris `Banner` |
| App uses App Home web components | `s-banner` |
| App has a shared alert/status wrapper | Reuse it and map semantics to Polaris tones |

Do not mix React Polaris `Banner` and `s-banner` in the same surface unless the app already does.

## Surface Decision

| Need | Prefer | Avoid |
| --- | --- | --- |
| Page-level message requiring attention | `s-banner` or Polaris `Banner` near the top of the page | Custom card with colored header |
| Section-specific message | Banner inside the owning `s-section`/card only | Page-wide banner for a local problem |
| Inline resource state in a row, summary, or card | `s-badge` or Polaris `Badge` | Full banner inside every row |
| Field-level validation | Polaris field `error`/invalid state | Separate red text that is not linked to the field |
| Toast-like save feedback | App Bridge/Polaris toast where the app stack provides it | Persistent success banner for tiny actions |
| Blocking or destructive failure | Critical banner with clear next action | Generic red box without action/context |

For inline status indicators on individual items, use badge. Use banner for important information or required actions that need more context.

## Tone Mapping

| Message type | Polaris tone | Use for |
| --- | --- | --- |
| Informational | `info` or `auto` | Helpful guidance, setup tips, non-blocking education |
| Success | `success` | Completed setup, imported data, successful sync, confirmed save when persistent feedback is useful |
| Warning | `warning` | Trust/review warnings, test payment mode, missing configuration, important caution that is not destructive |
| Caution | `caution` when supported | Lower-severity risk or attention states, especially icons/badges where supported |
| Critical | `critical` | Errors, destructive failures, blocked workflows, urgent security/payment/data issues |
| Neutral | `neutral` when supported | Secondary status, paused/inactive state, low-emphasis metadata |
| Automatic | `auto` | Let Polaris choose when the component docs support `auto` and the message does not need explicit semantic force |

## Examples

Warning/trust or payment-mode page banner:

```tsx
<s-banner tone="warning" heading="Development stores can only process test payments">
  Activate the test payment provider, or set your payment provider to test mode.
</s-banner>
```

Success page or section banner:

```tsx
<s-banner tone="success" heading="Products imported">
  Successfully imported 50 products to your store.
</s-banner>
```

Critical page or section banner:

```tsx
<s-banner tone="critical" heading="Sync failed">
  Review the failed records before starting another sync.
</s-banner>
```

Inline resource status:

```tsx
<s-badge tone="success">Paid</s-badge>
```

In a React Polaris app, prefer the existing shared wrapper or Polaris `Banner`/`Badge` with the equivalent tone/title.

## Placement

- Put important page-level status messages near the top of the page, below the page title or main heading.
- Keep status messages inside the page content width, aligned with the main page layout.
- Do not place banners inside nested cards unless the status belongs only to that card.
- Use one dominant page-level banner at a time when possible.
- Keep repeated row-level statuses compact with badges, not repeated banners.

## Styling

- Do not hard-code semantic colors. Let Polaris own background, border, icon, text, radius, and shadow.
- Do not use custom `background-color`, `border-color`, `box-shadow`, or `border-radius` to imitate info/success/warning/caution/critical/neutral states.
- If exact banner values are required, open `references/feedback-and-status-indicators/banner.md` and use the measured tone sections.
- If exact inline status values are required, open `references/feedback-and-status-indicators/badge.md`.
- Let Polaris own the icon when the component supplies one. Use `references/media-and-visuals/icon-usage.md` before adding custom icons.

## Content

- Lead with a short heading that names the condition.
- Use body text for consequence and next action.
- Use secondary actions only when the message has a clear follow-up action.
- Match tone to severity, not brand color preference.
- Do not put unrelated app marketing copy inside status banners.
