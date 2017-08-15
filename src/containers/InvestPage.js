import React, { Component } from 'react';
import SearchBar from './InvestPage/SearchBarBody'
import InvestPreviewBody from './InvestPage/InvestPreviewBody'

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
