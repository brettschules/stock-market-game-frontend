import _ from 'lodash'
import React, {Component} from 'react'
import ListOfAllCompainesAPI from '../../ListOfAllCompaniesAPI'
import {Search, Grid, Header} from 'semantic-ui-react'
import {SelectedEquityFromSearch} from '../../actions/InvestPage/index';
import {FetchEquitesAlpha} from '../../actions/MainPage/index';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {Line} from 'react-chartjs-2';

const BASEURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol='
const KEY = "MV8HZ4PAMIW9SLYH"

// Chart JS libray requires the data before declaring it props, hence fetching the data here instead using redux.

const chartOptions = {
  maintainAspectRatio: false,
  title: {
    display: true,
    text: "Stock Performance",
    fontSize: 25,
    position: "top",
    fontColor: "black"
  },
  scales: {
    xAxes: [
      {
        ticks: {
          callback: function(label, index, labels) {
            return label;
          }
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          callback: function(label, index, labels) {
            return label;
          },
          fontSize: 18,
          fontColor: 'black'
        },

        display: true
      }
    ]
  }
}

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      "isLoading": false,
      "results": [],
      "value": "",
      name: "",
      chartData: {}
    }
  }

  chartData = (months, values) => {
    return ({
      chartData: {
        labels: months,
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: 'rgb(94, 9, 108)',
            borderColor: 'rgb(255, 99, 132)',
            data: values
          }
        ]
      }
    })
  }

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({isLoading: false, results: [], value: ''})

  fetchHistoricalDataFromAPI = (equity) => {
    fetch(BASEURL + equity + '&apikey=' + KEY).then(resp => resp.json()).then(data => this.setTheStateForChartData(data))
  }

  setTheStateForChartData = (jsonObject) => {
    let rawData = jsonObject["Monthly Time Series"]
    let labels = Object.keys(rawData)
    let data = Object.values(rawData).map((value) => parseFloat(value["1. open"]))
    let chartData = {
      labels: labels.reverse(),
      datasets: [
        {
          backgroundColor: 'rgb(7, 22, 119)',
          borderColor: 'rgb(7, 22, 119)',
          data: data.reverse()
        }
      ]
    }
    this.setState({chartData: chartData})
  }

  handleResultSelect = (e, {result}) => {
    this.props.SelectedEquityFromSearch(result.description)
    this.props.FetchEquitesAlpha(result.title)
    this.fetchHistoricalDataFromAPI(result.title)
    this.setState({displayChart: true})
    this.setState({value: result.title})
  }

  handleSearchChange = (e, {value}) => {
    this.setState({isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1)
        return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.description)

      this.setState({
        isLoading: false,
        results: _.filter(ListOfAllCompainesAPI, isMatch)
      })
    }, 500)
  }

  render() {
    <Grid.Column width={8}>
         <Header>State</Header>
         <Header>Options</Header>
         <pre>{JSON.stringify(ListOfAllCompainesAPI, null, 2)}</pre>
       </Grid.Column>
    const { isLoading, value, results } = this.state
    return (
      <div>
      <div className="invest-preview">
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
       </div>
          <div className="line-graph">
          <Line
          data={this.state.chartData}
          width={1500}
          height={500}
          options={chartOptions}
        />
        </div>
      </div>
    )
  }
}






export default connect(null, {SelectedEquityFromSearch, FetchEquitesAlpha})(SearchBar)
