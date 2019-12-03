import React, { useState } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory";
import Box from "./Box";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DonationAmount from "./DonationAmount";
import KeyStatistics from "./KeyStatistics";
import Person from "../../images/person.svg";
import BySource from "./BySource";
import ByIntent from "./ByIntent";
import "./index.css";

const fakeData = [
  { x: "cats", y: 55, fill: "#0a2" },
  { x: "dogs", y: 124, fill: "blue" },
  { x: "rabbits", y: 20, fill: "orange" }
];

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date("2019-11-20"));
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <div className="wrap">
        <div className="dashboard-gridcontent">
          <h1>Dashboard</h1>
          <div className="d-flex">
            <div>
              <label htmlFor="startDate"> From &nbsp; {"      "}</label>

              <DatePicker
                id="startDate"
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
            </div>
            <div>
              <label htmlFor="endDate"> To &nbsp; {"      "}</label>
              <DatePicker
                id="endDate"
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                endDate={endDate}
                minDate={startDate}
              />
            </div>
            <div>
              <button className="button orangebutton">
                <img src={Person} className="button-icon" />
                View Donor List
              </button>
            </div>
          </div>
        </div>
        <div></div>
        <DonationAmount />
        <KeyStatistics />
        <BySource />
        <ByIntent />
      </div>

      
    </>
  );
};

export default Dashboard;
