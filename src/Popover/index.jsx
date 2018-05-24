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
            isOpen: false,
        }
        this.didOpen = false // whether the popover was just opened
        this.$el = null
    }
    componentDidMount(){
        document.addEventListener('click', this.handleOutsideClick.bind(this))
    }
    componentWillUnmount(){
        document.removeEventListener('click', this.handleOutsideClick.bind(this))
    }
    handleOutsideClick(e){
        if(this.didOpen){
            this.didOpen = false
            return
        }
        if(this.state.isOpen && this.el && !this.$el.contains(e.target)){
            this.setState({ isOpen: false })
        }
    }
    handleOpen(e){
        this.setState({ isOpen: true });
        this.didOpen = true;
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
        const { Component, zIndex } = this.props
        const OpenComponent = Component || this.props.OpenComponent
        const ClosedComponent = Component || this.props.ClosedComponent

        if(this.state.isOpen){
            return <OuterContainer>
                <div onClick={e => this.setState({ isOpen: false })}>
                    <OpenComponent />
                </div>
                <InnerContainer
                    style={{...this.props.position, zIndex}}
                    innerRef={el => this.$el = el}
                >
                    {this.props.children}
                </InnerContainer>
            </OuterContainer>
        }

        return <div>
            <div onClick={e => this.handleOpen(e)}>
                <ClosedComponent/>
            </div>
        </div>
    }
}