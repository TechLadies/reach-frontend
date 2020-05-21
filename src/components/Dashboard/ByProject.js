import React from 'react'
import TwoHands from '../../images/twohandsdonation.svg'
import Crown from '../../images/crown.svg'
import Box from './Box'
import { VictoryPie, VictoryAxis, VictoryContainer } from 'victory'

const ByProject = props => {
  const fillColours = ['#FFA001', '#FE5366', '#FF9A85', '#80485B', '#CB87B0']
  const sourceData = props.data.NoOfDonationBySource.map(function(data, i) {
    return {
      x: data.sourceDescription,
      y: data.totalAmountDonated,
      fill: fillColours[i]
    }
  })
  console.log(sourceData)

  return (
    <div>
      <div>
        <header className="dashboard-header">Total Number of Donations</header>
        <h1 className="dashboard-headertxt">By Project</h1>
      </div>
      <Box>
        <div className="chart">
          <div className="piechart-holder">
            <div className="piechart-img">
              <img src={TwoHands} className="twohands" alt="twohands" />
            </div>

            <VictoryPie
              innerRadius={103}
              containerComponent={<VictoryContainer responsive={false} />}
              height={350}
              width={350}
              labelComponent={<VictoryAxis tickFormat={() => ''} />}
              padAngle={8}
              data={sourceData}
              style={{
                data: {
                  fill: ({ datum }) => datum.fill
                }
              }}
            ></VictoryPie>
          </div>

          <div>
            {sourceData.length < 1 ? (
              <div className="bysource-row1 bysourceborder"></div>
            ) : (
              <div className="bysource-row1 bysourceborder">
                <div className="flex">
                  <img alt="" src={Crown} />
                  <h1 className="bysource-crownvalue">{sourceData[0].y}</h1>
                </div>
                <div className="flex">
                  <div className="legend brightorange"></div>
                  <div className="bysource-name"> {sourceData[0].x} </div>
                </div>
              </div>
            )}

            <div className="flex">
              {sourceData.length < 2 ? (
                <div className="bysource-row bysourceborder"></div>
              ) : (
                <div className="bysource-row bysourceborder">
                  <h1 className="bysource-value">{sourceData[1].y}</h1>
                  <div className="flex">
                    <div className="legend pink"></div>
                    <div className="bysource-name">{sourceData[1].x}</div>
                  </div>
                </div>
              )}
              {sourceData.length < 3 ? (
                <div className="bysource-row bysourceborder"></div>
              ) : (
                <div className="bysource-row bysourceborder">
                  <h1 className="bysource-value">{sourceData[2].y}</h1>
                  <div className="flex">
                    <div className="legend lightpink"></div>
                    <div className="bysource-name">{sourceData[2].x}</div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex">
              {sourceData.length < 4 ? (
                <div className="bysource-row bs-bottom"></div>
              ) : (
                <div className="bysource-row bs-bottom">
                  <h1 className="bysource-value">{sourceData[3].y}</h1>
                  <div className="flex">
                    <div className="legend darkpurple"></div>
                    <div className="bysource-name">{sourceData[3].x}</div>
                  </div>
                </div>
              )}
              {sourceData.length < 5 ? (
                <div className="bysource-row"></div>
              ) : (
                <div className="bysource-row">
                  <h1 className="bysource-value">{sourceData[4].y}</h1>
                  <div className="flex">
                    <div className="legend lilac"></div>
                    <div className="bysource-name">{sourceData[4].x}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}
export default ByProject
