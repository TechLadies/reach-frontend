import React, { useState } from 'react'
import Box from '../Dashboard/Box'
import './index.css'
import DonorTable from './DonorTable'

function DonorDetails () {
   
  return (
  <div >
    <div class="container2">
       <Particulars/>
       <Contact/>
    </div>
    <DonorTable />
  </div>
  )
  
}

const Particulars = () => {
  return(
    
  <div className="particulars-wrapper">
  <div>
    <p className="label"> Donor Details </p>
    </div>
  <Box className="particulars-box">
    <div className="double-field">
      <div className ="id-style">
        <p className="idnumberlabel"> ID Number </p>
        <p className="idnumbertext">S0980213A</p>
      </div>
      <div className ="id-style">
        <p className="idnumberlabel"> ID Type</p>
        <p className="idnumbertext"> NRIC</p>
      </div>
    </div>
    <div className="single-field">
      <p className="donornamelabel">Donor Name</p>
      <p className="">Mr Keith Wee Liang</p>
    </div>
    <div className="single-field">
      <p className="birthdatelabel"> Date of Birth</p>
      <p className="birthdate">28 Nov 2019</p>
    </div>
    <div className="double-field">
      <div className="donation-style">
        <p className="totaldonationslabel">Total Donations</p>
        <p className="total-donations"> 57 </p>
      </div>
      <div className="donation-style">
      <p className="totaldonationslabel">Total Donation Amount</p>
        <p className="total-donation-amount">$5412432</p>
      </div>
    </div>
    <div className="single-field">
      <p className="remarklabel">Remarks</p>
        <p className="remarks">Mr Lee and family members are major donors of church</p>
    </div>
  </Box>
  </div>
  )
}

const Contact = () => {
  return(
    <div className="contact-wrapper">
    <div>
    <p className="edit"> 
       <img src="./src/images/1159633.jpg" alt=""/> Edit Profile
    </p>
    </div>
    <Box className="contact-box">
      <div className="single-field">
      <p className="idnumberlabel">Phone Number</p>
        <p className="idnumbertext">09876234</p>
    </div>
      <div className="single-field">
      <p className="remarklabel">Email Address</p>
        <p className="remark">keith@gmail.com</p>
    </div>
      <div className="single-field">
      <p className="remarklabel">Mailing Address</p>
        <p className="remark"> Blk 123 Havery Road Singapore 798724832</p>
    </div>
    </Box>
    </div>
  )
}


   
export default DonorDetails
