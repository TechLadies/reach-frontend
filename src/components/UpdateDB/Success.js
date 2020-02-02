import React from 'react'
import HiFive from '../../images/hi-five.svg'
import TwoHands from '../../images/two-hands-donation.svg'
import DonationCircle from '../../images/donations-circle.svg'
import Calendar from '../../images/calendar-circle.svg'
import Box from '../../components/Dashboard/Box'
import { Tabs, Tab } from 'react-bootstrap'

const SuccessUpload = props => {
  if (!props.donorData) return null
  console.log(props.donorData)
  return (
    <div className="success-container">
      <header className="success-header">File Uploaded Successfully!</header>
      <img src={HiFive} alt="success" className="hifive-img" />
      <Box className="summary-container">
        <div className="summary-subcontainer">
          <img src={TwoHands} className="success-img" alt="twohands" />
          <div>
            <h1 className="grey-header">Number of donations</h1>
            <p className="black-description">313 Donations</p>
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
                  <div className="sum-txt">{props.donorData[1].totalCount}</div>
                </div>
                <div>All Donors</div>
              </div>
            }
          >
            <Table data={props.donorData[0]} />
          </Tab>
          <Tab
            eventKey="new"
            title={
              <div className="tab-container">
                <div className="sum-icon">
                  <div className="sum-txt">
                    {newDonor(props.donorData[0]).length}
                  </div>
                </div>
                <div>New Donors</div>
              </div>
            }
          >
            <Table data={newDonor(props.donorData[0])} />
          </Tab>
          <Tab
            eventKey="existing"
            title={
              <div className="tab-container">
                <div className="sum-icon">
                  <div className="sum-txt">
                    {existingDonor(props.donorData[0]).length}
                  </div>
                </div>
                <div>Existing Donors</div>
              </div>
            }
          >
            <Table data={existingDonor(props.donorData[0])} />
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
        {' '}
        <ListItem data={props.data} />{' '}
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
