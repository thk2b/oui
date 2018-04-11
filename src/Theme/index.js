import createTheme from './createTheme'

export { default as Theme } from './Provider'
export { createTheme }

export const lightTheme = {
    name: 'light',
    surfaces: {

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