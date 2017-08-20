import React, { Component } from 'react';
import { VictoryPie, VictorySharedEvents, VictoryLabel, VictoryBar } from 'victory';
import {connect} from 'react-redux';

const x = ["APU", "VZ"]
const y = [6, 3]

const data = () => {



var newArray=[]
for(let i = 0; i < x.length; i++) {
  newArray.push({x: x[i], y: y[i]})
}
return newArray
}
  // ["APU", "VZ"].map(name =>  {x: name })
  // {x: "APU"},
  // {x: "BABA", y: 4},
  // {x: "VZ", y: 1},
  // {x: "AAPL", y: 6},
  // {x: "KO", y: 12}


var CSS_COLOR_NAMES = ["Blue ", "Orange", "DarkSlateBlue", "ForestGreen", "Red", "Crimson", "RebeccaPurple", "SaddleBrown", "SlateGray", "Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];



 class NetValueChart extends Component {
  constructor(){
    super()
  }

  xData = () => {
    return Object.keys(this.props.totalUnitsPurchasedForEquities)
   // const y = Object.keys(this.props.totalUnitsPurchasedForEquities)
 }

 yData = () => {
   return Object.values(this.props.totalUnitsPurchasedForEquities)
  // const y = Object.keys(this.props.totalUnitsPurchasedForEquities)
}
   data = (xData, yData) => {





  var newArray=[]
  for(let i = 0; i < this.xData.length; i++) {
    newArray.push({x: this.xData[i], y: this.yData[i]})
  }
  return newArray
  }

  render(){
    console.log(this.data(this.xData(), this.yData()), "data")
    console.log(Object.keys(this.props.totalUnitsPurchasedForEquities))

    console.log(Object.values(this.props.totalUnitsPurchasedForEquities))
    return(


    <div>
      <svg viewBox="0 0 450 350">
        <VictorySharedEvents
        events={[{
          childName: ["pie"],
          target: "data",
          eventHandlers: {
            onMouseOver: () => {
              return [{
                childName: ["pie"],
                mutation: (props) => {
                  return {
                    style: Object.assign({}, props.style, {fill: "Black"})
                  };
                }
              }];
            },
            onMouseOut: () => {
              return [{
                childName: ["pie"],
                mutation: () => {
                  return null;
                }
              }];
            }
          }
        }]}
        >
          <g transform={"translate(0, -75)"}>
            <VictoryPie name="pie"
              colorScale={CSS_COLOR_NAMES}
              labelRadius={100}
              innerRadius={65}
              standalone={false}
              style={{ labels: { fill: "white", fontSize: 10, fontWeight: "bold" } }}
              data={this.data(this.xData(), this.yData())}
            />
          </g>
        </VictorySharedEvents>
      </svg>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userEquities: state.userEquities.equites,
    totalUnitsPurchasedForEquities: state.userEquities.totalUnitsPurchasedForEquities
  }
}

export default connect(mapStateToProps, null)(NetValueChart)
