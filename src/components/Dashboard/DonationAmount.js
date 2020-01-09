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

  const yValues= newDonationsArr.map(e=> e.y).sort(function(a,b){return a-b})
  const maxY= Math.ceil((Math.max(...yValues))/1000)*1000
  const minY= Math.floor((Math.min(...yValues))/1000)*1000
  const middleY = Math.ceil(((maxY + minY)/2)/1000)*1000
  /* const midY= Math.ceil((yValues[Math.floor(yValues.length/2)])/1000)*1000
  const meanY= Math.ceil(((yValues.reduce((a,b)=> a + b, 0))/yValues.length)/1000)*1000 */

  const yAxisTicks =[minY, middleY, maxY]
  console.log(yAxisTicks)
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
              tickValues={yAxisTicks}
              tickFormat={y => {
                if (y >= 1000) {
                  return y / 1000 + 'k'
                }
              }}
              label={'Amount $'}
              style = {{
                grid: {stroke: ({ tick }) => "#EBEDF0"},
                 ticks: {stroke: "grey", size: 5},
      
              }}
             
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
