import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Auth from './authorize'
import MainPage from './containers/MainPage'
import WelcomePage from './containers/WelcomePage'
import Login from './containers/WelcomePage/LoginFormModal'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import InvestPage from './containers/InvestPage'
import {CurrentUser} from './actions/WelcomePage/index'


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
  }


  render(){
    console.log(this.props, "tessting")
    return(
      <div>
      <Router>
      <div>


      <NavBar />
        <div>
           <Route exact path='/' render={() => <WelcomePage /> } />
            <Route exact path='/profile' component={Auth(MainPage)}  />
            <Route exact path='/login' render={()=> this.loggedIn() ? <Redirect to="/Profile" /> : <Login /> } />
            <Route exact path='/invest' component={Auth(InvestPage)} />
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
  }
}

export default connect(mapStateToProps, {CurrentUser})(App)
