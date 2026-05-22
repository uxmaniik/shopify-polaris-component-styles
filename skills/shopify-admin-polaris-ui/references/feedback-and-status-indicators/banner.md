# Banner

Element: `s-banner`  
Docs: https://shopify.dev/docs/api/app-home/web-components/feedback-and-status-indicators/banner  
Captured: 2026-05-07  
Polaris source: https://cdn.shopify.com/shopifycloud/polaris.js

## Capture Environment

| Field | Value |
| --- | --- |
| Browser | chromium |
| Viewport | 1024x768 |
| States | `default`, `tone-info`, `tone-success`, `tone-warning`, `tone-caution`, `tone-critical`, `tone-neutral` |
| Component definition | defined |

## Use

Use the native `s-banner` component before creating custom Shopify-admin-looking UI.

## Native Examples

```tsx
<s-banner data-measure="target" heading="Banner heading">Banner message body</s-banner>
```

## Properties

| Property | Type | Default | Required | Notes |
| --- | --- | --- | --- | --- |
| `heading` | string | '' | yes | The heading text displayed at the top of the banner. |
| `tone` | "info" \| "success" \| "warning" \| "critical" \| "auto" | 'auto' | yes | The semantic meaning and color treatment of the component. `info`: Informational content or helpful tips. `success`: Positive outcomes or successful states. `warning`: Important warnings about potential issues. `criti... |
| `hidden` | boolean | false | yes | Controls whether the banner is visible or hidden. When using a controlled component pattern and the banner is `dismissible`, update this property to `true` when the `dismiss` event fires. You can hide the banner progr... |
| `dismissible` | boolean | false | yes | Whether the banner displays a close button that allows users to dismiss it. When the close button is pressed, the `dismiss` event fires, then `hidden` is set to `true`, any animation completes, and the `afterhide` eve... |

## Slots

| Slot | Type | Notes |
| --- | --- | --- |
| `children` | HTMLElement | The main message content displayed within the banner component, providing important information or guidance to users. |
| `secondary-actions` | HTMLElement | Action buttons displayed at the bottom of the banner that let users respond to the message. Accepts up to two button components with `variant="secondary"` or `variant="auto"`. ** |

## Events

| Event | Type | Notes |
| --- | --- | --- |
| `afterhide` | CallbackEventListener\<typeof tagName> \| null | A callback fired after the banner is hidden. |
| `dismiss` | CallbackEventListener\<typeof tagName> \| null | A callback fired when the banner is dismissed. |

## Measured Styles

### default

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":960,"height":92}`

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
| display | block |
| box-sizing | border-box |
| width | 960px |
| height | 92px |
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
| border-top-color | rgb(48, 48, 48) |
| border-right-color | rgb(48, 48, 48) |
| border-bottom-color | rgb(48, 48, 48) |
| border-left-color | rgb(48, 48, 48) |
| border-radius | 12px |
| border-start-start-radius | 12px |
| border-start-end-radius | 12px |
| border-end-start-radius | 12px |
| border-end-end-radius | 12px |
| box-shadow | rgba(0, 0, 0, 0.08) 0px 8px 10px -5px, rgba(0, 0, 0, 0.03) 0px 5px 5px -2.5px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.02) 0px 2px 2px -1px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 0.5px 0.5px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px |
| background-color | rgb(255, 255, 255) |
| color | rgb(48, 48, 48) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 13px |
| font-weight | 450 |
| line-height | 20px |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

Visible shadow node inventory:

