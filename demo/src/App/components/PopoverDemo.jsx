import React from 'react'
import Popover from '../../../../src/Popover'
import styled from 'styled-components'

const Container = styled.main`
    background-color: coral;
    display: inline-block;
`

export default class PopoverDemo extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return <div>
            <Popover 
                position={{
                    left: '100%',
                    top: 0,
                    bottom: 0
                }}
                OpenComponent={() => <button>close</button>}
                ClosedComponent={() => <button>open</button>}
            >
                <Container>
                    <p>hi</p>
                    <p>bye</p>
                    <p>bonjour</p>
                    <p>aurevoir</p>
                    <p>hallo</p>
                </Container>
            </Popover >
        </div>
    }
}