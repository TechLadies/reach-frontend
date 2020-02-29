import React, { useState, useEffect } from "react";
import Header from "../Header";
import Filterw from "../../images/filter_whitebtn.svg";
import Filterp from "../../images/filter_purplebtn.svg";
import Reportplus from "../../images/reportplus.svg";
import Box from "../Dashboard/Box.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dummy from "../Dummy";
import "./DonorList.css";
import Modal from "../Modal";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import Pagination from "../../Pagination";

const getDonorData = async page => {
  return fetch(`http://localhost:3001/donors${page ? `?page=${page}` : ""}`)
    .then(resp => resp.json())
    .catch(err => {
      console.log("err: ", JSON.stringify(err));
    });
};

const getDonorCount = async () => {
  return fetch(`http://localhost:3001/donors/count`)
    .then(resp => resp.json())
    .catch(err => {
      console.log("err: ", JSON.stringify(err));
    });
};

function DonorList(props) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [donationList, setDonationList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [donorsPerPage] = useState(10);
  const [donorCount, setDonorCount] = useState(0);

  useEffect(() => {
    getDonorCount().then(result => {
      setDonorCount(result);
    });
    getDonorData().then(result => {
      console.log(result);
      setDonationList(result.data);
    });
  }, []);

  function handlePageChange(number) {
    setCurrentPage(number);
    getDonorData(number).then(result => {
      setDonationList(result.data);
    });
  }

  useEffect(() => {});

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
    let listComponents = listElements.map((item, i) => {
      return (
        <tr key={i}>
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

  return (
    <div class="Donor Table">
      <Header>
        <Header.Top>
          <Header.Content>
            <div className="totaldonationamt">Donors</div>
            <div className="keystatslabel">
              {Math.min(donorCount, donorsPerPage * currentPage)} of{" "}
              {donorCount} donors listed
            </div>
          </Header.Content>
          <Header.Buttons>
            <button
              onClick={() => {
                setFilterOpen(true);
              }}
              className={
                "button whitebutton " + (filterOpen ? "purplebutton" : null)
              }
            >
              <img src={Filterw} className="button-icon" alt="person" /> Filters
            </button>
            <button
              onClick={() => {
                setFilterOpen(true);
              }}
              className="button orangebutton"
            >
              <img src={Reportplus} className="button-icon" alt="person" />
              Export Donor List
            </button>
          </Header.Buttons>
        </Header.Top>
      </Header>

      <Modal
        show={filterOpen}
        onHide={() => setFilterOpen(false)}
        dialogClassName="modal-90w"
      >
        <Modal.Header>
          <div>
            <h3 className="totaldonationamt">Donor Filters</h3>
            <p className="keystatslabel">
              Donor has made at least 1 donation that satisfies the following
              criteria
            </p>
          </div>

          <Modal.Close onClick={() => setFilterOpen(false)} />
        </Modal.Header>
        <Modal.Body>
          <div className="modalbody">
            <div className="modalfilter">
              <b class="filterlabel">Date Range</b>
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
            </div>

            <div className="modalfilter">
              <strong class="filterlabel">Tax Deductable Status</strong>

              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="defaultInline1"
                  name="inlineDefaultRadiosExample"
                />
                <label class="custom-control-label" for="defaultInline1">
                  Any
                </label>
              </div>

              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="defaultInline2"
                  name="inlineDefaultRadiosExample"
                />
                <label class="custom-control-label" for="defaultInline2">
                  Tax Deductible
                </label>
              </div>

              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="defaultInline3"
                  name="inlineDefaultRadiosExample"
                />
                <label class="custom-control-label" for="defaultInline3">
                  Non Tax Deductible
                </label>
              </div>
            </div>

            <div className="modalfilter">
              <b class="filterlabel">Source contains any of these phrase(s)</b>
              <form className="form-inline my-2 my-lg-0" id="sourceSearchForm">
                <input
                  class="form-control mr-sm-2 w-75"
                  type="search"
                  placeholder="eg: Charity Dinner"
                  aria-label="Search"
                />
              </form>
            </div>

            <div className="modalfilter">
              <b class="filterlabel">Total Donated Amount</b>
              <form class="form-inline my-2 my-lg-0" id="donationAmtSearchForm">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                to&nbsp; {"      "}
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Header.Buttons>
            <div style={{ display: "flex" }}>
              <button
                style={{ marginLeft: "auto" }}
                onClick={() => {}}
                className={"button "}
              >
                Reset Filters
              </button>
              <button onClick={() => {}} className={"button orangebutton "}>
                Apply Filters
              </button>
            </div>
          </Header.Buttons>
        </Modal.Footer>
      </Modal>

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
          <ListItem data={donationList} />
        </tbody>
      </table>

      <div className="pagination-center mt-5">
        <Pagination
          donorsPerPage={donorsPerPage}
          totalDonors={donorCount}
          paginate={paginate}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default DonorList;
