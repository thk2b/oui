import React from 'react'
import Popover from '../../../../src/Popover'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
`

const Menu = styled.main`
    background-color: coral;
    display: inline-block;
`

export default class PopoverDemo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            top: 0,
            bottom: 0,
            left: '100%',
            right: '',
        }
    }
    render(){
        return <Container>
            <form>
                <input
                    type="text"
                    placeholder="top"
                    value={this.state.top}
                    onChange={({ target }) => this.setState({
                        top: target.value
                    })}
                />
                <input
                    type="text"
                    placeholder="right"
                    value={this.state.right}
                    onChange={({ target }) => this.setState({
                        right: target.value
                    })}
                />
                <input
                    type="text"
                    placeholder="bottom"
                    value={this.state.bottom}
                    onChange={({ target }) => this.setState({
                        bottom: target.value
                    })}
                />
                <input
                    type="text"
                    placeholder="left"
                    value={this.state.left}
                    onChange={({ target }) => this.setState({
                        left: target.value
                    })}
                />
            </form>
            <Popover 
                position={{
                    top: this.state.top,
                    right: this.state.right,
                    left: this.state.left,
                    bottom: this.state.bottom
                }}
                // Component={() => <button>open/close</button>}
                OpenComponent={() => <button>close</button>}
                ClosedComponent={() => <button>open</button>}
            >
                <Menu>
                    <p>hi</p>
                    <p>bye</p>
                    <p>bonjour</p>
                    <p>aurevoir</p>
                    <p>hallo</p>
                </Menu>
            </Popover >
        </Container>
    }
}