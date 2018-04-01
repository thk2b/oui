import React from 'react'
import styled from 'styled-components'

import Resizable from '../../../../lib/Resizable'

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

const Box = styled.div`
    background-color: palegreen;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: 5px;
`

export default class extends React.Component {
    render(){
        return <Container>
            <Resizable top right bottom left
                width={{
                    min: 100, default: 200, max: 400
                }}
                height={{
                    min: 50, default: 100, max: 200 
                }}
                Component={Box}
            />
        </Container>
    }
}