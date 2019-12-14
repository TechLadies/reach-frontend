import React, { useState, useEffect } from "react";
import Header from "../Header";

const donorData = async (start, end) => {
    return new Promise((resolve, reject) => {
        const data = {
          donationList: [
            { IDNumber: "S1234567B", name: "Alan Tan", totalAmountDonated: "$56,900", phoneNumber: "+65-1239-4193", emailAddress: "alan_tan60@gmail.com", DNC: "Can Contact"},
            { IDNumber: "S1234567B", name: "Alan Tan", totalAmountDonated: "$56,900", phoneNumber: "+65-1239-4193", emailAddress: "alan_tan60@gmail.com", DNC: "Can Contact"},
            { IDNumber: "S1234567B", name: "Alan Tan", totalAmountDonated: "$56,900", phoneNumber: "+65-1239-4193", emailAddress: "alan_tan60@gmail.com", DNC: "Can Contact"},
            { IDNumber: "S1234567B", name: "Alan Tan", totalAmountDonated: "$56,900", phoneNumber: "+65-1239-4193", emailAddress: "alan_tan60@gmail.com", DNC: "Can Contact"},
            { IDNumber: "S1234567B", name: "Alan Tan", totalAmountDonated: "$56,900", phoneNumber: "+65-1239-4193", emailAddress: "alan_tan60@gmail.com", DNC: "Can Contact"},
            { IDNumber: "S1234567B", name: "Alan Tan", totalAmountDonated: "$56,900", phoneNumber: "+65-1239-4193", emailAddress: "alan_tan60@gmail.com", DNC: "Can Contact"},
            { IDNumber: "S1234567B", name: "Alan Tan", totalAmountDonated: "$56,900", phoneNumber: "+65-1239-4193", emailAddress: "alan_tan60@gmail.com", DNC: "Can Contact"},
            { IDNumber: "S1234567B", name: "Alan Tan", totalAmountDonated: "$56,900", phoneNumber: "+65-1239-4193", emailAddress: "alan_tan60@gmail.com", DNC: "Can Contact"},
            { IDNumber: "S1234567B", name: "Alan Tan", totalAmountDonated: "$56,900", phoneNumber: "+65-1239-4193", emailAddress: "alan_tan60@gmail.com", DNC: "Can Contact"},
            { IDNumber: "S1234567B", name: "Alan Tan", totalAmountDonated: "$56,900", phoneNumber: "+65-1239-4193", emailAddress: "alan_tan60@gmail.com", DNC: "Can Contact"},
            { IDNumber: "S1234567B", name: "Alan Tan", totalAmountDonated: "$56,900", phoneNumber: "+65-1239-4193", emailAddress: "alan_tan60@gmail.com", DNC: "Can Contact"},
            { IDNumber: "S1234567B", name: "Alan Tan", totalAmountDonated: "$56,900", phoneNumber: "+65-1239-4193", emailAddress: "alan_tan60@gmail.com", DNC: "Can Contact"},
          ],

        };
        resolve(data);
      });
    
      // THE REAL FETCH
      // return fetch ('/dashboard?startDate='+start+'&endDate='+end)
      //   .then(resp => resp.json())
      //   .catch(err => {console.log("err: ", JSON.stringify(err))});
    }

function DonorList(props) {
    return (
      <div class = "Donor Table">
      <table class="table">
      <thead>
        <tr>
          <th scope="col">ID Number</th>
          <th scope="col">Name</th>
          <th scope="col">Total Amt Donated</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Email Address</th>
          <th scope="col">DNC Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    </div>
      )
    }

export default DonorList;