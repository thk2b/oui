import React from 'react'
import styled from 'styled-components'

const ResizeHandle = styled.div`
    position: absolute;
    /* background-color: black; */
    cursor: col-resize;
    &:hover{
        /* background-color:  */
    }
`

export default class Handle extends React.Component {
    handleMouseDown(e){
        const { position } = this.props
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

        document.body.style.cursor = ['left', 'right'].includes(position)
            ? 'col-resize'
            : 'row-resize'
    }
    getStyles(position){
        const { thickness } = this.props
        const base = {
            vertical: {
                top: 0, bottom: 0,
                cursor: 'col-resize',
                width: thickness
            },
            horizontal: {
                left: 0, right: 0,
                cursor: 'row-resize',
                height: thickness
            }
        }
        const styles = {
            top:    { top: -thickness/2, ...base.horizontal },
            right:  { right: -thickness/2, ...base.vertical },
            bottom: { bottom: -thickness/2, ...base.horizontal },
            left:   { left: -thickness/2, ...base.vertical }
        }
        return styles[this.props.position]
    }
    render(){
        const { position } = this.props
        return <ResizeHandle
            style={this.getStyles()}
            onMouseDown={e => this.handleMouseDown(e)}
        />
    }
}