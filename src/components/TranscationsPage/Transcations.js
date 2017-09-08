import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {FetchEquitesAlpha} from '../../actions/MainPage/index';
import { Table, Button, Modal } from 'semantic-ui-react'

const KEY = "MV8HZ4PAMIW9SLYH"
const BASEURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="
const ONEMINUTEINVERVALS = "&interval=1min&apikey="

export default class Transcations extends Component{
   constructor() {
     super()
     this.state = {
       equityPrice: 0
     }
   }

   componentWillMount(){
     this.fetchEquityPrice(this.props.equityInfo.symbol)
   }

  //  Fetched API locally to ensure price matches currenty equity

   fetchEquityPrice = (equity) => {
      fetch(BASEURL + equity + ONEMINUTEINVERVALS + KEY)
      .then(resp => resp.json())
      .then(data =>
        this.setState({

          equityPrice: this.getLatestStockPrice(data["Time Series (1min)"])
        })
      )
   }

  getLatestStockPrice = (equityObj) => {
     let first;
     for (var i in equityObj) {
       if (equityObj.hasOwnProperty(i)) {
         first = equityObj[i];
         break;
       } else {
         return ""
       }
     }
     return first["2. high"]
   }

   costBasis = () => {
    return (parseFloat(this.props.equityInfo.units, 10) *  parseFloat(this.props.equityInfo.price_purchased, 10)).toFixed(2)
   }

  //  calling functions with localeString formater won't work
   costBasisToUSDFormat = () => {
    return (parseFloat(this.props.equityInfo.units, 10) *  parseFloat(this.props.equityInfo.price_purchased, 10)).toLocaleString(undefined, {style: 'currency', currency: 'USD'})
   }

   marketValue = () => {
    return (parseFloat(this.props.equityInfo.units, 10) *  parseFloat(this.state.equityPrice, 10)).toFixed(2)
   }

   marketValueToUSDFormat = () => {
    return (parseFloat(this.props.equityInfo.units, 10) *  parseFloat(this.state.equityPrice, 10)).toLocaleString(undefined, {style: 'currency', currency: 'USD'})
   }

  render(){

    return(
      <Table.Row>
        <Table.Cell>{this.props.equityInfo.name}</Table.Cell>
        <Table.Cell>{this.props.equityInfo.symbol}</Table.Cell>
        <Table.Cell>{this.props.equityInfo.order}</Table.Cell>
        <Table.Cell>{this.props.equityInfo.status}</Table.Cell>
        <Table.Cell>{this.props.equityInfo.units}</Table.Cell>
        <Table.Cell>{this.props.equityInfo.price_purchased.toLocaleString(undefined, {style: 'currency', currency: 'USD'})}</Table.Cell>
        <Table.Cell>{this.costBasisToUSDFormat()}</Table.Cell>
        <Table.Cell>{this.state.equityPrice.toLocaleString(undefined, {style: 'currency', currency: 'USD'})}</Table.Cell>
        <Table.Cell>{this.marketValueToUSDFormat()}</Table.Cell>
        <Table.Cell>{parseFloat((this.marketValue() - this.costBasis())).toLocaleString(undefined, {style: 'currency', currency: 'USD'})}</Table.Cell>
      </Table.Row>
    )
  }
}
