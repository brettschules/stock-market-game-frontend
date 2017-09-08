import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class Footer extends Component {
  render() {
    return (
      <div>
      <Menu>
        <Menu.Item as={Link} to="/about" name="About" />
        <Menu.Item as={Link} to="/howtoplay" name='How To Play' />
        <Menu.Item  as={Link} to="/contact" name='Contact' />
      </Menu>
      </div>
    )
  }
}
