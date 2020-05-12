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

const getDonorData = async (query) => {
  const res = await fetch(`${process.env.REACT_APP_API}/donors${query}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  console.log(res);
  const data = await res.json();
  return data;
};

function DonorList() {
  const [donorList, setDonorList] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [donorsPerPage] = useState(10);
  const [donorCount, setDonorCount] = useState(0);
  const [query, setQuery] = useState(``);




  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getDonorData(query).then((result) => {
      setDonorList(result);
      setDonorCount(result.length);
    });
  }, [query]);
  console.log(donorList);

  /* function handlePageChange(number) {
    setCurrentPage(number);
    getDonorData(number).then((result) => {
      setDonorList(result);
    });
  }
 */
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

  return (
    <div class="Donor Table">
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
      </Header>
      {filterOpen && (
        <FilterPopUp
          close={() => setFilterOpen(false)}
          query={query}
          setQuery={setQuery}
        />
      )}

      {
        /* Array.isArray(donationList) && */ donorList.length > 0 ? (
          // { donationList.length > 0 ? (
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
              <ListItem data={donorList} />
            </tbody>
          </table>
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

export default DonorList;
