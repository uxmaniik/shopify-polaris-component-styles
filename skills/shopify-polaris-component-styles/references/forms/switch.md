# Switch

Element: `s-switch`  
Docs: https://shopify.dev/docs/api/app-home/web-components/forms/switch  
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

Use the native `s-switch` component before creating custom Shopify-admin-looking UI.

## Native Examples

```tsx
<s-switch data-measure="target" label="Switch">Switch</s-switch>
```

## Properties

| Property | Type | Default | Required | Notes |
| --- | --- | --- | --- | --- |
| `labelAccessibilityVisibility` | "visible" \| "exclusive" | 'visible' | yes | Controls whether the label is visible to all users or only to screen readers. `visible`: The label is shown to everyone (default). `exclusive`: The label is visually hidden but still announced by screen readers. Use `... |
| `checked` | boolean | false | yes | Whether the control is currently checked. Use this for controlled components where you manage the checked state. |
| `value` | string | none listed | yes | The value used in form data when the checkbox is checked. |
| `defaultChecked` | boolean | false | yes | The initial checked state for uncontrolled components. Use this when you want the control to start checked but don't need to control its state afterward. |
| `accessibilityLabel` | string | none listed | yes | A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component... |
| `details` | string | none listed | yes | Supplementary text displayed below the checkbox to provide additional context, instructions, or help. Use this to explain what checking the box means or provide guidance to users. This text is announced to screen read... |
| `error` | string | none listed | yes | An error message displayed below the checkbox to indicate validation problems. When set, the checkbox is styled with error indicators and the message is announced to screen readers. |
| `label` | string | none listed | yes | The text label displayed next to the checkbox that describes what the checkbox controls. Clicking the label will also toggle the checkbox state. |
| `required` | boolean | false | yes | Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with ... |
| `disabled` | boolean | false | yes | Whether the field is disabled, preventing any user interaction. |
| `id` | string | none listed | yes | A unique identifier for the element. Use this to reference the element in JavaScript, link labels to form controls, or target specific elements for styling or scripting. |
| `name` | string | none listed | yes | The name attribute for the field, used to identify the field's value when the form is submitted. Must be unique within the nearest containing form. |

## Slots

Not listed in captured docs.

## Events

| Event | Type | Notes |
| --- | --- | --- |
| `change` | CallbackEventListener<'input'> | A callback fired when the switch value changes. Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event). |
| `input` | CallbackEventListener<'input'> | A callback fired when the user inputs data into the switch. Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event). |

## Measured Styles

### default

Notes: Open shadow root inspected. Measured internal input node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":38,"width":32,"height":16}`

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
| width | 32px |
| height | 16px |
| min-width | auto |
| min-height | auto |
| padding-top | 0px |
| padding-right | 2px |
| padding-bottom | 0px |
| padding-left | 2px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 1px |
| border-right-width | 1px |
| border-bottom-width | 1px |
| border-left-width | 1px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(138, 138, 138) |
| border-right-color | rgb(138, 138, 138) |
| border-bottom-color | rgb(138, 138, 138) |
| border-left-color | rgb(138, 138, 138) |
| border-radius | 16px |
| border-start-start-radius | 16px |
| border-start-end-radius | 16px |
| border-end-start-radius | 16px |
| border-end-end-radius | 16px |
| box-shadow | none |
| background-color | rgb(253, 253, 253) |
| color | rgb(0, 0, 0) |
| font-family | Arial |
| font-size | 13.3333px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0.1s, 0.1s |
| transition-property | background-color, border-color |
| transform | none |

### hover

Notes: Open shadow root inspected. Measured internal input node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":38,"width":32,"height":16}`

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
| width | 32px |
| height | 16px |
| min-width | auto |
| min-height | auto |
| padding-top | 0px |
| padding-right | 2px |
| padding-bottom | 0px |
| padding-left | 2px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 1px |
| border-right-width | 1px |
| border-bottom-width | 1px |
| border-left-width | 1px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(138, 138, 138) |
| border-right-color | rgb(138, 138, 138) |
| border-bottom-color | rgb(138, 138, 138) |
| border-left-color | rgb(138, 138, 138) |
| border-radius | 16px |
| border-start-start-radius | 16px |
| border-start-end-radius | 16px |
| border-end-start-radius | 16px |
| border-end-end-radius | 16px |
| box-shadow | none |
| background-color | rgb(253, 253, 253) |
| color | rgb(0, 0, 0) |
| font-family | Arial |
| font-size | 13.3333px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0.1s, 0.1s |
| transition-property | background-color, border-color |
| transform | none |

