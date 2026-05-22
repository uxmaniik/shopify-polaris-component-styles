# Badge

Element: `s-badge`  
Docs: https://shopify.dev/docs/api/app-home/web-components/feedback-and-status-indicators/badge  
Captured: 2026-05-03  
Polaris source: https://cdn.shopify.com/shopifycloud/polaris.js

## Capture Environment

| Field | Value |
| --- | --- |
| Browser | chromium |
| Viewport | 1024x768 |
| States | `default`, `hover`, `active`, `focus-visible`, `disabled`, `loading`, `selected`, `invalid`, `variant-primary`, `variant-secondary`, `variant-tertiary`, `tone-critical`, `tone-neutral` |
| Component definition | defined |

## Use

Use the native `s-badge` component before creating custom Shopify-admin-looking UI.

## Native Examples

```tsx
<s-badge data-measure="target" >Badge</s-badge>
```

## Properties

| Property | Type | Default | Required | Notes |
| --- | --- | --- | --- | --- |
| `color` | "base" \| "strong" | 'base' | yes | Controls the visual weight and emphasis of the badge. `base`: Standard weight with moderate emphasis, suitable for most use cases. `strong`: Increased visual weight for higher emphasis and prominence. |
| `icon` | 559 allowed string values; see Shopify docs for the exhaustive union. | none listed | yes | An icon displayed inside the badge to provide additional visual context or reinforce the badge's meaning. Accepts any icon name from the icon library or a custom string identifier. |
| `size` | "base" \| "large" \| "large-100" | 'base' | yes | The size of the badge. `base`: Default size suitable for most badge use cases. `large`: Larger badge for increased visibility and prominence. `large-100`: Extra large badge for maximum visibility in emphasized contexts. |
| `tone` | "info" \| "success" \| "warning" \| "critical" \| "auto" \| "neutral" \| "caution" | 'auto' | yes | The semantic meaning and color treatment of the component. `info`: Informational content or helpful tips. `success`: Positive outcomes or successful states. `warning`: Important warnings about potential issues. `criti... |

## Slots

| Slot | Type | Notes |
| --- | --- | --- |
| `children` | HTMLElement | The text label displayed within the badge component, typically a short status indicator or category label. ** |

## Events

Not listed in captured docs.

## Measured Styles

### default

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":52.75,"height":20}`

Host:

| Property | Value |
| --- | --- |
| display | contents |
| box-sizing | border-box |
| width | auto |
| height | auto |
| min-width | 0px |
| min-height | 0px |
| padding-top | 0px |
| padding-right | 0px |
| padding-bottom | 0px |
| padding-left | 0px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(0, 0, 0) |
| border-right-color | rgb(0, 0, 0) |
| border-bottom-color | rgb(0, 0, 0) |
| border-left-color | rgb(0, 0, 0) |
| border-radius | 0px |
| border-start-start-radius | 0px |
| border-start-end-radius | 0px |
| border-end-start-radius | 0px |
| border-end-end-radius | 0px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0) |
| color | rgb(0, 0, 0) |
| font-family | Inter, system-ui, sans-serif |
| font-size | 16px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

First visible shadow/control node:

| Property | Value |
| --- | --- |
| display | flex |
| box-sizing | border-box |
| width | 52.75px |
| height | 20px |
| min-width | 0px |
| min-height | 0px |
| padding-top | 2px |
| padding-right | 8px |
| padding-bottom | 2px |
| padding-left | 8px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(97, 97, 97) |
| border-right-color | rgb(97, 97, 97) |
| border-bottom-color | rgb(97, 97, 97) |
| border-left-color | rgb(97, 97, 97) |
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0.06) |
| color | rgb(97, 97, 97) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 4px |
| row-gap | 4px |
| column-gap | 4px |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(97, 97, 97) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### hover

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":52.75,"height":20}`

Host:

| Property | Value |
| --- | --- |
| display | contents |
| box-sizing | border-box |
| width | auto |
| height | auto |
| min-width | 0px |
| min-height | 0px |
| padding-top | 0px |
| padding-right | 0px |
| padding-bottom | 0px |
| padding-left | 0px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(0, 0, 0) |
| border-right-color | rgb(0, 0, 0) |
| border-bottom-color | rgb(0, 0, 0) |
| border-left-color | rgb(0, 0, 0) |
| border-radius | 0px |
| border-start-start-radius | 0px |
| border-start-end-radius | 0px |
| border-end-start-radius | 0px |
| border-end-end-radius | 0px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0) |
| color | rgb(0, 0, 0) |
| font-family | Inter, system-ui, sans-serif |
| font-size | 16px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

