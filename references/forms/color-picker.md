# Color picker

Element: `s-color-picker`  
Docs: https://shopify.dev/docs/api/app-home/web-components/forms/color-picker  
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

Use the native `s-color-picker` component before creating custom Shopify-admin-looking UI.

## Native Examples

```tsx
<s-color-picker data-measure="target" >Color picker</s-color-picker>
```

## Properties

| Property | Type | Default | Required | Notes |
| --- | --- | --- | --- | --- |
| `alpha` | boolean | false | yes | Whether to enable alpha (transparency) channel selection in the color picker, allowing users to choose semi-transparent colors. |
| `name` | string | none listed | yes | The name attribute for the field, used to identify the field's value when the form is submitted. Must be unique within the nearest containing form. |
| `defaultValue` | string | none listed | yes | The initial color value when the field first loads. Unlike `placeholder`, this is a real value that the user can edit and that gets submitted with the form. Once the user starts interacting, their input replaces it. C... |
| `value` | string | none listed | yes | The currently selected color value. Accepts multiple input formats: Hex: `#RGB`, `#RRGGBB`, `#RRGGBBAA` (3, 6, or 8 digits) RGB/RGBA: `rgb(255, 0, 0)` or `rgb(255 0 0)` (comma or space-separated) HSL/HSLA: `hsl(0, 100... |
| `formResetCallback` | () => void | none listed | yes | A callback that fires when the containing form is reset (using the form's `reset()` method or a reset button). When triggered, the component's `value` reverts to its `defaultValue`. |

## Slots

Not listed in captured docs.

## Events

| Event | Type | Notes |
| --- | --- | --- |
| `change` | CallbackEventListener\<typeof tagName> \| null | A callback fired when the color picker value changes. Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event). |
| `input` | CallbackEventListener\<typeof tagName> \| null | A callback fired when the user inputs data into the color picker. Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event). |

## Measured Styles

### default

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":103,"y":103,"width":18,"height":18}`

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
| width | 18px |
| height | 18px |
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
| border-top-width | 4px |
| border-right-width | 4px |
| border-bottom-width | 4px |
| border-left-width | 4px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(255, 255, 255) |
| border-right-color | rgb(255, 255, 255) |
| border-bottom-color | rgb(255, 255, 255) |
| border-left-color | rgb(255, 255, 255) |
| border-radius | 50% |
| border-start-start-radius | 50% |
| border-start-end-radius | 50% |
| border-end-start-radius | 50% |
| border-end-end-radius | 50% |
| box-shadow | rgba(33, 43, 54, 0.32) 0px 1px 2px 0px inset, rgba(33, 43, 54, 0.32) 0px 1px 2px 0px |
| background-color | rgba(0, 0, 0, 0) |
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
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | matrix(1, 0, 0, 1, 80, 80) |

### hover

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":103,"y":103,"width":18,"height":18}`

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
| width | 18px |
| height | 18px |
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
| border-top-width | 4px |
| border-right-width | 4px |
| border-bottom-width | 4px |
| border-left-width | 4px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(255, 255, 255) |
| border-right-color | rgb(255, 255, 255) |
| border-bottom-color | rgb(255, 255, 255) |
| border-left-color | rgb(255, 255, 255) |
| border-radius | 50% |
| border-start-start-radius | 50% |
| border-start-end-radius | 50% |
| border-end-start-radius | 50% |
| border-end-end-radius | 50% |
| box-shadow | rgba(33, 43, 54, 0.32) 0px 1px 2px 0px inset, rgba(33, 43, 54, 0.32) 0px 1px 2px 0px |
| background-color | rgba(0, 0, 0, 0) |
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
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | matrix(1, 0, 0, 1, 80, 80) |

### active

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":103,"y":103,"width":18,"height":18}`

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
| width | 18px |
| height | 18px |
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
| border-top-width | 4px |
| border-right-width | 4px |
| border-bottom-width | 4px |
| border-left-width | 4px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(255, 255, 255) |
| border-right-color | rgb(255, 255, 255) |
| border-bottom-color | rgb(255, 255, 255) |
| border-left-color | rgb(255, 255, 255) |
| border-radius | 50% |
| border-start-start-radius | 50% |
| border-start-end-radius | 50% |
| border-end-start-radius | 50% |
| border-end-end-radius | 50% |
| box-shadow | rgba(33, 43, 54, 0.32) 0px 1px 2px 0px inset, rgba(33, 43, 54, 0.32) 0px 1px 2px 0px |
| background-color | rgba(0, 0, 0, 0) |
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
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | matrix(1, 0, 0, 1, 80, 80) |

