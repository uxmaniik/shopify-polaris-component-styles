# Icon Usage

Use this when adding or reviewing Shopify admin icons, carets, chevrons, sort indicators, filter/search controls, status icons, or icon-only buttons.

Sources:

- Shopify `s-icon`: https://shopify.dev/docs/api/app-home/web-components/media-and-visuals/icon
- Polaris React icons package: https://www.npmjs.com/package/@shopify/polaris-icons

## Source Decision

| App stack | Use |
| --- | --- |
| App Home web components | `s-icon type="..."` or component-owned icons |
| React Polaris app | `@shopify/polaris-icons` through Polaris `Icon`, `Button`, `ActionList`, `IndexTable`, or a shared wrapper |
| Existing app icon wrapper | Reuse it if it maps to Shopify Polaris icon names |

Do not mix Lucide, Heroicons, Font Awesome, custom SVGs, or CSS-drawn carets into merchant-facing Shopify admin UI unless the user explicitly asks and there is no Polaris equivalent.

## Rules

- Prefer component-owned icons first. `s-banner`, `s-table` pagination, select controls, menus, and sortable table headers often own their icons.
- Use icon names accepted by `s-icon` for web components.
- Use exports from `@shopify/polaris-icons` for React Polaris.
- Pair icons with text labels when space allows.
- For icon-only buttons, provide the app stack's accessible label prop or visually hidden label.
- Use semantic `tone`/`color` props instead of custom icon color CSS.
- Keep the same icon for the same concept across the app.

## Common Mappings

| Intent | Web components | React Polaris |
| --- | --- | --- |
| Search | `s-icon type="search"` or search field owned icon | `SearchIcon` through Polaris/search component |
| More actions | Component-owned menu/action icon where available | `MenuHorizontalIcon`/action menu pattern |
| Filter | Component-owned filter control or valid filter icon name | Polaris filters/index filters pattern |
| Sort | Sortable table/header component-owned icon | `IndexTable`/sortable heading owned icon |
| Previous/next page | `s-table` pagination-owned icons | `Pagination` owned icons |
| Warning | `s-banner tone="warning"` owned icon or `s-icon type="alert-circle" tone="warning"` | Banner/Icon with warning icon from Polaris |
| Success | `s-badge tone="success"` or `s-icon type="check-circle" tone="success"` | Badge/Icon with success icon from Polaris |
| Critical | `s-banner tone="critical"` owned icon | Banner/Icon with critical icon from Polaris |

## Carets And Chevrons

Carets and chevrons should normally be owned by the control: select, popover, menu, disclosure, pagination, or sortable table header. If a custom wrapper truly needs a caret, use the Shopify icon system and document the chosen icon name in that wrapper. Never create carets with CSS borders, text characters, or arbitrary inline SVGs for Shopify admin UI.

## Verification

- Confirm the icon source is Polaris, not a third-party library.
- Confirm disabled/hover/focus states are owned by the button/control, not custom icon CSS.
- Confirm icon-only controls have accessible labels.
- Confirm icons do not replace visible labels where merchants need clarity.
