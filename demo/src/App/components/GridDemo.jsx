import React from 'react'
import styled from 'styled-components'

import Grid from '../../../../lib/Grid'

const Box = styled.section`
    width: 100%;
    height: 100%;
    background-color: palevioletred;
`
export default ({}) => <Grid.Container
    columns='1fr minmax(20px, .25fr) 1fr'
    rows='1fr minmax(20px, .5fr) 1fr'
    areas={[
        'topLeft topMiddle topRight',
        'middleLeft middleMiddle middleRight',
        'bottom bottom bottom',
    ]}
>
    <Grid.Area topLeft topMiddle
        Component={Box}
    />
    <Grid.Area topRight
        Component={Box}
    />
    <Grid.Area middleMiddle
        Component={Box}
    />
    <Grid.Area bottom
        Component={Box}
    />
</Grid.Container>