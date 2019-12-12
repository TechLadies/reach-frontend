import React, { useState } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryLabel
} from "victory";
import Box from "./Box";
import theme from "./VictoryTheme";

const sampleData = [
  { x: "Counselling", y: 2320 },
  { x: "Family", y: 823 },
  { x: "Senior", y: 390 },
  { x: "Youth", y: 402 }
];

const ByIntent = () => {
  return (
    <div className="dashboard-header">
      <header className="dashboard-header">Donation Amount</header>
      <h1 className="dashboard-headertxt">By Intent</h1>

      <div className="byintent-bar">
        <Box>
          <VictoryChart
            horizontal
            domainPadding={{ x: 10 }}
            height={265}
            width={220}
            theme={theme}
          >
            <VictoryAxis tickFormat={() => ""} />
            <VictoryAxis dependentAxis tickFormat={x => `${x / 100}k`} />

            <VictoryBar
              horizontal
              data={sampleData}
              labels={({ datum }) => ` ${datum.x}`}
              labelComponent={<VictoryLabel dy={-20} x={50} />}
              theme={theme}
              style={{
                labels: { fill: "#9FA2B4" },
                data: {
                  fill: "#80485B"
                }
              }}
            />
          </VictoryChart>
        </Box>
      </div>
    </div>
  );
};

export default ByIntent;
