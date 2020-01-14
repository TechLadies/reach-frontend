import React, { useState } from 'react'
import Box from '../../components/Dashboard/Box'
import UpdateDbImg from '../../images/updatedonordb.svg'
import './index.css'
import FileHandlers from './FileHandlers'
import ConfirmUpload from './ConfirmUpload'
import ProgressBar from './ProgressBar'
const fakeUpdates = {
  lastUpdate: '16 Sep 2019, 13:94',
  period: '1 Sep 2019 - 31 Oct 2019'
}

const priorUploadState = {
  showPopUp: false,
  ipcData: [],
  uploading: false,
  failedUpload: false
}

const UpdateDb = () => {
  const [upload, setUpload] = useState(priorUploadState)

  const loadIpcEntries = entries => {
    setUpload({
      showPopUp: true,
      ipcData: entries,
      uploading: false,
      failedUpload: false
    })
  }

  const cancelPopUp = () => {
    setUpload({
      showPopUp: false,
      ipcData: [],
      uploading: false,
      failedUpload: false
    })
  }

  const onYesContinue = () => {
    setUpload({
      showPopUp: false,
      ipcData: upload.ipcData,
      uploading: true,
      failedUpload: false
    })
  }

  const failed = () => {
    setUpload({
      showPopUp: false,
      ipcData: [],
      uploading: false,
      failedUpload: true
    })
  }

  return (
    <Box className="updatedb-box">
      {upload.showPopUp && (
        <ConfirmUpload
          CPU={cancelPopUp}
          ipcEntries={upload.ipcData}
          resetState={priorUploadState}
          clickYes={onYesContinue}
        />
      )}
      {upload.uploading && <ProgressBar onFailedUpload = {failed}/>}
      <img src={UpdateDbImg} alt="Update donor database" />
      <div className="updatedetails-container">
        <div className=" update-top">
          <div className="update-title">
            Last database update
            <p className=" update-data">{fakeUpdates.lastUpdate}</p>
          </div>
          <div className="update-title">
            For donations in the period of
            <p className="update-data"> {fakeUpdates.period} </p>
          </div>
        </div>
        <div className="update-bottom">
          <div className="upload">
            To update the database, upload the IPC file here
          </div>

          <FileHandlers loadIpcEntries={loadIpcEntries} CPU={cancelPopUp} />
        </div>
      </div>
    </Box>
  )
}

export default UpdateDb
