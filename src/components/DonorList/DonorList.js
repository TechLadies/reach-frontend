import React, { useState, useEffect } from "react";
import Header from "../Header";
import Filterw from "../../images/filter_whitebtn.svg";
import Reportplus from "../../images/reportplus.svg";
import "react-datepicker/dist/react-datepicker.css";
import "./DonorList.css";
import history from "../../lib/history";
import Pagination from "../../lib/pagination";
import Spin from "../../lib/spinner";
import downloadCSV from "./exportToCSV";
import FilterPopUp from "./filterPopup";
import ActiveFilter from "./ActiveFilters";
import "./DonorList.css";

const getDonorData = async (query) => {
  const res = await fetch(`${process.env.REACT_APP_API}/donors${query}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
};

function buildQuery(filterObj) {
  const {
    date: { from, to },
    amt: { min: minAmt, max: maxAmt },
    taxDeduc,
    source
  } = filterObj;

  const urlParams = [];
  for (let src of source) {
    urlParams.push("source=" + src);
  }
  if (from) urlParams.push("from=" + from.toISOString().replace(/T.*/, ''));
  if (to) urlParams.push("to=" + to.toISOString().replace(/T.*/, ''));
  if (minAmt) urlParams.push("minAmt=" + minAmt);
  if (maxAmt) urlParams.push("maxAmt=" + maxAmt);
  if (taxDeduc !== "any")
    urlParams.push("taxDeduc=" + taxDeduc);
  return `?${urlParams.join("&")}`;

}

function localStorageFilter() {
  const localStorageFilter = window.localStorage.getItem("filter");
  if (localStorageFilter) {
    const filter = JSON.parse(localStorageFilter);
    return {
      ...filter,
      date: {
        from: filter.date.from && new Date(filter.date.from),
        to: filter.date.to && new Date(filter.date.to)
      }
    };
  } else {
    return null;
  }
}

function DonorList() {
  const [donorList, setDonorList] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [donorsPerPage] = useState(10);
  const [donorCount, setDonorCount] = useState(0);
  const [res, setRes] = useState(false);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const initialFilter = {
    source: [],
    amt: { min: "", max: "" },
    date: { from: new Date(new Date().getFullYear(), 0, 1), to: new Date() },
    taxDeduc: "any",
  };
  const [filter, setFilter] = useState(localStorageFilter() || initialFilter);

  useEffect(() => {
    const query = buildQuery(filter);
    getDonorData(query).then((result) => {
      setDonorList(result);
      setDonorCount(result.length);
    });

      window.localStorage.setItem('filter', JSON.stringify(filter))
  }, [filter]);

  console.log(Object.keys(filter))

  return (
    <div className="Donor Table">
      <Header>
        <Header.Top>
          <Header.Content>
            <div className="totaldonationamt">Donors</div>
            <div className="keystatslabel">
              {donorCount > 15 ? "15" : donorCount} of {donorCount} donors
              listed
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
              onClick={() => downloadCSV(donorList)}
              className="button orangebutton"
            >
              <img src={Reportplus} className="button-icon" alt="person" />
              Export Donor List
            </button>
          </Header.Buttons>
        </Header.Top>
        {Object.keys(filter).length > 0 && (
          <Header.Filters>
            <ActiveFilter filter={filter} setFilter={setFilter} />
          </Header.Filters>
        )}
      </Header>
      <FilterPopUp
        show={filterOpen}
        close={() => setFilterOpen(false)}
        filter={filter}
        setFilter={setFilter}
        initialFilter ={initialFilter}
      />

      {
        /* Array.isArray(donationList) && */ donorList.length >= 0 ? (
          // { donationList.length > 0 ? (
          <DonorListTable data={donorList} />
        ) : (
          <Spin />
        )
      }
      {/* </table> Array.isArray(donationList) ? > 0 : <h1> {donationList.message} </h1>) : <Spin/> }  */}

      <div className="pagination-center mt-5">
        {/*  <Pagination
          donorsPerPage={donorsPerPage}
          totalDonors={donorCount}
          paginate={paginate}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        /> */}
      </div>
    </div>
  );
}

const DonorListTable = (props) => {
  const donorList = props.data;

  return donorList.length > 0 ? (
    <table className="table donortable">
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
        <ListItem data={donorList} />
      </tbody>
    </table>
  ) : null;
  /* <div className= "no-donor">No donors found</div> */
};
function ListItem(props) {
  let listElements = props.data;
  let listComponents = listElements.map((item, i) => {
    return (
      <tr
        key={i}
        className={item.idNo ? "donorlink" : ""}
        onClick={item.idNo && (() => history.push(`/details/${item.idNo}`))}
      >
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

export default DonorList;
