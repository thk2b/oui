import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-gap: ${props => props.template.gap}
    grid-template-columns: ${props => props.template.columns};
    grid-template-rows: ${props => props.template.rows};
    grid-template-areas: ${props => props.template.areas.map(
        area => '"' + area + '" '
    )};
`

export default ({ template={}, className, style, children }) => <Container
    template={template}
    className={className}
    style={style}
>
    { children }
</Container>