### active

Notes: Open shadow root inspected. Measured internal input node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":38,"width":32,"height":16}`

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
| width | 32px |
| height | 16px |
| min-width | auto |
| min-height | auto |
| padding-top | 0px |
| padding-right | 2px |
| padding-bottom | 0px |
| padding-left | 2px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 1px |
| border-right-width | 1px |
| border-bottom-width | 1px |
| border-left-width | 1px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(138, 138, 138) |
| border-right-color | rgb(138, 138, 138) |
| border-bottom-color | rgb(138, 138, 138) |
| border-left-color | rgb(138, 138, 138) |
| border-radius | 16px |
| border-start-start-radius | 16px |
| border-start-end-radius | 16px |
| border-end-start-radius | 16px |
| border-end-end-radius | 16px |
| box-shadow | none |
| background-color | rgb(253, 253, 253) |
| color | rgb(0, 0, 0) |
| font-family | Arial |
| font-size | 13.3333px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0.1s, 0.1s |
| transition-property | background-color, border-color |
| transform | none |

### focus-visible

Notes: Open shadow root inspected. Measured internal input node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":38,"width":32,"height":16}`

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
| width | 32px |
| height | 16px |
| min-width | auto |
| min-height | auto |
| padding-top | 0px |
| padding-right | 2px |
| padding-bottom | 0px |
| padding-left | 2px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 1px |
| border-right-width | 1px |
| border-bottom-width | 1px |
| border-left-width | 1px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(138, 138, 138) |
| border-right-color | rgb(138, 138, 138) |
| border-bottom-color | rgb(138, 138, 138) |
| border-left-color | rgb(138, 138, 138) |
| border-radius | 16px |
| border-start-start-radius | 16px |
| border-start-end-radius | 16px |
| border-end-start-radius | 16px |
| border-end-end-radius | 16px |
| box-shadow | none |
| background-color | rgb(253, 253, 253) |
| color | rgb(0, 0, 0) |
| font-family | Arial |
| font-size | 13.3333px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(0, 91, 211) |
| outline-style | solid |
| outline-width | 2px |
| outline-offset | 1px |
| transition-duration | 0.1s, 0.1s |
| transition-property | background-color, border-color |
| transform | none |

### disabled

Notes: Open shadow root inspected. Measured internal input node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":38,"width":32,"height":16}`

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
| width | 32px |
| height | 16px |
| min-width | auto |
| min-height | auto |
| padding-top | 0px |
| padding-right | 2px |
| padding-bottom | 0px |
| padding-left | 2px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 1px |
| border-right-width | 1px |
| border-bottom-width | 1px |
| border-left-width | 1px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgba(0, 0, 0, 0) |
| border-right-color | rgba(0, 0, 0, 0) |
| border-bottom-color | rgba(0, 0, 0, 0) |
| border-left-color | rgba(0, 0, 0, 0) |
| border-radius | 16px |
| border-start-start-radius | 16px |
| border-start-end-radius | 16px |
| border-end-start-radius | 16px |
| border-end-end-radius | 16px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0.05) |
| color | rgb(84, 84, 84) |
| font-family | Arial |
| font-size | 13.3333px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | default |
| outline-color | rgb(84, 84, 84) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0.1s, 0.1s |
| transition-property | background-color, border-color |
| transform | none |

### loading

Notes: Open shadow root inspected. Measured internal input node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":38,"width":32,"height":16}`

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
| width | 32px |
| height | 16px |
| min-width | auto |
| min-height | auto |
| padding-top | 0px |
| padding-right | 2px |
| padding-bottom | 0px |
| padding-left | 2px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 1px |
| border-right-width | 1px |
| border-bottom-width | 1px |
| border-left-width | 1px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(138, 138, 138) |
| border-right-color | rgb(138, 138, 138) |
| border-bottom-color | rgb(138, 138, 138) |
| border-left-color | rgb(138, 138, 138) |
| border-radius | 16px |
| border-start-start-radius | 16px |
| border-start-end-radius | 16px |
| border-end-start-radius | 16px |
| border-end-end-radius | 16px |
| box-shadow | none |
| background-color | rgb(253, 253, 253) |
| color | rgb(0, 0, 0) |
| font-family | Arial |
| font-size | 13.3333px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0.1s, 0.1s |
| transition-property | background-color, border-color |
| transform | none |

