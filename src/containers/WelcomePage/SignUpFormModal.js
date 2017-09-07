import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link, Redirect } from 'react-router-dom'
import {CurrentUser, SignedUp, Login} from '../../actions/WelcomePage/index'
import { Button, Header, Form, Modal } from 'semantic-ui-react'

const BASEURL = process.env.REACT_APP_API

class SignUpFormModal extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      username: "",
      image: "",
      password: "",
      password_confirmation: ""
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,

    })
  }

  postSignUpInfoToDB = (dataParams) => {
    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataParams)
    }
    fetch(BASEURL + "users", postData)
      .then(resp => resp.json())
      .then(data => {
        if(!data.error){
          localStorage.setItem('jwt', data.token)
        }
        this.props.CurrentUser()
        this.props.SignedUp()
      })
  }

  // componentWillUnmount() {
  //   this.props.CurrentUser()
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    this.postSignUpInfoToDB(this.state)
    this.setState({name: '', username: '', image: '', password: '', password_confirmation: ''});
  }


  render(){
    return(
      <Modal open={true} size="small">
        <Modal.Header>Please enter your user information</Modal.Header>
        <Modal.Content >
      <Modal.Description>
      <Form>
          <Form.Field required >
            <Form.Input className="s-form-input" id='form-subcomponent-shorthand-input-first-name' label='First Name' name="name" placeholder='First Name' onChange={this.handleOnChange}/><br />
          </Form.Field>
          <Form.Field required >
            <Form.Input className="s-form-input" id='form-subcomponent-shorthand-input-user-name' label='User Name' name="username" placeholder='User Name' onChange={this.handleOnChange}/><br />
          </Form.Field>
          <Form.Field >
            <Form.Input className="s-form-input" id='form-subcomponent-shorthand-input-profile-picture-url' label='Profile Picture Url' name="image" placeholder='Profile Picture Url' onChange={this.handleOnChange}/><br />
          </Form.Field>
          <Form.Field required>
            <Form.Input className="s-form-input" type="password" id='form-subcomponent-shorthand-input-password' label='Password' placeholder='Password' name="password" onChange={this.handleOnChange}/><br />
          </Form.Field>
          <Form.Field required>
            <Form.Input className="s-form-input" type="password" id='form-subcomponent-shorthand-input-password-confirmation' label='Password Confirmation' placeholder='Password Confirmation' name="password_confirmation" onChange={this.handleOnChange}/><br />
          </Form.Field>
      </Form>
      </Modal.Description>
      </Modal.Content>
        <span className="cancel-page-button">
          <Button secondary size="large" as={Link} Link to={`/`}>Cancel</Button>
        </span>
        <span className="login-page-button">
          <Button color="blue" type="submit" onClick={this.handleSubmit}>Confirm </Button>
        </span>
      </Modal>
    )
  }
}

export default connect(null, {SignedUp, CurrentUser})(SignUpFormModal)