First visible shadow/control node:

| Property | Value |
| --- | --- |
| display | flex |
| box-sizing | border-box |
| width | 52.75px |
| height | 20px |
| min-width | 0px |
| min-height | 0px |
| padding-top | 2px |
| padding-right | 8px |
| padding-bottom | 2px |
| padding-left | 8px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(97, 97, 97) |
| border-right-color | rgb(97, 97, 97) |
| border-bottom-color | rgb(97, 97, 97) |
| border-left-color | rgb(97, 97, 97) |
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0.06) |
| color | rgb(97, 97, 97) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 4px |
| row-gap | 4px |
| column-gap | 4px |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(97, 97, 97) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### active

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":52.75,"height":20}`

Host:

| Property | Value |
| --- | --- |
| display | contents |
| box-sizing | border-box |
| width | auto |
| height | auto |
| min-width | 0px |
| min-height | 0px |
| padding-top | 0px |
| padding-right | 0px |
| padding-bottom | 0px |
| padding-left | 0px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(0, 0, 0) |
| border-right-color | rgb(0, 0, 0) |
| border-bottom-color | rgb(0, 0, 0) |
| border-left-color | rgb(0, 0, 0) |
| border-radius | 0px |
| border-start-start-radius | 0px |
| border-start-end-radius | 0px |
| border-end-start-radius | 0px |
| border-end-end-radius | 0px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0) |
| color | rgb(0, 0, 0) |
| font-family | Inter, system-ui, sans-serif |
| font-size | 16px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

First visible shadow/control node:

| Property | Value |
| --- | --- |
| display | flex |
| box-sizing | border-box |
| width | 52.75px |
| height | 20px |
| min-width | 0px |
| min-height | 0px |
| padding-top | 2px |
| padding-right | 8px |
| padding-bottom | 2px |
| padding-left | 8px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(97, 97, 97) |
| border-right-color | rgb(97, 97, 97) |
| border-bottom-color | rgb(97, 97, 97) |
| border-left-color | rgb(97, 97, 97) |
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0.06) |
| color | rgb(97, 97, 97) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 4px |
| row-gap | 4px |
| column-gap | 4px |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(97, 97, 97) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### focus-visible

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":52.75,"height":20}`

Host:

| Property | Value |
| --- | --- |
| display | contents |
| box-sizing | border-box |
| width | auto |
| height | auto |
| min-width | 0px |
| min-height | 0px |
| padding-top | 0px |
| padding-right | 0px |
| padding-bottom | 0px |
| padding-left | 0px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(0, 0, 0) |
| border-right-color | rgb(0, 0, 0) |
| border-bottom-color | rgb(0, 0, 0) |
| border-left-color | rgb(0, 0, 0) |
| border-radius | 0px |
| border-start-start-radius | 0px |
| border-start-end-radius | 0px |
| border-end-start-radius | 0px |
| border-end-end-radius | 0px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0) |
| color | rgb(0, 0, 0) |
| font-family | Inter, system-ui, sans-serif |
| font-size | 16px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

First visible shadow/control node:

| Property | Value |
| --- | --- |
| display | flex |
| box-sizing | border-box |
| width | 52.75px |
| height | 20px |
| min-width | 0px |
| min-height | 0px |
| padding-top | 2px |
| padding-right | 8px |
| padding-bottom | 2px |
| padding-left | 8px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(97, 97, 97) |
| border-right-color | rgb(97, 97, 97) |
| border-bottom-color | rgb(97, 97, 97) |
| border-left-color | rgb(97, 97, 97) |
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0.06) |
| color | rgb(97, 97, 97) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 4px |
| row-gap | 4px |
| column-gap | 4px |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(97, 97, 97) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### disabled

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":52.75,"height":20}`

Host:

| Property | Value |
| --- | --- |
| display | contents |
| box-sizing | border-box |
| width | auto |
| height | auto |
| min-width | 0px |
| min-height | 0px |
| padding-top | 0px |
| padding-right | 0px |
| padding-bottom | 0px |
| padding-left | 0px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(0, 0, 0) |
| border-right-color | rgb(0, 0, 0) |
| border-bottom-color | rgb(0, 0, 0) |
| border-left-color | rgb(0, 0, 0) |
| border-radius | 0px |
| border-start-start-radius | 0px |
| border-start-end-radius | 0px |
| border-end-start-radius | 0px |
| border-end-end-radius | 0px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0) |
| color | rgb(0, 0, 0) |
| font-family | Inter, system-ui, sans-serif |
| font-size | 16px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

