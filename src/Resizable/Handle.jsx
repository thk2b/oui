import React from 'react'
import styled from 'styled-components'

const BaseHandle = styled.div`
    position: absolute;
`
const VerticalHandle = BaseHandle.extend`
    top: 0;
    bottom: 0;
    width: ${props => props.thickness}px;
    cursor: col-resize;
`
const HorizontalHandle = BaseHandle.extend`
    right: 0;
    left: 0;
    height: ${props => props.thickness}px;
    cursor: row-resize;  
`

const Handles = {
    top: HorizontalHandle.extend`
        top: ${props => props.thickness / -2}px;
    `,
    right: VerticalHandle.extend`
        right: ${props => props.thickness / -2}px;
    `,
    bottom: HorizontalHandle.extend`
        bottom: ${props => props.thickness / -2}px;
    `,
    left: VerticalHandle.extend`
        left: ${props => props.thickness / -2}px;
    `
}

export default class Handle extends React.Component {
    handleMouseDown(e){
        const handleMouseMove = e => {
            this.props.onMouseMove(e)
        }
        const handleMouseUp = e => {
            window.removeEventListener('mouseup', handleMouseUp)
            window.removeEventListener('mousemove', handleMouseMove)
            document.body.style.cursor = 'initial'
        }
        window.addEventListener('mouseup', handleMouseUp)
        window.addEventListener('mousemove', handleMouseMove)

        document.body.style.cursor = ['left', 'right'].includes(this.props.position)
            ? 'col-resize'
            : 'row-resize'
    }
    render(){
        const { position, thickness } = this.props
        const Handle = Handles[position]
        return <Handle
            thickness={thickness}
            onMouseDown={e => this.handleMouseDown(e)}
        />
    }
}