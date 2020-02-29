import React from 'react'
import { VictoryLine, VictoryChart, VictoryAxis, VictoryLabel } from 'victory'
import Box from './Box'
import theme from './VictoryTheme'

const DonationAmount = props => {
  const donationsArr = props.data.donationAmt
  const transformDonation = donationsArr => {
    return {
      x: new Date(donationsArr.donationDate),
      y: Number(donationsArr.donationAmount)
    }
  }
  const newDonationsArr = donationsArr.map(e => transformDonation(e))
  const yValues = newDonationsArr.map(e => e.y)
  const xValues = newDonationsArr.map(e => e.x)
  const maxY = Math.ceil(Math.max(...yValues) / 1000) * 1000
  const minY = Math.floor(Math.min(...yValues) / 1000) * 1000
  return (
    <div>
      <h1 className="dashboard-headertxt">Donation Amount</h1>
      <Box>
        <div className="line-chart">
          <VictoryChart
            data={newDonationsArr.length === 0 ? null : newDonationsArr}
            theme={theme}
            scale={{ x: 'time' }}
            height={265}
          >
            <VictoryAxis
              crossAxis={false}
              dependentAxis
              domain={[minY, maxY]}
              tickFormat={yAxisTickFormat}
              tickLabelComponent={<VictoryLabel dy={-14} dx={15} />}
              label={'Amount $'}
              axisLabelComponent={<VictoryLabel angle={0} y={30} dx={35} />}
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
                  fontSize: 10,
                  fill: '#929295'
                }
              }}
            />
            <VictoryAxis
              crossAxis={false}
              tickFormat={xAxisTickFormat}
              tickValues={xValues}
              tickCount={10}
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

function xAxisTickFormat(current, i, arr) {
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
  const month = months[current.getMonth()]
  const tickDate = current.getDate()
  const dateMonthFormat = tickDate + '\n' + month
  // at origin, always return date and month
  if (i === 0) {
    return dateMonthFormat
  }
  const previous = arr[i - 1]
  if (previous.getMonth() === current.getMonth()) {
    return tickDate
  } else {
    return dateMonthFormat
  }
  
}

function yAxisTickFormat(y) {
  if (y >= 1000 && y <= 100000) {
    return y / 1000 + 'k'
  } else if (y >= 1000000) {
    return y / 1000000 + 'M'
  } else return y
}

export default DonationAmount
