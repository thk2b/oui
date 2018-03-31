import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
    grid-column: ${props => props.grid.column};
    grid-row: ${props => props.grid.row};
    grid-area: ${props => props.grid.area || props.area};
`

export default ({ grid={}, area, className, style, Component, children }) => <Item
    grid={grid}
    area={area}
    className={className}
    style={style}
>
    { children || <Component /> }
</Item>