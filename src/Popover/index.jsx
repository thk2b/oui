import React from 'react'
import styled from 'styled-components'

const OuterContainer = styled.div`
    position: relative;
    display: inline-block;
`
const InnerContainer = styled.div`
    position: absolute;
`

export default class Popover extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
    }
    validatePosition(position){
        const validPositions = ['top', 'right', 'bottom', 'left']
        Object.keys(position).forEach(position => {
            if(!validPositions.includes(position)){
                console.warn(`Invalid position in oui.Popover: ${position}`)
            }
        })
    }
    render(){
        const { Component } = this.props
        const OpenComponent = Component || this.props.OpenComponent
        const ClosedComponent = Component || this.props.ClosedComponent

        if(this.state.isOpen){
            return <OuterContainer>
                <div onClick={e => this.setState({ isOpen: false })}>
                    <OpenComponent />
                </div>
                <InnerContainer
                    style={this.props.position}
                >
                    {this.props.children}
                </InnerContainer>
            </OuterContainer>
        }

        return <div>
            <div onClick={e => this.setState({ isOpen: true })}>
                <ClosedComponent/>
            </div>
        </div>
    }
}