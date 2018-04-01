import React from 'react'
import styled from 'styled-components'

import Resizable from '../../../../../lib/Resizable'

import Grid from '../../../../../lib/Grid'

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

const Box1 = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`

const Box2 = Box1.extend`
    background-color: palegreen;
    border-right: 1px solid orangered;
`
const Box3 = Box2.extend`
    border-left: 1px solid orangered;
`
const Nav = styled.nav`
    width: 100%;
    height: 100%;
    background-color: black;
`

export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sidebar: { width: 100, open: true },
        }
    }
    render(){
        const { sidebar } = this.state
        return <Grid.Dynamic
            columns={[
                sidebar.open && sidebar.width+'px',
                '1fr',
            ]}
            rows='100px 1fr'
            gap={0}
            areas={[
                [sidebar.open && 'nav', 'nav' ],
                [sidebar.open && 'sidebar', 'content']
            ]}
        >
            <Grid.Area nav>
                <Nav>
                    {!sidebar.open && <button
                        onClick={e => this.setState({
                            sidebar: {...sidebar, open: true}
                        })}
                    >open sidebar</button>}
                </Nav>
            </Grid.Area>
            {sidebar.open && <Grid.Area sidebar >
                <Resizable right
                    width={{ min: 100, max: 400 }}
                    onResize={({ width }) => this.setState({
                        sidebar: { ...this.state.sidebar, width }
                    })}
                >
                    <Box2>
                        <button onClick={e => this.setState({
                            sidebar: {...this.state.sidebar, open: false}
                        })}>close</button>
                    </Box2>
                </Resizable>
            </Grid.Area>}
        </Grid.Dynamic>
    }   
}