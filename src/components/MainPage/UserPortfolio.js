import React, { Component } from 'react';
import { Modal, Header } from 'semantic-ui-react'
import MoreInfoModal from './MoreInfoModal'
import { Accordion, Icon, Button } from 'semantic-ui-react'


export default class UserPortfolio extends Component {
  constructor(){
    super()
    this.state = {
      moreInfoModal: false
    }
  }

  handleMoreInfoClick = () => {
    if (this.state.moreInfoModal === false)
      this.setState({ moreInfoModal: true })
  }

  handleMoreInfoClose = () => {
    if (this.state.moreInfoModal)
      this.setState({ moreInfoModal: false })
  }

  render(){
    return (
      <div>
        <Accordion fluid={true} styled className="accordion">
        <Accordion.Title >
          <Icon name='dropdown' />
          {this.props.equityInfo.symbol} {this.props.equityInfo.price}<span className="tickerPrice"></span>
        </Accordion.Title>
        <Accordion.Content>
        <table>
          <th>
            Number of Shares:
          </th>
          <tr>
            <th id="market-value">
              Market Value:
            </th>
            <td id="more-info" onClick={this.handleMoreInfoClick}>
              <Button>More Info</Button>
            </td>
          </tr>
        </table>
        </Accordion.Content>
        </Accordion>
        <MoreInfoModal open={this.state.moreInfoModal} handleMoreInfoClose={this.handleMoreInfoClose} equitySymbol={this.props.equityInfo.symbol}/>
      </div>
    )
  }
}
