import React, { Component } from 'react';

const KEY = "MV8HZ4PAMIW9SLYH"
const BASEURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="
const ONEMINUTEINVERVALS = "&interval=1min&apikey="

export default class ScrollBar extends Component{
  constructor(){
    super()
    this.state = {
      marqueequityInfo: []
    }
  }

  // Fetched API locally to get batch data which is not possible with redux

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
    // if (typeof first !== "undefined")
      return first["2. high"]
  }

 fetchEquityPrice = (equity) => {
    fetch(BASEURL + equity + ONEMINUTEINVERVALS + KEY)
    .then(resp => resp.json())
    .then(data =>
      this.setStateForMarqueeInfo(this.getLatestStockPrice(data["Time Series (1min)"]), equity)
    )
 }

 setStateForMarqueeInfo = (data, equity) => {
   this.setState({
     marqueequityInfo: [...this.state.marqueequityInfo, {equity, data}]
   })
 }

 arrayOfEquitiesToFetch = () => {
   const equities = ["IXIC", "NDAQ", "AAPL", "KO", "AMZN", "MSFT", "CVX", "GOOG", "APU", "GE", "WMT", "BAC", "BP", "JPM", "HPQ", "TWX", "EBAY", "DB"]
   equities.map(equity =>
     this.fetchEquityPrice(equity)
   )
 }

 getMaruquuText = () => {
   let textString = "  "
   this.state.marqueequityInfo.map(ticker =>
     textString = textString + `   ${ticker.equity}:       ${ticker.data} `
   )
   return textString
 }

 componentDidMount() {
    this.arrayOfEquitiesToFetch()
 }

  render(){
    return(
      <div className="marquee-div">
        <marquee>{this.getMaruquuText()}</marquee>
      </div>
    )
  }
}
