import React, { useState } from "react";
import "./index.css";
import Box from "../../components/Dashboard/Box";

function ConfirmUpload() {
    return(
        <Box className= "popup-box">
           <div className= "message-container">
            <p className= "popup-msg1">You are uploading 101 donations from the period of 1 Nov 2019 to 31 Dec 2019 </p>
            <p className= "popup-msg2"> Would you like to proceed?</p>
            </div>
            <div className= "popup-btn">
            <div><button className= "button orangebutton">Yes, continue</button></div>
            <div><button className= "button transparentbutton">Cancel</button></div>
            </div>

        </Box>
    )
}

export default ConfirmUpload; 