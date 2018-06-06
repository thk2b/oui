import React from 'react'
import styled from 'styled-components'

import Editable from '../../../../src/Editable'

const Container = styled.div`
    color: lightgrey;
    margin-left: 20px;
`

const P = styled.p`
    font-size: 16px;
    margin: 8px;
`

const Input = styled.input`
    font-size: 16px;
    font-family: inherit;
    color: inherit;
    padding: 8px 0;
    width: auto;
    background-color: inherit;
`

export default class EditableDemo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'default name'
        }
    }

    render(){
        return <Container>
            <h1>The value is "{this.state.name}"</h1>
            <Editable
                value={this.state.name}
                onSubmit={name => this.setState({ name })}
                onDelete={() => this.setState({ name: '[deleted]'})}
                As={({value, ...props}) => <P {...props}>{value}</P>}
                With={props => <Input
                    {...props}
                />}
                SubmitButton={props => <button {...props}>save</button>}
                CancelButton={props => <button {...props}>cancel</button>}
                EditButton={props => <button {...props}>edit</button>}
                DeleteButton={props => <button {...props}>delete</button>}
            />
        </Container>
    }
}