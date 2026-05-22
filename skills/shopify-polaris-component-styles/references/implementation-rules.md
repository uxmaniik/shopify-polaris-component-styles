# Implementation Rules

## Source Order

Use this priority order for visual and API decisions:

1. Existing project shared Polaris wrapper.
2. Existing project Polaris stack for the current surface.
3. `@shopify/polaris` React component when the app already uses React Polaris for that surface.
4. Native Shopify Polaris web component when the app uses App Home web components or no React Polaris stack exists.
5. Component reference in this skill.
6. Shopify docs page for the component or pattern.
7. Measured computed styles from a live rendered fixture.
8. Minimal custom CSS for layout glue only.

## Stack Rules

- Prefer existing shared wrappers before direct component use.
- Keep one surface on one stack: shared React Polaris, direct React Polaris, or `s-*` web components.
- Do not introduce `s-*` elements into a mature `@shopify/polaris` React page unless it is already the local pattern.
- Do not introduce `@shopify/polaris` React components into an App Home web-components-only page unless the project already ships React Polaris there.
- If a stack migration is needed, keep it explicitly scoped and preserve behavior before visual changes.

## Anti-Drift Rules

- Do not create `.shopify-button`, `.admin-button`, `.polaris-like`, or similar imitation classes when `s-button` works.
- Do not copy padding, radius, shadows, or colors into feature files unless the component reference says the target is a custom composition.
- Do not hard-code hover colors when the native component already owns hover behavior.
- Do not use generic browser controls for merchant-facing app UI when Polaris provides an equivalent field.
- Do not duplicate wrappers. Search the app first for shared `Button`, `TextField`, `Badge`, `Banner`, `Modal`, `Section`, `Stack`, and `Table` components.
- Do not replace working shared wrappers with direct elements across a large app unless the user asks for that refactor.
- Do not build resource management with card grids, choice lists, or fake tables when a table/resource index pattern is appropriate.
- Do not put primary buttons in table rows; use secondary row actions, links, icon buttons, or menus.
- Do not mix wide marketing-style panels into dense admin workflows.

## Wrapper Rules

- Name wrappers after the domain-neutral component: `Button`, `TextField`, `Select`, `Badge`, `Banner`.
- Keep wrappers thin and let Polaris own the visual treatment.
- Map app-specific variants to Polaris properties in one place.
- Preserve native accessibility attributes and event behavior.
- Prefer composition over CSS overrides.

## Verification

Before finishing UI work:

- Run the checks in `references/verification-checklist.md`.
- Check default, hover, focus-visible, active, disabled, loading, selected/checked, and invalid states where supported.
- Confirm text fits in buttons, badges, table cells, and compact panels.
- Confirm layout primitives use stable spacing and do not create nested card/card compositions.
- Confirm the app still uses a shared component for repeated UI patterns.
