import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
      <Menu>
        <Menu.Item name='About' />
        <Menu.Item name='How To Play' />
        <Menu.Item name='Contact' />
      </Menu>
      </footer>
    )
  }
}
