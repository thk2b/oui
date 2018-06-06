import React from 'react'

export default class Editable extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: this.props.value,
            editing: false,
            hovering: false
        }
    }

    componentDidUpdate(prevState, prevProps){
        if(prevProps.value !== this.props.value && !this.state.editing){
            this.setState({ value: this.props.value })
        }
    }

    handleMouseEnter(e){
        this.setState({ hovering: true })
    }
    handleMouseLeave(e){
        this.setState({ hovering: false })
    }
    handleEditStart(e){
        this.setState({ editing: true })
    }
    handleChange(e){
        this.setState({ value: e.target.value })
    }
    handleCancel(e){
        this.setState({
            value: this.props.value,
            editing: false
        })
    }
    handleSubmit(e){
        this.props.onSubmit&&this.props.onSubmit(this.state.value)
        this.setState({
            editing: false,
            value: this.props.value
        })
    }
    handleDelete(){
        this.props.onDelete&&this.props.onDelete()
        this.setState({ value: this.props.value })
    }

    render(){
        const { value, editing, hovering } = this.state
        const { value: initialValue, As, With } = this.props

        const SubmitButton = this.props.SubmitButton
        const CancelButton = this.props.CancelButton
        const DeleteButton = this.props.onDelete && this.props.DeleteButton
        const EditButton = this.props.EditButton

        if(editing) return (
            <div>
                <With
                    value={value}
                    onChange={e => this.handleChange(e)}
                    onKeyDown={e => e.key === 'Enter' && this.handleSubmit(e)}
                />
                {SubmitButton&&<SubmitButton
                    onClick={e => this.handleSubmit(e)}
                />}
                {CancelButton&&<CancelButton
                    onClick={e => this.handleCancel(e)}
                />}
            </div>
        )

        else return ( 
            <div
                onMouseEnter={e => this.handleMouseEnter(e)}
                onMouseLeave={e => this.handleMouseLeave(e)}
            >
                <As value={initialValue} />
                {hovering&&<React.Fragment>
                    {EditButton&&<EditButton onClick={e => this.handleEditStart(e)}/>}
                    {DeleteButton&&<DeleteButton onClick={e => this.handleDelete(e)}/>}
                </React.Fragment>}
            </div>
        )
    }
}