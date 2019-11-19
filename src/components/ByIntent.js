import React from "react";

import { VictoryPie } from "victory";
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
    <VictoryPie
      innerRadius={120}
      padAngle={10}
      data={fakeData}
      style={{
        data: {
          fill: ({ datum }) => datum.fill
        }
      },
      { labels: { display: "none" } }
    }
      
    />
  </div>
);

export default ByIntent;
