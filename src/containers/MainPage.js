import React, { Component } from 'react';
import UserProfile from './MainPage/UserProfile'
import UserPortfolioBody from './MainPage/UserPortfolioBody'
import NetValueChart from './MainPage/NetValueChart'
import {connect} from 'react-redux'
import {FetchUserEquities} from "../actions/MainPage/index"
import bindActionCreators from 'redux'
import { Grid, Image } from 'semantic-ui-react'

import '../App.css'

class MainPage extends Component {

  // componentWillMount(){
  //   if (this.props.currentUserId !== 0) {
  //     this.props.FetchUserEquities(this.props.currentUserId)
  //   }
  // }

  render() {
    return (
      <div>
        <Grid divided='vertically' >
          <Grid.Row columns={3} >
          <Grid.Column  >
            <UserProfile />
          </Grid.Column>
          <Grid.Column >
            <NetValueChart />
          </Grid.Column>
          <Grid.Column >
            <UserPortfolioBody />
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUserId: state.postLogin.currentUser.id
  }
}

export default connect(mapStateToProps, {FetchUserEquities})(MainPage)
