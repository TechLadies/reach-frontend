import React from "react";
import "./index.css";
import Box from "../../components/Dashboard/Box";
import { Line } from 'rc-progress';
import ProgressBar from "./ProgressBar";

function ConfirmUpload(props) {
  const onCancel = () => {
    props.CPU();
    
  };

  const onYes = () =>{
    props.clickYes()
    
  }
  
  const quantity = props.ipcEntries.length;
  const array = props.ipcEntries;
  const getDateArray = array
    .map(value => {
      return Date.parse(value["Date of Donation"]);
    })
    .sort();

  const maxDate = new Date(Math.max.apply(null, getDateArray));
  const minDate = new Date(Math.min.apply(null, getDateArray));

  return (
    <Box className="popup-box">
      <div className="popup-foruploadcontainer">
      <div className="message-container">
        <p className="popup-msg1">
          You are uploading{" "}
          <span className="popup-purpletxt">{quantity} donations</span> from the
          period of{" "}
          <span className="popup-purpletxt">
            {dateStringOf(minDate)} to {dateStringOf(maxDate)}
          </span>
        </p>
        <p className="popup-msg2"> Would you like to proceed?</p>
      </div>
      <div className="popup-btn">
        <div>
          <button className="button continue-btn"onClick={onYes}>Yes, continue</button>
        </div>
        <div>
          <button className="button cancel-btn" onClick={onCancel}>
            <span>Cancel</span>
          </button>
        </div>
      </div>
      </div>
    </Box>
  );
}

function dateStringOf(date) {
  const day = date.getDate();
  const year = date.getFullYear();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const month = months[date.getMonth()];
  const printDate = day + " " + month + " " + year;

  console.log(printDate);
  return printDate;
}


export default ConfirmUpload;
