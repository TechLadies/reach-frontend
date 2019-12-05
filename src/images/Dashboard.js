import React, { useState, useEffect } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import Box from '../components/Dashboard/Box'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BySource from '../components/Dashboard/BySource'
import DonationAmount from "../components/Dashboard/DonationAmount"
import KeyStatistics from "../components/Dashboard/KeyStatistics" 
import ByIntent from "../components/Dashboard/ByIntent"

// const fakeData = [
//     { x: "cats", y: 55, fill: "#0a2" },
//     { x: "dogs", y: 124, fill: "blue" },
//     { x: "rabbits", y: 20, fill: "orange" }
//   ];

  
  const Dashboard  = () => { 
     
    const today = new Date()
    // use state start and end
    const [startDate, setStartDate] = useState(today.setMonth(today.getMonth()-3))
    const [endDate, setEndDate] = useState(today)
    const [donationAmt, setDonationAmt] = useState([]);
    const [totalDonationAmt, setTotalDonationAmt] = useState(0);
    const [totalNoOfDonations, setTotalNoOfDonations] = useState(0); 
    const [noOfDonationBySource, setNoOfDonationBySource] = useState([]);  
    const [donationAmtByIntent, setDonationAmtByIntent] = useState([]);

    const fetchData = async (start, end) => {
      const response = await fetch (
        '/dashboard?startDate='+start+'&endDate='+end
      ).then(resp => resp.json())
        .then(data => {
          data = {
            "startDate": "2019-09-23",
            "endDate": "2019-11-23",
            "donationAmt": [
                {"date": "2019-09-23", "amount": "213"},
                {"date": "2019-09-24", "amount": "345"},
                {"date": "2019-09-25", "amount": "2343"},
                {"date": "2019-09-26", "amount": "354"},
                {"date": "2019-09-27", "amount": "76"},
                {"date": "2019-09-28", "amount": "6765"},
                {"date": "2019-09-29", "amount": "445"},
                {"date": "2019-09-30", "amount": "97"},
                {"date": "2019-10-01", "amount": "4567"},
                {"date": "2019-10-02", "amount": "458"},
                {"date": "2019-10-03", "amount": "89"},
                {"date": "2019-10-04", "amount": "889"}
            ],
            "totalDonationAmt": "12154.00",
            "totalNoOfDonations": "6328",
            "noOfDonationBySource": [
                { "sourceName": "bi-monthly charity dinner", "noOfDonations": 3238 },
                { "sourceName": "church", "noOfDonations": 832 },
                { "sourceName": "online (Beverity)", "noOfDonations": 290 },
                { "sourceName": "online (REACH)", "noOfDonations": 102 },
                { "sourceName": "others", "noOfDonations": 88 },
            ],
            "donationAmtByIntent": [
                { "amount": 4900, "intent": "counselling"},
                { "amount": 5500, "intent": "family"},
                { "amount": 3800, "intent": "senior"},
                { "amount": 4200, "intent": "youth"},
                
              ]
          }
          setDonationAmt(data.donationAmt)
          setTotalDonationAmt(data.totalDonationAmt)
          setTotalNoOfDonations(data.totalNoOfDonations)
          setNoOfDonationBySource(data.noOfDonationBySource)
          setDonationAmtByIntent(data.donationAmtByIntent)
        })
        .catch(err => {console.log("err: ", JSON.stringify(err))});
    }

    fetchData(startDate, endDate);

    useEffect( () => { fetchData(startDate, endDate).then(res => res); }

      // setStartDate(response.startDate) // startDate = response.startDate
      // setEndDate(response.endDate)
      
    , [startDate, endDate]);

    return (
      <>
        <div className = "dashboard-header wrap">
          <h1>Dashboard</h1>
            <div className ="d-flex">
              <div>
                <label htmlFor="startDate"> From &nbsp; {"      "}</label>

                <DatePicker id="startDate" selected={startDate} onChange={date => setStartDate(date)} selectsStart 
                startDate={startDate} endDate={endDate}/>
              </div>
                <div>
                  <label htmlFor="endDate"> To &nbsp; {"      "}</label>
                  <DatePicker id="endDate" selected={endDate} onChange={date => setEndDate(date)}  selectsEnd endDate={endDate} minDate={startDate} />
                </div>
                <button className="button orangebutton ml-auto">View Donor List</button>
            </div>
        </div>

        <div className = "wrap"> 
            
          <DonationAmount />

          <KeyStatistics />
          
          <BySource />    

          <ByIntent />    
          
        </div>
      </>
        
      );
    }
  
  export default Dashboard;