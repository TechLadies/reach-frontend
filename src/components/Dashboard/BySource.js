import React from "react";
import TwoHands from "../../images/twohandsdonation.svg";
import Crown from "../../images/crown.svg";
import Box from "./Box";
import { VictoryPie, VictoryAxis, VictoryContainer } from "victory";

/* const fakeData = (props) => props.data.NoOfDonationBySource[0]
console.log(fakeData) */
const BySource = (props) =>{
  const donationSourceData = props.data.NoOfDonationBySource
  console.log(donationSourceData);

  return(
  
  <div className="dashboard-gridcontent">
    <div>
      <header className="dashboard-header">Total Number of Donations</header>
      <h1 className= "dashboard-headertxt">By Project</h1>
    </div>
    <Box>
      <div className="chart">
        <div className="piechart-holder">
          <div className="piechart-img">
            <img src={TwoHands} className="twohands" alt="twohands"/>
          </div>

          <VictoryPie
            innerRadius={103}
            containerComponent={<VictoryContainer responsive={false} />}
            height={350}
            width={350}
            labelComponent={<VictoryAxis tickFormat={() => ""} />}
            padAngle={8}
            data={donationSourceData} 
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
              <h1 className="bysource-crownvalue">{/* {fakeData[0].y} */}</h1>
            </div>
            <div className="flex">
              <div className="legend brightorange"></div>
              <div className="bysource-name"> {/* {fakeData[0].x} */}</div>
            </div>
          </div>

          <div className="flex">
            <div className="bysource-row bysourceborder">
              <h1 className="bysource-value">{/* {fakeData[1].y} */}</h1>
              <div className="flex">
                <div className="legend pink"></div>
                <div className="bysource-name">{/* {fakeData[1].x} */}</div>
              </div>
            </div>

            <div className="bysource-row bysourceborder">
              <h1 className="bysource-value">{/* {fakeData[2].y} */}</h1>
              <div className="flex">
                <div className="legend lightpink"></div>
                <div className="bysource-name">{/* {fakeData[2].x} */}</div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="bysource-row bs-bottom">
              <h1 className="bysource-value">{/* {fakeData[3].y} */}</h1>
              <div className="flex">
                <div className="legend darkpurple"></div>
                <div className="bysource-name">{/* {fakeData[3].x} */}</div>
              </div>
            </div>

            <div className="bysource-row">
              <h1 className="bysource-value">{/* {fakeData[4].y} */}</h1>
              <div className="flex">
                <div className="legend lilac"></div>
                <div className="bysource-name">{/* {fakeData[4].x} */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  </div>
);
          }
export default BySource;
