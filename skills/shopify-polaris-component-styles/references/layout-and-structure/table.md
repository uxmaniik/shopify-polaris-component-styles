# Table

Element: `s-table`  
Docs: https://shopify.dev/docs/api/app-home/web-components/layout-and-structure/table  
Captured: 2026-05-17
Polaris source: https://cdn.shopify.com/shopifycloud/polaris.js

## Capture Environment

| Field | Value |
| --- | --- |
| Browser | chromium |
| Viewport | 1024x768 |
| States | `default`, `paginate-disabled`, `paginate-next`, `paginate-previous`, `paginate-both`, `loading`, `hover`, `focus-visible` |
| Component definition | defined |

## Use

Use the native `s-table` component before creating custom Shopify-admin-looking UI.

## Native Examples

```tsx
<s-table data-measure="target" ><s-table-header-row><s-table-header listSlot="primary">Date issued</s-table-header><s-table-header>Bill number</s-table-header><s-table-header>Bill type</s-table-header><s-table-header>Payment status</s-table-header><s-table-header format="numeric">Amount</s-table-header></s-table-header-row><s-table-body><s-table-row><s-table-cell>21 Apr 2026</s-table-cell><s-table-cell>#519670225</s-table-cell><s-table-cell>Billing cycle</s-table-cell><s-table-cell><s-badge tone="success">Paid</s-badge></s-table-cell><s-table-cell>$0.00</s-table-cell></s-table-row></s-table-body></s-table>
```

## Properties

| Property | Type | Default | Required | Notes |
| --- | --- | --- | --- | --- |
| `variant` | "auto" \| "list" | 'auto' | yes | The layout variant of the table component. `list`: Always displays as a list layout. `table`: Always displays as a traditional table layout. `auto`: Automatically displays as a table on wide screens and as a list on n... |
| `loading` | boolean | false | yes | Whether the table is in a loading state, such as during initial page load or when loading the next page in a paginated table. When `true`, the table might be in an inert state that prevents user interaction. |
| `paginate` | boolean | false | yes | Whether to use pagination controls. |
| `hasPreviousPage` | boolean | false | yes | Whether there's a previous page of data. |
| `hasNextPage` | boolean | false | yes | Whether there's an additional page of data. |

## Slots

| Slot | Type | Notes |
| --- | --- | --- |
| `children` | HTMLElement | The data cells displayed in this table row. Accepts table cell components, with each cell containing a data value for the corresponding column. ** |

## Events

| Event | Type | Notes |
| --- | --- | --- |
| `nextpage` | CallbackEventListener\<typeof tagName> \| null | A callback fired when the user navigates to the next page. |
| `previouspage` | CallbackEventListener\<typeof tagName> \| null | A callback fired when the user navigates to the previous page. |

## Measured Styles

### default

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":960,"height":65}`

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
| height | 65px |
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
| border-radius | 0px |
| border-start-start-radius | 0px |
| border-start-end-radius | 0px |
| border-end-start-radius | 0px |
| border-end-end-radius | 0px |
| box-shadow | none |
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
| 1 | div |  | table-wrapper | `{"x":32,"y":32,"width":960,"height":65}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 2 | div |  | table | `{"x":32,"y":32,"width":960,"height":65}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 3 | div |  | table-head | `{"x":32,"y":32,"width":960,"height":28.5}` | rgb(247, 247, 247) | rgb(48, 48, 48) | 0px | none | 450 |

### paginate-disabled

Notes: Open shadow root inspected. Measured internal button node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":40,"y":105,"width":28,"height":28}`

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
| width | 28px |
| height | 28px |
| min-width | auto |
| min-height | auto |
| padding-top | 4px |
| padding-right | 4px |
| padding-bottom | 4px |
| padding-left | 4px |
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
| border-top-color | rgba(16, 16, 16, 0.3) |
| border-right-color | rgba(16, 16, 16, 0.3) |
| border-bottom-color | rgba(16, 16, 16, 0.3) |
| border-left-color | rgba(16, 16, 16, 0.3) |
| border-radius | 8px 0px 0px 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 0px |
| border-end-start-radius | 8px |
| border-end-end-radius | 0px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0.05) |
| color | rgba(16, 16, 16, 0.3) |
| font-family | Arial |
| font-size | 13.3333px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | center |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | default |
| outline-color | rgba(16, 16, 16, 0.3) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

