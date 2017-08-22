import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {Login} from '../../actions/WelcomePage/index'
import {Link } from 'react-router-dom'
import {CurrentUser} from '../../actions/WelcomePage/index'
import { Button, Header, Form, Modal } from 'semantic-ui-react'


class LoginForm extends Component {
  constructor(){
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.Login(this.state)
    this.setState({username: '', password: ''});
  }

  componentWillUnmount() {
    this.props.CurrentUser()
  }
  // <Button type="submit" onClick={this.handleSubmit} >Login </Button>

  render(){
    return(
      <Modal open={true}>
        <Modal.Header>Please enter your Username and Password</Modal.Header>
        <Modal.Content >
      <Modal.Description>
      <form onSubmit={this.handleSubmit}>
        <label className="login-label">
          Username
        </label>
          <input className="login-input" type="text" name="username" value={this.state.username} onChange={this.handleOnChange} required/>
        <label className="login-label">
          Password
        </label>
        <input className="login-input" type="text" name="password" value={this.state.password} onChange={this.handleOnChange} required/>
        <input className="hide-button" type="submit" value=""/>
      </form>
      </Modal.Description>
      </Modal.Content>
        <span className="cancel-page-button">
          <Button secondary size="large" as={Link} Link to={`/`}>Cancel</Button>
        </span>
        <span className="login-page-button">
          <Button color="blue" type="submit" onClick={this.handleSubmit} >Login </Button>
        </span>
      </Modal>

    )
  }
}

export default connect(null, {Login, CurrentUser})(LoginForm)
