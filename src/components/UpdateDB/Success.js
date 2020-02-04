import React, { useState } from 'react'
import HiFive from '../../images/hi-five.svg'
import TwoHands from '../../images/two-hands-donation.svg'
import DonationCircle from '../../images/donations-circle.svg'
import Calendar from '../../images/calendar-circle.svg'
import Box from '../../components/Dashboard/Box'
import { Tabs, Tab } from 'react-bootstrap'
import Pagination from '../../Pagination'



const SuccessUpload = props => {
  const uploadDonorData = props.donorData[0]
  const entriesPerPage = 2
  const [currentPage, setCurrentPage] = useState(1)
  const paginate = pageNumber => setCurrentPage(pageNumber);
 
    const begin = (currentPage- 1) * entriesPerPage
    const end = begin + entriesPerPage
    const pageList = uploadDonorData.slice(begin, end)
    console.log(pageList)
  
  
  /* const [currentList, nextList] = useState([loadList(1)])

  const onClick = () => {
    nextList(loadList(paginate))
  } */

  if (!props.donorData) return null
  return (
    <div className="success-container">
      <header className="success-header">File Uploaded Successfully!</header>
      <img src={HiFive} alt="success" className="hifive-img" />
      <Box className="summary-container">
        <div className="summary-subcontainer">
          <img src={TwoHands} className="success-img" alt="twohands" />
          <div>
            <h1 className="grey-header">Number of donations</h1>
            <p className="black-description">{props.donorData[1].totalCount}</p>
          </div>
        </div>
        <div className="summary-subcontainer">
          <img src={DonationCircle} className="success-img" alt="twohands" />
          <div>
            <h1 className="grey-header">Total amount collected</h1>
            <p className="black-description">${props.donorData[1].totalAmt}</p>
          </div>
        </div>
        <div className="summary-subcontainer">
          <img src={Calendar} className="success-img" alt="twohands" />
          <div>
            <h1 className="grey-header">For the period of</h1>
            <p className="black-description">{props.donorData[1].period}</p>
          </div>
        </div>
      </Box>
      <div className="navtable-container">
        <Tabs defaultActiveKey="all" className="nav nav-tabs nav-justified">
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
            <Table data={pageList} donorsPerPage={entriesPerPage} currentPage={currentPage}/>
            <Pagination totalDonors= {uploadDonorData.length} donorsPerPage={entriesPerPage} paginate={paginate}/>
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
            <Table data={newDonor(pageList)} donorsPerPage={entriesPerPage} currentPage={currentPage}/>
            <Pagination totalDonors= {uploadDonorData.length} donorsPerPage={entriesPerPage} paginate={paginate}/>
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
            <Table data={existingDonor(pageList)} donorsPerPage={entriesPerPage} currentPage={currentPage}/>
            <Pagination totalDonors= {uploadDonorData.length} donorsPerPage={entriesPerPage} paginate={paginate}/>
          </Tab>
        </Tabs>
      </div>
      
    </div>
  )
}

export default SuccessUpload

const Table = props => {
  return (
    <table class="table">
      <thead>
        <tr class="d-flex">
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
        <ListItem data={props.data} donorsPerPage={props.donorsPerPage} />
      </tbody>
    </table>
  )
}


function ListItem(props) {
  const listElements = props.data
  const listComponents = listElements.map(item => {
    return (
      <tr className="d-flex ">
        <td className="col-2">
          {' '}
          {item.idNo ? <div>{item.idNo}</div> : <div>-</div>}{' '}
        </td>
        <td className="col-2 text-left">{item.name}</td>
        <td className="col-2">{item.totalAmount}</td>
        <td className="col-2">{item.donationCount}</td>
        <td className="col-2">
          {item.__isNew ? <div>New</div> : <div>Existing</div>}
        </td>
        <td className="col-2">
          <a href="{item.viewProfile}" className="profilelink">
            View Profile >>>
          </a>
        </td>
      </tr>
    )
  })
  return <React.Fragment>{listComponents}</React.Fragment>
}

const newDonor = allDonor => {
  return allDonor.filter(d => d.__isNew)
}

const existingDonor = allDonor => {
  return allDonor.filter(d => !d.__isNew)
}

