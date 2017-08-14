 import React, { Component } from 'react';
 import { Card, Icon, Image } from 'semantic-ui-react'

export default class UserProfile extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <Card>
        <Image src='http://cdn.skim.gs/images/homer-simpson-doughnuts/what-homer-simpson-taught-us-about-doughnuts' />
        <Card.Content>
          <Card.Header>
            Welcome Homer Simpsons!
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined in 2017
            </span>
          </Card.Meta>
          </Card.Content>
          <Card.Content>
            <Card.Header>
              Your current Net Value Worth:
            </Card.Header>
          <Card.Description>
            $20,000
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Header>
            Account Balance
          </Card.Header>
          <a>
            <Icon name='user' />
              $0.00
          </a>
        </Card.Content>
      </Card>
    )
  }
}
