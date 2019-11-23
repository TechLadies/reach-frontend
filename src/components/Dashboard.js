import React, { useState } from 'react';
import { VictoryPie, VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import Box from './Box'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const fakeData = [
    { x: "cats", y: 55, fill: "#0a2" },
    { x: "dogs", y: 124, fill: "blue" },
    { x: "rabbits", y: 20, fill: "orange" }
  ];
  
  const Dashboard  = () => { 
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
      <>
      <div className = "dashboard-header wrap">
        <h1>Dashboard</h1>
          <div className ="d-flex">
            <div>
              <label htmlFor="startDate"> From &nbsp; {"      "}</label>

              <DatePicker id="startDate" selected={startDate} onChange={date => setStartDate(date)} selectsStart 
              startDate={startDate}
        endDate={endDate}/>
            </div>
              <div>
                <label htmlFor="endDate"> To &nbsp; {"      "}</label>
                <DatePicker id="endDate" selected={endDate} onChange={date => setEndDate(date)}  selectsEnd
        endDate={endDate}
        minDate={startDate} />
              </div>
          </div>
      </div>
      <div className = "wrap">

          

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
        </div>
        </>
      );
    }
  // function Dashboard() {
  //     const fakeData = [
  //         { x: "cats", y: 55, fill: "#0a2" },
  //         { x: "dogs", y: 124, fill: "blue" },
  //         { x: "rabbits", y: 20, fill: "orange" }
  //       ];
    
  //     return (
  //       <div>
  //         <VictoryChart theme={VictoryTheme.material}>
  //             </VictoryChart>
  //         <VictoryLine
  //          style={{
  //             data: { stroke: "#c43a31" },
  //             parent: { border: "1px solid #ccc"}
  //             }}
  //          data={[
  //              { x: 1, y: 2 },
  //             { x: 2, y: 3 },
  //       </div>
  //     );
  //   };
  
  export default Dashboard;