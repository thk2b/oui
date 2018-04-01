# Resizable

A resizable element

## imports
```js
import Resizable from 'oui/Resizable'
```

## props

|prop|type|default|description| 
|----|----|-------|-----------|
|`onResize`|`Function`|`undefined`|called whenever the element is resized. The only argument passed to it is the element's new bounding box.|
|`width`|`Object`|`{min: 0, max: Infinity}`|the minimum and maximum pixel width of the element|
|`height`|`Object`|`{min: 0, max: Infinity}`|the minimum and maximum pixel height of the element
|`top`|`Boolean`|`false`|whether the top of the element is resizable|
|`right`|`Boolean`|`false`|whether the right side of the element is resizable|
|`left`|`Boolean`|`false`|whether the bottom of the element is resizable|
|`bottom`|`Boolean`|`false`|whether the left side of the element is resizable|
|`handleThickness`|`Number`|`15`|the pixel thickness of the drag handle.
|`children`|`React.Children`|`undefined`|children to be rendered|
|`Component`|`React.Component`|`undefined`|a single component to be rendered without props|
|`...props`|`*`|`{}`| any other props are attached to the container|
