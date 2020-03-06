import React ,{Component} from "react";
import "./index.css";
import Modal from '../Modal'
import Box from '../Dashboard/Box'
import Email from '../../images/email.svg'
import Location from '../../images/location.svg'
import Phone from '../../images/phone.svg'
import Person from '../../images/contact-person.svg'
import Header from '../Header'

function Dummyedit(props) {
  const onCancel = () => {
    props.CPU()
  }
  
  // const onYes = () => {
  //   props.clickYes()
  // } 
       return (
        <Modal show={true} className="popup-box">
          <Modal.Body className="message-container">
            <p className="popup-msg1">
               <span className="popup-purpletxt">Edit Donor Information </span> 
            </p>
            <form> 
             <label className="label">Remarks</label>
             <text  className="text">
                    Mr Lee and family members are major donors of church
             </text>
            </form>
        
          <div className="contact-wrapper">
          <Box className="contact-box">
          <div className="contact-row">
            <img src={Phone} alt="phone" className="contact-icon" />
          <div className="single-field">
          <form>  
            <p className="label">phone</p>
            {/* <div className= "header-indicator-box"><p className="label">Phone Number</p> <PreferenceIndicator/></div> */}
            <p className="text">09876234</p>
          </form>
          </div>
         </div>
        <div className="contact-row">
          <img src={Email} alt="email" className="contact-icon" />
          <div className="single-field">
          <form>
            <p className="label">Email Address</p>
            <p className="text">keith@gmail.com</p>
          </form>
          </div>
        </div>
        <div className="contact-row">
          <img src={Location} alt="address" className="contact-icon" />
          <div className="single-field">
          <form>
            <p className="label">Mailing Address</p>
            <p className="text"> Blk 123 Havery Road Singapore 798724832</p>
          </form>
          </div>
        </div>
        <div className="contact-row">
          <div className="single-field">
          <form>
            <p className="label">Do not contact</p>
            <p className="text"> yes/no</p>
          </form>
          </div>
        </div>
        </Box>
    </div>
          </Modal.Body>
           <Modal.Footer className="popup-btn"> 
            {/* <button className="button save-btn" onClick={onSave}>
              <span>Save</span>
              </button>  */}
            <div>
              <button className="button cancel-btn" onClick={onCancel}>
                <span>Cancel</span>
              </button>
            </div> 
           </Modal.Footer> 
        </Modal>
      )
    }

//  function Dummyedit() {

//   return(
    
//     );
//   }
  export default Dummyedit
