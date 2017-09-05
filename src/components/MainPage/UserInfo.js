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
        <Image className="profile-image" width="15" fluid={true} size="small" src={this.props.userInfo.image !== "" ? this.props.userInfo.image :  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf2u0RWmYALKJ431XNoTKjzu77ERLBIvXKlOEA-Q3DPo2h2rCB'} />
        <div className="profile-name">
          <h4 ><b id="user-profile-title">Welcome {this.props.userInfo.name}!</b></h4>
            <p id="joined">Joined in 2017</p>
        </div>
         <div className="profile-networth">
          <h4><b id="user-profile-net">Your current Net Value Worth: </b></h4>
            <div className="dollar">
              <Icon name='dollar' color='green' size="big"/> <span id="user-money">{this.props.netValueWorth.toFixed(2)}</span>
            </div>
          </div>
          <div className="account-balance">
            <h4><b id="user-profile-balance">Account Balance:</b></h4>
            <div className="dollar">
              <Icon name='dollar' color='green' size="big"/> <span id="user-balance"><NumberFormat value={this.props.userInfo.account_balance} displayType={'text'} thousandSeparator={true}/></span>
            </div>
          </div>
      </div>

    )
  }
}
