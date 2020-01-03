import React from "react";
import "./index.css";
import Box from "../Dashboard/Box";
import { Line } from 'rc-progress';

const ProgressBar = () =>{
    return (
      <Box className= "popup-box">
        <h1>Uploading in progress</h1>
        <p> Please do not close this tab</p>
        <Line percent="50" strokeWidth="2" strokeColor="#FFA001" trailColor="#F8E7CF" trailWidth="2"/>
        <p>percentagehere </p>
      </Box>
    )
  }
  
export default ProgressBar;