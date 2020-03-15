import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DonationAmount from "./DonationAmount";
import KeyStatistics from "./KeyStatistics";
import Person from "../../images/person.svg";
import ByProject from "./ByProject";
import Header from "../Header/index.js";
import "./index.css";



 const fetchData = (start, end) => {
  return (
     fetch(`${process.env.REACT_APP_API}/donations/dashboard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
       /*  Authorization: "Bearer " + localStorage.getItem("token"), */
      },
      body: JSON.stringify({
        startDate: start,
        endDate: end

      })
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
  /*   today.setMonth(today.getMonth() - 3) */
      new Date (today.getFullYear(), 0, 1)
  );
  const [endDate, setEndDate] = useState(new Date());
 
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    fetchData(startDate, endDate).then(data => {
      setDashboardData(data);
    });
  }, [startDate, endDate]);
  
  console.log(dashboardData);
 if (!dashboardData) return null
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
                  /* endDate={endDate}
                  minDate={startDate} */
                />
              </div>
            </div>
          </Header.Content>
          <Header.Buttons>
            <a
              className="button orangebutton donor-list-link"
              href="../DonorList/index"
            >
              <img src={Person} className="button-icon" alt="person" />
              View Donor List
            </a>
          </Header.Buttons>
        </Header.Top>
      </Header>

      {dashboardData ? <div className="wrap">
        <DonationAmount data= {dashboardData}/>
        <KeyStatistics data= {dashboardData}/>
        <ByProject data= {dashboardData}/>
      </div> : null}
    </>
  );
};

export default Dashboard;
