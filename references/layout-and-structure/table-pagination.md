# Table Pagination And Resource Tables

Use this when building or reviewing paginated Shopify admin tables, resource lists, billing/history tables, product lists, filterable tables, or any UI with previous/next controls.

Sources:

- Shopify table web component: https://shopify.dev/docs/api/app-home/web-components/layout-and-structure/table
- Polaris React pagination: https://polaris-react.shopify.com/components/navigation/pagination
- Polaris React index table: https://polaris-react.shopify.com/components/tables/index-table

## Component Decision

| Need | Prefer | Avoid |
| --- | --- | --- |
| Simple non-selectable paginated data | `s-table paginate hasPreviousPage hasNextPage` | Hand-built previous/next button group |
| Selectable resource list, bulk actions, sorting, saved views | React Polaris `IndexTable`/resource index pattern when the app uses React Polaris | `s-table` plus ad hoc checkboxes and bulk toolbar |
| Standalone pagination below existing React Polaris content | React Polaris `Pagination` or existing shared wrapper | Custom chevron buttons with copied CSS |
| Shopify product/customer/order selection | App Bridge Resource Picker | Custom table that duplicates Shopify picker behavior |

## Web Component Pattern

```tsx
<s-table paginate hasPreviousPage hasNextPage>
  <s-table-header-row>
    <s-table-header listSlot="primary">Product</s-table-header>
    <s-table-header listSlot="inline">Status</s-table-header>
    <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
  </s-table-header-row>
  <s-table-body>
    <s-table-row>
      <s-table-cell>Water bottle</s-table-cell>
      <s-table-cell><s-badge tone="success">Active</s-badge></s-table-cell>
      <s-table-cell>250</s-table-cell>
    </s-table-row>
  </s-table-body>
</s-table>
```

Use `hasPreviousPage={false}` or omit `hasPreviousPage` to let Polaris render the previous control disabled. Use `hasNextPage={false}` or omit `hasNextPage` for the disabled next control. Handle the `previouspage` and `nextpage` events in one shared wrapper or data component.

## Shopify Admin Table Surface

The Shopify settings/billing-style table surface is usually a composition:

- Outer section/card container with Shopify admin radius and shadow.
- Heading and overflow/menu action in the section header.
- Optional tabs or filters above the table.
- Search/filter/sort icon buttons owned by Polaris or a shared toolbar wrapper.
- Table header row with compact density.
- Row-level badges for statuses such as `Paid`, `Open`, `Failed`, `Processing`, or `Refunded`.
- Pagination controls owned by `s-table`, React Polaris `Pagination`, or `IndexTable`.

Do not infer the pagination control size, radius, shadow, icon stroke, or disabled color from screenshots. Use the native component or measure it with the extractor.

## Pagination States To Verify

- Previous disabled, next disabled.
- Previous disabled, next enabled.
- Previous enabled, next disabled.
- Both enabled.
- Loading while fetching the next page.
- Keyboard focus-visible on each control.
- Hover and active states for enabled controls.
- Narrow/mobile layout if table variant is `auto`.

## Icons

Pagination arrows, carets, sort indicators, and filter/search icons should come from Polaris components or `s-icon`/`@shopify/polaris-icons`. Do not draw chevrons manually with CSS borders or inline SVG unless the project already has an approved Shopify icon wrapper and the exact icon name is documented.

## Verification

When the table is paginated, inspect the rendered browser state instead of only reading host styles. `s-table` can render pagination controls inside its shadow DOM, and the host may report `display: contents`.
