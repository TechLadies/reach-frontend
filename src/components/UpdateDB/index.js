import React from "react";
import Box from "../../components/Dashboard/Box";
import UpdateDbImg from "../../images/updatedonordb.svg";
import Reportplus from '../../images/reportplus.svg';
import "./index.css";

const fakeUpdates = [

]
const UpdateDb = () => {
  return (
    <Box>
      <img src={UpdateDbImg} alt="Update donor database" />
      <div>
      <div>
        <div>Last database update</div>
        <div>For donations in the period of </div>
      </div>
      <div>
        <h1>To update the database upload the IPC file here</h1>
        <div>
          <button className="button orangebutton">
            <img src={Reportplus} className="button-icon" alt ="Upload IPC file"/>
            Upload IPC File
          </button>
        </div>
      </div>
      </div>
    </Box>
  );
};

export default UpdateDb;