### selected

Notes: Open shadow root inspected. Measured internal input node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":38,"width":32,"height":16}`

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
| width | 32px |
| height | 16px |
| min-width | auto |
| min-height | auto |
| padding-top | 0px |
| padding-right | 2px |
| padding-bottom | 0px |
| padding-left | 2px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 1px |
| border-right-width | 1px |
| border-bottom-width | 1px |
| border-left-width | 1px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgba(0, 0, 0, 0) |
| border-right-color | rgba(0, 0, 0, 0) |
| border-bottom-color | rgba(0, 0, 0, 0) |
| border-left-color | rgba(0, 0, 0, 0) |
| border-radius | 16px |
| border-start-start-radius | 16px |
| border-start-end-radius | 16px |
| border-end-start-radius | 16px |
| border-end-end-radius | 16px |
| box-shadow | none |
| background-color | rgb(48, 48, 48) |
| color | rgb(0, 0, 0) |
| font-family | Arial |
| font-size | 13.3333px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0.1s, 0.1s |
| transition-property | background-color, border-color |
| transform | none |

### invalid

Notes: Open shadow root inspected. Measured internal input node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":38,"width":32,"height":16}`

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
| width | 32px |
| height | 16px |
| min-width | auto |
| min-height | auto |
| padding-top | 0px |
| padding-right | 2px |
| padding-bottom | 0px |
| padding-left | 2px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 1px |
| border-right-width | 1px |
| border-bottom-width | 1px |
| border-left-width | 1px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(254, 193, 199) |
| border-right-color | rgb(254, 193, 199) |
| border-bottom-color | rgb(254, 193, 199) |
| border-left-color | rgb(254, 193, 199) |
| border-radius | 16px |
| border-start-start-radius | 16px |
| border-start-end-radius | 16px |
| border-end-start-radius | 16px |
| border-end-end-radius | 16px |
| box-shadow | none |
| background-color | rgb(254, 232, 235) |
| color | rgb(0, 0, 0) |
| font-family | Arial |
| font-size | 13.3333px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0.1s, 0.1s |
| transition-property | background-color, border-color |
| transform | none |

### variant-primary

Notes: Open shadow root inspected. Measured internal input node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":38,"width":32,"height":16}`

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
| width | 32px |
| height | 16px |
| min-width | auto |
| min-height | auto |
| padding-top | 0px |
| padding-right | 2px |
| padding-bottom | 0px |
| padding-left | 2px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 1px |
| border-right-width | 1px |
| border-bottom-width | 1px |
| border-left-width | 1px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(138, 138, 138) |
| border-right-color | rgb(138, 138, 138) |
| border-bottom-color | rgb(138, 138, 138) |
| border-left-color | rgb(138, 138, 138) |
| border-radius | 16px |
| border-start-start-radius | 16px |
| border-start-end-radius | 16px |
| border-end-start-radius | 16px |
| border-end-end-radius | 16px |
| box-shadow | none |
| background-color | rgb(253, 253, 253) |
| color | rgb(0, 0, 0) |
| font-family | Arial |
| font-size | 13.3333px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0.1s, 0.1s |
| transition-property | background-color, border-color |
| transform | none |

### variant-secondary

Notes: Open shadow root inspected. Measured internal input node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":38,"width":32,"height":16}`

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
| width | 32px |
| height | 16px |
| min-width | auto |
| min-height | auto |
| padding-top | 0px |
| padding-right | 2px |
| padding-bottom | 0px |
| padding-left | 2px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 1px |
| border-right-width | 1px |
| border-bottom-width | 1px |
| border-left-width | 1px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(138, 138, 138) |
| border-right-color | rgb(138, 138, 138) |
| border-bottom-color | rgb(138, 138, 138) |
| border-left-color | rgb(138, 138, 138) |
| border-radius | 16px |
| border-start-start-radius | 16px |
| border-start-end-radius | 16px |
| border-end-start-radius | 16px |
| border-end-end-radius | 16px |
| box-shadow | none |
| background-color | rgb(253, 253, 253) |
| color | rgb(0, 0, 0) |
| font-family | Arial |
| font-size | 13.3333px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0.1s, 0.1s |
| transition-property | background-color, border-color |
| transform | none |

