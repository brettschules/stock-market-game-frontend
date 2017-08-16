import React, { Component } from 'react';
import SearchBar from './InvestPage/SearchBarBody'
import InvestPreviewBody from './InvestPage/InvestPreviewBody'
// import StockChart from './InvestPage/StockChart'

export default class Name extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <SearchBar />
        <InvestPreviewBody />
      </div>

    )
  }
}
