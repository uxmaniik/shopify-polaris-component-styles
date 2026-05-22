# Button

Element: `s-button`  
Docs: https://shopify.dev/docs/api/app-home/web-components/actions/button  
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

Use the native `s-button` component before creating custom Shopify-admin-looking UI.

## Native Examples

```tsx
<s-button data-measure="target" >Button</s-button>
```

## Properties

| Property | Type | Default | Required | Notes |
| --- | --- | --- | --- | --- |
| `disabled` | boolean | false | yes | Whether the button is disabled, preventing it from being clicked or receiving focus. |
| `icon` | 559 allowed string values; see Shopify docs for the exhaustive union. | none listed | yes | An icon displayed inside the button, typically positioned before the button text. Use icons to help users quickly identify the button's action or to improve scannability. Accepts any icon name from the icon library or... |
| `loading` | boolean | false | yes | Whether to replace the button content with a loading indicator while a background action is being performed. This also disables the button component. |
| `variant` | "auto" \| "primary" \| "secondary" \| "tertiary" | 'auto' | yes | The visual appearance of the button component. `auto`: The variant is automatically determined by the button component's context. `primary`: High emphasis button for the primary action on the page. Should be used spar... |
| `tone` | "critical" \| "auto" \| "neutral" | 'auto' | yes | The semantic meaning and color treatment of the component. `critical`: Urgent problems or destructive actions. `auto`: Automatically determined based on context. `neutral`: General information without specific intent. |
| `target` | "auto" \| AnyString \| "\_blank" \| "\_self" \| "\_parent" \| "\_top" | 'auto' | yes | The browsing context where the linked URL should be displayed. `auto`: The target is automatically determined based on the origin of the URL. `_blank`: Opens the URL in a new window or tab. `_self`: Opens the URL in t... |
| `href` | string | none listed | yes | The URL to navigate to when clicked. The `click` event fires first, then navigation occurs. If `commandFor` is also set, the command executes instead of navigation. |
| `download` | string | none listed | yes | Prompts the browser to download the linked URL rather than navigate to it. When set, the value specifies the suggested filename for the downloaded file. The filename suggestion is only respected for same-origin URLs, ... |
| `type` | "button" \| "reset" \| "submit" | 'button' | yes | The behavior of the button component. `button`: Used to indicate the component acts as a button, meaning it has no default action. `reset`: Used to indicate the component acts as a reset button, meaning it resets the ... |
| `accessibilityLabel` | string | none listed | yes | A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component... |
| `command` | '--auto' \| '--show' \| '--hide' \| '--toggle' | '--auto' | yes | The action that [command](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command) should take when this component is activated. `--auto`: A default action for the target component. `--show`: Shows th... |
| `commandFor` | string | none listed | yes | The component that [commandFor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor) should act on when this component is activated. |
| `interestFor` | string | none listed | yes | The ID of the component to show when users hover over or focus on this component. Use this to connect interactive components to popovers or tooltips that provide additional context or information. |

## Slots

| Slot | Type | Notes |
| --- | --- | --- |
| `children` | HTMLElement | The label text or elements displayed inside the button component, describing the action that will be performed when clicked. ** |

## Events

| Event | Type | Notes |
| --- | --- | --- |
| `blur` | CallbackEventListener\<typeof tagName> \| null | A callback fired when the button loses focus. Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event). |
| `click` | CallbackEventListener\<typeof tagName> \| null | A callback fired when the button is clicked. Learn more about the [click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event). |
| `focus` | CallbackEventListener\<typeof tagName> \| null | A callback fired when the button receives focus. Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event). |

## Measured Styles

### default

Notes: Open shadow root inspected. Measured internal button node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":61.89,"height":28}`

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
| display | inline-flex |
| box-sizing | border-box |
| width | 61.8906px |
| height | 28px |
| min-width | 0px |
| min-height | 28px |
| padding-top | 6px |
| padding-right | 12px |
| padding-bottom | 6px |
| padding-left | 12px |
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
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | rgb(181, 181, 181) 0px -1px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset, rgb(255, 255, 255) 0px 0.5px 0px 1.5px inset |
| background-color | rgb(255, 255, 255) |
| color | rgb(48, 48, 48) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 2px |
| row-gap | 2px |
| column-gap | 2px |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### hover

Notes: Open shadow root inspected. Measured internal button node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":61.89,"height":28}`

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
| display | inline-flex |
| box-sizing | border-box |
| width | 61.8906px |
| height | 28px |
| min-width | 0px |
| min-height | 28px |
| padding-top | 6px |
| padding-right | 12px |
| padding-bottom | 6px |
| padding-left | 12px |
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
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | rgb(181, 181, 181) 0px -1px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset, rgb(255, 255, 255) 0px 0.5px 0px 1.5px inset |
| background-color | rgb(250, 250, 250) |
| color | rgb(48, 48, 48) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 2px |
| row-gap | 2px |
| column-gap | 2px |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### active

