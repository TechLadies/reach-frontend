import React from "react";

import { VictoryPie, VictoryTooltip, VictoryAxis, VictoryLegend } from "victory";
/*
 *
 * Read more about this chart libray here:
 * https://formidable.com/open-source/victory/docs/
 *
 */

const fakeData = [
  { x: "Bi-monthly Charity Dinner", y: 55, fill: "#FFA001" },
  { x: "Online (Benevity)", y: 124, fill: "#FE5366" },
  { x: "Online (REACH)", y: 124, fill: "#FF9A85" },
  { x: "Church Donations", y: 20, fill: "#80485B" },
  { x: "Others", y: 20, fill: "#CB87B0" }
];

const ByIntent = () => (
  <div className="chart-holder">
    <div className= "chart">
      <VictoryPie
        innerRadius={120}
        /* labelComponent={<VictoryTooltip activateData={true} flyoutStyle= {{display: "none"}} />} */
        labelComponent={<VictoryAxis tickFormat={() => ''} />}
        padAngle={8}
        data={fakeData}
        style={{
          data: {
            fill: ({ datum }) => datum.fill
          }
        }

        }
      />
    </div>
    <div className= "chart">
      <VictoryLegend
        data={fakeData}
        style={{
          data:{
            fill: ({datum}) => datum.fill
          }
        }}
      />
    </div>
  </div>

   
  
);

export default ByIntent;
