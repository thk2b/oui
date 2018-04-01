import React from 'react'
import { findDOMNode } from 'react-dom'
import styled from 'styled-components'

import Handle from './Handle'

const { min, max } = Math

const ResizeContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`

export default class Resizable extends React.Component {
    constructor(props){
        super(props)
        this.$el = null
        this.prevDimentions = { width: null, height: null }
    }
    validateHeight(h){
        const { height } = this.props
        if(!height) return h
        return min(max(height.min, h), height.max)   
    }
    validateWidth(w){
        const { width } = this.props
        if(!width) return w
        return min(max(width.min, w), width.max)  
    }
    handleHandleDrag(e, position){
        const rect = this.$el.getBoundingClientRect()
        const nextDimentions = this.prevDimentions
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
        this.prevDimentions = nextDimentions
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
        return <ResizeContainer
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