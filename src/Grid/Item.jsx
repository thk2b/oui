import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
    grid-column: ${props => props.column};
    grid-row: ${props => props.row};
    grid-area: ${props => props.area || props.area};
`

export default ({ row, column, area, Component, children, style, className }) => <Item
    row={row}
    column={column}
    area={area}
    style={style}
    className={className}
>
    { children || <Component /> }
</Item>