| # | Tag | Part | Class | Rect | Background | Color | Radius | Shadow | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | div |  | banner tone-auto has-heading has-content | `{"x":32,"y":32,"width":960,"height":92}` | rgb(255, 255, 255) | rgb(48, 48, 48) | 12px | rgba(0, 0, 0, 0.08) 0px 8px 10px -5px, rgba(0, 0, 0, 0.03) 0px 5px 5px -2.5px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.02) 0px 2px 2px -1px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 0.5px 0.5px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px | 450 |
| 2 | div |  | title-bar | `{"x":32,"y":32,"width":960,"height":44}` | rgb(145, 208, 255) | rgb(0, 33, 51) | 0px | none | 450 |
| 3 | div |  | icon | `{"x":44,"y":44,"width":20,"height":20}` | rgb(145, 208, 255) | rgb(0, 33, 51) | 8px | none | 450 |
| 4 | s-icon |  |  | `{"x":44,"y":44,"width":20,"height":20}` | rgba(0, 0, 0, 0) | rgb(0, 33, 51) | 0px | none | 450 |
| 5 | div |  | title | `{"x":68,"y":44,"width":912,"height":20}` | rgba(0, 0, 0, 0) | rgb(0, 33, 51) | 0px | none | 450 |
| 6 | div |  | body body-two-column | `{"x":32,"y":76,"width":960,"height":48}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 7 | div |  | content | `{"x":48,"y":88,"width":920,"height":20}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |

### tone-info

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":960,"height":92}`

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
| display | block |
| box-sizing | border-box |
| width | 960px |
| height | 92px |
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
| border-top-color | rgb(48, 48, 48) |
| border-right-color | rgb(48, 48, 48) |
| border-bottom-color | rgb(48, 48, 48) |
| border-left-color | rgb(48, 48, 48) |
| border-radius | 12px |
| border-start-start-radius | 12px |
| border-start-end-radius | 12px |
| border-end-start-radius | 12px |
| border-end-end-radius | 12px |
| box-shadow | rgba(0, 0, 0, 0.08) 0px 8px 10px -5px, rgba(0, 0, 0, 0.03) 0px 5px 5px -2.5px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.02) 0px 2px 2px -1px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 0.5px 0.5px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px |
| background-color | rgb(255, 255, 255) |
| color | rgb(48, 48, 48) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 13px |
| font-weight | 450 |
| line-height | 20px |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

Visible shadow node inventory:

| # | Tag | Part | Class | Rect | Background | Color | Radius | Shadow | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | div |  | banner tone-info has-heading has-content | `{"x":32,"y":32,"width":960,"height":92}` | rgb(255, 255, 255) | rgb(48, 48, 48) | 12px | rgba(0, 0, 0, 0.08) 0px 8px 10px -5px, rgba(0, 0, 0, 0.03) 0px 5px 5px -2.5px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.02) 0px 2px 2px -1px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 0.5px 0.5px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px | 450 |
| 2 | div |  | title-bar | `{"x":32,"y":32,"width":960,"height":44}` | rgb(145, 208, 255) | rgb(0, 33, 51) | 0px | none | 450 |
| 3 | div |  | icon | `{"x":44,"y":44,"width":20,"height":20}` | rgb(145, 208, 255) | rgb(0, 33, 51) | 8px | none | 450 |
| 4 | s-icon |  |  | `{"x":44,"y":44,"width":20,"height":20}` | rgba(0, 0, 0, 0) | rgb(0, 33, 51) | 0px | none | 450 |
| 5 | div |  | title | `{"x":68,"y":44,"width":912,"height":20}` | rgba(0, 0, 0, 0) | rgb(0, 33, 51) | 0px | none | 450 |
| 6 | div |  | body body-two-column | `{"x":32,"y":76,"width":960,"height":48}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 7 | div |  | content | `{"x":48,"y":88,"width":920,"height":20}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |

### tone-success

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":960,"height":92}`

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
| display | block |
| box-sizing | border-box |
| width | 960px |
| height | 92px |
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
| border-top-color | rgb(48, 48, 48) |
| border-right-color | rgb(48, 48, 48) |
| border-bottom-color | rgb(48, 48, 48) |
| border-left-color | rgb(48, 48, 48) |
| border-radius | 12px |
| border-start-start-radius | 12px |
| border-start-end-radius | 12px |
| border-end-start-radius | 12px |
| border-end-end-radius | 12px |
| box-shadow | rgba(0, 0, 0, 0.08) 0px 8px 10px -5px, rgba(0, 0, 0, 0.03) 0px 5px 5px -2.5px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.02) 0px 2px 2px -1px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 0.5px 0.5px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px |
| background-color | rgb(255, 255, 255) |
| color | rgb(48, 48, 48) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 13px |
| font-weight | 450 |
| line-height | 20px |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

