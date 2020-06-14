import React, {useState, useEffect, useRef} from "react";
import "./index.css";
import { Line } from 'rc-progress';
import Modal from '../Modal'
import Spin from "../../lib/spinner";


const ProgressBar = (props) =>{
  
  // , if upload failed use props.onFailedUpload
    return (
      <Modal show ={true} className= "popup-box">
        <div className= "popup-loadcontainer">
          <div className ="progress-loading">
        <h1 className= "popup-msg2">Uploading in progress</h1>
        <Spin className = "progress-spinner"/>
        </div>
        <span className= "popup-msg1"> Please do not close this tab</span>
        </div>
      </Modal>
    )
  }

  
export default ProgressBar;