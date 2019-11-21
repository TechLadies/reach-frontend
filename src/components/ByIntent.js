import React from "react";
import TwoHands from "../images/twohandsdonation.svg";


import { VictoryPie, VictoryTooltip, VictoryAxis, VictoryLegend } from "victory";
/*
 *
 * Read more about this chart libray here:
 * https://formidable.com/open-source/victory/docs/
 *
 */

const fakeData = [
  { x: "Bi-monthly Charity Dinner", y: 130, fill: "#FFA001" },
  { x: "Online (Benevity)", y: 124, fill: "#FE5366" },
  { x: "Online (REACH)", y: 55, fill: "#FF9A85" },
  { x: "Church Donations", y: 20, fill: "#80485B" },
  { x: "Others", y: 20, fill: "#CB87B0" }
];



const ByIntent = () => (
  <div className="chart">
    <div className="chart-holder">

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
      >

      </VictoryPie>

    </div>
    <div>
      <div className="legend brightorange"></div> {fakeData[0].x}
    </div>
    <div>
      <div className="legend pink"></div> {fakeData[1].x}
    </div>
    <div>
      <div className="legend lightpink"></div> {fakeData[2].x}
    </div>
    <div>
      <div className="legend darkpurple"></div> {fakeData[3].x}
    </div>
    <div>
      <div className="legend darkpurple"></div> {fakeData[4].x}
    </div>

        
    <img src={TwoHands} className="twohands" />
  </div>



);

export default ByIntent;
