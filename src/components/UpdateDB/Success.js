import React, { useState } from "react";
import HiFive from "../../images/hi-five.svg";
import TwoHands from "../../images/two-hands-donation.svg";
import DonationCircle from "../../images/donations-circle.svg";
import Calendar from "../../images/calendar-circle.svg";
import Box from "../../components/Dashboard/Box";
import { Tabs, Tab } from "react-bootstrap";
import Pagination from "../../lib/pagination";
import { Link } from "react-router-dom";
import Spin from "../../lib/spinner";
import { dateVariation, periodFormatter } from "../../lib/date";

const SuccessUpload = (props) => {
  const uploadDonorData = props.donorData.data;
  const uploadSummary = props.donorData.summary;
  const minDate = dateVariation(new Date(uploadSummary.minDate));
  const maxDate = dateVariation(new Date(uploadSummary.maxDate));
  //pagination
  const entriesPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const begin = (currentPage - 1) * entriesPerPage;
  const end = begin + entriesPerPage;
  //for all data
  const allDonorsList = uploadDonorData.slice(begin, end);
  //for new data
  const newDonorsList = newDonor(uploadDonorData).slice(begin, end);
  //for old data
  const existingDonorsList = existingDonor(uploadDonorData).slice(begin, end);

  if (props.donorData) {
    return (
      <div className="success-container">
        <header className="success-header">File Uploaded Successfully!</header>
        <img src={HiFive} alt="success" className="hifive-img" />
        <div className="summary-wrapper">
          <Box className="summary-container">
            <div className="summary-subcontainer">
              <img src={TwoHands} className="success-img" alt="twohands" />
              <div>
                <h1 className="grey-header">Number of donations</h1>
                <p className="black-description">{uploadSummary.totalCount}</p>
              </div>
            </div>
            <div className="summary-subcontainer">
              <img
                src={DonationCircle}
                className="success-img"
                alt="twohands"
              />
              <div>
                <h1 className="grey-header">Total amount collected</h1>
                <p className="black-description">${uploadSummary.totalAmt}</p>
              </div>
            </div>
            <div className="summary-subcontainer">
              <img src={Calendar} className="success-img" alt="twohands" />
              <div>
                <h1 className="grey-header">For the period of</h1>
                <p className="black-description">
                  {periodFormatter(minDate, maxDate)}
                </p>
              </div>
            </div>
          </Box>
        </div>
        <div className="navtable-container">
          <Tabs
            defaultActiveKey="all"
            className="nav nav-tabs nav-justified"
            onSelect={() => setCurrentPage(1)}
          >
            <Tab
              eventKey="all"
              title={
                <div className="tab-container">
                  <div className="sum-icon">
                    <div className="sum-txt">{uploadDonorData.length}</div>
                  </div>
                  <div>All Donors</div>
                </div>
              }
            >
              <Table
                data={allDonorsList}
                donorsPerPage={entriesPerPage}
                currentPage={currentPage}
              />
              <Pagination
                totalEntries={uploadDonorData.length}
                entriesPerPage={entriesPerPage}
                paginate={paginate}
              />
            </Tab>
            <Tab
              eventKey="new"
              title={
                <div className="tab-container">
                  <div className="sum-icon">
                    <div className="sum-txt">
                      {newDonor(uploadDonorData).length}
                    </div>
                  </div>
                  <div>New Donors</div>
                </div>
              }
            >
              <Table
                data={newDonorsList}
                donorsPerPage={entriesPerPage}
                currentPage={currentPage}
              />
              <Pagination
                totalEntries={newDonor(uploadDonorData).length}
                entriesPerPage={entriesPerPage}
                paginate={paginate}
              />
            </Tab>
            <Tab
              eventKey="existing"
              title={
                <div className="tab-container">
                  <div className="sum-icon">
                    <div className="sum-txt">
                      {existingDonor(uploadDonorData).length}
                    </div>
                  </div>
                  <div>Existing Donors</div>
                </div>
              }
            >
              <Table
                data={existingDonorsList}
                donorsPerPage={entriesPerPage}
                currentPage={currentPage}
              />
              <Pagination
                totalEntries={existingDonor(uploadDonorData).length}
                entriesPerPage={entriesPerPage}
                paginate={paginate}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  } else return <Spin />;
};

export default SuccessUpload;

const Table = (props) => {
  return (
    <table className="table">
      <thead>
        <tr className="d-flex">
          <th scope="col" className="col-2">
            ID Number
          </th>
          <th scope="col" className="col-2 text-left">
            Name
          </th>
          <th scope="col" className="col-2">
            Total Amt. Donated
          </th>
          <th scope="col" className="col-2">
            No. of Donations
          </th>
          <th scope="col" className="col-2">
            Donor Type
          </th>
          <th scope="col" className="col-2"></th>
        </tr>
      </thead>
      <tbody>
        <SuccessUploadList
          data={props.data}
          donorsPerPage={props.donorsPerPage}
        />
      </tbody>
    </table>
  );
};

function SuccessUploadList(props) {
  const listElements = props.data;
  const listComponents = listElements.map((item) => {
    return (
      <tr className="d-flex ">
        <td className="col-2 id-num">
          {item.idNo ? item.idNo :"-"}
        </td>
        <td className="col-2 text-left">{item.name}</td>
        <td className="col-2">{item.totalAmount}</td>
        <td className="col-2">{item.donationCount}</td>
        <td className="col-2">
          {item.__isNew ? "New" : "Existing"}
        </td>
        <td className="col-2">
          {item.idNo ? (
            <Link to={"/details/" + item.idNo} className="profilelink">
              View Profile >
            </Link>
          ) : null}
        </td>
      </tr>
    );
  });
  return <React.Fragment>{listComponents}</React.Fragment>;
}

const newDonor = (allDonor) => {
  return allDonor.filter((d) => d.__isNew).map((d) => d);
};

const existingDonor = (allDonor) => {
  return allDonor.filter((d) => !d.__isNew).map((d) => d);
};
