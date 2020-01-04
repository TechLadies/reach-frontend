import React, { useState, useEffect } from "react";
import Header from "../Header";
import Styles from "./DonorList.css";
import Filterw from "../../images/filter_whitebtn.svg";
import Filterp from "../../images/filter_purplebtn.svg";
import Reportplus from "../../images/reportplus.svg";
import Box from "../Dashboard/Box.js";

const getDonorData = async (start, end) => {
  return fetch("http://localhost:3001/donors")
    .then(resp => resp.json())
    .catch(err => {
      console.log("err: ", JSON.stringify(err));
    });
};

function ListItem(props) {
  let listElements = props.data;

  let listComponents = listElements.map(item => {
    return (
      <tr key={item.idNo}>
        {/* <tr onMouseEnter={handleClick}> */}
        <td scope="row"> {item.idNo} </td>
        <td>{item.name}</td>
        <td>{item.totalAmountDonated}</td>
        <td>{item.contactNo}</td>
        <td>{item.email}</td>
        <td>{item.dnc ? "Do Not Contact" : "Can Contact"}</td>
      </tr>
    );
  });

  return <React.Fragment>{listComponents}</React.Fragment>;
}

function DonorList(props) {
  const [filterActive, setFilterActive] = useState(false);
  const [donationList, setDonationList] = useState([]);
  useEffect(() => {
    getDonorData().then(result => setDonationList(result));
  }, []);

  // const data = {
  //   donationList: [
  //     {
  //       IDNumber: "S1234567B",
  //       name: "Alan Tan",
  //       totalAmountDonated: "$56,900",
  //       phoneNumber: "+65-1239-4193",
  //       emailAddress: "alan_tan60@gmail.com",
  //       DNC: "Can Contact"
  //     },
  //     {
  //       IDNumber: "S1234567B",
  //       name: "Marx Tan",
  //       totalAmountDonated: "$56,900",
  //       phoneNumber: "+65-1239-4193",
  //       emailAddress: "alan_tan60@gmail.com",
  //       DNC: "Can Contact"
  //     },
  //     {
  //       IDNumber: "S1234567B",
  //       name: "Alan Tan",
  //       totalAmountDonated: "$56,900",
  //       phoneNumber: "+65-1239-4193",
  //       emailAddress: "alan_tan60@gmail.com",
  //       DNC: "Can Contact"
  //     },
  //     {
  //       IDNumber: "S1234567B",
  //       name: "Alan Tan",
  //       totalAmountDonated: "$56,900",
  //       phoneNumber: "+65-1239-4193",
  //       emailAddress: "alan_tan60@gmail.com",
  //       DNC: "Can Contact"
  //     },
  //     {
  //       IDNumber: "S1234567B",
  //       name: "Alan Tan",
  //       totalAmountDonated: "$56,900",
  //       phoneNumber: "+65-1239-4193",
  //       emailAddress: "alan_tan60@gmail.com",
  //       DNC: "Can Contact"
  //     },
  //     {
  //       IDNumber: "S1234567B",
  //       name: "Alan Tan",
  //       totalAmountDonated: "$56,900",
  //       phoneNumber: "+65-1239-4193",
  //       emailAddress: "alan_tan60@gmail.com",
  //       DNC: "Can Contact"
  //     },
  //     {
  //       IDNumber: "S1234567B",
  //       name: "Alan Tan",
  //       totalAmountDonated: "$56,900",
  //       phoneNumber: "+65-1239-4193",
  //       emailAddress: "alan_tan60@gmail.com",
  //       DNC: "Can Contact"
  //     },
  //     {
  //       IDNumber: "S1234567B",
  //       name: "Alan Tan",
  //       totalAmountDonated: "$56,900",
  //       phoneNumber: "+65-1239-4193",
  //       emailAddress: "alan_tan60@gmail.com",
  //       DNC: "Can Contact"
  //     },
  //     {
  //       IDNumber: "S1234567B",
  //       name: "Alan Tan",
  //       totalAmountDonated: "$56,900",
  //       phoneNumber: "+65-1239-4193",
  //       emailAddress: "alan_tan60@gmail.com",
  //       DNC: "Can Contact"
  //     },
  //     {
  //       IDNumber: "S1234567B",
  //       name: "Alan Tan",
  //       totalAmountDonated: "$56,900",
  //       phoneNumber: "+65-1239-4193",
  //       emailAddress: "alan_tan60@gmail.com",
  //       DNC: "Can Contact"
  //     },
  //     {
  //       IDNumber: "S1234567B",
  //       name: "Alan Tan",
  //       totalAmountDonated: "$56,900",
  //       phoneNumber: "+65-1239-4193",
  //       emailAddress: "alan_tan60@gmail.com",
  //       DNC: "Can Contact"
  //     },
  //     {
  //       IDNumber: "S1234567B",
  //       name: "Alan Tan",
  //       totalAmountDonated: "$56,900",
  //       phoneNumber: "+65-1239-4193",
  //       emailAddress: "alan_tan60@gmail.com",
  //       DNC: "Can Contact"
  //     }
  //   ]
  // };

  return (
    <div class="Donor Table">
      <Header>
        <div>
          <div className="totaldonationamt">Donors</div>
          <div className="keystatslabel">15 of 233 donors listed</div>
        </div>
        <Header.Buttons>
          <button
            onClick={() => setFilterActive(!filterActive)}
            className={
              "button whitebutton " + (filterActive ? "purplebutton" : null)
            }
          >
            <img src={Filterw} className="button-icon" alt="person" /> Filters
          </button>
          <button className="button orangebutton">
            <img src={Reportplus} className="button-icon" alt="person" />
            Export Donor List
          </button>
        </Header.Buttons>
      </Header>

      {filterActive ? (
        <div class="filter">
          <Box>Donor Filters</Box>
        </div>
      ) : null}

      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID Number</th>
            <th scope="col">Name</th>
            <th scope="col">Total Amt Donated</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Email Address</th>
            <th scope="col">DNC Status</th>
          </tr>
        </thead>
        <tbody>
          <ListItem data={donationList} />
        </tbody>
      </table>

      <div className={Styles.pagination}>
        <span>&laquo;</span>
        <span className={Styles.active}>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>

      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <span class="page-link">Previous</span>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item active">
            <span class="page-link">
              2<span class="sr-only">(current)</span>
            </span>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DonorList;
