import React, { Component } from 'react';
import {connect} from 'react-redux';
import {FetchEquitesAlpha} from '../../actions/MainPage/index';
import {bindActionCreators} from 'redux';
import { Card, Icon, Button } from 'semantic-ui-react';


 class InvestPreview extends Component {
   constructor() {
     super()
     this.state = {
       shares: 0,
       balance: 10000
     }
   }

  //  currentFullTime = () => {
  //    let d = new Date();
  //    let month = d.getMonth()+1;
  //    return d.getFullYear() + "-" + month + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getMilliseconds()
  //  }
   //

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

   currentDate = () => {
     let d = new Date();
     return d.getFullYear() + "-" + this.month() + "-" + d.getDate()
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
     this.props.FetchEquitesAlpha(this.props.name)

     return {
       name: "testStock",
       symbol: this.props.name,
       price_purchased: this.props.price,
       units: this.state.shares,
       status: this.checkIfBuyDuringMarketHours(),
       order: "buy",
       user_id: this.props.userInfo.user_id
     }
   }

   postStockToDB = () => {
     const postData = {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(this.dataParams(this.dataParams()))
     }
     fetch('http://localhost:3000/api/v1/stocks', postData)
   }

   handleSubmit = (event) => {
     event.preventDefault
     this.postStockToDB()
     console.log(this.currentDate(), "date", this.props.time.slice(0,10) )
     console.log(this.checkIfBuyDuringMarketHours(), "Buy")
   }

  render() {
    console.log(this.props.searchBarValue, "me")
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
          {isNaN(parseFloat(this.props.price, 10) * this.state.shares) ?
            "0.00" :
            (parseFloat(this.props.price, 10) * this.state.shares).toFixed(2)
          }
          </div>
        </Card.Content>
        <div className="purchse-button">
        <Button onClick={this.handleSubmit} color="green" size="massive">Purchase</Button>
        </div>
      </Card>
      <p>
        {this.noteStatus()}
      </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.postLogin.userInfo,
    searchBarValue: state.searchBarValue.value
  }

}
export default connect(mapStateToProps, {FetchEquitesAlpha})(InvestPreview)
