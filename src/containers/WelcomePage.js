import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
import LoginFormModal from './WelcomePage/LoginFormModal'
import {Link } from 'react-router-dom'


export default class WelcomePage extends Component{

  render(){
    return(
      <div>
        <h1>Welcome To The StockMarket Game!!!</h1>
        <div>
        <Button as={Link} Link to={`/login`} >Log in</Button>
        </div>
      </div>

    )
  }
}