Visible shadow node inventory:

| # | Tag | Part | Class | Rect | Background | Color | Radius | Shadow | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | div |  | table-wrapper | `{"x":32,"y":32,"width":960,"height":109}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 2 | div |  | table | `{"x":32,"y":32,"width":960,"height":65}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 3 | div |  | table-head | `{"x":32,"y":32,"width":960,"height":28.5}` | rgb(247, 247, 247) | rgb(48, 48, 48) | 0px | none | 450 |
| 4 | div |  | pagination-wrapper pagination-table-variant | `{"x":32,"y":97,"width":960,"height":44}` | rgb(247, 247, 247) | rgb(48, 48, 48) | 0px | none | 450 |
| 5 | button |  | pagination-button pagination-button-table-variant | `{"x":40,"y":105,"width":28,"height":28}` | rgba(0, 0, 0, 0.05) | rgba(16, 16, 16, 0.3) | 8px 0px 0px 8px | none | 400 |
| 6 | s-icon |  |  | `{"x":44,"y":109,"width":20,"height":20}` | rgba(0, 0, 0, 0) | rgba(16, 16, 16, 0.3) | 0px | none | 400 |
| 7 | button |  | pagination-button pagination-button-table-variant | `{"x":69,"y":105,"width":28,"height":28}` | rgba(0, 0, 0, 0.05) | rgba(16, 16, 16, 0.3) | 0px 8px 8px 0px | none | 400 |
| 8 | s-icon |  |  | `{"x":73,"y":109,"width":20,"height":20}` | rgba(0, 0, 0, 0) | rgba(16, 16, 16, 0.3) | 0px | none | 400 |

### paginate-next

Notes: Open shadow root inspected. Measured internal button node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":40,"y":105,"width":28,"height":28}`

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
| width | 28px |
| height | 28px |
| min-width | auto |
| min-height | auto |
| padding-top | 4px |
| padding-right | 4px |
| padding-bottom | 4px |
| padding-left | 4px |
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
| border-top-color | rgba(16, 16, 16, 0.3) |
| border-right-color | rgba(16, 16, 16, 0.3) |
| border-bottom-color | rgba(16, 16, 16, 0.3) |
| border-left-color | rgba(16, 16, 16, 0.3) |
| border-radius | 8px 0px 0px 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 0px |
| border-end-start-radius | 8px |
| border-end-end-radius | 0px |
| box-shadow | none |
| background-color | rgba(0, 0, 0, 0.05) |
| color | rgba(16, 16, 16, 0.3) |
| font-family | Arial |
| font-size | 13.3333px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | center |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | default |
| outline-color | rgba(16, 16, 16, 0.3) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

Visible shadow node inventory:

| # | Tag | Part | Class | Rect | Background | Color | Radius | Shadow | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | div |  | table-wrapper | `{"x":32,"y":32,"width":960,"height":109}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 2 | div |  | table | `{"x":32,"y":32,"width":960,"height":65}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 3 | div |  | table-head | `{"x":32,"y":32,"width":960,"height":28.5}` | rgb(247, 247, 247) | rgb(48, 48, 48) | 0px | none | 450 |
| 4 | div |  | pagination-wrapper pagination-table-variant | `{"x":32,"y":97,"width":960,"height":44}` | rgb(247, 247, 247) | rgb(48, 48, 48) | 0px | none | 450 |
| 5 | button |  | pagination-button pagination-button-table-variant | `{"x":40,"y":105,"width":28,"height":28}` | rgba(0, 0, 0, 0.05) | rgba(16, 16, 16, 0.3) | 8px 0px 0px 8px | none | 400 |
| 6 | s-icon |  |  | `{"x":44,"y":109,"width":20,"height":20}` | rgba(0, 0, 0, 0) | rgba(16, 16, 16, 0.3) | 0px | none | 400 |
| 7 | button |  | pagination-button pagination-button-table-variant | `{"x":69,"y":105,"width":28,"height":28}` | rgb(239, 239, 239) | rgb(0, 0, 0) | 0px 8px 8px 0px | none | 400 |
| 8 | s-icon |  |  | `{"x":73,"y":109,"width":20,"height":20}` | rgba(0, 0, 0, 0) | rgb(0, 0, 0) | 0px | none | 400 |

