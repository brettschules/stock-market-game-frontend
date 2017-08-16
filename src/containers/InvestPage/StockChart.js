// import React, { Component } from 'react';
// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux';
// import {Line} from 'react-chartjs-2';
//
//
// // const chartOptions =
//
// const sample =  {
//             labels: ["2017-07-31", "2017-06-30", "2017-05-31", "2017-04-28", "2017-03-31", "2017-02-28", "2017-01-31", "2016-12-30", "2016-11-30", "2016-10-31", "2016-09-30", "2016-08-31", "2016-07-29", "2016-06-30", "2016-05-31", "2016-04-29", "2016-03-31", "2016-02-29", "2016-01-29", "2015-12-31", "2015-11-30", "2015-10-30", "2015-09-30", "2015-08-31", "2015-07-31", "2015-06-30", "2015-05-29", "2015-04-30", "2015-03-31", "2015-02-27", "2015-01-30", "2014-12-31", "2014-11-28"],
//             datasets: [{
//             label: "My First dataset",
//             backgroundColor: 'rgb(60, 180, 75)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45],
//         }]
//     }
//
//     const chartOptions = {
//     // Elements options apply to all of the options unless overridden in a dataset
//     // In this case, we are setting the border of each bar to be 2px wide and green
//     maintainAspectRatio: false,
//     title:{
//       display: true,
//       text: "Stock Performance",
//       fontSize: 25,
//       position: "top",
//       fontColor: "black"
//     },
//     scales: {
//               xAxes: [
//                 {
//                     ticks: {
//                        callback: function(label, index, labels) {
//                          return label;
//                        }
//                     }
//                 }
//               ],
//               yAxes: [
//                 {
//                     ticks: {
//                        callback: function(label, index, labels) {
//                          return label;
//                        },
//                        fontSize: 18,
//                        fontColor: 'black'
//                     },
//
//                    display: true,
//
//                }
//               ]
//           },
//
//   }
//
//
// class StockChart extends Component{
//
//
//   constructor(){
//     super()
//     this.state = {
//       loading: true,
//       chartMonths: "",
//       chartData: 0
//     }
//   }
//   componentWillReceiveProps(nextProps) {
//     if (!nextProps.loading) {
//       this.setState({
//         loading: false,
//         chartMonths: this.getMonths(),
//         chartData: this.getData()
//       })
//     }
//   }
//
//
//
// chartData = () => {
//   return  {
//               labels: [this.state.chartMonths],
//               datasets: [{
//               label: "My First dataset",
//               backgroundColor: 'rgb(60, 180, 75)',
//               borderColor: 'rgb(255, 99, 132)',
//               data: [this.state.chartData],
//           }]
//       }
// }
//
// getMonths = () => {
//
// return  Object.keys(this.props.chartData)
//
// }
//
// getData = () => {
// // return  Object.keys(this.props.chartData).map(value => parseFloat(value["1. open"]))
// [1,2,3,4]
// }
//   render(){
//     if (this.state.loading !== false) {
//       console.log(this.state.chartMonths, "data")
//     }
//     return (
//       <div>
//         { this.state.loading ? null :
//             <Line
//               data={this.chartData()}
//               width={300}
//               height={200}
//               options={chartOptions}
//             />
//
//       }
//       </div>
//     )
//   }
// }
//
// function mapStateToProps(state) {
//   console.log(state.fetchHistoricalData.historicalData, "checking state")
//   return {
//     loading: state.fetchHistoricalData.loading,
//      chartData: state.fetchHistoricalData.historicalData
//   }
// }
//
// export default connect(mapStateToProps, null)(StockChart)
