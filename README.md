# Shopify Admin Polaris UI

[![skills.sh](https://skills.sh/b/uxmaniik/shopify-polaris-component-styles/shopify-admin-polaris-ui)](https://skills.sh/uxmaniik/shopify-polaris-component-styles/shopify-admin-polaris-ui)

A Codex skill for building Shopify app UI with Shopify admin-native patterns, Polaris web components, `@shopify/polaris` React components, measured component style references, and shared reusable wrappers.

The skill helps agents choose the right Shopify admin pattern first, then implement it with source-backed Polaris details instead of hand-rolled "Polaris-like" CSS.

## What It Covers

- Shopify admin pattern selection for settings pages, resource lists, tables, modals, cards, and pickers.
- Stack decisions for existing shared wrappers, `@shopify/polaris` React, and `s-*` Polaris web components.
- Generated references for Shopify App Home web components.
- Measured style extraction with Playwright for exact padding, radius, shadow, color, typography, and state values.
- Anti-drift rules to avoid duplicate wrappers, fake Shopify tables, raw controls, and one-off CSS.
- Browser verification checklists for hover, focus, disabled, loading, error, selected states, and responsive layouts.

## Install In Codex

Install through the Skills CLI so installs are tracked on skills.sh:

```bash
npx skills add https://github.com/uxmaniik/shopify-polaris-component-styles --skill shopify-admin-polaris-ui -g -a codex -y
```

Because this repository currently contains one skill, this shorter form also works:

```bash
npx skills add uxmaniik/shopify-polaris-component-styles -g -a codex -y
```

For other agents, omit `-a codex` or replace it with the target agent:

```bash
npx skills add uxmaniik/shopify-polaris-component-styles -g
```

### Local Development Install

Symlink this repository into your Codex skills folder:

```bash
ln -s /path/to/shopify-polaris-component-styles ~/.codex/skills/shopify-admin-polaris-ui
```

Then invoke it in Codex:

```txt
Use $shopify-admin-polaris-ui to refactor this Shopify app page to use native Shopify admin patterns, shared wrappers, and source-backed Polaris component styling.
```

## Development

Install dependencies:

```bash
npm install
npx playwright install chromium
```

Validate the skill:

```bash
npm run check
```

Refresh the Shopify web component index:

```bash
npm run update:index
```

Generate a measured reference for one component:

```bash
npm run extract -- --component button
npm run extract -- --component text-field
```

Generate the button reference with the curated state list:

```bash
npm run extract:button
```

## Repository Structure

```txt
SKILL.md
agents/openai.yaml
references/
scripts/
assets/fixtures/
```

`SKILL.md` keeps the agent instructions compact. Detailed guidance lives in `references/`, and repeatable maintenance work lives in `scripts/`.

## License

MIT
