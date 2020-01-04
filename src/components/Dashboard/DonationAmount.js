import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';
import Box from './Box'
import theme from './VictoryTheme'

const DonationAmount  = (props) => {
    return (
  <div className="dashboard-gridcontent"> 
    <h1 className= "dashboard-headertxt">Donation Amount</h1>
          <Box>
          <div className="line-chart">
              <VictoryChart
              theme={theme}
              height={200}
              width={300}
              >
              <VictoryLine
                  style={{
                  data: { stroke: "#FE5366" },
                  parent: { border: "1px solid #CC7503"},
                  }}
                  data={props.data.donationAmt}
                  y= "amount"
                  x= "date"
                  scale={{ x: "time" }}
              />
    
              </VictoryChart>
          </div>
          </Box>
        </div>
    )
}


export default DonationAmount;