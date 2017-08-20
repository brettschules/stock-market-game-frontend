import React, { Component } from 'react';
import {connect} from 'react-redux'
import Transcations from '../../components/TranscationsPage/Transcations'
import { Table } from 'semantic-ui-react'

import {bindActionCreators} from 'redux';
// import {FetchUserEquities} from '../actions/MainPage/index'

class TranscationsPage extends Component{
  constructor(){
    super()
  }

  // componentWillMount() {
  //   this.props.FetchUserEquities()
  // }

  render(){
    return(
      <Table celled selectable>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell>Name</Table.HeaderCell>
             <Table.HeaderCell>Symbol</Table.HeaderCell>
             <Table.HeaderCell>Order</Table.HeaderCell>
             <Table.HeaderCell>Status</Table.HeaderCell>
             <Table.HeaderCell>Units</Table.HeaderCell>
             <Table.HeaderCell>Purchased Price</Table.HeaderCell>
             <Table.HeaderCell>Cost Basis</Table.HeaderCell>
             <Table.HeaderCell>Current Price Per Unit</Table.HeaderCell>
             <Table.HeaderCell>Market Value</Table.HeaderCell>
             <Table.HeaderCell>Gain/Loss</Table.HeaderCell>
           </Table.Row>
         </Table.Header>
         <Table.Body>
          {this.props.userEquities.map(equityInfo => <Transcations equityInfo={equityInfo}/>)}
         </Table.Body>
       </Table>

    )
  }
}


function mapStateToProps(state) {
  return {
    userEquities: state.userEquities.equites
  }
}

export default connect(mapStateToProps, null)(TranscationsPage)
