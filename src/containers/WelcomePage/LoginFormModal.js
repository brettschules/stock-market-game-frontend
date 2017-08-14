import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {Login} from '../../actions/WelcomePage/index'
import {Link } from 'react-router-dom'
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

  render(){
    console.log(this.props)
    return(
      <Modal open={true}>
        <Modal.Header>Please enter you Username and Password</Modal.Header>
        <Modal.Content >
      <Modal.Description>
      <form >
        <label>
          Username
        </label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange}/>
        <label>
          Password
        </label>
        <input type="text" name="password" value={this.state.password} onChange={this.handleOnChange}/>
      </form>
      </Modal.Description>
      </Modal.Content>
      <Button as={Link} Link to={`/`}>Cancel</Button>
      <Button type="submit" onClick={this.handleSubmit} >Login </Button>
      </Modal>

    )
  }
}

export default connect(null, {Login})(LoginForm)