Visible shadow node inventory:

| # | Tag | Part | Class | Rect | Background | Color | Radius | Shadow | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | div |  | banner tone-success has-heading has-content | `{"x":32,"y":32,"width":960,"height":92}` | rgb(255, 255, 255) | rgb(48, 48, 48) | 12px | rgba(0, 0, 0, 0.08) 0px 8px 10px -5px, rgba(0, 0, 0, 0.03) 0px 5px 5px -2.5px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.02) 0px 2px 2px -1px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 0.5px 0.5px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px | 450 |
| 2 | div |  | title-bar | `{"x":32,"y":32,"width":960,"height":44}` | rgb(4, 123, 93) | rgb(250, 255, 251) | 0px | none | 450 |
| 3 | div |  | icon | `{"x":44,"y":44,"width":20,"height":20}` | rgb(4, 123, 93) | rgb(250, 255, 251) | 8px | none | 450 |
| 4 | s-icon |  |  | `{"x":44,"y":44,"width":20,"height":20}` | rgba(0, 0, 0, 0) | rgb(250, 255, 251) | 0px | none | 450 |
| 5 | div |  | title | `{"x":68,"y":44,"width":912,"height":20}` | rgba(0, 0, 0, 0) | rgb(250, 255, 251) | 0px | none | 450 |
| 6 | div |  | body body-two-column | `{"x":32,"y":76,"width":960,"height":48}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 7 | div |  | content | `{"x":48,"y":88,"width":920,"height":20}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |

### tone-warning

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":960,"height":92}`

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
| display | block |
| box-sizing | border-box |
| width | 960px |
| height | 92px |
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
| border-top-color | rgb(48, 48, 48) |
| border-right-color | rgb(48, 48, 48) |
| border-bottom-color | rgb(48, 48, 48) |
| border-left-color | rgb(48, 48, 48) |
| border-radius | 12px |
| border-start-start-radius | 12px |
| border-start-end-radius | 12px |
| border-end-start-radius | 12px |
| border-end-end-radius | 12px |
| box-shadow | rgba(0, 0, 0, 0.08) 0px 8px 10px -5px, rgba(0, 0, 0, 0.03) 0px 5px 5px -2.5px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.02) 0px 2px 2px -1px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 0.5px 0.5px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px |
| background-color | rgb(255, 255, 255) |
| color | rgb(48, 48, 48) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 13px |
| font-weight | 450 |
| line-height | 20px |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

Visible shadow node inventory:

| # | Tag | Part | Class | Rect | Background | Color | Radius | Shadow | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | div |  | banner tone-warning has-heading has-content | `{"x":32,"y":32,"width":960,"height":92}` | rgb(255, 255, 255) | rgb(48, 48, 48) | 12px | rgba(0, 0, 0, 0.08) 0px 8px 10px -5px, rgba(0, 0, 0, 0.03) 0px 5px 5px -2.5px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.02) 0px 2px 2px -1px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 0.5px 0.5px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px | 450 |
| 2 | div |  | title-bar | `{"x":32,"y":32,"width":960,"height":44}` | rgb(255, 184, 0) | rgb(37, 26, 0) | 0px | none | 450 |
| 3 | div |  | icon | `{"x":44,"y":44,"width":20,"height":20}` | rgb(255, 184, 0) | rgb(37, 26, 0) | 8px | none | 450 |
| 4 | s-icon |  |  | `{"x":44,"y":44,"width":20,"height":20}` | rgba(0, 0, 0, 0) | rgb(37, 26, 0) | 0px | none | 450 |
| 5 | div |  | title | `{"x":68,"y":44,"width":912,"height":20}` | rgba(0, 0, 0, 0) | rgb(37, 26, 0) | 0px | none | 450 |
| 6 | div |  | body body-two-column | `{"x":32,"y":76,"width":960,"height":48}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 7 | div |  | content | `{"x":48,"y":88,"width":920,"height":20}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |

