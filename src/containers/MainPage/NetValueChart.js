import React, { Component } from 'react';
import { VictoryPie, VictorySharedEvents, VictoryLabel, VictoryBar } from 'victory';
import {connect} from 'react-redux';


var CSS_COLOR_NAMES = ["Blue ", "Orange", "DarkSlateBlue", "ForestGreen", "Red", "Crimson", "RebeccaPurple", "SaddleBrown", "SlateGray", "Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

 class NetValueChart extends Component {

  xData = () => {
    return Object.keys(this.props.totalUnitsPurchasedForEquities)
  }

  yData = () => {
   return Object.values(this.props.totalUnitsPurchasedForEquities)
  }

  data = (xData, yData) => {
  var newArray=[]
  for(let i = 0; i < xData.length; i++) {
    if (yData[i] > 0) {
      newArray.push({x: xData[i], y: yData[i]})
    }
  }
  return newArray
  }

  render(){
    return(
    <div className="pie-chart">
      <svg viewBox="0 -30 450 350">
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
