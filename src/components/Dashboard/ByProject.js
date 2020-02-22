import React from "react";
import TwoHands from "../../images/twohandsdonation.svg";
import Crown from "../../images/crown.svg";
import Box from "./Box";
import { VictoryPie, VictoryAxis, VictoryContainer } from "victory";


const ByProject = (props) =>{
  const donationSourceData = props.data.NoOfDonationBySource

  const bySourceData = [
    { x: donationSourceData[0].sourceName, y: donationSourceData[0].noOfDonations, fill: "#FFA001" },
    { x: donationSourceData[1].sourceName, y: donationSourceData[1].noOfDonations, fill: "#FE5366" },
    { x: donationSourceData[2].sourceName, y: donationSourceData[2].noOfDonations, fill: "#FF9A85" },
    { x: donationSourceData[3].sourceName, y: donationSourceData[3].noOfDonations, fill: "#80485B" },
    { x: donationSourceData[4].sourceName, y: donationSourceData[4].noOfDonations, fill: "#CB87B0" }
  ];

  return(
  
  <div>
    <div>
      <header className="dashboard-header">Total Number of Donations</header>
      <h1 className="dashboard-headertxt">By Project</h1>
    </div>
    <Box>
      <div className="chart">
        <div className="piechart-holder">
          <div className="piechart-img">
            <img src={TwoHands} className="twohands" alt="twohands" />
          </div>

          <VictoryPie
            innerRadius={103}
            containerComponent={<VictoryContainer responsive={false} />}
            height={350}
            width={350}
            labelComponent={<VictoryAxis tickFormat={() => ""} />}
            padAngle={8}
            data={bySourceData} 
            style={{
              data: {
                fill: ({ datum }) => datum.fill
              }
            }}
          ></VictoryPie>
        </div>

        <div className="legend-container">
          <div className="bysource-row1 bysourceborder">
            <div className="flex">
              <img src={Crown} />
              <h1 className="bysource-crownvalue">{ bySourceData[0].y}</h1>
            </div>
            <div className="flex">
              <div className="legend brightorange"></div>
              <div className="bysource-name"> { bySourceData[0].x} </div>
            </div>
          </div>

          <div className="flex">
            <div className="bysource-row bysourceborder">
              <h1 className="bysource-value">{bySourceData[1].y}</h1>
              <div className="flex">
                <div className="legend pink"></div>
                <div className="bysource-name">{bySourceData[1].x}</div>
              </div>
            </div>

            <div className="bysource-row bysourceborder">
              <h1 className="bysource-value">{bySourceData[2].y}</h1>
              <div className="flex">
                <div className="legend lightpink"></div>
                <div className="bysource-name">{bySourceData[2].x}</div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="bysource-row bs-bottom">
              <h1 className="bysource-value">{bySourceData[3].y}</h1>
              <div className="flex">
                <div className="legend darkpurple"></div>
                <div className="bysource-name">{bySourceData[3].x}</div>
              </div>
            </div>

            <div className="bysource-row">
              <h1 className="bysource-value">{bySourceData[4].y}</h1>
              <div className="flex">
                <div className="legend lilac"></div>
                <div className="bysource-name">{bySourceData[4].x}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  </div>
);
          }
export default ByProject;
