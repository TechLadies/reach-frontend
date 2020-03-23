import React, {Component, useState } from 'react'
import Box from '../Dashboard/Box'
import './index.css'
import DonorTable from './DonorTable'
import DummyEdit from './Dummyedit'
import Pencil from '../../images/pencil.svg'
import Email from '../../images/email.svg'
import Location from '../../images/location.svg'
import Phone from '../../images/phone.svg'
import Person from '../../images/contact-person.svg'
import Header from '../Header'
import Modal from '../Modal'
import { Button } from "react-bootstrap";

// function App() {
//   const [show,setShow] = useState(false);
//   const openModal = () => setShow(true);
//   const closeModal = () => setShow(false);
//   return(
//     <div className="App">
// <h1> creating edit profile modal </h1>
// {!show && <button onclick={openModal}>Show modal</button>}
//     </div>
//   );
// }
// export default App;


function DonorDetails() {
  const [show,setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
     <>
    <Button variant="primary" onClick={handleShow}>
        Launch edit  modal
      </Button>
      {/* <button className="button purplebutton" onclick ={handleShow}> 
              <img src={Pencil} className="button-icon" />
              Edit Profile
            </button> */}
      <Modal show={show} 
          dialogClassName="modal-90w" 
          onHide={handleClose}>
       <div className = "edit-modal">
        {/* <Modal.Header closeButton>
          <Modal.Title>Edit Donor Profile</Modal.Title>
        </Modal.Header> */}
        <Modal.Header className = "title-box">
          <header className = "title"> REACH Community-Edit Donor Information</header>
        </Modal.Header>

        {/* <Modal.Body> you can only edit Donor remarks and DNC status!</Modal.Body> */}
        Modal.Body className="">
        <div className = "body-wrapper">
          <div className= "remarks-container">
            <p> Remarks</p>
            <input form = "text"></input>
          </div>
          <div className= "preference-container">
            <header className = "title">  </header>
            <input type="radio" value = "phone"></input>
            <label for = "phone">Phone Number</label>
            <input type="radio" value = "email"></input>
            <label for = "email">Email Address</label>
            <input type="radio" value = "mail"></input>
            <label for = "mail">Mailing Address</label>
            <input type="radio" value = "phone"></input>
            <label for ="dnc">Do Not Contact</label>          
          </div>
        </div>

          </Modal.Body>

        <Modal.Footer className ="popup-btn">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
    
      </Modal>
    </>
  )

    <div className= "donordetails">
      <Header>
        <Header.Top>
          <Header.Content>
            <h1 className="title">Donors Details</h1>
          </Header.Content>
          <Header.Buttons>
            <button className="button purplebutton" onclick ={handleShow}> 
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