### focus-visible

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":103,"y":103,"width":18,"height":18}`

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
| width | 18px |
| height | 18px |
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
| border-top-width | 4px |
| border-right-width | 4px |
| border-bottom-width | 4px |
| border-left-width | 4px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(255, 255, 255) |
| border-right-color | rgb(255, 255, 255) |
| border-bottom-color | rgb(255, 255, 255) |
| border-left-color | rgb(255, 255, 255) |
| border-radius | 50% |
| border-start-start-radius | 50% |
| border-start-end-radius | 50% |
| border-end-start-radius | 50% |
| border-end-end-radius | 50% |
| box-shadow | rgba(33, 43, 54, 0.32) 0px 1px 2px 0px inset, rgba(33, 43, 54, 0.32) 0px 1px 2px 0px |
| background-color | rgba(0, 0, 0, 0) |
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
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | matrix(1, 0, 0, 1, 80, 80) |

### disabled

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":103,"y":103,"width":18,"height":18}`

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
| width | 18px |
| height | 18px |
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
| border-top-width | 4px |
| border-right-width | 4px |
| border-bottom-width | 4px |
| border-left-width | 4px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(255, 255, 255) |
| border-right-color | rgb(255, 255, 255) |
| border-bottom-color | rgb(255, 255, 255) |
| border-left-color | rgb(255, 255, 255) |
| border-radius | 50% |
| border-start-start-radius | 50% |
| border-start-end-radius | 50% |
| border-end-start-radius | 50% |
| border-end-end-radius | 50% |
| box-shadow | rgba(33, 43, 54, 0.32) 0px 1px 2px 0px inset, rgba(33, 43, 54, 0.32) 0px 1px 2px 0px |
| background-color | rgba(0, 0, 0, 0) |
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
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | matrix(1, 0, 0, 1, 80, 80) |

### loading

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":103,"y":103,"width":18,"height":18}`

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
| width | 18px |
| height | 18px |
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
| border-top-width | 4px |
| border-right-width | 4px |
| border-bottom-width | 4px |
| border-left-width | 4px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(255, 255, 255) |
| border-right-color | rgb(255, 255, 255) |
| border-bottom-color | rgb(255, 255, 255) |
| border-left-color | rgb(255, 255, 255) |
| border-radius | 50% |
| border-start-start-radius | 50% |
| border-start-end-radius | 50% |
| border-end-start-radius | 50% |
| border-end-end-radius | 50% |
| box-shadow | rgba(33, 43, 54, 0.32) 0px 1px 2px 0px inset, rgba(33, 43, 54, 0.32) 0px 1px 2px 0px |
| background-color | rgba(0, 0, 0, 0) |
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
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | matrix(1, 0, 0, 1, 80, 80) |

### selected

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":103,"y":103,"width":18,"height":18}`

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
| width | 18px |
| height | 18px |
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
| border-top-width | 4px |
| border-right-width | 4px |
| border-bottom-width | 4px |
| border-left-width | 4px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(255, 255, 255) |
| border-right-color | rgb(255, 255, 255) |
| border-bottom-color | rgb(255, 255, 255) |
| border-left-color | rgb(255, 255, 255) |
| border-radius | 50% |
| border-start-start-radius | 50% |
| border-start-end-radius | 50% |
| border-end-start-radius | 50% |
| border-end-end-radius | 50% |
| box-shadow | rgba(33, 43, 54, 0.32) 0px 1px 2px 0px inset, rgba(33, 43, 54, 0.32) 0px 1px 2px 0px |
| background-color | rgba(0, 0, 0, 0) |
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
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | matrix(1, 0, 0, 1, 80, 80) |

### invalid

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":103,"y":103,"width":18,"height":18}`

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
| width | 18px |
| height | 18px |
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
| border-top-width | 4px |
| border-right-width | 4px |
| border-bottom-width | 4px |
| border-left-width | 4px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(255, 255, 255) |
| border-right-color | rgb(255, 255, 255) |
| border-bottom-color | rgb(255, 255, 255) |
| border-left-color | rgb(255, 255, 255) |
| border-radius | 50% |
| border-start-start-radius | 50% |
| border-start-end-radius | 50% |
| border-end-start-radius | 50% |
| border-end-end-radius | 50% |
| box-shadow | rgba(33, 43, 54, 0.32) 0px 1px 2px 0px inset, rgba(33, 43, 54, 0.32) 0px 1px 2px 0px |
| background-color | rgba(0, 0, 0, 0) |
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
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | matrix(1, 0, 0, 1, 80, 80) |