### tone-caution

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":960,"height":92}`

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
| display | block |
| box-sizing | border-box |
| width | 960px |
| height | 92px |
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
| border-top-color | rgb(48, 48, 48) |
| border-right-color | rgb(48, 48, 48) |
| border-bottom-color | rgb(48, 48, 48) |
| border-left-color | rgb(48, 48, 48) |
| border-radius | 12px |
| border-start-start-radius | 12px |
| border-start-end-radius | 12px |
| border-end-start-radius | 12px |
| border-end-end-radius | 12px |
| box-shadow | rgba(0, 0, 0, 0.08) 0px 8px 10px -5px, rgba(0, 0, 0, 0.03) 0px 5px 5px -2.5px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.02) 0px 2px 2px -1px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 0.5px 0.5px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px |
| background-color | rgb(255, 255, 255) |
| color | rgb(48, 48, 48) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 13px |
| font-weight | 450 |
| line-height | 20px |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

Visible shadow node inventory:

| # | Tag | Part | Class | Rect | Background | Color | Radius | Shadow | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | div |  | banner tone-auto has-heading has-content | `{"x":32,"y":32,"width":960,"height":92}` | rgb(255, 255, 255) | rgb(48, 48, 48) | 12px | rgba(0, 0, 0, 0.08) 0px 8px 10px -5px, rgba(0, 0, 0, 0.03) 0px 5px 5px -2.5px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.02) 0px 2px 2px -1px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 0.5px 0.5px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px | 450 |
| 2 | div |  | title-bar | `{"x":32,"y":32,"width":960,"height":44}` | rgb(145, 208, 255) | rgb(0, 33, 51) | 0px | none | 450 |
| 3 | div |  | icon | `{"x":44,"y":44,"width":20,"height":20}` | rgb(145, 208, 255) | rgb(0, 33, 51) | 8px | none | 450 |
| 4 | s-icon |  |  | `{"x":44,"y":44,"width":20,"height":20}` | rgba(0, 0, 0, 0) | rgb(0, 33, 51) | 0px | none | 450 |
| 5 | div |  | title | `{"x":68,"y":44,"width":912,"height":20}` | rgba(0, 0, 0, 0) | rgb(0, 33, 51) | 0px | none | 450 |
| 6 | div |  | body body-two-column | `{"x":32,"y":76,"width":960,"height":48}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 7 | div |  | content | `{"x":48,"y":88,"width":920,"height":20}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |

### tone-critical

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":960,"height":92}`

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
| display | block |
| box-sizing | border-box |
| width | 960px |
| height | 92px |
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
| border-top-color | rgb(48, 48, 48) |
| border-right-color | rgb(48, 48, 48) |
| border-bottom-color | rgb(48, 48, 48) |
| border-left-color | rgb(48, 48, 48) |
| border-radius | 12px |
| border-start-start-radius | 12px |
| border-start-end-radius | 12px |
| border-end-start-radius | 12px |
| border-end-end-radius | 12px |
| box-shadow | rgba(0, 0, 0, 0.08) 0px 8px 10px -5px, rgba(0, 0, 0, 0.03) 0px 5px 5px -2.5px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.02) 0px 2px 2px -1px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 0.5px 0.5px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px |
| background-color | rgb(255, 255, 255) |
| color | rgb(48, 48, 48) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 13px |
| font-weight | 450 |
| line-height | 20px |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

Visible shadow node inventory:

