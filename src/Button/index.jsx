import React from 'react'
import styled from 'styled-components'

export default styled.button`
    background-color: ${ ({ theme }) => {
        console.log(theme)
        return theme.text.color
    }}
`