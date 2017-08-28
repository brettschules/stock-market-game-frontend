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
import SignUpFormModal from './containers/WelcomePage/SignUpFormModal'
import InvestPage from './containers/InvestPage'
import ScrollBar from './ScrollBar'
import Footer from'./Footer'
import TranscationsPage from './containers/TranscationsPage'
import {CurrentUser} from './actions/WelcomePage/index'


class App extends Component {

  // signedIn = () => {
  //   debugger
  //   if (localStorage.getItem('jwt') && this.props.isLoggedIn)
  //     this.setState({signedUp: true})
  // }

  loggedIn = () => {
    return (localStorage.getItem('jwt') && this.props.isLoggedIn) ? true : false
  }

  componentWillMount() {
    this.props.CurrentUser()
  }


  render(){
    return(
      <div className="body">
      <Router>
      <div>
        <NavBar />
        <div>
          <ScrollBar />
        </div>
        <div>
           <Route exact path='/' render={() => <WelcomePage /> } />
            <Route exact path='/profile' component={Auth(MainPage)}  />
            <Route exact path='/login' render={()=> this.loggedIn() ? <Redirect to="/Profile" /> : <Login /> } />
            <Route exact path='/signup' render={()=> this.props.signedUp ? <Redirect to="/Profile" /> : <SignUpFormModal /> } />
            <Route exact path='/invest' component={Auth(InvestPage)} />
            <Route exact path='/transcations' component={Auth(TranscationsPage)} />
        </div>
      </div>
      </Router>
        <footer>
          <Footer />
        </footer> </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.postLogin.auth.isLoggedIn,
    currentUser: state.postLogin.currentUser,
    signedUp: state.signedUp.isSignedUp
  }
}

export default connect(mapStateToProps, {CurrentUser})(App)
