import React from 'react'
import styled from 'styled-components'

// import GridDemo from './components/GridDemo'
import DoubleSidebar from './components/ResizeDemo/DoubleSidebar'

const Main = styled.main`
    background-color: rgb(57, 57, 57);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

export default ({}) => <Main>
    {/* <GridDemo/> */}
    <DoubleSidebar />
</Main>