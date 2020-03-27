import React from 'react'
import './index.css'
import dateStringOf from '../../lib/dateStringGenerator'
import Modal from '../Modal'

function ConfirmUpload(props) {
  const onCancel = () => {
    props.CPU()
  }
  
  const onYes = () => {
    props.clickYes()
  } 

  const quantity = props.ipcEntries.length
  const array = props.ipcEntries
  const getDateArray = array
    .map(value => {
      const transformDate = (((value['Date of Donation']).split('/')).reverse()).join('-')
      return Date.parse(transformDate)
    })

  const maxDate = new Date(Math.max.apply(null, getDateArray))
  const minDate = new Date(Math.min.apply(null, getDateArray))
  console.log(minDate)

  return (
    <Modal show={true} className="popup-box">
      <Modal.Body className="message-container">
        <p className="popup-msg1">
          You are uploading{' '}
          <span className="popup-purpletxt">{quantity} donations</span> from the
          period of{' '}
          <span className="popup-purpletxt">
            {dateStringOf(minDate)} to {dateStringOf(maxDate)}
          </span>
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
  )
}

export default ConfirmUpload
