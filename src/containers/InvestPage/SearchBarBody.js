import _ from 'lodash'
import React, { Component } from 'react'
import ListOfAllCompainesAPI from '../../ListOfAllCompaniesAPI'
import { Search, Grid, Header } from 'semantic-ui-react'
import {SelectedEquityFromSearch} from '../../actions/InvestPage/index';
import {FetchEquitesAlpha} from '../../actions/MainPage/index';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';


class SearchBar extends Component {
  constructor() {
    super()
    this.state={
      name: ""
    }
  }

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })


  handleResultSelect = (e, {result}) => {
    this.props.SelectedEquityFromSearch(result.title)
    this.props.FetchEquitesAlpha(result.title)
    this.setState({ value: result.title })
  }
  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.description)

      this.setState({
        isLoading: false,
        results: _.filter(  ListOfAllCompainesAPI
, isMatch),
      })
    }, 500)
  }

  render() {
    <Grid.Column width={8}>
      <Header>State</Header>
      <pre>{JSON.stringify(this.state, null, 2)}</pre>
      <Header>Options</Header>
      <pre>{JSON.stringify(ListOfAllCompainesAPI, null, 2)}</pre>
    </Grid.Column>
    const { isLoading, value, results } = this.state
    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            placeholder={"Search for name of equity"}
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            {...this.props}

          />
          </Grid.Column>
      </Grid>
    )
  }
}


export default connect(null, {SelectedEquityFromSearch, FetchEquitesAlpha})(SearchBar)
