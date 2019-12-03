import React, { useState } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import Box from './Box'

const DonationAmount  = () => {
    return (
  <div className="dashboard-gridcontent"> 
  <>
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
          
        </>
        </div>
    )
}


export default DonationAmount;