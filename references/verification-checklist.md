# Verification Checklist

Run this before finishing Shopify admin UI work.

## Code Searches

Search the changed surface for:

```txt
<button
<input
<select
<textarea
border-radius
box-shadow
background:
background-color:
:hover
.card
.table
.grid
polaris-like
shopify-button
admin-button
```

For every match:

- Keep it only if it is outside merchant-facing admin UI, inside a trusted shared wrapper, or required for a custom composition Polaris does not cover.
- Replace raw controls with Polaris components when a Polaris equivalent exists.
- Move repeated visual styling into a shared wrapper or layout primitive.

## Pattern Audit

- Confirm the chosen stack is consistent for the surface: shared wrappers, React Polaris, or `s-*` web components.
- Confirm resource lists use a table/resource index pattern, not card grids or choice lists.
- Confirm selectable/bulk resource workflows use an accessible index table/resource index pattern.
- Confirm product/collection picking from Shopify uses App Bridge Resource Picker when appropriate.
- Confirm settings pages use a settings/form pattern, not a dashboard or resource list pattern.
- Confirm actions in table rows use secondary styling.
- Confirm each page or section has at most one primary styled action.

## State Audit

Check supported states:

- default
- hover
- active
- focus-visible
- disabled
- loading
- selected/checked
- invalid/error
- empty
- paginated/loading-more
- destructive/critical

## Browser Verification

- Verify desktop and mobile/narrow layouts.
- Verify hover, focus-visible, disabled, loading, invalid, and selected states for changed controls.
- Verify table row selection, sorting, pagination, filters, and row actions when present.
- Verify text truncation/wrapping in buttons, badges, table cells, headings, and action groups.
- Verify there is no overlapping UI and no horizontal overflow.
- Verify console output for errors caused by missing web component setup or invalid properties.
