# Component Reference Format

Each generated component reference must use this structure. Keep exact values source-backed: Shopify docs, `@shopify/polaris-types`, or measured browser computed styles.

````md
# Component Name

Element: `s-component-name`  
Docs: https://shopify.dev/docs/api/app-home/web-components/category/slug  
Captured: YYYY-MM-DD  
Polaris source: https://cdn.shopify.com/shopifycloud/polaris.js

## Use

Short guidance for when to use this component instead of a custom element.

## Native Examples

```tsx
<s-component-name>Example</s-component-name>
```

## Properties

Generated from Shopify docs. Include property name, type, default, required/deprecated status, and notes when available.

## Slots

Generated from Shopify docs when available.

## Events

Generated from Shopify docs when available.

## Measured Styles

State tables from browser computed styles. Use `unknown` only when a value could not be measured.

## Wrapper Guidance

Rules for shared React/Remix/Next wrappers.

## Avoid

Common anti-patterns, especially duplicate CSS and custom controls that should be Polaris elements.
````
