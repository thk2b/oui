import React from 'react'

import Button from '../../../../src/Button'
import { Theme, darkTheme, lightTheme } from '../../../../src/Theme'

export default class ThemeDemo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            theme: darkTheme
        }
    }
    toggleTheme(){
        this.setState({
            theme: this.state.theme.name === 'dark'
                ? lightTheme
                : darkTheme
        })
    }
    render(){
        return <Theme theme={this.state.theme}>
            <Button
                onClick={e => this.toggleTheme()}
            >click</Button>
        </Theme>
    }
}