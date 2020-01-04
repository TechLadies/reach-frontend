import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DonationAmount from "./DonationAmount";
import KeyStatistics from "./KeyStatistics";
import Person from "../../images/person.svg";
import ByProject from "./ByProject";
import ByIntent from "./ByIntent";
import Header from "../Header/index.js";
import "./index.css";



 const fetchData = (start, end) => {
  return (
     fetch("http://reach-backend.herokuapp.com/api/dashboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(function(response) {
    console.log(response)
    return response.json()
    }).then(function(data){
    /* console.log(data); */
    return data  
    }).catch(err => {console.log(err)})
 
  )}; 


const Dashboard = () => {
  const today = new Date();
  // use state start and end
  const [startDate, setStartDate] = useState(
    today.setMonth(today.getMonth() - 3)
  );
  const [endDate, setEndDate] = useState(new Date());
 
  const [dashboardData, setDashboardData] = useState("");

  useEffect(() => {
    fetchData(startDate, endDate).then(data => {
      setDashboardData(data);
    });
  }, [startDate, endDate]);
  
  if(!dashboardData) return null
  console.log(dashboardData);

  return (
    <>
   
      <Header>
        <Header.Top>
          <Header.Content>Dashboard</Header.Content>
        </Header.Top>
        <Header.Bottom>
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
                startDate={startDate}
                endDate={endDate}
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
                endDate={endDate}
                minDate={startDate}
              />
            </div>
            <button className="button orangebutton vdl">
              <img src={Person} className="button-icon" alt="person" />
              View Donor List
            </button>
          </div>
        </Header.Bottom>
        {/*  <Header.Bottom> Active Filters
        <Header.Filters>Filter tabs</Header.Filters>
        </Header.Bottom> */}
      </Header>

      <div className="wrap">
        <DonationAmount data= {dashboardData}/>
        <KeyStatistics data= {dashboardData}/>
        <ByProject data= {dashboardData}/>
        <ByIntent data= {dashboardData}/>
      </div>
    </>
  );
};

export default Dashboard;
