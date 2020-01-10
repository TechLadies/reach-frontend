import React from 'react'
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,

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

  const yValues = newDonationsArr.map(e => e.y)
  const xValues = newDonationsArr.map(e => e.x)
  const maxY = Math.ceil(Math.max(...yValues) / 1000) * 1000
  const minY = Math.floor(Math.min(...yValues) / 1000) * 1000
  const diff = Math.floor((maxY - minY) / 3 / 1000) * 1000
  /* const middleY = Math.ceil(((maxY + minY)/2)/1000)*1000 */

  /*  const q1Y= Math.floor(((middleY+minY)/2)/1000)*1000
  const q3Y= Math.floor(((middleY+maxY)/2)/1000*1000 */
  /* const midY= Math.ceil((yValues[Math.floor(yValues.length/2)])/1000)*1000
  const meanY= Math.ceil(((yValues.reduce((a,b)=> a + b, 0))/yValues.length)/1000)*1000 */
  const yAxisTicks = [minY, minY + diff, maxY - diff, maxY]


  return (
    <div className="dashboard-gridcontent">
      <h1 className="dashboard-headertxt">Donation Amount</h1>
      <Box>
        <div className="line-chart">
          <VictoryChart
            data={newDonationsArr}
            theme={theme}
            scale={{ x: 'time' }}
          >
            <VictoryAxis
              crossAxis={false}
              dependentAxis
              tickValues={yAxisTicks}
              tickFormat={y => {
                if (y >= 1000) {
                  return y / 1000 + 'k'
                }
              }}
              label={'Amount $'}
              style={{
                grid: { stroke: ({ tick }) => '#EBEDF0' },
                axis: { stroke: 'none' },
                tick: '#9FA2B4',
                tickLabels: {
                  fontSize: 10,
                  fill: '#9FA2B4',
                  opacity: '0.5',
                  verticalAnchor: 'start'
                }
              }}
            />
            <VictoryAxis
              crossAxis={false}
              tickFormat={xAxisTickFormat}
              tickValues={xValues}
              tickCount={donationsArr.length}
              scale={{ x: 'time' }}
              style={{
                axis: { stroke: '#CC7503', opacity: '0.5', strokeWidth: 1.5 },
                tickLabels: {
                  fontSize: 10,
                  fill: '#9FA2B4',
                  opacity: '0.5',
                  verticalAnchor: 'start'
                }
              }}
            />
            <VictoryLine
              interpolation="linear"
              style={{
                data: { stroke: '#FE5366', strokeWidth: 1.5 }
              }}
              data={newDonationsArr}
            />
          </VictoryChart>
        </div>
      </Box>
    </div>
  )
}

function xAxisTickFormat(x, i) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  const month = months[x.getMonth()]
  const tickDate = x.getDate()
  const dateMonthFormat = tickDate+ '\n' +month
  
  if (i===0) {
    return dateMonthFormat
  } else if (tickDate===1){
    return dateMonthFormat
  } else{
    return tickDate
  }
}


export default DonationAmount