First visible shadow/control node:

| Property | Value |
| --- | --- |
| display | flex |
| box-sizing | border-box |
| width | 52.75px |
| height | 20px |
| min-width | 0px |
| min-height | 0px |
| padding-top | 2px |
| padding-right | 8px |
| padding-bottom | 2px |
| padding-left | 8px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(97, 97, 97) |
| border-right-color | rgb(97, 97, 97) |
| border-bottom-color | rgb(97, 97, 97) |
| border-left-color | rgb(97, 97, 97) |
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0.06) |
| color | rgb(97, 97, 97) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 4px |
| row-gap | 4px |
| column-gap | 4px |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(97, 97, 97) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### loading

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":52.75,"height":20}`

Host:

| Property | Value |
| --- | --- |
| display | contents |
| box-sizing | border-box |
| width | auto |
| height | auto |
| min-width | 0px |
| min-height | 0px |
| padding-top | 0px |
| padding-right | 0px |
| padding-bottom | 0px |
| padding-left | 0px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(0, 0, 0) |
| border-right-color | rgb(0, 0, 0) |
| border-bottom-color | rgb(0, 0, 0) |
| border-left-color | rgb(0, 0, 0) |
| border-radius | 0px |
| border-start-start-radius | 0px |
| border-start-end-radius | 0px |
| border-end-start-radius | 0px |
| border-end-end-radius | 0px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0) |
| color | rgb(0, 0, 0) |
| font-family | Inter, system-ui, sans-serif |
| font-size | 16px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

First visible shadow/control node:

| Property | Value |
| --- | --- |
| display | flex |
| box-sizing | border-box |
| width | 52.75px |
| height | 20px |
| min-width | 0px |
| min-height | 0px |
| padding-top | 2px |
| padding-right | 8px |
| padding-bottom | 2px |
| padding-left | 8px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(97, 97, 97) |
| border-right-color | rgb(97, 97, 97) |
| border-bottom-color | rgb(97, 97, 97) |
| border-left-color | rgb(97, 97, 97) |
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0.06) |
| color | rgb(97, 97, 97) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 4px |
| row-gap | 4px |
| column-gap | 4px |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(97, 97, 97) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### selected

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":52.75,"height":20}`

Host:

| Property | Value |
| --- | --- |
| display | contents |
| box-sizing | border-box |
| width | auto |
| height | auto |
| min-width | 0px |
| min-height | 0px |
| padding-top | 0px |
| padding-right | 0px |
| padding-bottom | 0px |
| padding-left | 0px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(0, 0, 0) |
| border-right-color | rgb(0, 0, 0) |
| border-bottom-color | rgb(0, 0, 0) |
| border-left-color | rgb(0, 0, 0) |
| border-radius | 0px |
| border-start-start-radius | 0px |
| border-start-end-radius | 0px |
| border-end-start-radius | 0px |
| border-end-end-radius | 0px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0) |
| color | rgb(0, 0, 0) |
| font-family | Inter, system-ui, sans-serif |
| font-size | 16px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

First visible shadow/control node:

| Property | Value |
| --- | --- |
| display | flex |
| box-sizing | border-box |
| width | 52.75px |
| height | 20px |
| min-width | 0px |
| min-height | 0px |
| padding-top | 2px |
| padding-right | 8px |
| padding-bottom | 2px |
| padding-left | 8px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(97, 97, 97) |
| border-right-color | rgb(97, 97, 97) |
| border-bottom-color | rgb(97, 97, 97) |
| border-left-color | rgb(97, 97, 97) |
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0.06) |
| color | rgb(97, 97, 97) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 4px |
| row-gap | 4px |
| column-gap | 4px |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(97, 97, 97) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### invalid

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":52.75,"height":20}`

Host:

| Property | Value |
| --- | --- |
| display | contents |
| box-sizing | border-box |
| width | auto |
| height | auto |
| min-width | 0px |
| min-height | 0px |
| padding-top | 0px |
| padding-right | 0px |
| padding-bottom | 0px |
| padding-left | 0px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(0, 0, 0) |
| border-right-color | rgb(0, 0, 0) |
| border-bottom-color | rgb(0, 0, 0) |
| border-left-color | rgb(0, 0, 0) |
| border-radius | 0px |
| border-start-start-radius | 0px |
| border-start-end-radius | 0px |
| border-end-start-radius | 0px |
| border-end-end-radius | 0px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0) |
| color | rgb(0, 0, 0) |
| font-family | Inter, system-ui, sans-serif |
| font-size | 16px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

