import React, { useState, useEffect } from "react";

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
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
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
      )
    }

export default DonorList;