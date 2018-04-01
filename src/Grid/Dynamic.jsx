import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
`
/**
 * Returns a string without the falsy elements of the array
 */
const parseTemplate = template => Array.isArray(template)
    ? template.reduce(
        (rawTemplate, item) => item ? rawTemplate.concat(item) : rawTemplate
    , []).join(' ')
    : template 

const parseAreas = areas => Array.isArray(areas)
        ? areas.reduce(
            (rawAreas, areaColumn) => rawAreas.concat(areaColumn.reduce(
                (rawAreaColumn, areaName) => areaName
                    ? rawAreaColumn.concat(areaName)
                    : rawAreaColumn
            , ['"']).concat('"').join(' '))
        , []).join(' ')
        : areas

export default ({ columns, rows, areas, gap, className, style, children, ...props }) => {
    const styles = {
        gridTemplateRows: parseTemplate(rows),
        gridTemplateAreas: parseAreas(areas),
        gridTemplateColumns: parseTemplate(columns),
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