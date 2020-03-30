import React, {useState, useEffect } from 'react'
import './index.css'
import Modal from '../Modal'

//you can do fetch here 
  //useState method to create state to hold the fetched data
  // const [contact,setContact ] = useState(null);
  const fetchPreferredContacts = async () => {
    const res =  await fetch(`${process.env.REACT_APP_API}/donors/edit`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
  })
  const data =  res.json()
  return data
}

function Edit (props) {
const [contacts,setContacts ] = useState({Id:'',description:''}); /* to store the fetched data
 */
    useEffect(() => {
      fetchPreferredContacts().then(data => setContacts(data)) 
    },[])

console.log(contacts)

       return (
   
    <>
      <Modal
        show={props.showModal}
        dialogClassName="modal-90w"
        onHide= {props.close}
        
      >
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
                <input type="radio" value="phone"></input>
                <label for="phone">Phone Number-{/*contacts[i].description}*/</label>
                <input type="radio" value="email"></input>
                <label for="email">Email Address{/* pass down email address description data here */}</label>
                <input type="radio" value="mail"></input>
                <label for="mail">Mailing Address{/* pass down mail description here */}</label>
                <input type="radio" value="phone"></input>
                <label for="dnc">Do Not Contact</label>
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
