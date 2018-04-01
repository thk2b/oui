# Grid

The `Grid` module is the primary way to build layouts in `oui`.

Grids automatically take the full width and height of their parent.

## imports
```js
import Grid from 'oui/Grid'

import {
  Container,
  Dynamic,
  Item,
  Area
} from 'oui/Grid'
```

## Components
- [Grid.Container](#gridcontainer)
- [Grid.Dynamic](#griddynamic)
- [Grid.Item](#griditem)
- [Grid.Area](#gridarea)

### Grid.Container

A Standard grid container that takes full width and height.

#### Props

|prop|type|default|description| 
|----|----|-------|-----------|
|`gap`|`String`|`''`|the value of `grid-gap`|
|`columns`|`String`|`undefined`|the value of `grid-template-columns`|
|`rows`|`String`|`undefined`|the value of `grid-template-rows`|
|`areas`|`String`|`undefined`|the value of `grid-template-areas`|
|`children`|`React.Children`|`undefined`|children to be rendered|
|`...props`|`*`|`{}`| any other props are attached to the container|

#### Example
```js
<Grid.Container
   columns='100px 1fr'
   rows='50px 1fr'
   areas=`
      "logo nav"
      "sidebar content"
   `
></Grid.Container>
```

### Grid.Dynamic

A Dynamic grid container that takes full width and height.
All grid-related styles are passed inline for efficient dynamic updates. Use this when the grid needs to be regularly updated.

#### Props

|prop|type|default|description| 
|----|----|-------|-----------|
|`gap`|`String`|`''`|the value of `grid-gap`|
|`columns`|`String` or `Array<String>`|`undefined`|the value of `grid-template-columns`. If it is passed an array, the css value is constructed out of the truthy elements|
|`rows`|`String` or `Array<String>`|`undefined`|the value of `grid-template-rows`. If it is passed an array, the css value is constructed out of the truthy elements|
|`areas`|`String` or `Array<Array<String>>`|`undefined`|the value of `grid-template-areas`. If it is passed an array, the string is constructed out of the truthy nested elements|
|`children`|`React.Children`|`undefined`|children to be rendered|
|`...props`|`*`|`{}`| any other props are attached to the container|

#### Example
see `demo/ResizeDemo/TripleSidebar`

### Grid.Item

A grid Item to be rendered directly under a `Grid.Container` or `Grid.Dynamic`.

#### Props

|prop|type|default|description| 
|----|----|-------|-----------|
|`row`|`String`|`''`|the value of `grid-row`|
|`column`|`String`|`''`|the value of `grid-column`|
|`area`|`String`|`''`|the value of `grid-area`|
|`children`|`React.Children`|`undefined`|children to be rendered|
|`Component`|`React.Component`|`undefined`|Single component to be rendered without props|
|`...props`|`*`|`{}`| any other props are attached to the container|

#### Example

### Grid.Item

A grid Item to be rendered in an area of the parent grid.

#### Props

|prop|type|default|description| 
|----|----|-------|-----------|
|`[areaName]`|`Boolean`|N/A|the name of the first `true` prop will be set as `grid-area`|
|`children`|`React.Children`|`undefined`|children to be rendered|
|`Component`|`React.Component`|`undefined`|Single component to be rendered without props|
|`...props`|`*`|`{}`| any other props are attached to the container|

#### Example
```js
<Grid.Area myArea Component={MyComponent} />
```
