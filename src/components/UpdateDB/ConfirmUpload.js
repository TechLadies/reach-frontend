import React from "react";
import "./index.css";
import Box from "../../components/Dashboard/Box";


function ConfirmUpload(props) {
  const onCancel = () => {
      props.CPU()
  }

  const quantity = props.ipcEntries.length
  console.log(findDonationDateRange(props.ipcEntries))

    return(
      
        <Box className= "popup-box">
           <div className= "message-container">
            <p className= "popup-msg1">You are uploading {quantity} donations from the period of 1 Nov 2019 to 31 Dec 2019 </p>
            <p className= "popup-msg2"> Would you like to proceed?</p>
            </div>
            <div className= "popup-btn">
            <div><button className= "button continue-btn">Yes, continue</button></div>
            <div><button className= "button cancel-btn" onClick= {onCancel}><span>Cancel</span></button></div>
            </div>

        </Box>
        
    )
}

function findDonationDateRange(donations) {
    return donations;
}

export default ConfirmUpload; 