### variant-tertiary

Notes: Open shadow root inspected. Measured internal input node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":38,"width":32,"height":16}`

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
| width | 32px |
| height | 16px |
| min-width | auto |
| min-height | auto |
| padding-top | 0px |
| padding-right | 2px |
| padding-bottom | 0px |
| padding-left | 2px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 1px |
| border-right-width | 1px |
| border-bottom-width | 1px |
| border-left-width | 1px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(138, 138, 138) |
| border-right-color | rgb(138, 138, 138) |
| border-bottom-color | rgb(138, 138, 138) |
| border-left-color | rgb(138, 138, 138) |
| border-radius | 16px |
| border-start-start-radius | 16px |
| border-start-end-radius | 16px |
| border-end-start-radius | 16px |
| border-end-end-radius | 16px |
| box-shadow | none |
| background-color | rgb(253, 253, 253) |
| color | rgb(0, 0, 0) |
| font-family | Arial |
| font-size | 13.3333px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0.1s, 0.1s |
| transition-property | background-color, border-color |
| transform | none |

### tone-critical

Notes: Open shadow root inspected. Measured internal input node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":38,"width":32,"height":16}`

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
| width | 32px |
| height | 16px |
| min-width | auto |
| min-height | auto |
| padding-top | 0px |
| padding-right | 2px |
| padding-bottom | 0px |
| padding-left | 2px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 1px |
| border-right-width | 1px |
| border-bottom-width | 1px |
| border-left-width | 1px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(138, 138, 138) |
| border-right-color | rgb(138, 138, 138) |
| border-bottom-color | rgb(138, 138, 138) |
| border-left-color | rgb(138, 138, 138) |
| border-radius | 16px |
| border-start-start-radius | 16px |
| border-start-end-radius | 16px |
| border-end-start-radius | 16px |
| border-end-end-radius | 16px |
| box-shadow | none |
| background-color | rgb(253, 253, 253) |
| color | rgb(0, 0, 0) |
| font-family | Arial |
| font-size | 13.3333px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0.1s, 0.1s |
| transition-property | background-color, border-color |
| transform | none |

### tone-neutral

Notes: Open shadow root inspected. Measured internal input node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":38,"width":32,"height":16}`

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
| width | 32px |
| height | 16px |
| min-width | auto |
| min-height | auto |
| padding-top | 0px |
| padding-right | 2px |
| padding-bottom | 0px |
| padding-left | 2px |
| margin-top | 0px |
| margin-right | 0px |
| margin-bottom | 0px |
| margin-left | 0px |
| border-top-width | 1px |
| border-right-width | 1px |
| border-bottom-width | 1px |
| border-left-width | 1px |
| border-top-style | solid |
| border-right-style | solid |
| border-bottom-style | solid |
| border-left-style | solid |
| border-top-color | rgb(138, 138, 138) |
| border-right-color | rgb(138, 138, 138) |
| border-bottom-color | rgb(138, 138, 138) |
| border-left-color | rgb(138, 138, 138) |
| border-radius | 16px |
| border-start-start-radius | 16px |
| border-start-end-radius | 16px |
| border-end-start-radius | 16px |
| border-end-end-radius | 16px |
| box-shadow | none |
| background-color | rgb(253, 253, 253) |
| color | rgb(0, 0, 0) |
| font-family | Arial |
| font-size | 13.3333px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | start |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0.1s, 0.1s |
| transition-property | background-color, border-color |
| transform | none |

## Wrapper Guidance

- Reuse an existing shared wrapper if the app has one.
- Keep new wrappers thin and delegate visual behavior to `s-switch`.
- Map product semantics to Polaris attributes in one place.
- Avoid hard-coded padding, radius, shadow, border, background, text, and hover values unless the measured table is being used for a custom composition.

## Avoid

- Do not imitate this component with ad hoc CSS when the native element is available.
- Do not duplicate this styling in feature files.
- Do not claim exact values that are not present in this reference or freshly measured.
