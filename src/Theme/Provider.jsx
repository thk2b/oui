import React from 'react'
import { ThemeProvider } from 'styled-components'

export default ({ theme, children, ...props }) => <ThemeProvider
    theme={theme}
    {...props}
>
    { children }
</ThemeProvider>