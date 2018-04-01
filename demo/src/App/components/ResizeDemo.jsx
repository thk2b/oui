import React from 'react'
import styled from 'styled-components'

import Resizable from '../../../../lib/Resizable'

import Grid from '../../../../lib/Grid'

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

const Box1 = styled.div`
    background-color: palegreen;
    width: 100%;
    height: 100%;
    border: 1px solid black;
`

const Box2 = styled(Box1)`
    background-color: black;
`

export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sidebar: { width: 100 }
        }
    }
    render(){
        const { sidebar } = this.state
        return <Grid.Container
            columns={`${sidebar.width}px 1fr`}
            gap={0}
            areas={[
                'sidebar content'
            ]}
        >
            <Grid.Area sidebar >
                <Resizable right
                    width={{ min: 100, max: 200 }}
                    onResize={({width}) => this.setState({
                        sidebar: { width }
                    })}
                    Component={Box1}
                />
            </Grid.Area>
            <Grid.Area content Component={Box2}/>
        </Grid.Container>
    }   
}