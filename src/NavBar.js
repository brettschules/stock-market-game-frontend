import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Menu, Button, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {Logout} from './actions/WelcomePage/index'
import Logo from './Logo.png'
class NavBar extends Component {
  constructor(){
    super()
    this.state = {
      activeItem: ""
    }
  }

  handleLogoutClick = () => {
    localStorage.clear();
    this.props.Logout();
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  loggedIn = () => {
    if (localStorage.getItem('jwt') && this.props.isLoggedIn) {
      return true
    } else {
      return false
    }
  }


  render(){
    const { activeItem } = this.state
    return(
      <div>
        <Menu inverted color="blue" position='left' size="small">
        <Menu.Item>  <Image size="medium" src={Logo} /></Menu.Item>
        <Menu.Item as={Link} to="/" name="Home" active={activeItem === 'Home'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to="/Profile" name="Profile" active={activeItem === 'Profile'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to="/invest" name="Invest" active={activeItem === 'Invest'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to="/transcations" name="Transactions" active={activeItem === 'Transcations'} onClick={this.handleItemClick} />
          {this.loggedIn() ?
          <Menu.Menu position="right">
            <Menu.Item>
              <Button inverted onClick={this.handleLogoutClick} size="tiny">
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
