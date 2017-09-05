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

const BASEURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='
const BASEURLSTOCKS = process.env.REACT_APP_API

const KEY = "&apikey=MV8HZ4PAMIW9SLYH"

class MainPage extends Component {

  month = () => {
    let d = new Date();
    let m = d.getMonth()+1;
    let month = m.toString()
    if (month.length === 1) {
      return "0" + month
    } else {
      return month
    }
  }

  currentDate = () => {
    let d = new Date();
    return d.getFullYear() + "-" + this.month() + "-" + d.getDate()
  }

  dataParams = (price) => {
    return {
      price_purchased: price,
      status: 'Excuted'
    }
  }

  postOrderToDB = (price, equityId) => {
    const postData = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.dataParams(price, equityId))
    }
    fetch(BASEURLSTOCKS + 'stocks/' + equityId , postData)
  }

  priceOfOrder = (api, timePurchasedAt, equitySymbol, equityId) => {
    if (timePurchasedAt.slice(0,10) <= this.currentDate()) {
      this.postOrderToDB(api['Time Series (Daily)'][this.findDateToExecuteOrder(api, timePurchasedAt)]['1. open'], equityId)
    }
  }

  findDateToExecuteOrder = (api, timePurchasedAt) => {
   return Object.keys(api["Time Series (Daily)"]).filter(date => date.slice(0,10) < 'timePurchasedAt')[0]
  }

  fetchAPI = (equitySymbol, timePurchasedAt, equityId) => {
    fetch(BASEURL + equitySymbol + KEY)
    .then(resp => resp.json())
    .then(data => this.priceOfOrder(data, timePurchasedAt, equitySymbol, equityId))
  }

  checkStatus = (equity) => {
    if (equity.status === 'Pending') {
      this.fetchAPI(equity.symbol, equity.created_at, equity.id)
    }
  }

  anyPendingOrdersToBeExcuted = () => {
    this.props.checkUserEquities.map(checkEquity =>
      this.checkStatus(checkEquity)
    )
  }


  componentWillMount(){
    if (this.props.currentUserId !== 0) {
      this.props.FetchUserEquities(this.props.currentUserId)
      this.props.FetchUserEquitiesForProfilePage(this.props.currentUserId)
    }
  }

  render() {
    this.anyPendingOrdersToBeExcuted()
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
            {this.props.onlyEquitiesThatHasAtLeastOneUnit.length !== 0 ? <NetValueChart /> : <DefaultNetValueChart />}
          </Grid.Column>
          <Grid.Column>
            {this.props.onlyEquitiesThatHasAtLeastOneUnit.length !==0  ? <UserPortfolioBody arrayOfEquitySymbols={this.props.onlyEquitiesThatHasAtLeastOneUnit} />
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
    userEquities: state.userEquities.totalUnitsPurchasedForEquities,
    onlyEquitiesThatHasAtLeastOneUnit: state.userEquitiesForProfilePage.onlyEquitiesThatHasAtLeastOneUnit,
    checkUserEquities: state.userEquities.equites
  }
}

export default connect(mapStateToProps, {FetchUserEquities, FetchUserEquitiesForProfilePage})(MainPage)
