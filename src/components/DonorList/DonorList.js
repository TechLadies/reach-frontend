import React, { useState, useEffect } from "react";
import Header from "../Header";
import Styles from "./DonorList.css";
import Filterw from "../../images/filter_whitebtn.svg";
import Filterp from "../../images/filter_purplebtn.svg";
import Reportplus from "../../images/reportplus.svg";
import Box from "../Dashboard/Box.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pagination from "./pagination";
import Dummy from "../Dummy";
import Modal from "../Modal";

const getDonorData = async (start, end) => {
  return fetch("http://localhost:3001/donors")
    .then(resp => resp.json())
    .catch(err => {
      console.log("err: ", JSON.stringify(err));
    });
};

function DonorList(props) {
  const [filterActive, setFilterActive] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [donationList, setDonationList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [donorsPerPage] = useState(10);

  useEffect(() => {
    getDonorData().then(result => {
      setDonationList(result);
    });
  }, []);

  // Get Current Donor
  const totalDonors = donationList.length;
  const indexOfLastDonor = currentPage * donorsPerPage;
  const indexOfFirstDonor = indexOfLastDonor - donorsPerPage;
  const currentDonors = donationList.slice(indexOfFirstDonor, indexOfLastDonor);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const today = new Date();
  // use state start and end
  const [startDate, setStartDate] = useState(
    today.setMonth(today.getMonth() - 3)
  );
  const [endDate, setEndDate] = useState(new Date());

  function ListItem(props) {
    let listElements = props.data;
    let listComponents = listElements.map(item => {
      return (
        <tr key={item.idNo}>
          <td scope="row"> {item.idNo} </td>
          <td>{item.name}</td>
          <td>{item.donationAmount}</td>
          <td>{item.contactNo}</td>
          <td>{item.email}</td>
          <td>{item.dnc ? "Do Not Contact" : "Can Contact"}</td>
        </tr>
      );
    });

    return <React.Fragment>{listComponents}</React.Fragment>;
  }

  return (
    <div class="Donor Table">
      <Header>
        <div>
          <div className="totaldonationamt">Donors</div>
          <div className="keystatslabel">
            {Math.min(totalDonors, donorsPerPage * currentPage)} of{" "}
            {totalDonors} donors listed
          </div>
        </div>
        <Header.Bottom>
          <Header.Buttons>
            <button
              onClick={() => {
                setFilterActive(!filterActive);
                setPopupOpen(true);
              }}
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
        </Header.Bottom>
      </Header>

      {filterActive ? (
        <div class="filter">
          <Modal show={popupOpen} onHide={() => setPopupOpen(false)}>
            <Modal.Header>
              <h3>Donor Filters</h3>
              <Modal.Close onClick={() => setPopupOpen(false)} />
            </Modal.Header>
            <Modal.Body>body</Modal.Body>
            <Modal.Footer>footer</Modal.Footer>
          </Modal>
          <Box>
            <div className="totaldonationamt donorfilterheader">
              Donors Filters
            </div>
            <div className="keystatslabel donorfiltersubheader">
              Donor has made at least 1 donation that satisfies the following
              criteria
            </div>
            <div className="filterdatepicker d-flex">
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
            </div>
            <div class="filterbuttons">
              <Header>
                <Header.Buttons>
                  <div style={{ display: "flex" }}>
                    <button
                      style={{ marginLeft: "auto" }}
                      onClick={() => setFilterActive(!filterActive)}
                      className={"button " + (filterActive ? "button" : null)}
                    >
                      Reset Filters
                    </button>
                    <button
                      onClick={() => setFilterActive(!filterActive)}
                      className={
                        "button orangebutton " +
                        (filterActive ? "orangebutton" : null)
                      }
                    >
                      Apply Filters
                    </button>
                  </div>
                </Header.Buttons>
              </Header>
            </div>
          </Box>
        </div>
      ) : null}

      <table class="table donortable">
        <thead>
          <tr>
            <th scope="col">ID Number</th>
            <th scope="col">Name</th>
            <th scope="col">Amount Donated</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Email Address</th>
            <th scope="col">DNC Status</th>
          </tr>
        </thead>
        <tbody>
          <ListItem data={currentDonors} />
        </tbody>
      </table>

      <div className="pagination-center mt-5">
        <Pagination
          donorsPerPage={donorsPerPage}
          totalDonors={donationList.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default DonorList;
