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
    width: 100%;
    height: 100%;
`

const Box2 = styled(Box1)`
    background-color: palegreen;
`

export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // store bounding box
            box: { x: 100, y: 100, width: 500, height: 500 }
        }
    }
    render(){
        const { box } = this.state
        return <Grid.Dynamic
            columns={`${box.x}px ${box.width}px 1fr`}
            rows={`${box.y}px ${box.height}px 1fr`}
            gap={0}
            areas={`
                ". . ."
                ". content ."
                ". . ."
            `}
        >
            <Grid.Area content >
                <Resizable top right bottom left
                    width={{ min: 100 }}
                    onResize={({ x, y, width, height }) => this.setState({
                        box: { x, y, width, height }
                    })}
                    Component={Box2}
                />
            </Grid.Area>
            <Grid.Area content Component={Box1}/>
        </Grid.Dynamic>
    }   
}