### paginate-previous

Notes: Open shadow root inspected. Measured internal button node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":40,"y":105,"width":28,"height":28}`

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
| width | 28px |
| height | 28px |
| min-width | auto |
| min-height | auto |
| padding-top | 4px |
| padding-right | 4px |
| padding-bottom | 4px |
| padding-left | 4px |
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
| border-radius | 8px 0px 0px 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 0px |
| border-end-start-radius | 8px |
| border-end-end-radius | 0px |
| box-shadow | none |
| background-color | rgb(239, 239, 239) |
| color | rgb(0, 0, 0) |
| font-family | Arial |
| font-size | 13.3333px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | center |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

Visible shadow node inventory:

| # | Tag | Part | Class | Rect | Background | Color | Radius | Shadow | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | div |  | table-wrapper | `{"x":32,"y":32,"width":960,"height":109}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 2 | div |  | table | `{"x":32,"y":32,"width":960,"height":65}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 3 | div |  | table-head | `{"x":32,"y":32,"width":960,"height":28.5}` | rgb(247, 247, 247) | rgb(48, 48, 48) | 0px | none | 450 |
| 4 | div |  | pagination-wrapper pagination-table-variant | `{"x":32,"y":97,"width":960,"height":44}` | rgb(247, 247, 247) | rgb(48, 48, 48) | 0px | none | 450 |
| 5 | button |  | pagination-button pagination-button-table-variant | `{"x":40,"y":105,"width":28,"height":28}` | rgb(239, 239, 239) | rgb(0, 0, 0) | 8px 0px 0px 8px | none | 400 |
| 6 | s-icon |  |  | `{"x":44,"y":109,"width":20,"height":20}` | rgba(0, 0, 0, 0) | rgb(0, 0, 0) | 0px | none | 400 |
| 7 | button |  | pagination-button pagination-button-table-variant | `{"x":69,"y":105,"width":28,"height":28}` | rgba(0, 0, 0, 0.05) | rgba(16, 16, 16, 0.3) | 0px 8px 8px 0px | none | 400 |
| 8 | s-icon |  |  | `{"x":73,"y":109,"width":20,"height":20}` | rgba(0, 0, 0, 0) | rgba(16, 16, 16, 0.3) | 0px | none | 400 |

### paginate-both

Notes: Open shadow root inspected. Measured internal button node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":40,"y":105,"width":28,"height":28}`

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
| width | 28px |
| height | 28px |
| min-width | auto |
| min-height | auto |
| padding-top | 4px |
| padding-right | 4px |
| padding-bottom | 4px |
| padding-left | 4px |
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
| border-radius | 8px 0px 0px 8px |
| border-start-start-radius | 8px |
| border-start-end-radius | 0px |
| border-end-start-radius | 8px |
| border-end-end-radius | 0px |
| box-shadow | none |
| background-color | rgb(239, 239, 239) |
| color | rgb(0, 0, 0) |
| font-family | Arial |
| font-size | 13.3333px |
| font-weight | 400 |
| line-height | normal |
| letter-spacing | normal |
| text-align | center |
| gap | normal |
| row-gap | normal |
| column-gap | normal |
| opacity | 1 |
| cursor | pointer |
| outline-color | rgb(0, 0, 0) |
| outline-style | none |
| outline-width | 3px |
| outline-offset | 0px |
| transition-duration | 0s |
| transition-property | all |
| transform | none |

Visible shadow node inventory:

