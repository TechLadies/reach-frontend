import React, { useState, useEffect } from 'react'
import Box from '../Dashboard/Box'
import './index.css'
import DonorTable from './DonorTable'
import Pencil from '../../images/pencil.svg'
import Email from '../../images/email.svg'
import Location from '../../images/location.svg'
import Phone from '../../images/phone.svg'
import Person from '../../images/contact-person.svg'
import Header from '../Header'
import { useParams } from 'react-router-dom'

const onLoadPage = async id => {
  const res = await fetch('http://reach-backend.herokuapp.com/donors/details', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ donorIdNo: id.idNo })
  })
  const data = await res.json()
  return data
}

function DonorDetails(props) {
  const id = useParams()
  const [donorInfo, setDonorInfo] = useState(null)

  useEffect(() => {
    onLoadPage(id).then(data => setDonorInfo(data))
  }, [id])

  console.log(donorInfo)
  if (donorInfo) {
    return (
      <div className="donordetails">
        <Header>
          <Header.Top>
            <Header.Content>
              <h1 className="title">Donors Details</h1>
            </Header.Content>
            <Header.Buttons>
              <button className="button purplebutton">
                <img src={Pencil} className="button-icon" alt = "editprofile" />
                Edit Profile
              </button>
            </Header.Buttons>
          </Header.Top>
        </Header>
        <div className="cards-container">
          <Particulars donorDetails={donorInfo} />
          <Contact donorDetails={donorInfo} />
        </div>
        <DonorTable donorDetails= {donorInfo} />
      </div>
    )
  } else return null
}

const Particulars = props => {
  const donorDetails = props.donorDetails.details
  return (
    <div className="particulars-wrapper">
      <Box className="particulars-box">
        <div className="double-field">
          <div className="id-style">
            <p className="label"> ID Number </p>
            <p className="text">{handleNull(donorDetails.idNo)}</p>
          </div>
          <div className="id-style">
            <p className="label"> ID Type</p>
            <p className="text">{handleNull(donorDetails.idType)}</p>
          </div>
        </div>
        <div className="single-field">
          <p className="label">Donor Name</p>
          <p className="text">{handleNull(donorDetails.name)}</p>
        </div>
        <div className="single-field">
          <p className="label"> Date of Birth</p>
          <p className="text">{handleNull(donorDetails.dateOfBirth)}</p>
        </div>
        <div className="double-field">
          <div className="id-style">
            <p className="label">Total Donations</p>
            <p className="text"> {handleNull(donorDetails.donationCount)} </p>
          </div>
          <div className="id-style">
            <p className="label">Total Donation Amount</p>
            <p className="text">$ {handleNull(donorDetails.donationSum)}</p>
          </div>
        </div>
        <div className="single-field">
          <p className="label">Remarks</p>
          <p className="text">{handleNull(donorDetails.remarks)}</p>
        </div>
      </Box>
    </div>
  )
}

const Contact = props => {
  const donorContact = props.donorDetails.contact
  const donorDetails = props.donorDetails.details
  const lowerCaseIdType = donorDetails.idType.toLowerCase()
  return (
    <div className="contact-wrapper">
      <Box className="contact-box">
        {lowerCaseIdType.includes('uen') ? (
          <div className="contact-row">
            <img src={Person} alt="phone" className="contact-icon" />
            <div className="single-field">
              <p className="label">Contact Person</p>
              <p className="text">{handleNull(donorContact.contactPerson)}</p>
            </div>
          </div>
        ) : null}
        <div className="contact-row">
          <img src={Phone} alt="phone" className="contact-icon" />
          <div className="single-field">
            <div className="header-indicator-box">
              <p className="label">Phone Number</p>{' '}
              {donorContact.preferredContact ? (
                <PreferenceIndicator />
              ) : null}
            </div>
            <p className="text">{handleNull(donorContact.phone)}</p>
          </div>
        </div>
        <div className="contact-row">
          <img src={Email} alt="email" className="contact-icon" />
          <div className="single-field">
            <p className="label">Email Address</p>
            <p className="text">{handleNull(donorContact.email)}</p>
          </div>
        </div>
        <div className="contact-row">
          <img src={Location} alt="address" className="contact-icon" />
          <div className="single-field">
            <p className="label">Mailing Address</p>
            <p className="text"> {handleNull(donorContact.mail)}</p>
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

const handleNull = data => {
  if (!data) {
    return '-'
  } else return data
}
