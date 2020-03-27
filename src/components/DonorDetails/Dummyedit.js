import React ,{Component, useState, useEffect} from "react";
import "./index.css";
import Modal from '../Modal'
import { Form ,Button } from "react-bootstrap";

// const getRermarks ;
// const getDnc;

function DummyEdit(props) { 
  // const [remarks,setRemarks] = useState();
  // const [dnc,setDnc] = useState();
  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            {/* <!-- Material unchecked --> */}
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

//   <!-- Default unchecked -->
// <div class="custom-control custom-radio">
//   <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios">
//   <label class="custom-control-label" for="defaultUnchecked">Default unchecked</label>
// </div>

// <!-- Default checked -->
// <div class="custom-control custom-radio">
//   <input type="radio" class="custom-control-input" id="defaultChecked" name="defaultExampleRadios" checked>
//   <label class="custom-control-label" for="defaultChecked">Default checked</label>
// </div>