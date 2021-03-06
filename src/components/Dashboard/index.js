import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DonationAmount from "./DonationAmount";
import KeyStatistics from "./KeyStatistics";
import Person from "../../images/person.svg";
import ByProject from "./ByProject";
import Header from "../Header/index.js";
import logout from "../../lib/logout"
import "./index.css";
import Spin from "../../lib/spinner";

 const fetchData = (start, end) => {
  return (
     fetch(`${process.env.REACT_APP_API}/donations/dashboard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        startDate: start,
        endDate: end

      })
    }).then(function(response) {
      if (response.ok) {
        return response.json()
      }
      if (response.status === 403) {
        throw Error(response.status)
      }
    })
 
  )}; 


const Dashboard = () => {
  const today = new Date();
  // use state start and end
  const [startDate, setStartDate] = useState(
  /*   today.setMonth(today.getMonth() - 3) */
      new Date (today.getFullYear(), 0, 1)
  );
  const [endDate, setEndDate] = useState(new Date());
 
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    fetchData(startDate, endDate).then(data => {
      setDashboardData(data);
    }).catch(err => {console.log(err);
      if (err.message === '403') logout()
    });
  }, [startDate, endDate]);

  return (
    <>
      <Header>
        <Header.Top>
          <Header.Content>
            <h2>Dashboard</h2>
            <div className="d-flex">
              <div>
                <label className="datelabel-from" htmlFor="startDate">
                  {" "}
                  From &nbsp; {"      "}
                </label>
                <DatePicker
                  className="dateform"
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  selectsStart
                  dateFormat='dd/MM/yyyy' 
                  /* startDate={startDate}
                  endDate={endDate} */
                />
              </div>
              <div>
                <label className="datelabel-to" htmlFor="endDate">
                  {" "}
                  To &nbsp; {"      "}
                </label>
                <DatePicker
                  className="dateform"
                  selected={endDate}
                  onChange={date => setEndDate(date)}
                  selectsEnd
                  dateFormat= "dd/MM/yyyy"
                  /* endDate={endDate}
                  minDate={startDate} */
                />
              </div>
            </div>
          </Header.Content>
          <Header.Buttons>
          <Link to="/donorList" className="button orangebutton donor-list-link">
              <img src={Person} className="button-icon" alt="person" />
              View Donor List
            </Link>
          </Header.Buttons>
        </Header.Top>
      </Header>

      {dashboardData ? <div className="wrap">
        <DonationAmount data= {dashboardData}/>
        <KeyStatistics data= {dashboardData}/>
        <ByProject data= {dashboardData}/>
      </div> : <Spin/>}
    </>
  );
};

export default Dashboard;
