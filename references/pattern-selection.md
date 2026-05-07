# Pattern Selection

Use this before styling individual components. The goal is to choose the Shopify admin pattern first, then implement it with the app's existing Polaris stack.

Sources:

- Shopify App Design Guidelines: https://shopify.dev/docs/apps/design
- Shopify Layout Guidelines: https://shopify.dev/docs/apps/design/layout
- Shopify App Home: https://shopify.dev/docs/api/app-home
- Polaris web components: https://shopify.dev/docs/api/app-home/web-components
- Using Polaris web components: https://shopify.dev/api/app-home/using-polaris-components

## Stack Decision

Use this order:

1. Existing project shared wrapper around Polaris.
2. Existing project Polaris stack for the current surface.
3. `@shopify/polaris` React components when the app is already a React Polaris app.
4. Native `s-*` Polaris web components when the app uses App Home web components or has no established React Polaris stack.
5. Custom HTML/CSS only for layout glue or product-specific composition not covered by Polaris.

Rules:

- Do not mix `s-*` web components and `@shopify/polaris` React components inside the same page section unless the app already uses that pattern.
- Do not replace a stable React Polaris shared component system with `s-*` elements across a large app unless the user explicitly asks.
- In mixed apps, keep each surface internally consistent: one form, table, modal, or settings section should use one stack.
- Always preserve shared wrappers when they encode routing, analytics, permissions, loading states, or app-specific semantics.

## Page Pattern Decision

| Need | Prefer | Avoid |
| --- | --- | --- |
| App home/dashboard summary | `s-page`/Page, sections, compact summaries, banners, secondary links | Marketing-style hero layouts or decorative cards |
| Page-level status/warning message | Polaris Banner/shared status wrapper or `s-banner` with semantic tone | Custom colored boxes with hard-coded yellow/red/green/blue colors |
| Settings/configuration | Settings layout with explanatory aside/section text and form controls | Wide dense dashboards for simple settings |
| Product/order/customer/resource list | Resource index pattern; React Polaris `IndexTable` when selectable/bulk actions are needed | Card grids, choice lists, or fake tables for resource management |
| Simple non-selectable summary data | `s-table` or Polaris table | IndexTable complexity for a static summary |
| Multi-select/bulk action workflow | React Polaris `IndexTable` or Shopify resource index pattern | `s-table` with hand-rolled checkboxes unless the app has an established accessible pattern |
| Selecting Shopify products/collections from the store | App Bridge Resource Picker when the merchant is choosing Shopify resources | Custom product card selectors that duplicate Shopify picker behavior |
| Displaying selected products/collections inside the app | Table/resource index pattern with secondary row actions | Large card grids or choice lists for large resource sets |
| Object detail page | Page/detail layout with sections, one primary page action, secondary/destructive actions separated | Multiple primary buttons competing in each section |
| Modal task | Polaris modal with focused form/action content | Full-page layout inside a modal |

## Tables And Resource Lists

- Use `s-table` for relatively simple summaries, especially non-selectable rows with consistent attributes.
- Use React Polaris `IndexTable` for selectable resource lists, bulk selection, pagination, sorting, and resource index workflows in React Polaris apps.
- Use table/list responsive behavior rather than separate desktop/mobile implementations when Polaris provides it.
- Table row actions should use secondary styling: text button, minor icon, or menu. Do not put primary buttons in every row.
- Use one primary action for the page or card. Secondary actions belong in secondary buttons, links, or menus.

## Forms And Settings

- Use Polaris form fields for merchant input: text fields, selects, checkboxes, switches, money/number/date fields, and text areas.
- Group related settings into sections with clear headings and supporting copy.
- Use the settings layout when merchants need to scan groups of configuration options.
- Keep destructive actions separated from routine save/cancel actions.

## Cards, Sections, And Layout

- Use Page and Section primitives for Shopify admin rhythm.
- Use cards/sections for grouped content, not for every small item when a table or list is the correct pattern.
- Avoid card-inside-card layouts.
- Keep density consistent across a page; do not mix spacious marketing cards with dense admin tables without a workflow reason.
