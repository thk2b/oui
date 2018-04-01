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
            sidebar1: { width: 100, open: true },
            sidebar2: { width: 100, open: true },
            sidebar3: { width: 100, open: true },
        }
    }
    render(){
        const { sidebar1, sidebar2, sidebar3 } = this.state
        return <Grid.Dynamic
            columns={[
                sidebar1.open && sidebar1.width+'px',
                sidebar2.open && sidebar2.width+'px',
                '1fr',
                sidebar3.open && sidebar3.width+'px'
            ]}
            rows='100px 1fr'
            gap={0}
            areas={[
                [sidebar1.open && 'sidebar1',
                 sidebar2.open && 'nav',
                 'nav',
                 sidebar3.open && 'nav'],
                [sidebar1.open && 'sidebar1',
                 sidebar2.open && 'sidebar2',
                 'content',
                 sidebar3.open && 'sidebar3'],
            ]}
        >
            <Grid.Area nav>
                <Nav>
                    {!sidebar1.open && <button
                        onClick={e => this.setState({
                            sidebar1: {...sidebar1, open: true}
                        })}
                    >open sidebar1</button>}
                    {!sidebar2.open && <button
                        onClick={e => this.setState({
                            sidebar2: {...sidebar2, open: true}
                        })}
                    >open sidebar2</button>}
                    {!sidebar3.open && <button
                        onClick={e => this.setState({
                            sidebar3: {...sidebar3, open: true}
                        })}
                    >open sidebar3</button>}
                </Nav>
            </Grid.Area>
            {sidebar1.open && <Grid.Area sidebar1 >
                <Resizable right
                    width={{ min: 100, max: 400 }}
                    onResize={({ width }) => this.setState({
                        sidebar1: { ...this.state.sidebar1, width }
                    })}
                >
                    <Box2>
                        <button onClick={e => this.setState({
                            sidebar1: {...this.state.sidebar1, open: false}
                        })}>close</button>
                    </Box2>
                </Resizable>
            </Grid.Area>}
            {sidebar2.open && <Grid.Area sidebar2 >
                <Resizable right
                    width={{ min: 100, max: 400 }}
                    onResize={({ width }) => this.setState({
                        sidebar2: { ...this.state.sidebar2, width }
                    })}
                >
                    <Box2>
                        <button onClick={e => this.setState({
                            sidebar2: {...this.state.sidebar2, open: false}
                        })}>close</button>
                    </Box2>
                </Resizable>
            </Grid.Area>}
            <Grid.Area content Component={Box1}/>
            {sidebar3.open && <Grid.Area sidebar3 >
                <Resizable left
                    width={{ min: 100, max: 400 }}
                    onResize={({ width }) => this.setState({
                        sidebar3: { ...this.state.sidebar3, width }
                    })}
                >
                    <Box3>
                        <button onClick={e => this.setState({
                            sidebar3: {...this.state.sidebar3, open: false}
                        })}>close</button>
                    </Box3>
                </Resizable>
            </Grid.Area>}
        </Grid.Dynamic>
    }   
}