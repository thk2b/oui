import React from 'react'
import { findDOMNode } from 'react-dom'
import styled from 'styled-components'

import Handle from './Handle'

const { min, max } = Math

const ResizeContainer = styled.div`
    position: relative;
`

export default class Resizable extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            width: props.width.default,
            height: props.height.default
        }
        this.$el = null
    }
    validateHeight(nextHeight){
        const { height } = this.props
        return min(max(height.min, nextHeight), height.max)
    }
    validateWidth(nextWidth){
        const { width } = this.props
        return min(max(width.min, nextWidth), width.max)
    }
    handleHandleDrag(e, position){
        
        const rect = this.$el.getBoundingClientRect()
        const nextDimentions = this.state
        if (position === 'top') {
            // how far the mouse moved from the relevant edge of the box
            const delta = rect.y - e.clientY
            nextDimentions.height = this.validateHeight(rect.height + delta)
        } else if(position === 'right'){
            const delta = e.clientX - (rect.width + rect.x)
            nextDimentions.width = this.validateWidth(rect.width + delta)
        } else if(position === 'bottom'){
            const delta = e.clientY - (rect.height + rect.y)
            nextDimentions.height = this.validateHeight(rect.height + delta)
        } else if(position === 'left'){
            const delta = rect.x - e.clientX
            nextDimentions.width = this.validateWidth(rect.width + delta)
        }
        this.props.onResize&&this.props.onResize(nextDimentions)
        this.setState(nextDimentions)
    }
    render(){
        const {
            Component, children, className, style={},
            top, right, bottom, left,
            handleThickness=15
        } = this.props
        const positions = {
            top, right, bottom, left
        }
        const { width, height } = this.state
        return <ResizeContainer
            style={{ width, height, ...style.root }}
            className={className}
            ref={el => this.$el = findDOMNode(el)}
        >
            { children || <Component/>}
            {Object.entries(positions).map(
                ([position, isResizable]) => isResizable && <Handle
                    thickness={handleThickness}
                    key={position}
                    position={position}
                    onMouseMove={e => this.handleHandleDrag(e, position)}
                />
            )}

        </ResizeContainer>
    }
}