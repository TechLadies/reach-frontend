import React, { useState } from 'react';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import Box from './Box'

const sampleData = [
    { x: "Counselling", y: 2320, fill: "#80485B" },
    { x: "Family", y: 823, fill: "#FFA001" },
    { x: "Senior", y: 390, fill: "#FF9A85" },
    { x: "Youth", y: 402, fill: "#80485B" },
  ];

const ByIntent  = () => {
    return (
        <div className="">
            <h1 className="dashboard-headertxt">By Intent</h1>
            
             <div className = "byintent-bar">
                <Box>
                <VictoryChart
                    domainPadding={{ x: 10 }}
                    height={265}
                    width={220}
                    >
                    <VictoryBar horizontal
                        style={{
                        data: { fill: "#80485B" }
                        }}
                        data={sampleData}
                        
                    />
                    </VictoryChart>
                    </Box>
                </div>


        </div>
    )
}


export default ByIntent;
