import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
`

export default ({ columns, rows, areas, gap, className, style, children, ...props }) => {
    const styles = {
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        gridTemplateAreas: areas,
        gridGap: gap
    }
    return <Container
        {...props}
        className={className}
        style={{...style, ...styles}}
    >
        { children }
    </Container>
}