First visible shadow/control node:

| Property | Value |
| --- | --- |
| display | flex |
| box-sizing | border-box |
| width | 52.75px |
| height | 20px |
| min-width | 0px |
| min-height | 0px |
| padding-top | 2px |
| padding-right | 8px |
| padding-bottom | 2px |
| padding-left | 8px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(97, 97, 97) |
| border-right-color | rgb(97, 97, 97) |
| border-bottom-color | rgb(97, 97, 97) |
| border-left-color | rgb(97, 97, 97) |
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0.06) |
| color | rgb(97, 97, 97) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 4px |
| row-gap | 4px |
| column-gap | 4px |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(97, 97, 97) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### variant-primary

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":52.75,"height":20}`

Host:

| Property | Value |
| --- | --- |
| display | contents |
| box-sizing | border-box |
| width | auto |
| height | auto |
| min-width | 0px |
| min-height | 0px |
| padding-top | 0px |
| padding-right | 0px |
| padding-bottom | 0px |
| padding-left | 0px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(0, 0, 0) |
| border-right-color | rgb(0, 0, 0) |
| border-bottom-color | rgb(0, 0, 0) |
| border-left-color | rgb(0, 0, 0) |
| border-radius | 0px |
| border-start-start-radius | 0px |
| border-start-end-radius | 0px |
| border-end-start-radius | 0px |
| border-end-end-radius | 0px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0) |
| color | rgb(0, 0, 0) |
| font-family | Inter, system-ui, sans-serif |
| font-size | 16px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

First visible shadow/control node:

| Property | Value |
| --- | --- |
| display | flex |
| box-sizing | border-box |
| width | 52.75px |
| height | 20px |
| min-width | 0px |
| min-height | 0px |
| padding-top | 2px |
| padding-right | 8px |
| padding-bottom | 2px |
| padding-left | 8px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(97, 97, 97) |
| border-right-color | rgb(97, 97, 97) |
| border-bottom-color | rgb(97, 97, 97) |
| border-left-color | rgb(97, 97, 97) |
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0.06) |
| color | rgb(97, 97, 97) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 4px |
| row-gap | 4px |
| column-gap | 4px |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(97, 97, 97) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### variant-secondary

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":52.75,"height":20}`

Host:

| Property | Value |
| --- | --- |
| display | contents |
| box-sizing | border-box |
| width | auto |
| height | auto |
| min-width | 0px |
| min-height | 0px |
| padding-top | 0px |
| padding-right | 0px |
| padding-bottom | 0px |
| padding-left | 0px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(0, 0, 0) |
| border-right-color | rgb(0, 0, 0) |
| border-bottom-color | rgb(0, 0, 0) |
| border-left-color | rgb(0, 0, 0) |
| border-radius | 0px |
| border-start-start-radius | 0px |
| border-start-end-radius | 0px |
| border-end-start-radius | 0px |
| border-end-end-radius | 0px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0) |
| color | rgb(0, 0, 0) |
| font-family | Inter, system-ui, sans-serif |
| font-size | 16px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

First visible shadow/control node:

| Property | Value |
| --- | --- |
| display | flex |
| box-sizing | border-box |
| width | 52.75px |
| height | 20px |
| min-width | 0px |
| min-height | 0px |
| padding-top | 2px |
| padding-right | 8px |
| padding-bottom | 2px |
| padding-left | 8px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(97, 97, 97) |
| border-right-color | rgb(97, 97, 97) |
| border-bottom-color | rgb(97, 97, 97) |
| border-left-color | rgb(97, 97, 97) |
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0.06) |
| color | rgb(97, 97, 97) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 4px |
| row-gap | 4px |
| column-gap | 4px |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(97, 97, 97) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### variant-tertiary

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":52.75,"height":20}`

Host:

| Property | Value |
| --- | --- |
| display | contents |
| box-sizing | border-box |
| width | auto |
| height | auto |
| min-width | 0px |
| min-height | 0px |
| padding-top | 0px |
| padding-right | 0px |
| padding-bottom | 0px |
| padding-left | 0px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(0, 0, 0) |
| border-right-color | rgb(0, 0, 0) |
| border-bottom-color | rgb(0, 0, 0) |
| border-left-color | rgb(0, 0, 0) |
| border-radius | 0px |
| border-start-start-radius | 0px |
| border-start-end-radius | 0px |
| border-end-start-radius | 0px |
| border-end-end-radius | 0px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0) |
| color | rgb(0, 0, 0) |
| font-family | Inter, system-ui, sans-serif |
| font-size | 16px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

