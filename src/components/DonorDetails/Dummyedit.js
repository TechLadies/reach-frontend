import React ,{Component, useState, useEffect} from "react";
import "./index.css";
import Modal from '../Modal'

function DummyEdit(props) { 
  const [show,setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
      <>
    {/* <Button variant="primary" onClick={handleShow}>
        Launch edit  modal
      </Button> */}
       {/* <button className="button purplebutton" onClick ={handleShow}> 
         <img src={Pencil} className="button-icon" />
         Edit Profile
       </button>  */}
      <Modal show={show} 
          dialogClassName="modal-90w" 
          onHide={handleClose}>
       <div className = "edit-modal">
         <Modal.Header className = "title-box">
          <header className = "title"> REACH Community-Edit Donor Information</header>
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
              <button className="button cancel-btn" onClick={handleClose}>
                <span>Cancel</span>
              </button>
              <div>
                <button className= "button orangebutton" onClick={handleClose}>Save the changes </button>
              </div>
              <br/>
            </div> 
          {/* <Button className="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
     </div>
      </Modal>
      </>
      )
    }


  export default DummyEdit
