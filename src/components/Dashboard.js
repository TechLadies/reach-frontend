import React, { useState } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import Box from './Box'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ByIntent from './ByIntent'
import donationsCircle from "../images/donations-circle.svg";
import twoHandsDonation from "../images/two-hands-donation.svg";
import Steps from "../images/steps.png";

const fakeData = [
    { x: "cats", y: 55, fill: "#0a2" },
    { x: "dogs", y: 124, fill: "blue" },
    { x: "rabbits", y: 20, fill: "orange" }
  ];
  
  const Dashboard  = () => { 
    const [startDate, setStartDate] = useState(new Date("2019-11-20"));
    const [endDate, setEndDate] = useState(new Date());
    return (
      <>
        <div className = "dashboard-header wrap">
          <h1>Dashboard</h1>
            <div className ="d-flex">
              <div>
                <label htmlFor="startDate"> From &nbsp; {"      "}</label>

                <DatePicker id="startDate" selected={startDate} onChange={date => setStartDate(date)} selectsStart 
                startDate={startDate} endDate={endDate}/>
              </div>
                <div>
                  <label htmlFor="endDate"> To &nbsp; {"      "}</label>
                  <DatePicker id="endDate" selected={endDate} onChange={date => setEndDate(date)}  selectsEnd endDate={endDate} minDate={startDate} />
                </div>
                <button className="button orangebutton ml-auto">View Donor List</button>
            </div>
        </div>

        <div className = "wrap">     
        <h1>Donation Amount</h1>
          <Box>
          <div className="line-chart">
          
              <VictoryChart
              theme={VictoryTheme.material}
              height={200}
              width={300}
              >
              <VictoryLine
                  style={{
                  data: { stroke: "#FE5366" },
                  parent: { border: "1px solid #CC7503"},
                  }}
                  data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 3 },
                  { x: 3, y: 5 },
                  { x: 4, y: 4 },
                  { x: 5, y: 7 }
                  ]}
              />
              </VictoryChart>
          </div>
          </Box>

          <div className = "keystats">
          <h1>Key Statistics</h1>
            <Box>
            <div>
               <img src={donationsCircle} className="donationscircle" />
               <div className = "totaldonationamt">$12,154</div>
                 <div className = "keystatslabel">Total Donation Amount</div>
            </div>

            </Box>

            <Box>
            <div>
               <img src={twoHandsDonation} className="twoHandsDonation" /></div>
               <div className = "totalnumberdonors">6329</div>
                <div className = "keystatslabel">Total Number of Donors</div>
            

            </Box>
            
            <img src={Steps} className="steps" />

          </div>

          <h2>Total Number of Donations</h2>
          <h1>By Intent</h1>
            <Box>
              <ByIntent />
            </Box>

          
          
        </div>
      </>
        
      );
    }
  
  export default Dashboard;