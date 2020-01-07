import React from 'react'
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory'
import Box from './Box'
import theme from './VictoryTheme'

const DonationAmount = props => {
  const donationsArr= props.data.donationAmt
  const transformDonation = donationsArr => {
    return {date: new Date (donationsArr.date), amount: donationsArr.amount}
  }
  const newDonationsArr = donationsArr.map(e=> transformDonation(e))
  
  console.log(newDonationsArr)
  return (
    <div className="dashboard-gridcontent">
      <h1 className="dashboard-headertxt">Donation Amount</h1>
      <Box>
        <div className="line-chart">
          <VictoryChart theme={theme} height={200} width={300}> 
            <VictoryLine
              style={{
                data: { stroke: '#FE5366' },
                parent: { border: '1px solid #CC7503' },
                tickLabels: {fontSize: 5}
              }}
              data={newDonationsArr}
              y="amount"
              x="date"
              
            />
            {/* <VictoryAxis style ={{tickLabels: {fontSize:5}}}/> */}
          </VictoryChart>
        </div>
      </Box>
    </div>
  )
}

export default DonationAmount
