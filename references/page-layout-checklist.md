# Page Layout Checklist

Use this when building or reviewing a full Shopify embedded app page.

Sources:

- Shopify App Design Guidelines: https://shopify.dev/docs/apps/design
- Shopify Layout Guidelines: https://shopify.dev/docs/apps/design/layout
- App Home patterns: https://shopify.dev/docs/apps/build/app-home

## Page Structure

- Use the app's established Page primitive: `s-page`, Polaris `Page`, or shared wrapper.
- Choose page width by task:
  - Use narrow/base settings layouts for forms and configuration.
  - Use wider layouts for tables, resource indexes, dashboards, and data visualization.
- Use `s-section`, Polaris `Card`/layout primitives, or shared equivalents for scan-friendly content groups.
- Keep most app content inside structured containers, while avoiding nested cards.
- Use responsive layout primitives rather than fixed pixel page widths.

## Spacing And Density

- Follow Shopify's 4px spacing grid.
- Use Polaris spacing tokens, `s-stack`, `s-grid`, or existing shared layout primitives.
- Do not invent arbitrary gaps like `13px`, `22px`, or one-off margins unless matching an existing local token.
- Keep density consistent within a page: forms, tables, badges, and actions should feel like one admin surface.
- Use compact spacing for operational dashboards and resource lists; use clearer vertical grouping for settings forms.

## Sections And Cards

- Each section should have a clear purpose and heading when useful.
- Use one primary styled action per section/card at most.
- Put supporting actions in secondary buttons, links, menus, or footer action groups.
- Do not place primary buttons inside every table row.
- Do not use cards as decorative wrappers around other cards.

## Empty, Loading, And Error States

- Provide loading states for tables, buttons, and async forms.
- Use banners for important page-level feedback or required action.
- Use semantic banner tones for status boxes: info, success, warning/caution, and critical.
- For warning/trust messages like app review/install warnings, use a Polaris warning banner/status component rather than custom yellow boxes.
- Use inline field errors for form validation.
- Use empty states that explain the next merchant action without becoming a marketing panel.

## Responsive Behavior

- Verify desktop and mobile/narrow widths.
- Tables should collapse or adapt according to Polaris behavior where available.
- Long text in buttons, badges, table cells, headings, and compact cards must not overflow or overlap.
- Keep primary actions reachable and predictable on smaller screens.
