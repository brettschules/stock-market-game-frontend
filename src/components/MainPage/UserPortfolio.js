import React, { Component } from 'react';
import { Modal, Header } from 'semantic-ui-react'
import MoreInfoModal from './MoreInfoModal'
import SellModal from './SellModal'
import {connect} from 'react-redux'
import { Accordion, Icon, Button } from 'semantic-ui-react'


class UserPortfolio extends Component {
  constructor(){
    super()
    this.state = {
      moreInfoModal: false,
      sellModal: false
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

  handleSellModalOpen = () => {
    if (this.state.sellModal === false)
      this.setState({ sellModal: true })
  }

  handleSellModalClose = () => {
    if (this.state.sellModal)
      this.setState({ sellModal: false })
  }

  numberOfShares = () => {
    if (this.props.totalUnitsPurchasedForEquities.length !== 0 && this.props.equityInfo.symbol !== "")
      return this.props.totalUnitsPurchasedForEquities[this.props.equityInfo.symbol]
    return ""
  }

  render() {
    return (
      <div className="accordion-fold">
        <Accordion fluid={true} styled >
          <Accordion.Title >
            <Icon name='dropdown' />
            {this.props.equityInfo.symbol} {this.props.equityInfo.price}  <span className="sell-button"><Button onClick={this.handleSellModalOpen} floated="right" color="red">Sell</Button></span><span className="tickerPrice"></span>
          </Accordion.Title>
          <Accordion.Content>
            <table>
              <th className="accordion-content-shares">Number of Shares: {this.numberOfShares()}</th>
              <tr>
                <th className="accordion-content-market">
                  Market Value:   {parseFloat(this.numberOfShares() * this.props.equityInfo.price, 10).toFixed(2).toLocaleString()}
                </th>
                <td className="more-info" onClick={this.handleMoreInfoClick}>
                  <Button floated="right" color="blue">More Info</Button>
                </td>
              </tr>
            </table>
          </Accordion.Content>
        </Accordion>
        <MoreInfoModal open={this.state.moreInfoModal} handleMoreInfoClose={this.handleMoreInfoClose} equitySymbol={this.props.equityInfo.symbol}/>
        <SellModal open={this.state.sellModal} handleMoreInfoClose={this.handleSellModalClose} numberOfShares={this.numberOfShares()} equitySymbol={this.props.equityInfo.symbol} equityPrice={this.props.equityInfo.price}/>
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
