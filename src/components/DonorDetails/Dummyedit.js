import React ,{Component, useState, useEffect} from "react";
import "./index.css";
import Modal from '../Modal'

function DummyEdit(props) { 
  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // things to achieve in this is onclick event fetch API , disply modal , submit the data to backend
  
  
  return (
    <>
          <Modal show={true} dialogClassName="modal-90w">
          <div className = "edit-modal">
           <Modal.Header className = "title-box">
            <header className = "title">Edit Donor Information</header>
           </Modal.Header>
          <Modal.Body className="">
            <div className = "body-wrapper">
            <div className= "remarks-container">
               <p> Remarks</p>
               <input form = "text" class="form-control"></input>
            </div>
     
            <div class="form-check">
              <input type="radio" class="form-check-input" id="materialUnchecked" name="materialExampleRadios"></input>
              <label class="form-check-label" for="materialUnchecked">DNC status unchecked</label>
            </div>
            
          {/* <div className= "preference-container">
            <header className = "title">  </header>
            <input type="radio" value = "phone"></input>
            <label for = "phone">Phone Number</label>
            <input type="radio" value = "email"></input>
            <label for = "email">Email Address</label>
            <input type="radio" value = "mail"></input>
            <label for = "mail">Mailing Address</label>
            <input type="radio" value = "phone"></input>
            <input type ="radio" value ="DNC"></input>
            <label for ="dnc">Do Not Contact</label>  
           
          </div> */}
        </div>
        </Modal.Body>

           <Modal.Footer className="popup-btn"> 
            <div>
              <button className="button cancel-btn" onClick={handleClose}>
                <span>Cancel</span>
              </button>
              <div>
                <button className= "button orangebutton" onClick={handleClose}>Save Donor Details </button>
              </div>
              <br/>
            </div> 
            
        </Modal.Footer>
       </div>   
        </Modal>
      </>
      )
    }


  export default DummyEdit
