import React, {useState, useEffect } from 'react'
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
                 {contacts.length &&contacts.map(contacts => <span>{contacts.description}</span>)}
                
                   <label> 
                    <input name= "phone" type ="radio" value={contacts.description}/>{contacts.description}
                   </label>
                   <label> 
                     <input name= "email" type ="radio" value={contacts.description}/>{contacts.description}
                   </label>
                   <label> 
                     <input name= "mailng address" type ="radio" value={contacts.description}/>{contacts.description}
                    </label>
                
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

  export default Edit


