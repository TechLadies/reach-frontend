import React from 'react'
import HiFive from '../../images/hi-five.svg'
import TwoHands from '../../images/two-hands-donation.svg'
import DonationCircle from '../../images/donations-circle.svg'
import Calendar from '../../images/calendar-circle.svg'
import Box from '../../components/Dashboard/Box'
import { Tabs, Tab } from 'react-bootstrap'

const SuccessUpload = () => {
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
            <p className="black-description">$10,120.80</p>
          </div>
        </div>
        <div className="summary-subcontainer">
          <img src={Calendar} className="success-img" alt="twohands" />
          <div>
            <h1 className="grey-header">For the period of</h1>
            <p className="black-description">16-30 Sep 2019</p>
          </div>
        </div>
      </Box>
      <div className="tab">
        <Tabs
          defaultActiveKey="all"
          id="uncontrolled-tab-example"
          className= "nav nav-tabs nav-justified"
        >
          <Tab eventKey="all" title={<div>All Donors</div>}>
            <Table />
          </Tab>
          <Tab eventKey="new" title={<div>New Donors</div>}>
            <Table />
          </Tab>
          <Tab eventKey="existing" title={<div>Existing Donors</div>}>
            <Table />
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default SuccessUpload

const Table = () => {
  const data = {
    donationList: [
      {
        IDNumber: 'S1234567B',
        name: 'Alan Tan',
        totalAmountDonated: '$56,900',
        noOfDonations: '1',
        donorType: 'New',
        viewProfile: ''
      },
      {
        IDNumber: 'S1234567B',
        name: 'Alan Tan',
        totalAmountDonated: '$56,900',
        noOfDonations: '1',
        donorType: 'New',
        viewProfile: ''
      },
      {
        IDNumber: 'S1234567B',
        name: 'Alan Tan',
        totalAmountDonated: '$56,900',
        noOfDonations: '1',
        donorType: 'New',
        viewProfile: ''
      }
    ]
  }
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col" width="120px">ID Number</th>
          <th scope="col" width= "200px">Name</th>
          <th scope="col" width= "127px">Total Amt Donated</th>
          <th scope="col" width= "105px">No. of Donations</th>
          <th scope="col" width= "75px">Donor Type</th>
          <th scope="col" width= "110px">View Profile </th>
        </tr>
      </thead>
      <tbody>
        {' '}
        <ListItem data={data.donationList} />{' '}
      </tbody>
    </table>
  )
}

function ListItem(props) {
  let listElements = props.data

  let listComponents = listElements.map(item => {
    return (
      <tr>
        <td> {item.IDNumber} </td>
        <td>{item.name}</td>
        <td>{item.totalAmountDonated}</td>
        <td>{item.noOfDonations}</td>
        <td>{item.donorType}</td>
        <td>
          <a href="{item.viewProfile}">View Profile</a>
        </td>
      </tr>
    )
  })

  return <React.Fragment>{listComponents}</React.Fragment>
}
