import TranscationsPageBody from './TranscationsPage/TranscationsPageBody'
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {FetchUserEquities} from '../actions/MainPage/index'

class TranscationsPage extends Component{
  componentWillMount() {
    this.props.FetchUserEquities
  }

  render(){
    return(
      <div>
        <TranscationsPageBody />
      </div>
    )
  }
}

export default connect(null, {FetchUserEquities})(TranscationsPage)
