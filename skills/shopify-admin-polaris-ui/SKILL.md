---
name: shopify-admin-polaris-ui
description: Build Shopify embedded app UI with Shopify admin-native patterns, Polaris web components or @shopify/polaris React components, measured component style references, page layout rules, resource index/table decisions, and shared reusable wrappers. Use when creating, reviewing, or refactoring Shopify app interfaces, especially buttons, fields, badges, banners, cards/sections, tables, IndexTable/resource lists, modals, layout primitives, hover/focus/disabled states, or any request for exact Shopify Polaris padding, radius, color, shadow, border, typography, and component properties.
---

# Shopify Admin Polaris UI

## Core Rules

- Choose the correct Shopify admin pattern before styling individual elements. Use `references/pattern-selection.md` for stack, page, table, resource list, and selection decisions.
- Prefer native Polaris web components before custom HTML/CSS. Load Polaris with `https://cdn.shopify.com/shopifycloud/polaris.js` when the app does not already load it.
- If the app already uses `@shopify/polaris` React components and shared wrappers, prefer that established stack for the same surface. Do not mix `s-*` web components and React Polaris components in one surface unless the project already does so or the user asks.
- Treat Shopify docs, `@shopify/polaris-types`, and measured browser computed styles as the only sources of exact component detail. Do not invent exact values from memory.
- Read `references/index.md` first, then open only the component reference needed for the task.
- If a needed component reference is missing or stale, run `scripts/update-component-index.mjs` and then `scripts/extract-component-styles.mjs` instead of guessing.
- Preserve component states: default, hover, active, focus-visible, disabled, loading, selected/checked, invalid/error, info, success, warning, caution, critical, primary, secondary, and plain when supported.
- Create or reuse shared wrappers for app code. Do not scatter one-off Shopify-looking CSS across feature files.
- Use project conventions for React, Remix, Next.js, CSS modules, Tailwind, or app styling. Keep Polaris decisions centralized in shared UI components.
- Prefer Polaris custom properties and component attributes over hard-coded CSS values. Add custom CSS only for layout glue or product-specific composition that Polaris does not provide.

## Workflow

1. Identify the page pattern and data workflow first: settings form, resource index, resource detail, dashboard summary, empty state, modal, or picker.
2. Open `references/pattern-selection.md` and choose the right Shopify admin pattern and component stack.
3. Open `references/page-layout-checklist.md` for page-level layout, density, spacing, and action hierarchy rules.
4. Open `references/index.md` and locate the Polaris component references needed for the chosen pattern.
5. Use the established project stack: existing shared wrappers first, then React Polaris or native `s-*` elements according to the stack decision.
6. If a wrapper is missing, add one in the app's existing shared component location.
7. If exact style detail is required and the reference lacks it, run the extractor and update the component reference.
8. Run the audit in `references/verification-checklist.md` before finishing.

## Implementation Pattern

Use Polaris elements directly for simple app surfaces:

```tsx
<s-button variant="primary">Save</s-button>
<s-text-field label="Campaign name" value={name} />
<s-badge tone="success">Active</s-badge>
```

Use shared wrappers when the app needs typed props, analytics hooks, routing integration, or repeated composition:

```tsx
export function Button({children, ...props}: ButtonProps) {
  return <s-button {...props}>{children}</s-button>;
}
```

Wrapper rules:

- Keep the wrapper thin.
- Map product semantics to Polaris attributes.
- Do not restyle the component unless the reference explicitly allows it.
- Put repeated spacing/layout decisions in shared layout components, not per-screen CSS.

## References

- `references/pattern-selection.md`: choose between `s-*`, `@shopify/polaris`, App Bridge, tables, IndexTable/resource index patterns, forms, cards, and pickers.
- `references/page-layout-checklist.md`: Shopify admin page layout, spacing, density, section/card, and action hierarchy rules.
- `references/semantic-status-messages.md`: page, section, inline, and resource status surfaces across info, success, warning, caution, critical, neutral, and auto tones.
- `references/layout-and-structure/table-pagination.md`: table pagination, disabled previous/next controls, resource table toolbars, and when to use `s-table`, React Polaris `Pagination`, or `IndexTable`.
- `references/media-and-visuals/icon-usage.md`: Shopify icon source rules, `s-icon`, `@shopify/polaris-icons`, carets/chevrons, sort/filter/search icons, and icon-only button accessibility.
- `references/verification-checklist.md`: concrete searches and browser checks before finishing UI work.
- `references/index.md`: current component index from Shopify's App Home web components docs.
- `references/component-reference-format.md`: required format for each generated component reference.
- `references/implementation-rules.md`: anti-drift rules for Shopify app codebases.
- `references/style-capture-schema.md`: computed-style fields and state matrix to capture.

## Scripts

Prefer the package scripts when available:

- `npm run validate`: validates required skill files, metadata, component index coverage, and script syntax.
- `npm run update:index`: fetches Shopify's markdown docs and regenerates `references/index.md` plus `references/components.json`.
- `npm run extract -- --component <slug>`: renders one component in Chromium with Polaris loaded and writes its measured reference file.
- `npm run extract:button`: regenerates the detailed `s-button` reference.
- `npm run extract:table`: regenerates `s-table` with paginated previous/next states.

The underlying scripts are `scripts/update-component-index.mjs`, `scripts/extract-component-styles.mjs`, and `scripts/validate-skill.mjs`.

If network or Playwright is unavailable, say what could not be refreshed and use the checked-in references conservatively.
