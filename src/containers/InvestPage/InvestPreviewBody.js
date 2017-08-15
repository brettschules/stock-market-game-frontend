import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {FetchEquitesAlpha} from '../../actions/MainPage/index';
import InvestPreview from '../../components/InvestPage/InvestPreview'


 class InvestPreviewBody extends Component {
  render() {
    return(
      <div>
        <InvestPreview selectedEquity={this.props.selectedEquity} price={this.props.price} time={this.props.time}/>
      </div>
    )
  }
 }

 function mapStateToProps(state) {

    if (state.equityInfo.equityInfo.length != 0) {
      return {
       selectedEquity: state.selectedEquity.equity,
       price: state.equityInfo.equityInfo[0].price,
       time: state.equityInfo.equityInfo[0].time
     }
   } else {
     return {
       selectedEquity: "",
       price: "0.00"
     }
   }
 }
 export default connect(mapStateToProps, null)(InvestPreviewBody)
