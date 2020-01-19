import React from 'react'
import HiFive from '../../images/hi-five.svg'
import TwoHands from '../../images/twohandsdonation.svg'
import Box from '../../components/Dashboard/Box'

const SuccessUpload = () => {
  return (
    <div>
      <header>File Uploaded Successfully!</header>
      <img src={HiFive} alt="success" />
      <Box>
        <div>
          <div className="piechart-img">
            <img src={TwoHands} className="twohands" alt="twohands" />
          </div>
          <div>
              <h1>Number of donations</h1>
              <p>313 Donations</p>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default SuccessUpload
