import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import {NavToggleButton} from '../styled/NavDrawer'
import { Link } from 'react-router'

class NavDrawer extends Component {
  state = {
    open: false,
    width: 250
  }

  toggle = () => {
    this.setState((prevState, props) => {
      // set it to oposite of prevState.open
      return {
        open: !prevState.open
      }
    })
  }
  render() {
    return (
      <div>
        <NavToggleButton
            toggle={this.toggle}
            width={this.state.width}
            open={this.state.open}
          />
          <Drawer
            open={this.state.open}
            width={this.state.width}
          >

          <div style={{
            height: '200px',
            width: '100%',
            background: 'grey'
          }}>
            Login
                   </div>

          <Divider />
          
          <Link
            to={'/'}>
            <MenuItem
              onClick={this.toggle}
              primaryText={'Play'}
            />
          </Link>
          <Link
            to={'/profile'}>
            <MenuItem
              onClick={this.toggle}
              primaryText={'Profile'}
            />
          </Link>

        </Drawer>
      </div>
    )
  }
}
export default NavDrawer

