import React, { useState, useEffect } from "react";
import Header from "../Header";
import "./DonorList.css";
import Dummy from "../Dummy";
import Person from "../../images/person.svg";
import Filterw from "../../images/filter_whitebtn.svg";
import Reportplus from "../../images/reportplus.svg";

const donorData = async (start, end) => {
  return new Promise((resolve, reject) => {
    const data = {
      donationList: [
        {
          IDNumber: "S1234567B",
          name: "Alan Tan",
          totalAmountDonated: "$56,900",
          phoneNumber: "+65-1239-4193",
          emailAddress: "alan_tan60@gmail.com",
          DNC: "Can Contact"
        },
        {
          IDNumber: "S1234567B",
          name: "Alan Tan",
          totalAmountDonated: "$56,900",
          phoneNumber: "+65-1239-4193",
          emailAddress: "alan_tan60@gmail.com",
          DNC: "Can Contact"
        },
        {
          IDNumber: "S1234567B",
          name: "Alan Tan",
          totalAmountDonated: "$56,900",
          phoneNumber: "+65-1239-4193",
          emailAddress: "alan_tan60@gmail.com",
          DNC: "Can Contact"
        },
        {
          IDNumber: "S1234567B",
          name: "Alan Tan",
          totalAmountDonated: "$56,900",
          phoneNumber: "+65-1239-4193",
          emailAddress: "alan_tan60@gmail.com",
          DNC: "Can Contact"
        },
        {
          IDNumber: "S1234567B",
          name: "Alan Tan",
          totalAmountDonated: "$56,900",
          phoneNumber: "+65-1239-4193",
          emailAddress: "alan_tan60@gmail.com",
          DNC: "Can Contact"
        },
        {
          IDNumber: "S1234567B",
          name: "Alan Tan",
          totalAmountDonated: "$56,900",
          phoneNumber: "+65-1239-4193",
          emailAddress: "alan_tan60@gmail.com",
          DNC: "Can Contact"
        },
        {
          IDNumber: "S1234567B",
          name: "Alan Tan",
          totalAmountDonated: "$56,900",
          phoneNumber: "+65-1239-4193",
          emailAddress: "alan_tan60@gmail.com",
          DNC: "Can Contact"
        },
        {
          IDNumber: "S1234567B",
          name: "Alan Tan",
          totalAmountDonated: "$56,900",
          phoneNumber: "+65-1239-4193",
          emailAddress: "alan_tan60@gmail.com",
          DNC: "Can Contact"
        },
        {
          IDNumber: "S1234567B",
          name: "Alan Tan",
          totalAmountDonated: "$56,900",
          phoneNumber: "+65-1239-4193",
          emailAddress: "alan_tan60@gmail.com",
          DNC: "Can Contact"
        },
        {
          IDNumber: "S1234567B",
          name: "Alan Tan",
          totalAmountDonated: "$56,900",
          phoneNumber: "+65-1239-4193",
          emailAddress: "alan_tan60@gmail.com",
          DNC: "Can Contact"
        },
        {
          IDNumber: "S1234567B",
          name: "Alan Tan",
          totalAmountDonated: "$56,900",
          phoneNumber: "+65-1239-4193",
          emailAddress: "alan_tan60@gmail.com",
          DNC: "Can Contact"
        },
        {
          IDNumber: "S1234567B",
          name: "Alan Tan",
          totalAmountDonated: "$56,900",
          phoneNumber: "+65-1239-4193",
          emailAddress: "alan_tan60@gmail.com",
          DNC: "Can Contact"
        }
      ]
    };
    resolve(data);
  });

  // THE REAL FETCH
  // return fetch ('/dashboard?startDate='+start+'&endDate='+end)
  //   .then(resp => resp.json())
  //   .catch(err => {console.log("err: ", JSON.stringify(err))});
};

// function handleClick() {
//   alert("hallo");
// }

function ListItem(props) {
  let listElements = props.data;

  let listComponents = listElements.map(item => {
    return (
      <tr>
      {/* <tr onMouseEnter={handleClick}> */}
        <td scope="row"> {item.IDNumber} </td>
        <td>{item.name}</td>
        <td>{item.totalAmountDonated}</td>
        <td>{item.phoneNumber}</td>
        <td>{item.emailAddress}</td>
        <td>{item.DNC}</td>
      </tr>
    );
  });

  return <React.Fragment>{listComponents}</React.Fragment>;
}

