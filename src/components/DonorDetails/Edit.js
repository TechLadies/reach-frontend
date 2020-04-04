import React, { useState, useEffect } from 'react'
import Box from '../Dashboard/Box'
import { useParams } from 'react-router-dom'
import './index.css'
import Modal from '../Modal'

const fetchPreferredContacts = async () => {
  const res = await fetch(`${process.env.REACT_APP_API}/donors/edit`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const data = res.json()
  return data
}

function Edit(props) {
  const id = useParams()
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetchPreferredContacts().then((data) => setContacts(data))
  }, [])

  console.log(contacts)

  console.log(props.existingData)
  const currentRemarks = props.existingData.details.donorRemarks
  const currentPreferredContact = props.existingData.contact.preferredContactId
  const currentDNC = props.existingData.contact.dnc

  const [remarks, setRemarks] = useState(currentRemarks)

  return (
    <>
      <Modal
        show={props.showModal}
        dialogClassName="modal-90w"
        onHide={props.close}
      >
        <div className="edit-modal">
          <Modal.Header>
            <header className="title">Edit Donor Information</header>
            <Modal.Close onClick={props.close} />
          </Modal.Header>

          <Modal.Body className="edit-body">
            <div className="edit-body-wrapper">
              <div className="remarks-container">
                <h1 className="edit-subheader">Remarks</h1>
                <input
                  form="text"
                  className="remarks-input"
                  value={remarks}
                  onChange={() => setRemarks()}
                ></input>
              </div>
              <div className="preference-container">
                <h2 className="edit-subheader"> Preferred Contact </h2>
                <div className="radio-container">
                  <form>
                    {contacts.length &&
                      contacts.map((contact) => (
                        <div>
                          <label>
                            <input
                              name="contact"
                              type="radio"
                              value={contact.id}
                              defaultChecked = {currentPreferredContact === contact.id}
                            />
                            {displayContactType(contact.id)}
                          </label>
                        </div>
                      ))}
                    <label>
                      <input
                        name="contact"
                        type="radio"
                        value= {true}
                         defaultValue= {currentDNC}         
                         defaultChecked ={(currentDNC)}      
                      />
                      Do Not Contact
                    </label>
                  </form>
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
            <button className="button orangebutton">Save the changes </button>

            <br />
          </div>
        </Modal.Footer>
      </Modal>
      <header className=""></header>
    </>
  )
}


const displayContactType = (id) => {
  if (id === 1) {
    return 'Phone Number'
  }
  if (id === 2) {
    return 'Email Address'
  }
  if (id === 3) {
    return 'Mailing Address'
  }
}
export default Edit
