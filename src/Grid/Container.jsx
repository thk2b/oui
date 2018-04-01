import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: ${props => props.gap};
    grid-template-columns: ${props => props.columns};
    grid-template-rows: ${props => props.rows};
    grid-template-areas: ${props => props.areas};
`

export default ({ gap, columns, rows, children, ...props }) => <Container
    gap={gap}
    rows={rows}
    columns={columns}
    {...props}
>
    { children }
</Container>