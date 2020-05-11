import React, { useState, useEffect } from "react";
import Header from "../Header";
import Filterw from "../../images/filter_whitebtn.svg";
import Reportplus from "../../images/reportplus.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DonorList.css";
import Modal from "../Modal";
import history from "../../lib/history";
import Pagination from "../../lib/pagination";
import Spin from "../../lib/spinner";
import downloadCSV from "./exportToCSV";
import Chevronright from "../../images/Chevron-right.svg";
import Source from "./Sources";
// import {dateStringOf , dateVariation, periodFormatter, reformatDate} from "../../lib/date";
// import { useParams } from 'react-router-dom';

const getDonorData = (start,end) => {
  
  return fetch( 
    `${process.env.REACT_APP_API}/donors`

  )
    .then(resp => resp.json())
    .catch(err => {
      console.log("err: ", JSON.stringify(err));
    });
};

function DonorList(props) {
  
  // const id = useParams()
  const [donorList, setDonorList] = useState({}) 
  const [filterOpen, setFilterOpen] = useState(false);
  const [donationList, setDonationList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [donorsPerPage] = useState(10);
  const [donorCount, setDonorCount] = useState(0);
  const [taxDeduc, setTaxDeduc] = useState(true)
  const [query, setQuery] = useState('')
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const [sourcesList,SetSourcesList] = useState([]);
  const [minAmount, setMinAmount] =useState()
  
  const [maxAmount, setMaxAmount] =useState()
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dateRange, setDateRange] = useState({startDate} - {endDate})  
  // const handleChange = event => {
  //   (event.target.value);
  // };
   useEffect(() => {
     // we need to put these four in useEffect - const filterbysources, const filterbyamtRange, 
  // const filterbydateRange, const filterbytaxdeductstatus,
    
    getDonorData(startDate, endDate).then(result => {
      setDonorList(result);
    });
    getDonorData(startDate, endDate).then(result => {
      console.log(result);
      if( Array.isArray(result)) {
        setDonationList(result);
      } else {
        setDonationList(result); 
        
      }
      
    });
  }, []);

  function handlePageChange(number) {
    setCurrentPage(number);
    getDonorData(number).then(result => {
      setDonationList(result);
  
    });
  }
  // useEffect(() => {});
  // const paginate = pageNumber => setCurrentPage(pageNumber);

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

  return  (
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
              onClick ={() => downloadCSV(donationList)}
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
        <div class = "donorlist-modal">
        <Modal.Header>
          <div>
            <h3 className="donorfilters-head">Donor Filters</h3>
            <span className="donorfilters-subhead">
              Donor has made at least 1 donation that satisfies the following
              criteria
            </span>
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
                    startDate = {startDate}
                    endDate = {endDate}
                    dateFormat = "dd/MM/yyyy"
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
                    dateFormat = "dd/MM/yyyy"
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
                  name ="taxDeduc"
                  onchange = {()=> 
                    setTaxDeduc(true)
                  }
                  value={taxDeduc}
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
                  name ="taxDeduc"
                  onChange ={()=> 
                    setTaxDeduc(true)
                  }
                  value={setTaxDeduc}
                />              
                <label class="custom-control-label" for="defaultInline2">
                  Tax Deductible
                  {/* console.log({taxDeduc}) */}
                </label>
              </div>

              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="defaultInline3"
                  name ="taxDeduc"
                  onChange ={()=> 
                    setTaxDeduc(true)
                  }
                  value={taxDeduc}
                  />
                <label class="custom-control-label" for="defaultInline3">
                  Non Tax Deductible
                </label>
              </div>
            </div>

            <div className="modalfilter">
              <b class="filterlabel">Source contains any of these phrase(s)</b>
              <span className="donorfilter-subhead">Type in each source separated by a comma.</span> 
              <form  action = "" 
                     className="form-inline my-2 my-lg-0" 
                     id="sourceSearchForm">
                <Source /> 
              </form> 
            </div>

            <div className="modalfilter">
              <b class="filterlabel d-flex">Total Donated Amount</b>
             <form class="form-inline my-2 my-lg-0" id="donationAmtSearchForm "> 
                <input
                  className="form-control mr-sm-2 form-amt"
                  type="search"
                  placeholder="$.0.00"
                  aria-label="Search"
                  onChange ={setMinAmount}
                /> 
                to&nbsp; {"      "}
                
               <input
                  className="form-control mr-sm-2 form-amt"
                  type="search"
                  placeholder="$0.00"
                  aria-label="Search"
                  onChange ={setMaxAmount}
                /> 
             </form> 
            </div>
          </div>
        </Modal.Body>
        </div>
        <div className="advanced-filters"> 
            <button
                onClick={() => {}}
                className="button transparentbutton advanced-filters-toggle"
                >
               <img src={Chevronright} className="button-icon" alt="right arrow" />  View Advanced Filters
            </button>
            </div> 
        <Modal.Footer>
          <Header.Buttons>
            
            <div style={{ display: "flex" }}>
           
              <button
                style={{ marginLeft: "auto" }}
                // onClick={() => {}}
                className="button transparentbutton"
              >
                Reset Filters
              </button>
              <button 
              // onClick={() => {}}
              className={"button orangebutton "}>
                Apply Filters
              </button>
            </div>
          </Header.Buttons>
        </Modal.Footer>
      </Modal>
      {Array.isArray(donationList) && donationList.length > 0 ? (
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
          <ListItem data={donationList} />
        </tbody>
       </table> ) : <Spin/> } 
   {/* </table> Array.isArray(donationList) ? > 0 : <h1> {donationList.message} </h1>) : <Spin/> }  */}
      

      <div className="pagination-center mt-5">
        <Pagination
          donorsPerPage={donorsPerPage}
          totalDonors={donorCount}
          paginate={paginate}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      // </div>
    </div>
  );
}

export default DonorList;
