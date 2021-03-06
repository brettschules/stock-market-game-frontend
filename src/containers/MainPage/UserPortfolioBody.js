import React, { Component } from 'react';
import UserPortfolio from '../../components/MainPage/UserPortfolio';
import {FetchEquitesAlpha} from '../../actions/MainPage/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ReactInterval from 'react-interval';
import { Button, Header, Image, Modal } from 'semantic-ui-react'


class UserPortfolioBody extends Component{
  constructor(){
    super()
  }

  fetchEquitesAlpha() {
    this.props.arrayOfEquitySymbols.map(ticker => this.props.FetchEquitesAlpha(ticker))
  }

  componentDidMount() {
    this.fetchEquitesAlpha()
  }

  render(){
    return(
      <div>
        <div>
        <ReactInterval timeout={100500} enabled={true}
          callback={() => this.fetchEquitesAlpha()}
        />
        </div>
        <div className="accordion-portfolio">
          {this.props.equityInfo.length !== 0 ? this.props.equityInfo.map(equity =>
            <UserPortfolio equityInfo={equity} userId={this.props.userId} userEquities={this.props.userEquities} />
          ) : ""}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    equityInfo: state.equityInfo.equityInfo,
    loading: state.equityInfo.loading,
    userId: state.postLogin.currentUser.id,
    userEquities: state.userEquities.equites
  }
}

export default connect(mapStateToProps, {FetchEquitesAlpha})(UserPortfolioBody)
