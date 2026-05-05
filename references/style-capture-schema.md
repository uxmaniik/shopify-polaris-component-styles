# Style Capture Schema

Use this schema when generating measured component references.

## States

Capture these states when the component supports them:

| State | Trigger |
| --- | --- |
| `default` | Render fixture with no interaction. |
| `hover` | Move pointer over the measured element. |
| `active` | Hold pointer down or dispatch active state where possible. |
| `focus-visible` | Keyboard focus the element. |
| `disabled` | Render with `disabled` or equivalent property. |
| `loading` | Render with `loading` or equivalent property. |
| `selected` | Render with selected/checked/current state. |
| `invalid` | Render with error/invalid property. |
| `tone-critical` | Render with critical/destructive tone if supported. |
| `tone-success` | Render with success tone if supported. |
| `tone-warning` | Render with warning/caution tone if supported. |
| `variant-primary` | Render primary variant if supported. |
| `variant-secondary` | Render secondary variant if supported. |

## Computed Style Fields

Capture these computed CSS properties:

```txt
display
box-sizing
width
height
min-width
min-height
padding-top
padding-right
padding-bottom
padding-left
margin-top
margin-right
margin-bottom
margin-left
border-top-width
border-right-width
border-bottom-width
border-left-width
border-top-style
border-right-style
border-bottom-style
border-left-style
border-top-color
border-right-color
border-bottom-color
border-left-color
border-radius
box-shadow
background-color
color
font-family
font-size
font-weight
line-height
letter-spacing
text-align
gap
row-gap
column-gap
opacity
cursor
outline-color
outline-style
outline-width
outline-offset
transition-duration
transition-property
```

## Measurement Notes

- Measure the custom element host first.
- If the component exposes shadow DOM, also measure the first visible interactive/control node inside the shadow root.
- If shadow DOM is closed, record host styles and mark internals as unavailable.
- For pseudo-class states that cannot be forced reliably, record `unmeasured` rather than guessing.
- Include viewport, browser, and capture date in generated references.
