import React from "react";

import { VictoryPie } from "victory";
/*
 *
 * Read more about this chart libray here:
 * https://formidable.com/open-source/victory/docs/
 *
 */

const fakeData = [
  { x: "cats", y: 55, fill: "#0a2" },
  { x: "dogs", y: 124, fill: "blue" },
  { x: "rabbits", y: 20, fill: "orange" }
];

const ChartDemo  = () => (
  <div className="chart-holder">
    <VictoryPie
      innerRadius={100}
      padAngle={10}
      data={fakeData}
      style={{
        data: {
          fill: ({ datum }) => datum.fill
        }
      }}
    />
  </div>
);

export default ChartDemo;