| # | Tag | Part | Class | Rect | Background | Color | Radius | Shadow | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | div |  | table-wrapper | `{"x":32,"y":32,"width":960,"height":109}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 2 | div |  | table | `{"x":32,"y":32,"width":960,"height":65}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 3 | div |  | table-head | `{"x":32,"y":32,"width":960,"height":28.5}` | rgb(247, 247, 247) | rgb(48, 48, 48) | 0px | none | 450 |
| 4 | div |  | pagination-wrapper pagination-table-variant | `{"x":32,"y":97,"width":960,"height":44}` | rgb(247, 247, 247) | rgb(48, 48, 48) | 0px | none | 450 |
| 5 | button |  | pagination-button pagination-button-table-variant | `{"x":40,"y":105,"width":28,"height":28}` | rgb(239, 239, 239) | rgb(0, 0, 0) | 8px 0px 0px 8px | none | 400 |
| 6 | s-icon |  |  | `{"x":44,"y":109,"width":20,"height":20}` | rgba(0, 0, 0, 0) | rgb(0, 0, 0) | 0px | none | 400 |
| 7 | button |  | pagination-button pagination-button-table-variant | `{"x":69,"y":105,"width":28,"height":28}` | rgb(239, 239, 239) | rgb(0, 0, 0) | 0px 8px 8px 0px | none | 400 |
| 8 | s-icon |  |  | `{"x":73,"y":109,"width":20,"height":20}` | rgba(0, 0, 0, 0) | rgb(0, 0, 0) | 0px | none | 400 |

### loading

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":960,"height":65}`

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
| height | 65px |
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
| border-radius | 0px |
| border-start-start-radius | 0px |
| border-start-end-radius | 0px |
| border-end-start-radius | 0px |
| border-end-end-radius | 0px |
| box-shadow | none |
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
| 1 | div |  | table-wrapper | `{"x":32,"y":32,"width":960,"height":65}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 2 | div |  | table | `{"x":32,"y":32,"width":960,"height":65}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 3 | div |  | table-head | `{"x":32,"y":32,"width":960,"height":28.5}` | rgb(247, 247, 247) | rgb(48, 48, 48) | 0px | none | 450 |

### hover

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":960,"height":65}`

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
| height | 65px |
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
| border-radius | 0px |
| border-start-start-radius | 0px |
| border-start-end-radius | 0px |
| border-end-start-radius | 0px |
| border-end-end-radius | 0px |
| box-shadow | none |
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
| 1 | div |  | table-wrapper | `{"x":32,"y":32,"width":960,"height":65}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 2 | div |  | table | `{"x":32,"y":32,"width":960,"height":65}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 3 | div |  | table-head | `{"x":32,"y":32,"width":960,"height":28.5}` | rgb(247, 247, 247) | rgb(48, 48, 48) | 0px | none | 450 |

### focus-visible

Notes: Open shadow root inspected. Measured internal div node.

Host rect: `{"x":0,"y":0,"width":0,"height":0}`  
First visible shadow/control rect: `{"x":32,"y":32,"width":960,"height":65}`

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
| height | 65px |
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
| border-radius | 0px |
| border-start-start-radius | 0px |
| border-start-end-radius | 0px |
| border-end-start-radius | 0px |
| border-end-end-radius | 0px |
| box-shadow | none |
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
| 1 | div |  | table-wrapper | `{"x":32,"y":32,"width":960,"height":65}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 2 | div |  | table | `{"x":32,"y":32,"width":960,"height":65}` | rgba(0, 0, 0, 0) | rgb(48, 48, 48) | 0px | none | 450 |
| 3 | div |  | table-head | `{"x":32,"y":32,"width":960,"height":28.5}` | rgb(247, 247, 247) | rgb(48, 48, 48) | 0px | none | 450 |

## Wrapper Guidance

- Reuse an existing shared wrapper if the app has one.
- Keep new wrappers thin and delegate visual behavior to `s-table`.
- Map product semantics to Polaris attributes in one place.
- Avoid hard-coded padding, radius, shadow, border, background, text, and hover values unless the measured table is being used for a custom composition.

## Avoid

- Do not imitate this component with ad hoc CSS when the native element is available.
- Do not duplicate this styling in feature files.
- Do not claim exact values that are not present in this reference or freshly measured.
