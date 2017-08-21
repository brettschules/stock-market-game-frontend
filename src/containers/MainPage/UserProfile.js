import React, { Component } from 'react';
import {FetchEquitesAlpha} from '../../actions/MainPage/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import UserInfo from '../../components/MainPage/UserInfo'
import TranscationsPageBody from '../TranscationsPage/TranscationsPageBody'

const KEY = "MV8HZ4PAMIW9SLYH"
const BASEURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="
const ONEMINUTEINVERVALS = "&interval=1min&apikey="

 class UserProfile extends Component {
   constructor() {
     super()
     this.state = {
       equityPrices: []
     }
   }

  //  Fetched API locally instead of redux for now due to complexity,  will refactor later

   componentWillMount() {
     this.allEquities(this.state.equityPrices)
   }

   allEquities = (equityPrices) => {
     this.props.userEquities.map(equity => this.fetchEquityPrice(equity.symbol, equity.units))
   }

   fetchEquityPrice = (equity, units) => {

      fetch(BASEURL + equity + ONEMINUTEINVERVALS + KEY)
      .then(resp => resp.json())
      .then(data =>
        this.setState({

          equityPrices: [ ...this.state.equityPrices, (parseFloat(this.getLatestStockPrice(data["Time Series (1min)"]), 10) * units)]
        })
      )
   }

   getLatestStockPrice = (equityObj) => {
      let first;
      for (var i in equityObj) {
        if (equityObj.hasOwnProperty(i)) {
          first = equityObj[i];
          break;
        } else {
          return ""
        }
      }
      return first["2. high"]
    }

    getTotalNetValueWorth = (equityPrices) => {
      return equityPrices.reduce((a,b) => {return parseFloat(a,10) + parseFloat(b,10)}, 0)
    }

  render(){
    return(
      <div>
        {this.props.userInfo ? <UserInfo userInfo={this.props.userInfo} netValueWorth={this.getTotalNetValueWorth(this.state.equityPrices)}/> : ""}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.postLogin.currentUser
  }
}

export default connect(mapStateToProps, {FetchEquitesAlpha})(UserProfile)
