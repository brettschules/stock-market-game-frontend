 import React, { Component } from 'react';
 import {connect} from 'react-redux';
 import UserInfo from '../../components/MainPage/UserInfo'


 class UserProfile extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        {this.props.userInfo ? <UserInfo userInfo={this.props.userInfo} /> : ""}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.postLogin.currentUser
  }
}

export default connect(mapStateToProps)(UserProfile)
