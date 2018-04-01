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
   areas='
      "logo nav"
      "sidebar content"
   '
></Grid.Container>
```
