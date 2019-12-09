import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DonationAmount from "./DonationAmount";
import KeyStatistics from "./KeyStatistics";
import Person from "../../images/person.svg";
import Calendar from "../../images/calendar.svg";
import BySource from "./BySource";
import ByIntent from "./ByIntent";
import Header from "../Header/index.js";
import "./index.css";

const fetchData = async (start, end) => {
  // RETURN A FAKE PROMISE IN LIEU OF FETCH
  return new Promise((resolve, reject) => {
    const data = {
      startDate: "2019-09-23",
      endDate: "2019-11-23",
      donationAmt: [
        { date: "2019-09-23", amount: "213" },
        { date: "2019-09-24", amount: "345" },
        { date: "2019-09-25", amount: "2343" },
        { date: "2019-09-26", amount: "354" },
        { date: "2019-09-27", amount: "76" },
        { date: "2019-09-28", amount: "6765" },
        { date: "2019-09-29", amount: "445" },
        { date: "2019-09-30", amount: "97" },
        { date: "2019-10-01", amount: "4567" },
        { date: "2019-10-02", amount: "458" },
        { date: "2019-10-03", amount: "89" },
        { date: "2019-10-04", amount: "889" }
      ],
      totalDonationAmt: "12154.00",
      totalNoOfDonations: "6328",
      noOfDonationBySource: [
        { sourceName: "bi-monthly charity dinner", noOfDonations: 3238 },
        { sourceName: "church", noOfDonations: 832 },
        { sourceName: "online (Beverity)", noOfDonations: 290 },
        { sourceName: "online (REACH)", noOfDonations: 102 },
        { sourceName: "others", noOfDonations: 88 }
      ],
      donationAmtByIntent: [
        { amount: 4900, intent: "counselling" },
        { amount: 5500, intent: "family" },
        { amount: 3800, intent: "senior" },
        { amount: 4200, intent: "youth" }
      ]
    };
    resolve(data);
  });

  // THE REAL FETCH
  // return fetch ('/dashboard?startDate='+start+'&endDate='+end)
  //   .then(resp => resp.json())
  //   .catch(err => {console.log("err: ", JSON.stringify(err))});
};

const Dashboard = () => {
  const today = new Date();
  // use state start and end
  const [startDate, setStartDate] = useState(
    today.setMonth(today.getMonth() - 3)
  );
  const [endDate, setEndDate] = useState(new Date());

  const [dashboardData, setDashboardData] = useState({
    startDate: "2019-09-23",
    endDate: "2019-11-23",
    donationAmt: [],
    totalDonationAmt: null,
    totalNoOfDonations: null,
    noOfDonationBySource: [],
    donationAmtByIntent: []
  });

  useEffect(() => {
    fetchData(startDate, endDate).then(data => {
      setDashboardData(data);
    });
  }, [startDate, endDate]);

  const {
    donationAmt,
    totalDonationAmt,
    totalNoOfDonations,
    noOfDonationBySource,
    donationAmtByIntent
  } = dashboardData;

  return (
    <>
      <Header>
        <Header.Top>
          <Header.Content>Dashboard</Header.Content>
          <Header.Buttons>
            <button className="button orangebutton">
              <img src={Person} className="button-icon" alt="person" />
              View Donor List
            </button>
          </Header.Buttons>
        </Header.Top>

        <div className="d-flex">
          <div className="from-rectangle">
            <div className="from-label"></div>
            <label htmlFor="startDate"> From &nbsp; {"      "}</label>
            <DatePicker
              className="dateform"
              selected={startDate}
              onChange={date => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
          </div>
          <div className="to-rectangle">
            <label htmlFor="endDate"> To &nbsp; {"      "}</label>
            <DatePicker
              className="dateform"
              selected={endDate}
              onChange={date => setEndDate(date)}
              selectsEnd
              endDate={endDate}
              minDate={startDate}
            />
          </div>
        </div>
      </Header>

      <div className="wrap">
        <DonationAmount />
        <KeyStatistics />
        <BySource />
        <ByIntent />
      </div>
    </>
  );
};

export default Dashboard;
