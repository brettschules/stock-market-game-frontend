import TranscationsPageBody from './TranscationsPage/TranscationsPageBody'
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {FetchUserEquities} from '../actions/MainPage/index'

class TranscationsPage extends Component{
  componentWillMount() {
      if (this.props.currentUserId !== 0) {
        this.props.FetchUserEquities(this.props.currentUserId)
      }
  }

  render(){
    return(
      <div>
        <TranscationsPageBody />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUserId: state.postLogin.currentUser.id
  }
}

export default connect(mapStateToProps, {FetchUserEquities})(TranscationsPage)
