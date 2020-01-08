import React from 'react'
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  LineSegment,
  VictoryTooltip,
} from 'victory'
import Box from './Box'
import theme from './VictoryTheme'

const DonationAmount = props => {
  if (!DonationAmount) return null
  const donationsArr = props.data.donationAmt
  const transformDonation = donationsArr => {
    return { x: new Date(donationsArr.date), y: Number(donationsArr.amount) }
  }
  const newDonationsArr = donationsArr.map(e => transformDonation(e))

  console.log(newDonationsArr)
  return (
    <div className="dashboard-gridcontent">
      <h1 className="dashboard-headertxt">Donation Amount</h1>
      <Box>
        <div className="line-chart">
          <VictoryChart
            data={newDonationsArr}
            theme={theme}
            scale={{ x: 'time' }} /* maxDomain = {{y: 3000}} */
          >
            <VictoryAxis
              crossAxis
              dependentAxis
              tickFormat={y => {
                if (y >= 1000) {
                  return y / 1000 + 'k'
                }
              }}
              label={'Amount $'}
              gridComponent={<LineSegment type={"grid"}/>}
              /*  grid = */ /* {
                {stroke: ({tick}) =>  tick === 0 ? "black" : "#A9A9A9",
                strokeWidth: 4}  
               } */
            />
            <VictoryAxis crossAxis />
            <VictoryLine
              interpolation="linear"
              style={{
                data: { stroke: '#FE5366' },
                parent: { border: '1px solid #CC7503' }
              }}
              data={newDonationsArr}
            />
          </VictoryChart>
        </div>
      </Box>
    </div>
  )
}

export default DonationAmount
