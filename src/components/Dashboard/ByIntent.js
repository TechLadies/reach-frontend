import React, { useState } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel, VictoryTheme } from 'victory';
import Box from './Box'

const sampleData = [
    { x: "Counselling", y: 2320, fill: "#80485B" },
    { x: "Family", y: 823, fill: "#FFA001" },
    { x: "Senior", y: 390, fill: "#80485B" },
    { x: "Youth", y: 402, fill: "#80485B" },
  ];

const ByIntent  = () => {
    return (
        <div className="dashboard-header">
        <header className="dashboard-header">Donation Amount</header>
         <h1 className= "dashboard-headertxt">By Intent</h1>
            
             <div className = "byintent-bar">
                <Box>

                <VictoryChart horizontal
                    domainPadding={{ x: 10 }}
                    height={265}
                    width={220}
                    >

                <VictoryAxis
                    tickFormat={() => ""}
                 />
                 <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`${x / 100}k`)}
                />

                    <VictoryBar horizontal
                        data={sampleData}
                        labels={({ datum }) => ` ${datum.x}`}
                        labelComponent={<VictoryLabel dy={-20} x={50} />}
                        style={{
                            labels: { fill: "#9FA2B4" },
                            data: {
                              fill: ({ datum }) => datum.fill,
                            }
                          }}
                        
                        
                    />
                    </VictoryChart>
                    </Box>
                </div>
        

        </div>
    )
}


export default ByIntent;
