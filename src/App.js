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
import TranscationsPage from './containers/TranscationsPage'
import {CurrentUser, FinancialNews} from './actions/WelcomePage/index'


class App extends Component{

  loggedIn = () => {
    if (localStorage.getItem('jwt') && this.props.isLoggedIn) {
      return true
    } else {
      return false
    }
  }

  componentWillMount() {
    this.props.CurrentUser()
    // this.props.FinancialNews()
  }


  render(){
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.postLogin.auth.isLoggedIn,
    financialNews: state.news,
    currentUser: state.postLogin.currentUser
  }
}

export default connect(mapStateToProps, {FetchUserEquities, CurrentUser, FinancialNews})(App)
