import React, { useState } from 'react'
import Box from '../../components/Dashboard/Box'
import UpdateDbImg from '../../images/updatedonordb.svg'
import './index.css'
import FileHandlers from './FileHandlers'
import ConfirmUpload from './ConfirmUpload'
import ProgressBar from './ProgressBar'
import SuccessUpload from './Success'
import FailedImg from '../../images/uploadfail.svg'
import Modal from '../Modal'

const fakeUpdates = {
  lastUpdate: '16 Sep 2019, 13:94',
  period: '1 Sep 2019 - 31 Oct 2019'
}

const priorUploadState = {
  showPopUp: false,
  ipcData: [],
  uploading: false,
  failedUpload: false,
  successUpload: false
}

const UpdateDb = () => {
  const [upload, setUpload] = useState(priorUploadState)

  const loadIpcEntries = entries => {
    setUpload({
      showPopUp: true,
      ipcData: entries,
      uploading: false,
      failedUpload: false,
      successUpload: false
    })
  }

  const cancelPopUp = () => {
    setUpload({
      showPopUp: false,
      ipcData: [],
      uploading: false,
      failedUpload: false,
      successUpload: false
    })
  }

  const onYesContinue = () => {
    setUpload({
      showPopUp: false,
      ipcData: upload.ipcData,
      uploading: true,
      failedUpload: false,
      successUpload: false
    })
  }

  const failed = () => {
    setUpload({
      showPopUp: false,
      ipcData: [],
      uploading: false,
      failedUpload: true,
      successUpload: false
    })
  }
  const success = () => {
    setUpload({
      showPopUp: false,
      ipcData: [],
      uploading: false,
      failedUpload: false,
      successUpload: true
    })
  }

  return (
    <div>
      {upload.successUpload ? (
        <SuccessUpload />
      ) : (
        <Box className="updatedb-box">
          {upload.failedUpload ? (
            <img
              src={FailedImg}
              alt="oops, an error occurred"
              className="failimg"
            />
          ) : (
            <img
              src={UpdateDbImg}
              alt="Update donor database"
              className="uploadimg"
            />
          )}
          <div className="updatedetails-container">
            {upload.failedUpload ? <FailMsg /> : <UploadMsg />}
            <FileHandlers loadIpcEntries={loadIpcEntries} CPU={cancelPopUp} />
          </div>
          {upload.showPopUp && (
            <ConfirmUpload
              CPU={cancelPopUp}
              ipcEntries={upload.ipcData}
              clickYes={onYesContinue}
            />
          )}
          {upload.uploading && (
            <ProgressBar onFailedUpload={failed} progress={upload.percentage} />
          )}
        </Box>
      )}
    </div>
  )
}

const UploadMsg = () => {
  return (
    <div>
      <div className=" update-top">
        <div className="container1">
          <h1 className="grey-header">Last database update</h1>
          <div className="container2">
            <p className=" update-data">{fakeUpdates.lastUpdate}</p>
          </div>
        </div>
        <div className="container1">
          <h1 className="grey-header">For donations in the period of </h1>
          <div className="container2">
            <p className="update-data"> {fakeUpdates.period} </p>
          </div>
        </div>
      </div>
      <div className="update-bottom">
        <div className="container3">
          <p className="black-description">
            To update the database, upload the IPC file here
          </p>
        </div>
      </div>
    </div>
  )
}

const FailMsg = () => {
  return (
    <div className="fail-container">
      <p className="fail-title">Upload Failed</p>
      <p className="fail-msg">
        Oops! There was a technical issue. Please try uploading it again.
      </p>
    </div>
  )
}

export default UpdateDb
