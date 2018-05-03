# Popover

The `Popover` component is a flexible way to build popover menus.

`children` are displayed inside an abosulutely posionned inside a container only if the popover is visible.

```js
import { Popover } from 'oui'
```

## Props

|prop|type|default|description| 
|----|----|-------|-----------|
|OpenComponent|React.Component|`undefined`!|The component to render when the popover is open|
|CloseComponent|React.Component|`undefined`!|The component to render when the popover is open|
|position|Object|`undefined`!|The `top`, `right`,`bottom`, `left` position of the absolutely positionned container containning the `children`, relative to `OpenConponent`|

## Example

```js
const Menu = ({}) => <Popover
    ClosedComponent={<button>open menu</button>}
    OpenComponent={<button>close menu</button>}
    position={ top: 0, left: '100%'}
>
    <MenuOptions />
</Popover>
```