| # | Tag | Part | Class | Rect | Background | Color | Radius | Shadow | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | div |  | banner tone-critical has-heading has-content | `{"x":32,"y":32,"width":960,"height":92}` | rgb(255, 255, 255) | rgb(48, 48, 48) | 12px | rgba(0, 0, 0, 0.08) 0px 8px 10px -5px, rgba(0, 0, 0, 0.03) 0px 5px 5px -2.5px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.02) 0px 2px 2px -1px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 0.5px 0.5px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px | 450 |
| 2 | div |  | title-bar | `{"x":32,"y":32,"width":960,"height":44}` | rgb(199, 10, 36) | rgb(255, 250, 251) | 0px | none | 450 |
| 3 | div |  | icon | `{"x":44,"y":44,"width":20,"height":20}` | rgb(199, 10, 36) | rgb(255, 250, 251) | 8px | none | 450 |
| 4 | s-icon |  |  | `{"x":44,"y":44,"width":20,"height":20}` | rgba(0, 0, 0, 0) | rgb(255, 250, 251) | 0px | none | 450 |
| 5 | div |  | title | `{"x":68,"y":44,"width":912,"height":20}` | rgba(0, 0, 0, 0) | rgb(255, 250, 251) | 0px | none | 450 |
| 6 | div |  | body body-two-column | `{"x":32,"y":76,"width":960,"height":48}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 7 | div |  | content | `{"x":48,"y":88,"width":920,"height":20}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |

### tone-neutral

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":960,"height":92}`

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
| display | block |
| box-sizing | border-box |
| width | 960px |
| height | 92px |
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
| border-top-color | rgb(48, 48, 48) |
| border-right-color | rgb(48, 48, 48) |
| border-bottom-color | rgb(48, 48, 48) |
| border-left-color | rgb(48, 48, 48) |
| border-radius | 12px |
| border-start-start-radius | 12px |
| border-start-end-radius | 12px |
| border-end-start-radius | 12px |
| border-end-end-radius | 12px |
| box-shadow | rgba(0, 0, 0, 0.08) 0px 8px 10px -5px, rgba(0, 0, 0, 0.03) 0px 5px 5px -2.5px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.02) 0px 2px 2px -1px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 0.5px 0.5px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px |
| background-color | rgb(255, 255, 255) |
| color | rgb(48, 48, 48) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 13px |
| font-weight | 450 |
| line-height | 20px |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

Visible shadow node inventory:

| # | Tag | Part | Class | Rect | Background | Color | Radius | Shadow | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | div |  | banner tone-auto has-heading has-content | `{"x":32,"y":32,"width":960,"height":92}` | rgb(255, 255, 255) | rgb(48, 48, 48) | 12px | rgba(0, 0, 0, 0.08) 0px 8px 10px -5px, rgba(0, 0, 0, 0.03) 0px 5px 5px -2.5px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.02) 0px 2px 2px -1px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 0.5px 0.5px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px | 450 |
| 2 | div |  | title-bar | `{"x":32,"y":32,"width":960,"height":44}` | rgb(145, 208, 255) | rgb(0, 33, 51) | 0px | none | 450 |
| 3 | div |  | icon | `{"x":44,"y":44,"width":20,"height":20}` | rgb(145, 208, 255) | rgb(0, 33, 51) | 8px | none | 450 |
| 4 | s-icon |  |  | `{"x":44,"y":44,"width":20,"height":20}` | rgba(0, 0, 0, 0) | rgb(0, 33, 51) | 0px | none | 450 |
| 5 | div |  | title | `{"x":68,"y":44,"width":912,"height":20}` | rgba(0, 0, 0, 0) | rgb(0, 33, 51) | 0px | none | 450 |
| 6 | div |  | body body-two-column | `{"x":32,"y":76,"width":960,"height":48}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 7 | div |  | content | `{"x":48,"y":88,"width":920,"height":20}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |

## Wrapper Guidance

- Reuse an existing shared wrapper if the app has one.
- Keep new wrappers thin and delegate visual behavior to `s-banner`.
- Map product semantics to Polaris attributes in one place.
- Avoid hard-coded padding, radius, shadow, border, background, text, and hover values unless the measured table is being used for a custom composition.

## Avoid

- Do not imitate this component with ad hoc CSS when the native element is available.
- Do not duplicate this styling in feature files.
- Do not claim exact values that are not present in this reference or freshly measured.
