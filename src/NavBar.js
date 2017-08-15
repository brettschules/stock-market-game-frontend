import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Menu, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {Logout} from './actions/WelcomePage/index'


class NavBar extends Component{
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


  render(){
    console.log(this.props)
    const { activeItem } = this.state

    return(
      <div>
        <Menu inverted color="blue" position='left' size="huge">
        <Menu.Item as={Link} to="/" name="Home" active={activeItem === 'Home'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to="/Profile" name="Profile" active={activeItem === 'Profile'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to="/invest" name="Invest" active={activeItem === 'Invest'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to="/transcations" name="Transcations" active={activeItem === 'Transcations'} onClick={this.handleItemClick} />
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
    isLoggedIn: state.postLogin.isLoggedIn
  }
}

export default connect(mapStateToProps, {Logout, })(NavBar)