Notes: Open shadow root inspected. Measured internal button node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":61.89,"height":28}`

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
| display | inline-flex |
| box-sizing | border-box |
| width | 61.8906px |
| height | 28px |
| min-width | 0px |
| min-height | 28px |
| padding-top | 6px |
| padding-right | 12px |
| padding-bottom | 6px |
| padding-left | 12px |
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
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | rgba(26, 26, 26, 0.12) -1px 0px 1px 0px inset, rgba(26, 26, 26, 0.12) 1px 0px 1px 0px inset, rgba(26, 26, 26, 0.2) 0px 2px 1px 0px inset |
| background-color | rgb(247, 247, 247) |
| color | rgb(48, 48, 48) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 2px |
| row-gap | 2px |
| column-gap | 2px |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### focus-visible

Notes: Open shadow root inspected. Measured internal button node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":61.89,"height":28}`

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
| display | inline-flex |
| box-sizing | border-box |
| width | 61.8906px |
| height | 28px |
| min-width | 0px |
| min-height | 28px |
| padding-top | 6px |
| padding-right | 12px |
| padding-bottom | 6px |
| padding-left | 12px |
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
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | rgb(181, 181, 181) 0px -1px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset, rgb(255, 255, 255) 0px 0.5px 0px 1.5px inset |
| background-color | rgb(250, 250, 250) |
| color | rgb(48, 48, 48) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 2px |
| row-gap | 2px |
| column-gap | 2px |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(0, 91, 211) |
| outline-style | solid |
| outline-width | 2px |
| outline-offset | 1px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### disabled

Notes: Open shadow root inspected. Measured internal button node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":61.89,"height":28}`

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
| display | inline-flex |
| box-sizing | border-box |
| width | 61.8906px |
| height | 28px |
| min-width | 0px |
| min-height | 28px |
| padding-top | 6px |
| padding-right | 12px |
| padding-bottom | 6px |
| padding-left | 12px |
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
| border-top-color | rgb(181, 181, 181) |
| border-right-color | rgb(181, 181, 181) |
| border-bottom-color | rgb(181, 181, 181) |
| border-left-color | rgb(181, 181, 181) |
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0.05) |
| color | rgb(181, 181, 181) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 2px |
| row-gap | 2px |
| column-gap | 2px |
| opacity | 1 |
| cursor | auto |
| outline-color | rgb(181, 181, 181) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### loading

Notes: Open shadow root inspected. Measured internal button node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":61.89,"height":28}`

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
| display | inline-flex |
| box-sizing | border-box |
| width | 61.8906px |
| height | 28px |
| min-width | 0px |
| min-height | 28px |
| padding-top | 6px |
| padding-right | 12px |
| padding-bottom | 6px |
| padding-left | 12px |
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
| border-top-color | rgba(0, 0, 0, 0) |
| border-right-color | rgba(0, 0, 0, 0) |
| border-bottom-color | rgba(0, 0, 0, 0) |
| border-left-color | rgba(0, 0, 0, 0) |
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0.05) |
| color | rgba(0, 0, 0, 0) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 2px |
| row-gap | 2px |
| column-gap | 2px |
| opacity | 1 |
| cursor | auto |
| outline-color | rgba(0, 0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### selected

Notes: Open shadow root inspected. Measured internal button node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":61.89,"height":28}`

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
| display | inline-flex |
| box-sizing | border-box |
| width | 61.8906px |
| height | 28px |
| min-width | 0px |
| min-height | 28px |
| padding-top | 6px |
| padding-right | 12px |
| padding-bottom | 6px |
| padding-left | 12px |
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
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | rgb(181, 181, 181) 0px -1px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset, rgb(255, 255, 255) 0px 0.5px 0px 1.5px inset |
| background-color | rgb(250, 250, 250) |
| color | rgb(48, 48, 48) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 2px |
| row-gap | 2px |
| column-gap | 2px |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### invalid

Notes: Open shadow root inspected. Measured internal button node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":61.89,"height":28}`

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
| display | inline-flex |
| box-sizing | border-box |
| width | 61.8906px |
| height | 28px |
| min-width | 0px |
| min-height | 28px |
| padding-top | 6px |
| padding-right | 12px |
| padding-bottom | 6px |
| padding-left | 12px |
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
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | rgb(181, 181, 181) 0px -1px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset, rgb(255, 255, 255) 0px 0.5px 0px 1.5px inset |
| background-color | rgb(250, 250, 250) |
| color | rgb(48, 48, 48) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 2px |
| row-gap | 2px |
| column-gap | 2px |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### variant-primary

Notes: Open shadow root inspected. Measured internal button node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":61.89,"height":28}`

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
| display | inline-flex |
| box-sizing | border-box |
| width | 61.8906px |
| height | 28px |
| min-width | 0px |
| min-height | 28px |
| padding-top | 6px |
| padding-right | 12px |
| padding-bottom | 6px |
| padding-left | 12px |
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
| border-top-color | rgb(227, 227, 227) |
| border-right-color | rgb(227, 227, 227) |
| border-bottom-color | rgb(227, 227, 227) |
| border-left-color | rgb(227, 227, 227) |
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | rgba(0, 0, 0, 0.8) 0px -1px 0px 1px inset, rgb(48, 48, 48) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0.25) 0px 0.5px 0px 1.5px inset |
| background-color | rgb(26, 26, 26) |
| color | rgb(227, 227, 227) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 2px |
| row-gap | 2px |
| column-gap | 2px |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(227, 227, 227) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### variant-secondary

