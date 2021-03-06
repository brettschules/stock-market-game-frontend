import React, { Component } from 'react';
import {connect} from 'react-redux';
import {FetchEquitesAlpha} from '../../actions/MainPage/index';
import {bindActionCreators} from 'redux';
import {SearchBarValue} from '../../actions/InvestPage/index';
import { Card, Icon, Button, Image } from 'semantic-ui-react';

const BASEURL = process.env.REACT_APP_API

 class InvestPreview extends Component {
  constructor() {
    super()
    this.state = {
      shares: 0,
      message: ""
    }
   }

  month = () => {
     let d = new Date();
     let m = d.getMonth()+1;
     let month = m.toString()
     if (month.length === 1) {
       return "0" + month
     } else {
       return month
     }
  }

  date = () => {
    let d = new Date()
    if (d.getDate().toString().length === 1) {
      return "0" + d.getDate()
    } else {
      return d.getDate()
    }
  }

   currentDate = () => {
     let d = new Date();
     return d.getFullYear() + "-" + this.month() + "-" + this.date()
   }


  noteStatus = () => {
    if(this.checkIfBuyDuringMarketHours === "Excuted") {
      return "Your order has been Excuted!"
    } else if (this.checkIfBuyDuringMarketHours === "Excuted") {
      return "The market is currently close right now.  Your order will be pending and will be excuted during the next market open"
    }
  }

   checkIfBuyDuringMarketHours = () => {
     if (this.props.time.slice(11,20) > "09:30:00" && this.props.time.slice(11,20) < "16:00:00" && this.props.time.slice(0,10) === this.currentDate()) {
       this.props.SearchBarValue("")
       this.setState({shares: 0})
       return "Excuted"
     } else {
       return "Pending"
     }
   }

   handleChange = (event) => {
     this.setState({
       shares: event.target.value
      })
   }

   dataParams = () => {
     return {
       name: this.props.equityName,
       symbol: this.props.equitySymbol,
       price_purchased: this.props.price,
       units: this.state.shares,
       status: this.checkIfBuyDuringMarketHours(),
       order: "buy",
       user_id: this.props.userInfo.id
     }
   }

   postStockToDB = () => {
     const postData = {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(this.dataParams())
     }
     fetch(BASEURL + 'stocks', postData)
   }

  updateUserAccountBalanceToDB = () => {
    const postData = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({account_balance: this.handleAccountBalanceRemaining().toFixed(2)})
     }
    fetch(BASEURL + 'users/' + this.props.currentUserInfo.id, postData)
  }

  shouldUpdateAccountBalance = () => {
    if (this.checkIfBuyDuringMarketHours() === "Excuted") {
      this.setState({
        message: `Your order of ${this.props.equityName} for ${this.props.price} has been executed!`
      })
       this.updateUserAccountBalanceToDB()
    } else {
        this.setState({
          message: `The Market is currently not open, your order will be pending and will be excuted the next market open`
        })
      return null
    }
  }

  handleSubmit = (event) => {
     event.preventDefault
     this.postStockToDB()
     this.shouldUpdateAccountBalance()
     this.props.SearchBarValue("")
     this.setState({shares: 0})
   }

  handleTotalEquityPrice = () => {
    if (isNaN(parseFloat(this.props.price, 10) * this.state.shares))
      return "0.00"
    return (parseFloat(this.props.price, 10) * this.state.shares).toFixed(2)
  }

  handleAccountBalanceRemaining = () => {
    return parseFloat(this.props.currentUserInfo.account_balance - this.handleTotalEquityPrice(), 10)
  }

  render() {
    return (
      <div>
      <Card >
          {this.props.searchBarValue !== "" ? <Card.Content header={this.props.name} /> : <Card.Content description="Start Searching!" />}
        {this.props.searchBarValue !== "" ? <Card.Content>{this.props.price}</Card.Content> : <Card.Content description="0.00" />}
        <Card.Content extra >
          <form >
            <input className="stock-number-input" type="number" min="0" value={this.state.shares} onChange={this.handleChange}/>
          </form>
        </Card.Content>
        <Card.Content >
        <div className="price-total">
        <Icon name='dollar' color='green' size="large"/>
          {this.handleTotalEquityPrice()}
          </div>
        </Card.Content>
        <div className="purchse-button">
        <Button onClick={this.handleSubmit} color="green" size="massive">Purchase</Button>
        </div>
        {this.state.message != "" ?
        <Card.Content extra>
          <p className="messages">
            {this.state.message}
          </p>
        </Card.Content>
          : null
        }
      </Card>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.postLogin.currentUser,
    searchBarValue: state.searchBarValue.value,
    equitySymbol: state.selectedEquity.equitySymbol,
    equityName: state.selectedEquity.equity,
    currentUserInfo: state.postLogin.currentUser
  }

}
export default connect(mapStateToProps, {FetchEquitesAlpha, SearchBarValue})(InvestPreview)
