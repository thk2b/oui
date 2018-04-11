import createTheme from './createTheme'

export { default as Theme } from './Provider'
export { createTheme }

export const lightTheme = {
    name: 'light',
    colors: {
        primary: '',
        secondary: '',
        success: '',
        danger: '',
        info: ''
    },
    border: {
        color: ''
    },
    surfaces: {
        0: '',
        1: '',
        2: '',
        3: ''
    },
    text: {
        color: 'red'
    }
}

export const darkTheme = {
    name: 'dark',
    text: {
        color: 'green'
    }
}