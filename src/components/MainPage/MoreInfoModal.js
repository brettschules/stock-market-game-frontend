import React, {Component} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import UserChart from './UserChart'


export default class MoreInfoModal extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <Modal open={this.props.open}>
        <Modal.Header> Finacial Information for: {this.props.equitySymbol}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
          <Modal.Description>
            <table>
              <tr>
                <th>Finacials</th>
                <th>Chart</th>
              </tr>
              <tr>
                <td>Finacial info here</td>
                <td><UserChart equitySymbol={this.props.equitySymbol}/></td>
              </tr>
            </table>
          </Modal.Description>
        </Modal.Content>
        <Button onClick={this.props.handleMoreInfoClose}>Close</Button>
      </Modal>
    )
  }
}
