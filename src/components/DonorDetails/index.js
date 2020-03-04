import React, { useState } from 'react'
import Box from '../Dashboard/Box'
import './index.css'
import DonorTable from './DonorTable'
import Dummyedit from './Dummyedit'
import Pencil from '../../images/pencil.svg'
import Email from '../../images/email.svg'
import Location from '../../images/location.svg'
import Phone from '../../images/phone.svg'
import Person from '../../images/contact-person.svg'
import Person from '../../images/person.svg'
import Header from '../Header'

function DonorDetails() {
  return (
    <div className= "donordetails">
      <Header>
        <Header.Top>
          <Header.Content>
            <h1 className="title">Donors Details</h1>
          </Header.Content>
          <Header.Buttons>
            <button className="button purplebutton">
              <img src={Pencil} className="button-icon" />
              Edit Profile
            </button>
          </Header.Buttons>
        </Header.Top>
      </Header>
      <div className="cards-container">
        <Particulars />
        <Contact />
      </div>
      <DonorTable />
    </div>
  )
}

const Particulars = () => {
  return (
    <div className="particulars-wrapper">
      <div>{/* <p className="label"> Donor Details </p> */}</div>
      <Box className="particulars-box">
        <div className="double-field">
          <div className="id-style">
            <p className="label"> ID Number </p>
            <p className="text">S0980213A</p>
          </div>
          <div className="id-style">
            <p className="label"> ID Type</p>
            <p className="text"> NRIC</p>
          </div>
        </div>
        <div className="single-field">
          <p className="label">Donor Name</p>
          <p className="text">Mr Keith Wee Liang</p>
        </div>
        <div className="single-field">
          <p className="label"> Date of Birth</p>
          <p className="text">28 Nov 2019</p>
        </div>
        <div className="double-field">
          <div className="id-style">
            <p className="label">Total Donations</p>
            <p className="text"> 57 </p>
          </div>
          <div className="id-style">
            <p className="label">Total Donation Amount</p>
            <p className="text">$5412432</p>
          </div>
        </div>
        <div className="single-field">
          <p className="label">Remarks</p>
          <p className="text">
            Mr Lee and family members are major donors of church
          </p>
        </div>
      </Box>
    </div>
  )
}

const Contact = () => {
  return (
    <div className="contact-wrapper">
      {/*  <div>
  
      <button className= "button purplebutton">
      <img src={Pencil} className="button-icon"/>Edit Profile</button>
  
     </div> */}
      <Box className="contact-box">
        <div className="contact-row">
          <img src={Person} alt="phone" className="contact-icon" />
          <div className="single-field">
            <p className="label">Contact Person</p>
            <p className="text">Mr. Keith Lee Wei Yong</p>
          </div>
        </div>
        <div className="contact-row">
          <img src={Phone} alt="phone" className="contact-icon" />
          <div className="single-field">
            <div className= "header-indicator-box"><p className="label">Phone Number</p> <PreferenceIndicator/></div>
            <p className="text">09876234</p>
          </div>
        </div>
        <div className="contact-row">
          <img src={Email} alt="email" className="contact-icon" />
          <div className="single-field">
            <p className="label">Email Address</p>
            <p className="text">keith@gmail.com</p>
          </div>
        </div>
        <div className="contact-row">
          <img src={Location} alt="address" className="contact-icon" />
          <div className="single-field">
            <p className="label">Mailing Address</p>
            <p className="text"> Blk 123 Havery Road Singapore 798724832</p>
          </div>
        </div>
      </Box>
    </div>
  )
}

const PreferenceIndicator = () => {
  return (
    <div className="indicator">
      <div className="indicator-text">Preferred </div>
    </div>
  )
}
export default DonorDetails