### variant-primary

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":103,"y":103,"width":18,"height":18}`

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
| width | 18px |
| height | 18px |
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
| border-top-width | 4px |
| border-right-width | 4px |
| border-bottom-width | 4px |
| border-left-width | 4px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(255, 255, 255) |
| border-right-color | rgb(255, 255, 255) |
| border-bottom-color | rgb(255, 255, 255) |
| border-left-color | rgb(255, 255, 255) |
| border-radius | 50% |
| border-start-start-radius | 50% |
| border-start-end-radius | 50% |
| border-end-start-radius | 50% |
| border-end-end-radius | 50% |
| box-shadow | rgba(33, 43, 54, 0.32) 0px 1px 2px 0px inset, rgba(33, 43, 54, 0.32) 0px 1px 2px 0px |
| background-color | rgba(0, 0, 0, 0) |
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
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | matrix(1, 0, 0, 1, 80, 80) |

### variant-secondary

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":103,"y":103,"width":18,"height":18}`

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
| width | 18px |
| height | 18px |
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
| border-top-width | 4px |
| border-right-width | 4px |
| border-bottom-width | 4px |
| border-left-width | 4px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(255, 255, 255) |
| border-right-color | rgb(255, 255, 255) |
| border-bottom-color | rgb(255, 255, 255) |
| border-left-color | rgb(255, 255, 255) |
| border-radius | 50% |
| border-start-start-radius | 50% |
| border-start-end-radius | 50% |
| border-end-start-radius | 50% |
| border-end-end-radius | 50% |
| box-shadow | rgba(33, 43, 54, 0.32) 0px 1px 2px 0px inset, rgba(33, 43, 54, 0.32) 0px 1px 2px 0px |
| background-color | rgba(0, 0, 0, 0) |
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
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | matrix(1, 0, 0, 1, 80, 80) |

### variant-tertiary

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":103,"y":103,"width":18,"height":18}`

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
| width | 18px |
| height | 18px |
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
| border-top-width | 4px |
| border-right-width | 4px |
| border-bottom-width | 4px |
| border-left-width | 4px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(255, 255, 255) |
| border-right-color | rgb(255, 255, 255) |
| border-bottom-color | rgb(255, 255, 255) |
| border-left-color | rgb(255, 255, 255) |
| border-radius | 50% |
| border-start-start-radius | 50% |
| border-start-end-radius | 50% |
| border-end-start-radius | 50% |
| border-end-end-radius | 50% |
| box-shadow | rgba(33, 43, 54, 0.32) 0px 1px 2px 0px inset, rgba(33, 43, 54, 0.32) 0px 1px 2px 0px |
| background-color | rgba(0, 0, 0, 0) |
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
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | matrix(1, 0, 0, 1, 80, 80) |

### tone-critical

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":103,"y":103,"width":18,"height":18}`

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
| width | 18px |
| height | 18px |
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
| border-top-width | 4px |
| border-right-width | 4px |
| border-bottom-width | 4px |
| border-left-width | 4px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(255, 255, 255) |
| border-right-color | rgb(255, 255, 255) |
| border-bottom-color | rgb(255, 255, 255) |
| border-left-color | rgb(255, 255, 255) |
| border-radius | 50% |
| border-start-start-radius | 50% |
| border-start-end-radius | 50% |
| border-end-start-radius | 50% |
| border-end-end-radius | 50% |
| box-shadow | rgba(33, 43, 54, 0.32) 0px 1px 2px 0px inset, rgba(33, 43, 54, 0.32) 0px 1px 2px 0px |
| background-color | rgba(0, 0, 0, 0) |
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
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | matrix(1, 0, 0, 1, 80, 80) |

### tone-neutral

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":103,"y":103,"width":18,"height":18}`

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
| width | 18px |
| height | 18px |
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
| border-top-width | 4px |
| border-right-width | 4px |
| border-bottom-width | 4px |
| border-left-width | 4px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(255, 255, 255) |
| border-right-color | rgb(255, 255, 255) |
| border-bottom-color | rgb(255, 255, 255) |
| border-left-color | rgb(255, 255, 255) |
| border-radius | 50% |
| border-start-start-radius | 50% |
| border-start-end-radius | 50% |
| border-end-start-radius | 50% |
| border-end-end-radius | 50% |
| box-shadow | rgba(33, 43, 54, 0.32) 0px 1px 2px 0px inset, rgba(33, 43, 54, 0.32) 0px 1px 2px 0px |
| background-color | rgba(0, 0, 0, 0) |
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
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | matrix(1, 0, 0, 1, 80, 80) |

## Wrapper Guidance

- Reuse an existing shared wrapper if the app has one.
- Keep new wrappers thin and delegate visual behavior to `s-color-picker`.
- Map product semantics to Polaris attributes in one place.
- Avoid hard-coded padding, radius, shadow, border, background, text, and hover values unless the measured table is being used for a custom composition.

## Avoid

- Do not imitate this component with ad hoc CSS when the native element is available.
- Do not duplicate this styling in feature files.
- Do not claim exact values that are not present in this reference or freshly measured.
