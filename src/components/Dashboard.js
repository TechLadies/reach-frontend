import React from 'react';
import * as V from 'victory';
import { VictoryPie, VictoryLine, VictoryChart, VictoryTheme } from 'victory';


const fakeData = [
    { x: "cats", y: 55, fill: "#0a2" },
    { x: "dogs", y: 124, fill: "blue" },
    { x: "rabbits", y: 20, fill: "orange" }
  ];
  
  const Dashboard  = () => (
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
  );

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