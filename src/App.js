import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Auth from './authorize'
import MainPage from './containers/MainPage'
import WelcomePage from './containers/WelcomePage'
import Login from './containers/WelcomePage/LoginFormModal'
import { connect } from 'react-redux'
import {FetchUserEquities} from "./actions/MainPage/index"
import bindActionCreators from 'redux'
import NavBar from './NavBar'
import InvestPage from './containers/InvestPage'
import Footer from'./Footer'
import TranscationsPage from './containers/TranscationsPage'
import {CurrentUser} from './actions/WelcomePage/index'

const KEY = "MV8HZ4PAMIW9SLYH"
const BASEURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="
const ONEMINUTEINVERVALS = "&interval=1min&apikey="

class App extends Component {
  constructor() {
    super()
    this.state = {
      marqueequityInfo: [{}]
    }
  }

  loggedIn = () => {
    if (localStorage.getItem('jwt') && this.props.isLoggedIn) {
      return true
    } else {
      return false
    }
  }

// Fetched API locally to get batch data which is not possible with redux

  componentWillMount() {
    this.props.CurrentUser()
   this.arrayOfEquitiesToFetch()
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

  fetchEquityPrice = (equity) => {
     fetch(BASEURL + equity + ONEMINUTEINVERVALS + KEY)
     .then(resp => resp.json())
     .then(data =>
       this.setState({
         marqueequityInfo: [...this.state.marqueequityInfo, this.getLatestStockPrice(data["Time Series (1min)"])]
       })
     )
  }



  arrayOfEquitiesToFetch = () => {
    const equities = ["IXIC", "DJI", "NDAQ", "AAPL", "KO", "AMZN", "MSFT", "CVX", "GOOG", "APU", "GE", "WMT", "BAC", "BP", "JPM", "HPQ", "TWX", "EBAY", "DB"]
    equities.map(equity =>
      this.fetchEquityPrice(equity)
    )
    this.setState({doneFetchEquities: true})
  }

  getMaruquuText = () => {
    let textString = "  "
    this.state.marqueequityInfo.map(ticker =>
      textString = textString + `   ${ticker}:       ${ticker.price} `
    )
    return textString
  }


  render(){
    // console.log(this.getMaruquuText(), "mar")
    return(
      <div>
      <Router>
      <div>
        <NavBar />
        <div>
          <marquee className="news">This text will scroll from right to left</marquee>
        </div>
        <div>
           <Route exact path='/' render={() => <WelcomePage /> } />
            <Route exact path='/profile' component={Auth(MainPage)}  />
            <Route exact path='/login' render={()=> this.loggedIn() ? <Redirect to="/Profile" /> : <Login /> } />
            <Route exact path='/invest' component={Auth(InvestPage)} />
            <Route exact path='/transcations' component={Auth(TranscationsPage)} />
        </div>
      </div>
      </Router>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.postLogin.auth.isLoggedIn,
    currentUser: state.postLogin.currentUser
  }
}

export default connect(mapStateToProps, {CurrentUser})(App)
