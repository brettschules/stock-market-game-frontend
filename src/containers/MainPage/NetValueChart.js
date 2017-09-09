import React, { Component } from 'react';
import { VictoryPie, VictorySharedEvents, VictoryLabel, VictoryBar } from 'victory';
import {connect} from 'react-redux';

const data = [
  {x: "APU", y: 15},
  {x: "BABA", y: 4},
  {x: "VZ", y: 1},
  {x: "AAPL", y: 6},
  {x: "KO", y: 12}
];

var CSS_COLOR_NAMES = ["Blue ", "Orange", "DarkSlateBlue", "ForestGreen", "Red", "Crimson", "RebeccaPurple", "SaddleBrown", "SlateGray", "Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];



 class NetValueChart extends Component {
  constructor(){
    super()
  }

  render(){
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
              data={data}
            />
          </g>
        </VictorySharedEvents>
      </svg>
    </div>
    )
  }
}

function mapStateToProps(state) {
  userEquities: state.userEquities.equites
}
export default connect(mapStateToProps, null)(NetValueChart)
