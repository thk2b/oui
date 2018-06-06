# Editable

The `Editable` component is used to render a value. When it is clicked, the component enters the `editing` state, in which the value can be updated via an input component.


## imports
```js
import Editable from 'oui/Editable'
```

#### Props

|prop|type|default|description| 
|----|----|-------|-----------|
|As|Component|`undefined`!|component to be rendered when the component is not in the `editing` state|
|With|Component|`undefined`|component to be rendered when the component is in the `editing` state|
|onSubmit|Function|`undefined`|called with the new value when the user presses the enter key or the confirm button|
|onDelete|Function|`undefined`|called when the user presses the delete button. If `undefined`, the delete button is not displayed|
|EditButton|Component|`undefined`|rendered when the user hovers the component. Should convey that the value is editable|
|DeleteButton|Component|`undefined`|rendered when the user hovers the component, only if the `onDelete` prop is provided. Should convey that the value will be deleted|
|SubmitButton|Component|`undefined`|rendered when the component is in the `editing` state. Should convey that the value will be saved|
|CancelButton|Component|`undefined`|rendered when the component is in the `editing` state. Should convey that the value will be discarded|

#### Example
see `demo/EditableDemo`

#### Example
```js

```
