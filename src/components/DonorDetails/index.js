import React, { useState, useEffect } from "react";
import Box from "../Dashboard/Box";
import "./index.css";
import DonorTable from "./DonorTable";
import Edit from "./Edit";
import Pencil2 from "../../images/pencil.svg";
import Pencil1 from "../../images/pencil1.svg";
import Email from "../../images/email.svg";
import Location from "../../images/location.svg";
import Phone from "../../images/phone.svg";
import Person from "../../images/contact-person.svg";
import Header from "../Header";
import { useParams } from "react-router-dom";
import Spin from "../../lib/spinner";

const onLoadPage = async (id) => {
  const res = await fetch(`${process.env.REACT_APP_API}/donors/details`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({ donorIdNo: id.idNo }),
  });
  const data = await res.json();
  return data;
};

function DonorDetails(props) {
  const id = useParams();
  const [donorInfo, setDonorInfo] = useState(null);

  useEffect(() => {
    onLoadPage(id).then((data) => setDonorInfo(data));
  }, [id]);

  const [editPopUp, setEditPopUp] = useState(false);

  return donorInfo ? (
    <div className="donordetails">
      <Header>
        <Header.Top>
          <Header.Content>
            <h1 className="title">Donors Details</h1>
          </Header.Content>
          <Header.Buttons>
            <button
              className={`button ${
                editPopUp ? "purplebutton" : "beforepurplebutton"
              }`}
              onClick={() => setEditPopUp(true)}
            >
              <img
                src={editPopUp ? Pencil1 : Pencil2}
                className="button-icon"
                alt="editprofile"
              />
              Edit Profile
            </button>
          </Header.Buttons>
        </Header.Top>
      </Header>
      <Edit
        showModal={editPopUp}
        existingData={donorInfo}
        close={() => setEditPopUp(false)}
      />
      <div className="cards-container">
        <Particulars donorDetails={donorInfo} />
        <Contact donorDetails={donorInfo} />
      </div>
      <DonorTable donorDetails={donorInfo} />
    </div>
  ) : (
    <Spin />
  );
}

const Particulars = (props) => {
  const donorDetails = props.donorDetails.details;
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
          <p className="text">{handleNull(donorDetails.donorRemarks)}</p>
        </div>
      </Box>
    </div>
  );
};

const Contact = (props) => {
  const donorContact = props.donorDetails.contact;
  const donorDetails = props.donorDetails.details;
  const lowerCaseIdType = donorDetails.idType.toLowerCase();
  const preference = donorContact.preferredContactId;
  return (
    <div className="contact-wrapper">
      <Box className={donorContact.dnc ? "dnc-contact-box" : "contact-box"}>
        {donorContact.dnc && <DNCIndicator />}
        {lowerCaseIdType.includes("uen") ? (
          <div className="contact-row">
            <img src={Person} alt="contact person" className="contact-icon" />
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
              <p className="label">Phone Number</p>{" "}
              {!donorContact.dnc && preference === 1 && <PreferenceIndicator />}
            </div>
            <p className="text">{handleNull(donorContact.phone)}</p>
          </div>
        </div>
        <div className="contact-row">
          <img src={Email} alt="email" className="contact-icon" />
          <div className="single-field">
            <div className="header-indicator-box">
              <p className="label">Email Address</p>{" "}
              {!donorContact.dnc && preference === 2 && <PreferenceIndicator />}
            </div>
            <p className="text">{handleNull(donorContact.email)}</p>
          </div>
        </div>
        <div className="contact-row">
          <img src={Location} alt="address" className="contact-icon" />
          <div className="single-field">
            <div className="header-indicator-box">
              <p className="label">Mailing Address</p>{" "}
              {!donorContact.dnc && preference === 3 && <PreferenceIndicator />}
            </div>
            <p className="text"> {handleNull(donorContact.mail)}</p>
          </div>
        </div>
      </Box>
    </div>
  );
};

const PreferenceIndicator = () => {
  return (
    <div className="indicator">
      <div className="indicator-text">Preferred </div>
    </div>
  );
};

const DNCIndicator = () => {
  return (
    <div className="dnc-indicator">
      <div className="dnc-indicator-text">Do Not Contact</div>
    </div>
  );
};

const handleNull = (data) => {
  if (!data) {
    return "-";
  } else return data;
};

export default DonorDetails;
