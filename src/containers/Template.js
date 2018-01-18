import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavDrawer from '../components/NavDrawer'
import {Header, Main} from '../styled/Template'

const style = {
    margin: 12,
  };

class Template extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                   <NavDrawer/>
                   <Header>Tic Tac Toe</Header>
                    <Main>
                        {this.props.children}
                    </Main>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Template