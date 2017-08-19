import React, { Component } from 'react';
import { Icon, Image } from 'semantic-ui-react'
import NumberFormat from 'react-number-format'



export default class UserInfo extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div className="card">
        <Image className="profile-image" fluid={true} size="medium" src='http://cdn.skim.gs/images/homer-simpson-doughnuts/what-homer-simpson-taught-us-about-doughnuts' />
        <div className="profile-name">
          <h4 ><b id="user-profile-title">Welcome {this.props.userInfo.name}!</b></h4>
            <p id="joined">Joined in 2017</p>
        </div>
         <div className="profile-networth">
          <h4><b id="user-profile-net">Your current Net Value Worth:</b></h4>
            <div className="dollar">
              <Icon name='dollar' color='green' size="huge"/> <span id="user-money">0.00</span>
            </div>
          </div>
          <div className="account-balance">
            <h4><b id="user-profile-balance">Account Balance:</b></h4>
            <div className="dollar">
              <Icon name='dollar' color='green' size="huge"/> <span id="user-balance"><NumberFormat value={this.props.userInfo.account_balance} displayType={'text'} thousandSeparator={true}/></span>
            </div>
          </div>
      </div>

    )
  }
}
