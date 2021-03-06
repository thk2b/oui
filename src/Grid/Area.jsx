import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
    grid-area: ${props => props.area };
`

export default (props) => {
    const area = Object.keys(props).find(
        name => props[name] === true
    )
    return <Item
        area={area}
        style={props.style}
        className={props.className}
    >
        {props.children || <props.Component />}
    </Item>
}