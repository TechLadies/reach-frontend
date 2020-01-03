import React from "react";
import "./index.css";
import Box from "../Dashboard/Box";
import { Line } from 'rc-progress';

const ProgressBar = () =>{
    return (
      <Box className= "popup-box">
        <div className= "popup-loadcontainer">
        <h1 className= "popup-msg2">Uploading in progress</h1>
        <p className= "popup-msg1"> Please do not close this tab</p>
        <Line percent="50" strokeWidth="2" strokeColor="#FFA001" trailColor="#F8E7CF" trailWidth="2"/>
        <p className= "percent">percentagehere </p>
        </div>
      </Box>
    )
  }
  
export default ProgressBar;