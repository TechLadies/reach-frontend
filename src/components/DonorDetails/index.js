import React, { useState } from 'react'
import Box from '../Dashboard/Box'
import './index.css'
import DonorTable from './DonorTable'

function DonorDetails () {
   
  return (
  <div>
    <Particulars/>
    <Contact/>
    <DonorTable />
  </div>
  )
}

const Particulars = () => {
  return(
  <Box>
    <div className="double-field">
      <div className= "id-style">
        <p>ID Number</p>
        <p>S0980213A</p>
      </div>
      <div className= "id-style">
        <p>ID Type</p>
        <p>NRIC</p>
      </div>
    </div>
    <div className="single-field">
      <p>Donor Name</p>
      <p>Mr Keith Wee Liang</p>
    </div>
    <div className="single-field">
      <p>Date of Birth</p>
      <p>28 Nov 2019</p>
    </div>
    <div className="double-field">
      <div className="total-donations">
        <p>Total Donations</p>
        <p>57</p>
      </div>
      <div className="total-donation-amount">
      <p>Total Donation Amount</p>
        <p>$5412432</p>
      </div>
    </div>
    <div className="single-field">
      <p>Remarks</p>
        <p>Mr Lee and family members are major donors of church</p>
    </div>
  </Box>
  )
}

const Contact = () => {
  return(
    <Box>
      <div className="single-field">
      <p>Phone Number</p>
        <p>09876234</p>
    </div>
      <div className="single-field">
      <p>Email Address</p>
        <p>keith@gmail.com</p>
    </div>
      <div className="single-field">
      <p>Mailing Address</p>
        <p>Blk 123 Havery Road Singapore 798724832</p>
    </div>
    </Box>
  )
}


   
export default DonorDetails
