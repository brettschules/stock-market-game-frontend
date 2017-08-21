import React, { Component } from 'react';
import { Modal, Header } from 'semantic-ui-react'
import MoreInfoModal from './MoreInfoModal'
import {connect} from 'react-redux'
import { Accordion, Icon, Button } from 'semantic-ui-react'


class UserPortfolio extends Component {
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

  numberOfShares = () => {
    if (this.props.totalUnitsPurchasedForEquities.length !== 0 && this.props.equityInfo.symbol !== "")
      return this.props.totalUnitsPurchasedForEquities[this.props.equityInfo.symbol]
    return ""
  }

  render() {
    return (
      <div>
        <Accordion fluid={true} styled className="accordion">
          <Accordion.Title >
            <Icon name='dropdown' />
            {this.props.equityInfo.symbol} {this.props.equityInfo.price}<span className="tickerPrice"></span>
          </Accordion.Title>
          <Accordion.Content>
            <table>
              <th>Number of Shares: {this.numberOfShares()}</th>
              <tr>
                <th id="market-value">
                  Market Value:   {parseFloat(this.numberOfShares() * this.props.equityInfo.price, 10).toFixed(2).toLocaleString()}
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

function mapStateToProps(state) {
  return {
    totalUnitsPurchasedForEquities: state.userEquities.totalUnitsPurchasedForEquities
  }
}

export default connect(mapStateToProps, null)(UserPortfolio)
