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
import "./DonorList.css";
// import FilterResult from "./filterResults"

const getDonorData = async (query) => {
  const res = await fetch(`${process.env.REACT_APP_API}/donors${query}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
};

function buildQuery(filterObj) {
  const urlParams = [];
  for (let src of filterObj.source) {
    urlParams.push("source=" + src);
  }

  for (var key in filterObj) {
    if (key === "source") {
      continue;
    }
    if (filterObj[key]) {
      urlParams.push(key + "=" + filterObj[key]);
    }
  }
  return `?${urlParams.join("&")}`
}

function DonorList() {
  const [donorList, setDonorList] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [donorsPerPage] = useState(10);
  const [donorCount, setDonorCount] = useState(0);
  const [res, setRes] = useState(false);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [filter, setFilter] = useState({source: []})
  // const Badge = ({children}) => <span>{children}</span>; 

  useEffect(()=>{
    const query = buildQuery(filter)
    getDonorData(query).then((result) => {
      setDonorList(result);
      setDonorCount(result.length);
    });
  }, [filter])

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
           {/* <FilterResult/>  */}
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
      </Header>
      <FilterPopUp
        show={filterOpen}
        close={() => setFilterOpen(false)}
        filter={filter}
        setFilter={setFilter}
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
  ) : (
    null
    /* <div className= "no-donor">No donors found</div> */
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

// const FilterResult =(filterOpen) =>
// {
//   if (filterOpen ===true)  {
//    return (
//     <div classname ="activeFilters"> Active Filters 
//     <div className="active-filter-container">
//         <Badge >Date Range </Badge>{'x'}
//         <Badge> sources </Badge >{'x'}
//         <Badge> tax-deductible-status </Badge >{'x'}
//         <Badge> total-amount-donated-range </Badge>{'x'}
//     </div>
//     </div> 
//   )
//   }
// return (null)
// }

export default DonorList;
