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
      <div className="navtable-container">
        <Tabs defaultActiveKey="all" className="nav nav-tabs nav-justified">
          <Tab
            eventKey="all"
            title={
              <div className="tab-container">
                <div className="sum-icon"><div className="sum-txt">128</div></div>
                <div>All Donors</div>
              </div>
            }
          >
            <Table />
          </Tab>
          <Tab
            eventKey="new"
            title={
              <div className="tab-container">
                <div className="sum-icon"><div className="sum-txt">128</div></div>
                <div>New Donors</div>
              </div>
            }
          >
            <Table />
          </Tab>
          <Tab
            eventKey="existing"
            title={
              <div className="tab-container">
                <div className="sum-icon"><div className="sum-txt">128</div></div>
                <div>Existing Donors</div>
              </div>
            }
          >
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
          <ListItem data={data.donationList} />{' '}
        </tbody>
      </table>
    
  )
}

function ListItem(props) {
  let listElements = props.data

  let listComponents = listElements.map(item => {
    return (
      <tr className="d-flex ">
        <td className="col-2"> {item.IDNumber} </td>
        <td className="col-2 text-left">{item.name}</td>
        <td className="col-2">{item.totalAmountDonated}</td>
        <td className="col-2">{item.noOfDonations}</td>
        <td className="col-2">{item.donorType}</td>
        <td className="col-2">
          <a href="{item.viewProfile}" className= "profilelink">View Profile</a>
        </td>
      </tr>
    )
  })

  return <React.Fragment>{listComponents}</React.Fragment>
}
