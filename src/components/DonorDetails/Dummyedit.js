import React ,{Component, useState, useEffect} from "react";
import "./index.css";
import Modal from '../Modal'

function DummyEdit(props) { 
  // const [remarks,setRemarks] = usestate();
  // const [dnc,setDnc] = usestate();

  // useEffect(() => {
  //   getRemarks().then(result => {
  //     console.log(result);
  //     setRemarks(result.data);

  //   }); 
  //   getDnc().then(result => {
  //     console.log(result);
  //     setDnc(result.data);
  //   }); 
  // }, []);

  // useEffect(() => {});
  const onCancel = () => {
    props.CPU()
  }
  const onYes =()=> {
    console.log('you pressed yes');
  }


       return (
        <Modal show={true} 
        dialogClassName="modal-90w">
          <div className = "edit-modal">

          <Modal.Header className = "title-box">
          <header className = "title">Edit Donor Information</header>
          
          {/* <Modal.Close onClick={() => setFilterOpen(false)} /> */}
          </Modal.Header>
          <Modal.Body className="">
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
           <Modal.Footer className="popup-btn"> 
            <div>
              <button className="button cancel-btn" onClick={oncancel}>
                <span>Cancel</span>
              </button>
              <div>
                <button className= "button orangebutton" onClick={onYes}>Save Donor Details </button>
              </div>
              <br/>
            </div> 
           </Modal.Footer> 
           </div>
        </Modal>
      )
    }


  export default DummyEdit
