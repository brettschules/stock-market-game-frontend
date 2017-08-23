import React, { Component } from 'react';
import UserProfile from './MainPage/UserProfile'
import UserPortfolioBody from './MainPage/UserPortfolioBody'
import NetValueChart from './MainPage/NetValueChart'
import DefaultNetValueChart from './MainPage/DefaultNetValueChart'
import {connect} from 'react-redux'
import {FetchUserEquities} from "../actions/MainPage/index"
import {FetchUserEquitiesForProfilePage} from "../actions/MainPage/index"
import bindActionCreators from 'redux'
import { Grid, Image } from 'semantic-ui-react'
import '../App.css'

class MainPage extends Component {

  componentWillMount(){
    if (this.props.currentUserId !== 0) {
      this.props.FetchUserEquities(this.props.currentUserId)
      this.props.FetchUserEquitiesForProfilePage(this.props.currentUserId)
    }
  }

  render() {
    return (
      <div>
        <Grid divided='vertically' >
          <Grid.Row columns={3} >
          <Grid.Column  >
            {this.props.userEquities.length !== 0 ? <UserProfile userEquities={this.props.userEquities}/>
            : ""
            }
          </Grid.Column>
          <Grid.Column >
            {this.props.arrayOfEquitySymbols.length !== 0 ? <NetValueChart /> : <DefaultNetValueChart />}
          </Grid.Column>
          <Grid.Column>
            {this.props.arrayOfEquitySymbols.length !==0  ? <UserPortfolioBody arrayOfEquitySymbols={this.props.arrayOfEquitySymbols} />
            : ""}
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUserId: state.postLogin.currentUser.id,
    userEquities: state.userEquities.equites,
    arrayOfEquitySymbols: state.userEquitiesForProfilePage.arrayOfEquitySymbolsForProfilePage
  }
}

export default connect(mapStateToProps, {FetchUserEquities, FetchUserEquitiesForProfilePage})(MainPage)
