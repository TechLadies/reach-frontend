import React, {useState, useEffect, useRef} from "react";
import "./index.css";
import { Line } from 'rc-progress';
import Modal from '../Modal'
import Success from './Success';

function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}


const ProgressBar = (props) =>{
  
  const [percent, setPercent] = useState(0)
  useInterval(() => setPercent(p => p + 1), percent < 80 ? 100 : null)
 
  // , if upload failed use props.onFailedUpload
    return (
      <Modal show ={true} className= "popup-box">
        <div className= "popup-loadcontainer">
        <h1 className= "popup-msg2">Uploading in progress</h1>
        <p className= "popup-msg1"> Please do not close this tab</p>
        <Line percent={percent} strokeWidth="2" strokeColor="#FFA001" trailColor="#F8E7CF" trailWidth="2"/>
        <p className= "percent">{percent}% </p>
        </div>
      </Modal>
    )
  }

  
export default ProgressBar;