# form-error
The `<form-error />` component allows you to render a error block.
This is useful when adding additional information to fields in a form.

## Attributes

The following attributes (bindables) are available for this component.

| attribute | type | default | description |
|---|---|---|---|
| error | string | `''` | The message to show |
| classes | string | `''` | Classes to add |

## Examples

This is a simple component, with a simple example.

```html
<form-error error="stuff is broken!" classes="custom-class other-class"></form-error>
```
