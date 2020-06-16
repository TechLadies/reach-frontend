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
import ReactPaginate from 'react-paginate';

const getDonorData = async (query) => {
  const res = await fetch(`${process.env.REACT_APP_API}/donors${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const data = await res.json();
  return data;
};

function buildQuery(filterObj) {
  const {
    date: { from, to },
    amt: { min: minAmt, max: maxAmt },
    taxDeduc,
    source,
  } = filterObj;

  const urlParams = [];
  for (let src of source) {
    urlParams.push("source=" + src);
  }
  if (from) urlParams.push("from=" + from.toISOString().replace(/T.*/, ""));
  if (to) urlParams.push("to=" + to.toISOString().replace(/T.*/, ""));
  if (minAmt) urlParams.push("minAmt=" + minAmt);
  if (maxAmt) urlParams.push("maxAmt=" + maxAmt);
  if (taxDeduc !== "any") urlParams.push("taxDeduc=" + taxDeduc);
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
        to: filter.date.to && new Date(filter.date.to),
      },
    };
  } else {
    return null;
  }
}

function DonorList() {
  const [donorList, setDonorList] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [donorCount, setDonorCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const initialFilter = {
    source: [],
    amt: { min: "", max: "" },
    date: { from: null, to: null },
    taxDeduc: "any",
  };
  const [filter, setFilter] = useState(localStorageFilter() || initialFilter);

  const entriesPerPage = 15;
  const [currentPage, setCurrentPage] = useState(0);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const begin = currentPage * entriesPerPage;
  const end = begin + entriesPerPage;
  const paginateDonors = donorList.slice(begin, end);

  useEffect(() => {
    const query = buildQuery(filter);
    setLoading(true);
    getDonorData(query).then((result) => {
      setLoading(false);
      setDonorList(result);
      setDonorCount(result.length);
      setCurrentPage(1);
    });

    window.localStorage.setItem("filter", JSON.stringify(filter));
  }, [filter]);

  return (
    <div className="Donor Table">
      <Header>
        <Header.Top>
          <Header.Content>
            <div className="totaldonationamt">Donors</div>
            <div className="keystatslabel">
              {paginateDonors.length} of {donorCount} donors listed
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
        initialFilter={initialFilter}
      />
      {donorList.length >= 0 && !loading ? (
        <>
          <DonorListTable data={paginateDonors} />
          <div className="pagination-center mt-5">
            <ReactPaginate
             previousLabel={"prev"}
             nextLabel={"next"}
             breakLabel={"..."}
             breakClassName={"break-me page-item"}
             pageCount = {Math.ceil(donorCount/entriesPerPage)}
             marginPagesDisplayed={2}
             pageRangeDisplayed={5}
             onPageChange={ data => paginate(data.selected)}
             containerClassName={"pagination"}
             subContainerClassName={"pages pagination"}
             activeClassName={"active"}
             pageLinkClassName = {"page-link page-numbers"}
             pageClassName = {"page-item"}
             previousClassName = {"page-item"}
             nextClassName = {"page-item"}
             previousLinkClassName ={"page-link page-numbers"}
             nextLinkClassName ={"page-link page-numbers"}
             breakLinkClassName = {"page-link page-numbers"}
            />
          </div>
        </>
      ) : (
        <Spin />
      )}
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
  ) : (
    <NoResults />
  );
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
        <td scope="row"> {item.idNo ? item.idNo : "-"} </td>
        <td>{item.name ? item.name : "-"}</td>
        <td>{item.totalAmountDonated ? item.totalAmountDonated : "-"}</td>
        <td>{item.contactNo ? item.contactNo : "-"}</td>
        <td>{item.email ? item.email : "-"}</td>
        <td>{item.dnc ? "Do Not Contact" : "Can Contact"}</td>
      </tr>
    );
  });

  return <React.Fragment>{listComponents}</React.Fragment>;
}

const NoResults = () => {
  return (
    <div className="no-results">
      No results found. Please change your filters
    </div>
  );
};
export default DonorList;