function DonorList(props) {
  const data = {
    donationList: [
      {
        IDNumber: "S1234567B",
        name: "Alan Tan",
        totalAmountDonated: "$56,900",
        phoneNumber: "+65-1239-4193",
        emailAddress: "alan_tan60@gmail.com",
        DNC: "Can Contact"
      },
      {
        IDNumber: "S1234567B",
        name: "Marx Tan",
        totalAmountDonated: "$56,900",
        phoneNumber: "+65-1239-4193",
        emailAddress: "alan_tan60@gmail.com",
        DNC: "Can Contact"
      },
      {
        IDNumber: "S1234567B",
        name: "Alan Tan",
        totalAmountDonated: "$56,900",
        phoneNumber: "+65-1239-4193",
        emailAddress: "alan_tan60@gmail.com",
        DNC: "Can Contact"
      },
      {
        IDNumber: "S1234567B",
        name: "Alan Tan",
        totalAmountDonated: "$56,900",
        phoneNumber: "+65-1239-4193",
        emailAddress: "alan_tan60@gmail.com",
        DNC: "Can Contact"
      },
      {
        IDNumber: "S1234567B",
        name: "Alan Tan",
        totalAmountDonated: "$56,900",
        phoneNumber: "+65-1239-4193",
        emailAddress: "alan_tan60@gmail.com",
        DNC: "Can Contact"
      },
      {
        IDNumber: "S1234567B",
        name: "Alan Tan",
        totalAmountDonated: "$56,900",
        phoneNumber: "+65-1239-4193",
        emailAddress: "alan_tan60@gmail.com",
        DNC: "Can Contact"
      },
      {
        IDNumber: "S1234567B",
        name: "Alan Tan",
        totalAmountDonated: "$56,900",
        phoneNumber: "+65-1239-4193",
        emailAddress: "alan_tan60@gmail.com",
        DNC: "Can Contact"
      },
      {
        IDNumber: "S1234567B",
        name: "Alan Tan",
        totalAmountDonated: "$56,900",
        phoneNumber: "+65-1239-4193",
        emailAddress: "alan_tan60@gmail.com",
        DNC: "Can Contact"
      },
      {
        IDNumber: "S1234567B",
        name: "Alan Tan",
        totalAmountDonated: "$56,900",
        phoneNumber: "+65-1239-4193",
        emailAddress: "alan_tan60@gmail.com",
        DNC: "Can Contact"
      },
      {
        IDNumber: "S1234567B",
        name: "Alan Tan",
        totalAmountDonated: "$56,900",
        phoneNumber: "+65-1239-4193",
        emailAddress: "alan_tan60@gmail.com",
        DNC: "Can Contact"
      },
      {
        IDNumber: "S1234567B",
        name: "Alan Tan",
        totalAmountDonated: "$56,900",
        phoneNumber: "+65-1239-4193",
        emailAddress: "alan_tan60@gmail.com",
        DNC: "Can Contact"
      },
      {
        IDNumber: "S1234567B",
        name: "Alan Tan",
        totalAmountDonated: "$56,900",
        phoneNumber: "+65-1239-4193",
        emailAddress: "alan_tan60@gmail.com",
        DNC: "Can Contact"
      }
    ]
  };

  return (
    <div class="Donor Table">
      <Header>
        <div>
            <div className="totaldonationamt">Donors</div>
            <div className="keystatslabel">15 of 233 donors listed</div>
        </div>
        <Header.Buttons>
          <button className="button whitebutton">
            <img src={Filterw} className="button-icon" alt="person" />
            <a className="donor-list-link" href="../DonorList/index">Filters</a>
          </button>
          <button className="button orangebutton">
            <img src={Reportplus} className="button-icon" alt="person" />
            <a className="donor-list-link" href="../DonorList/index">Export Donor List</a>
          </button>
        </Header.Buttons>
      </Header> 
        
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
          <ListItem data={data.donationList} />
        </tbody>
      </table>
    </div>
  );
}

export default DonorList;
