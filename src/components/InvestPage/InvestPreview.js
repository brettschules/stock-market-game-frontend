import React, { Component } from 'react';
import {connect} from 'react-redux';
import {FetchEquitesAlpha} from '../../actions/MainPage/index';
import {bindActionCreators} from 'redux';
import { Card, Icon, Button } from 'semantic-ui-react';


 export default class InvestPreview extends Component {
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
   currentDate = () => {
     let d = new Date();
     let month = d.getMonth()+1;
     return d.getFullYear() + "-" + month + "-" + d.getDate()
   }
   //
  //  currentTime = () => {
  //     let d = new Date();
  //     return d.getHours() + ":" + d.getMinutes() + ":" + d.getMilliseconds()
  //  }

  noteStatus = () => {

    return "The market is currently close right now.  Your order will be pending and will be excuted during the next market open"
  }

   checkIfBuyDuringMarketHours = () => {
     if (this.props.time.slice(11,20) > "09:30:00" && this.props.time.slice(11,20) < "16:00:00" && this.props.time === this.currentDate()) {
       return true
     } else {
       return false
     }
   }

   handleChange = (event) => {
     this.setState({
       shares: event.target.value
      })
   }

   handleSubmit = (event) => {
     event.preventDefault
     console.log(this.props.selectedEquity, this.props.price, this.props.time )
     console.log(this.checkIfBuyDuringMarketHours(), "Buy")
   }

  render() {
    return (
      <Card>
        <Card.Content header={this.props.selectedEquity} />
        <Card.Content>

        </Card.Content>
          {this.props.price}
        <Card.Content extra>
          <Icon name='user' />
          <form >
            <input type="number" value={this.state.shares} onChange={this.handleChange}/>

          </form>
        </Card.Content>
        <Card.Content>
          {isNaN(parseFloat(this.props.price, 10) * this.state.shares) ?
            "0.00" :
            (parseFloat(this.props.price, 10) * this.state.shares).toFixed(2)
          }
        </Card.Content>
        <Button onClick={this.handleSubmit}>Purchase</Button>
      </Card>
    )
  }
}
