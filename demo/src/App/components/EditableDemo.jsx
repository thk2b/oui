import React from 'react'
import Editable from '../../../../src/Editable'

export default class EditableDemo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'default name'
        }
    }

    render(){
        return <div>
            <Editable
                value={this.state.name}
                onSubmit={name => this.setState({ name })}
                onDelete={() => this.setState({ name: '[deleted]'})}
                As={({value, ...props}) => <h1 {...props}>{value}</h1>}
                With={props => <input
                    {...props}
                />}
                SubmitButton={props => <button {...props}>save</button>}
                CancelButton={props => <button {...props}>cancel</button>}
                EditButton={props => <button {...props}>edit</button>}
                DeleteButton={props => <button {...props}>delete</button>}
            />
        </div>
    }
}