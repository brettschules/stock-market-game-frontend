import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const BASEURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='

const KEY = "MV8HZ4PAMIW9SLYH"

const chartOptions = {
  maintainAspectRatio: false,
  title: {
    display: true,
    text: "Daily Performance",
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



export default class Name extends Component{
  constructor(){
    super()
    this.state = {
      "isLoading": false,
      "results": [],
      "value": "",
      name: "",
      chartData: {}
    }
  }

  setTheStateForChartData = (jsonObject) => {
    let rawData = jsonObject["Time Series (Daily)"]
    let labels = Object.keys(rawData)
    let data = Object.values(rawData).map((value) => parseFloat(value["1. open"]))
    let chartData = {
      labels: labels.reverse(),
      datasets: [
        { label: this.props.equitySymbol,
          backgroundColor: 'rgb(5, 98, 17)',
          borderColor: 'rgb(4, 80, 21)',
          data: data.reverse()
        }
      ]
    }
    this.setState({chartData: chartData})
  }

  fetchHistoricalDataFromAPI = (equity) => {
    fetch(BASEURL + equity + '&apikey=' + KEY).then(resp => resp.json()).then(data => this.setTheStateForChartData(data))
  }

  componentDidMount() {
    this.fetchHistoricalDataFromAPI(this.props.equitySymbol)
  }

  render(){
    return(
      <div className="chart-data">
        <Line
          data={this.state.chartData}
          width={400}
          height={500}
          options={chartOptions}
        />
      </div>
    )
  }
}
