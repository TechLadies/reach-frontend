import React, {useState, useEffect } from 'react'
import Box from '../Dashboard/Box'
import { useParams } from 'react-router-dom'
import './index.css'
import Modal from '../Modal'

const fetchPreferredContacts = async () => {
    const res =  await fetch(`${process.env.REACT_APP_API}/donors/edit`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
  })
  const data =  res.json()
  return data
}

function Edit (props) {
  const id =useParams()
  const [contacts,setContacts ] = useState([]);

    useEffect(() => {
      fetchPreferredContacts().then(data => setContacts(data)) 
    },[])

 console.log(contacts)  /*console.log(data.contacts[0]);*/

       return (
       <>
      <Modal
        show={props.showModal}
        dialogClassName="modal-90w"
        onHide= {props.close}>
  
        <div className= 'edit-modal'>
          <Modal.Header>
            <header className="title">
              Edit Donor Information
            </header>
            <Modal.Close onClick = {props.close}/>
          </Modal.Header>

          <Modal.Body className="edit-body">
            <div className="edit-body-wrapper">
              <div className="remarks-container">
                <h1 className ="edit-subheader"> Remarks</h1>
                <input form="text" className= "remarks-input"></input>
              </div>
              <div className="preference-container">
                <h2 className="edit-subheader"> Preferred Contact </h2>
                <div className= "radio-container">
                 {contacts.length && contacts.map(contact =><div> 
                   <label> <input name ="contact" type ="radio" selected value = {contact.description} /> {contact.description}</label> 
                {contact.description}</div>)}
                {/* <div className="contact-wrapper">
                     <Box className={contacts.dnc ? 'dnc-contact-box' : 'contact-box'}>
                    {contacts.dnc && <DNCIndicator />} </Box> </div> */}
                </div> 
              </div>
            </div>
         
          </Modal.Body>
      
        </div>
          <Modal.Footer className="">
        
              <button className="button cancel-btn" onClick={props.close}>
                <span>Cancel</span>
              </button>
              <div>
                <button className="button orangebutton" >
                  Save the changes{' '}
                </button>
          
              <br />
            </div>
          </Modal.Footer>
          
      </Modal>
    </>
  )
}

// const PreferenceIndicator = () => {
//   return (
//     <div className="indicator">
//       <div className="indicator-text">Preferred </div>
//     </div>
//   )

// }

// const DNCIndicator = () => {
//   return (
//     <div className="dnc-indicator">
//       <div className="dnc-indicator-text">Do Not Contact</div>
//     </div>
//   )
// }
  export default Edit