First visible shadow/control node:

| Property | Value |
| --- | --- |
| display | flex |
| box-sizing | border-box |
| width | 52.75px |
| height | 20px |
| min-width | 0px |
| min-height | 0px |
| padding-top | 2px |
| padding-right | 8px |
| padding-bottom | 2px |
| padding-left | 8px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(97, 97, 97) |
| border-right-color | rgb(97, 97, 97) |
| border-bottom-color | rgb(97, 97, 97) |
| border-left-color | rgb(97, 97, 97) |
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0.06) |
| color | rgb(97, 97, 97) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 4px |
| row-gap | 4px |
| column-gap | 4px |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(97, 97, 97) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### tone-critical

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":52.75,"height":20}`

Host:

| Property | Value |
| --- | --- |
| display | contents |
| box-sizing | border-box |
| width | auto |
| height | auto |
| min-width | 0px |
| min-height | 0px |
| padding-top | 0px |
| padding-right | 0px |
| padding-bottom | 0px |
| padding-left | 0px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(0, 0, 0) |
| border-right-color | rgb(0, 0, 0) |
| border-bottom-color | rgb(0, 0, 0) |
| border-left-color | rgb(0, 0, 0) |
| border-radius | 0px |
| border-start-start-radius | 0px |
| border-start-end-radius | 0px |
| border-end-start-radius | 0px |
| border-end-end-radius | 0px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0) |
| color | rgb(0, 0, 0) |
| font-family | Inter, system-ui, sans-serif |
| font-size | 16px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

First visible shadow/control node:

| Property | Value |
| --- | --- |
| display | flex |
| box-sizing | border-box |
| width | 52.75px |
| height | 20px |
| min-width | 0px |
| min-height | 0px |
| padding-top | 2px |
| padding-right | 8px |
| padding-bottom | 2px |
| padding-left | 8px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(142, 11, 33) |
| border-right-color | rgb(142, 11, 33) |
| border-bottom-color | rgb(142, 11, 33) |
| border-left-color | rgb(142, 11, 33) |
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | none |
| background-color | rgb(254, 209, 215) |
| color | rgb(142, 11, 33) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 4px |
| row-gap | 4px |
| column-gap | 4px |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(142, 11, 33) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### tone-neutral

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":52.75,"height":20}`

Host:

| Property | Value |
| --- | --- |
| display | contents |
| box-sizing | border-box |
| width | auto |
| height | auto |
| min-width | 0px |
| min-height | 0px |
| padding-top | 0px |
| padding-right | 0px |
| padding-bottom | 0px |
| padding-left | 0px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(0, 0, 0) |
| border-right-color | rgb(0, 0, 0) |
| border-bottom-color | rgb(0, 0, 0) |
| border-left-color | rgb(0, 0, 0) |
| border-radius | 0px |
| border-start-start-radius | 0px |
| border-start-end-radius | 0px |
| border-end-start-radius | 0px |
| border-end-end-radius | 0px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0) |
| color | rgb(0, 0, 0) |
| font-family | Inter, system-ui, sans-serif |
| font-size | 16px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

First visible shadow/control node:

| Property | Value |
| --- | --- |
| display | flex |
| box-sizing | border-box |
| width | 52.75px |
| height | 20px |
| min-width | 0px |
| min-height | 0px |
| padding-top | 2px |
| padding-right | 8px |
| padding-bottom | 2px |
| padding-left | 8px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 0px |
| border-right-width | 0px |
| border-bottom-width | 0px |
| border-left-width | 0px |
| border-top-style | none |
| border-right-style | none |
| border-bottom-style | none |
| border-left-style | none |
| border-top-color | rgb(97, 97, 97) |
| border-right-color | rgb(97, 97, 97) |
| border-bottom-color | rgb(97, 97, 97) |
| border-left-color | rgb(97, 97, 97) |
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0.06) |
| color | rgb(97, 97, 97) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 4px |
| row-gap | 4px |
| column-gap | 4px |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(97, 97, 97) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

## Wrapper Guidance

- Reuse an existing shared wrapper if the app has one.
- Keep new wrappers thin and delegate visual behavior to `s-badge`.
- Map product semantics to Polaris attributes in one place.
- Avoid hard-coded padding, radius, shadow, border, background, text, and hover values unless the measured table is being used for a custom composition.

## Avoid

- Do not imitate this component with ad hoc CSS when the native element is available.
- Do not duplicate this styling in feature files.
- Do not claim exact values that are not present in this reference or freshly measured.
