import React ,{Component, useState} from "react";

import "./index.css";
// import Modal from '../Modal'
import ModalEditDonor from "./modaleditdonor";



  function App() {
  const [show,setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  return(
    <div className="App">
<h1> creating edit profile modal </h1>
{!show && <button onclick={openModal}>Show modal</button>}
    </div>
  );
}
export default App;
// function EditDonor (props){
    //  const onCancel = () => {
    //    props.CPU()
    //  }
    //  const onYes =()=> {
    //    console.log('you pressed yes');
    //  }

    // return()
      // <Modal show={true} className="popup-box">
      // <Modal.Body className="message-container">
      //   <p className="popup-msg1">
      //    edit profile
          
      //   </p>
      //   <p className="popup-msg2"> Would you like to proceed?</p>
      // </Modal.Body>
      // <Modal.Footer className="popup-btn">
      //   <div>
      //     <button className="button continue-btn" onClick={onYes}>
      //       Yes, continue
      //     </button>
      //   </div>
      //   <div>
      //     <button className="button cancel-btn" onClick={onCancel}>
      //       <span>Cancel</span>
      //     </button>
      //   </div>
        
      // </Modal.Footer>
 
// </Modal>
//    );
//   }
// export default EditDonor;

