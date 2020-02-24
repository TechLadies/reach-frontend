import React from 'react'
import { VictoryLine, VictoryChart, VictoryAxis, VictoryLabel } from 'victory'
import Box from './Box'
import theme from './VictoryTheme'

const DonationAmount = props => {
 /*  if (!DonationAmount) return null */
  const donationsArr = props.data.donationAmt
  const transformDonation = donationsArr => {
    return { x: new Date(donationsArr.donationDate), y: Number(donationsArr.donationAmount) }
  }
  const newDonationsArr = donationsArr.map(e => transformDonation(e))
console.log(newDonationsArr)
  const yValues = newDonationsArr.map(e => e.y)
  const xValues = newDonationsArr.map(e => e.x)
  const maxY = Math.ceil(Math.max(...yValues) / 1000) * 1000
  const minY = Math.floor(Math.min(...yValues) / 1000) * 1000
 /* const diff = Math.floor((maxY - minY) / 3 / 1000) * 1000
  const yAxisTicks = [minY, minY + diff, maxY - diff, maxY] */

  return (
    <div>
      <h1 className="dashboard-headertxt">Donation Amount</h1>
      <Box>
        <div className="line-chart">
          <VictoryChart
            data={newDonationsArr}
            theme={theme}
            scale={{ x: 'time' }}
            height = {265}
          >
            <VictoryAxis
              crossAxis={false}
              dependentAxis
              domain={[minY, maxY]}
              //tickValues={yAxisTicks}
               tickFormat={y => {
                if (y >= 1000) {
                   return y / 1000 + 'k'
                 }
                 return y
               }}
               tickLabelComponent={<VictoryLabel dy= {-14} dx={15}/>}
              label={'Amount $'}
              axisLabelComponent={<VictoryLabel angle={0} y={30} dx= {40}/>}
              style={{
                grid: { stroke: ({ tick }) => '#EBEDF0' },
                axis: { stroke: 'none' },
                tick: '#9FA2B4',
                tickLabels: {
                  fontSize: 10,
                  fill: '#9FA2B4',
                  opacity: '0.5',
                  verticalAnchor: 'start'
                },
                axisLabel: {
                  fontSize:10,
                  fill: '#929295'
                }
              }}
            />
            <VictoryAxis
              crossAxis={false}
              tickFormat={xAxisTickFormat}
              tickValues={xValues}
              tickCount={5}
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
  const dateMonthFormat = tickDate + '\n' + month

  if (i === 0) {
    return dateMonthFormat
  } else if (tickDate === 1) {
    return dateMonthFormat
  } else {
    return tickDate
  }
}

export default DonationAmount
