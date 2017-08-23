import React, {Component} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import UserChart from './UserChart'


export default class SellModal extends Component{
  constructor(){
    super()
    this.state= {
      numberOfShares: 1,
      totalSellPrice: 0
    }
  }

  handleConfirm = () => {

  }

  handleOnChange = (event) => {
    this.setState({
      numberOfShares: event.target.value
    })
  }

  totalSellPriceChange = () => {
      return parseFloat(this.state.numberOfShares * this.props.equityPrice, 10).toFixed(2)
  }

  handleBothFunctionsOnChange = (event) => {
    this.handleOnChange(event)
    this.totalSellPriceChange()
  }
  componentWillMount() {
    this.setState({
      numberOfShares: this.props.numberOfShares,
    })
  }
  render(){
    return(
      <Modal open={this.props.open}>
        <Modal.Header>Equity To Sell<span>{this.props.equitySymbol}</span></Modal.Header>
        <Modal.Content >
      <Modal.Description>
      <form onSubmit={this.handleSubmit}>
        <label >
          Number Of Shares
        </label>
        <input type="number" min="1" max={this.props.numberOfShares} value={this.state.numberOfShares} onChange={this.handleBothFunctionsOnChange} />
        <input className="hide-button" type="submit" value=""/>
        <Modal.Content>
          Current Price:
        </Modal.Content>
          <span>{this.props.equityPrice}</span>
        <Modal.Content>
          Total to Sell:
        </Modal.Content>
        <span>{this.totalSellPriceChange()}</span>
      </form>
      </Modal.Description>
      </Modal.Content>
        <span >
          <Button secondary size="large" onClick={this.props.handleMoreInfoClose}>Cancel</Button>
        </span>
        <span >
        <Button color="blue" onClick={this.handleConfirm}>Confirm</Button>
        </span>
      </Modal>

    )
  }
}
