import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: ${props => props.gap+'px'};
    grid-template-columns: ${props => props.columns};
    grid-template-rows: ${props => props.rows};
    grid-template-areas: ${props => props.areas.map(
        area => '"' + area + '" '
    )};
`

export default ({ className, style, children, ...props }) => <Container
    {...props}
    className={className}
    style={style}
>
    { children }
</Container>