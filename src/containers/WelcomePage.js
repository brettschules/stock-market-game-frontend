import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
import LoginFormModal from './WelcomePage/LoginFormModal'
import {Link } from 'react-router-dom'


export default class WelcomePage extends Component{

  render(){
    return(
      <div className="background-image">
        <div>
          <h1 className="welcome">Welcome To The StockMarket Game!!!</h1>
          <div className="login-button">
            <Button.Group>
              <Button color="blue" size="huge"  as={Link} Link to={`/login`} >Log in</Button>
              <Button.Or />
              <Button color="red" size="huge" as={Link} Link to={`/login`} >Sign in</Button>
            </Button.Group>
          </div>
        </div>
      </div>
    )
  }
}
