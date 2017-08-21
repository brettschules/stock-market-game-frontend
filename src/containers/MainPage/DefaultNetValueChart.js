import React, { Component } from 'react';
import { VictoryPie, VictorySharedEvents, VictoryLabel, VictoryBar } from 'victory';

var CSS_COLOR_NAMES = ["Blue"]
export default class DefaultNetValueChart extends Component{


  render(){
    return (
      <div>
        <p>There is currently nothing to display here</p>
        <VictoryPie
        colorScale={["orange", "blue", "purple"]}
        style={{ labels: { fill: "white", fontSize: 10, fontWeight: "bold" } }}
        data={[
          { x: "There is currently", y: 35 },
          { x: "nothing to", y: 40 },
          { x: "display here", y: 55 }
        ]}
        />
      </div>
    )
  }
}
