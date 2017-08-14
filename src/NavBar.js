import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Menu, Button} from 'semantic-ui-react'
import {Logout} from './actions/WelcomePage/index'


class NavBar extends Component{
  constructor(){
    super()
  }

  handleLogoutClick = () => {
    localStorage.clear();
    this.props.Logout();
  }

  // <Menu.Item as={Link} to="/newblog" name='Add Blog' active={activeItem === 'NewForm'} onClick={this.handleItemClick} />
// <Menu.Item as={Link} to="/profile" name='Add Blog'  />

  render(){
    return(
      <div>
        <Menu inverted color="blue" position='left' size="huge">
          <Menu.Item name='Home'  />
          <Menu.Item name='About'  />
          <Menu.Item name='Contact'  />
          {this.props.isLoggedIn ?
          <Menu.Menu position="right">
            <Menu.Item>
              <Button onClick={this.handleLogoutClick}>
                Logout
              </Button>
           </Menu.Item>
          </Menu.Menu>
          : ""
        }
       </Menu>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.postLogin.auth.isLoggedIn
  }
}

export default connect(mapStateToProps, {Logout})(NavBar)
