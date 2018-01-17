import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
    margin: 12,
  };

//injectTapEventPlugin()

class Template extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <header>
                        <h1>Tic Tac Toe</h1>
                        <RaisedButton label="Primary" primary={true} style={style} 
                         onClick={()=>{console.log('hello')}}/>
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Template