Notes: Open shadow root inspected. Measured internal button node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":61.89,"height":28}`

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
| display | inline-flex |
| box-sizing | border-box |
| width | 61.8906px |
| height | 28px |
| min-width | 0px |
| min-height | 28px |
| padding-top | 6px |
| padding-right | 12px |
| padding-bottom | 6px |
| padding-left | 12px |
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
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | rgb(181, 181, 181) 0px -1px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset, rgb(255, 255, 255) 0px 0.5px 0px 1.5px inset |
| background-color | rgb(250, 250, 250) |
| color | rgb(48, 48, 48) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 2px |
| row-gap | 2px |
| column-gap | 2px |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### variant-tertiary

Notes: Open shadow root inspected. Measured internal button node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":61.89,"height":28}`

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
| display | inline-flex |
| box-sizing | border-box |
| width | 61.8906px |
| height | 28px |
| min-width | 0px |
| min-height | 28px |
| padding-top | 6px |
| padding-right | 12px |
| padding-bottom | 6px |
| padding-left | 12px |
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
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0.05) |
| color | rgb(48, 48, 48) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 2px |
| row-gap | 2px |
| column-gap | 2px |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### tone-critical

Notes: Open shadow root inspected. Measured internal button node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":61.89,"height":28}`

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
| display | inline-flex |
| box-sizing | border-box |
| width | 61.8906px |
| height | 28px |
| min-width | 0px |
| min-height | 28px |
| padding-top | 6px |
| padding-right | 12px |
| padding-bottom | 6px |
| padding-left | 12px |
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
| box-shadow | rgb(181, 181, 181) 0px -1px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset, rgb(255, 255, 255) 0px 0.5px 0px 1.5px inset |
| background-color | rgb(250, 250, 250) |
| color | rgb(142, 11, 33) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 2px |
| row-gap | 2px |
| column-gap | 2px |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(142, 11, 33) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

### tone-neutral

Notes: Open shadow root inspected. Measured internal button node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":61.89,"height":28}`

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
| display | inline-flex |
| box-sizing | border-box |
| width | 61.8906px |
| height | 28px |
| min-width | 0px |
| min-height | 28px |
| padding-top | 6px |
| padding-right | 12px |
| padding-bottom | 6px |
| padding-left | 12px |
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
| border-radius | 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 8px |
| border-end-start-radius | 8px |
| border-end-end-radius | 8px |
| box-shadow | rgb(181, 181, 181) 0px -1px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset, rgb(255, 255, 255) 0px 0.5px 0px 1.5px inset |
| background-color | rgb(250, 250, 250) |
| color | rgb(48, 48, 48) |
| font-family | Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif |
| font-size | 12px |
| font-weight | 550 |
| line-height | 16px |
| letter-spacing | normal |
| text-align | start |
| gap | 2px |
| row-gap | 2px |
| column-gap | 2px |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(48, 48, 48) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

## Wrapper Guidance

- Reuse an existing shared wrapper if the app has one.
- Keep new wrappers thin and delegate visual behavior to `s-button`.
- Map product semantics to Polaris attributes in one place.
- Avoid hard-coded padding, radius, shadow, border, background, text, and hover values unless the measured table is being used for a custom composition.

## Avoid

- Do not imitate this component with ad hoc CSS when the native element is available.
- Do not duplicate this styling in feature files.
- Do not claim exact values that are not present in this reference or freshly measured.
