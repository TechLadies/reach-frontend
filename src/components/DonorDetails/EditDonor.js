import React ,{Component, useState , useEffect} from "react";

import "./index.css";
import Modal from '../Modal'
// import ModalEditDonor from "./modaleditdonor";
import { Button } from "react-bootstrap";

function EditDonor() {
  const [show,setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return ( 
    <>
    // <div>
    <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
    //  </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> you're goint to edit Donor details in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
 </>
  );
}

export default EditDonor;
/* function EditDonor (props)
 const onCancel = () => 
       props.CPU()
     }
     const onYes =()=> {
       console.log('you pressed yes');
     }

    return()
      <Modal show={true} className="popup-box">
      <Modal.Body className="message-container">
        <p className="popup-msg1">
         edit profile
          
        </p>
        <p className="popup-msg2"> Would you like to proceed?</p>
      </Modal.Body>
      <Modal.Footer className="popup-btn">
        <div>
          <button className="button continue-btn" onClick={onYes}>
            Yes, continue
          </button>
        </div>
        <div>
          <button className="button cancel-btn" onClick={onCancel}>
            <span>Cancel</span>
          </button>
        </div>
        
      </Modal.Footer>
 
</Modal>
   );
  }
export default EditDonor; */

