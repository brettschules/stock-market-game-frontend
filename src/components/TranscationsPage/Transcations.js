import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

export default class Transcations extends Component{

  render(){
    return(
      <Table.Row>
        <Table.Cell>{this.props.equityInfo.name}</Table.Cell>
        <Table.Cell>{this.props.equityInfo.symbol}</Table.Cell>
        <Table.Cell>{this.props.equityInfo.order}</Table.Cell>
        <Table.Cell>{this.props.equityInfo.status}</Table.Cell>
        <Table.Cell>{this.props.equityInfo.units}</Table.Cell>
        <Table.Cell>{this.props.equityInfo.price_purchased}</Table.Cell>
        <Table.Cell>{(parseFloat(this.props.equityInfo.units, 10) *  parseFloat(this.props.equityInfo.price_purchased, 10)).toFixed(2)}</Table.Cell>
      </Table.Row>
    )
  }
}
