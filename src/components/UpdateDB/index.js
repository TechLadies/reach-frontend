import React from "react";
import Box from "../../components/Dashboard/Box";
import UpdateDbImg from "../../images/updatedonordb.svg";
import Reportplus from "../../images/reportplus.svg";
import "./index.css";
import FileHandlers from "./FileHandlers"

const fakeUpdates = {
  lastUpdate: "16 Sep 2019, 13:94",
  period: "1 Sep 2019 - 31 Oct 2019"
};

const UpdateDb = () => {
  return (
    <Box className="updatedb-box">
      <img src={UpdateDbImg} alt="Update donor database" />
      <div className = "updatedetails-container">
        <div className =" update-top">
          <div className= "update-title">Last database update
          <p className = " update-data">{fakeUpdates.lastUpdate}</p></div>
          <div className="update-title">For donations in the period of 
          <p className= "update-data"> {fakeUpdates.period} </p></div>
        </div>
        <div className= "update-bottom">
          <div className= "upload">To update the database, upload the IPC file here</div>
          <div className= "upload-button">
           <FileHandlers/> 
          </div>
        </div>
      </div>
    </Box>
  );
};

export default UpdateDb;
