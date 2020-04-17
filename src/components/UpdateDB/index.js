import React, { useState, useEffect } from 'react'
import Box from '../../components/Dashboard/Box'
import UpdateDbImg from '../../images/updatedonordb.svg'
import './index.css'
import FileHandlers from './FileHandlers'
import ConfirmUpload from './ConfirmUpload'
import ProgressBar from './ProgressBar'
import SuccessUpload from './Success'
import FailedImg from '../../images/uploadfail.svg'
import {
  dateStringOf,
  dateVariation,
  periodFormatter,
  reformatDate,
} from '../../lib/date.js'

const priorUploadState = {
  showPopUp: false,
  ipcData: [],
  uploading: false,
  failedUpload: false,
  successUpload: null,
}

const UpdateDb = () => {
  const [upload, setUpload] = useState(priorUploadState)

  const loadIpcEntries = (entries) => {
    setUpload({
      showPopUp: true,
      ipcData: entries,
      uploading: false,
      failedUpload: false,
      successUpload: null,
    })
  }

  const cancelPopUp = () => {
    setUpload({
      showPopUp: false,
      ipcData: [],
      uploading: false,
      failedUpload: false,
      successUpload: null,
    })
  }

  const onYesContinue = () => {
    setUpload({
      showPopUp: false,
      ipcData: upload.ipcData,
      uploading: true,
      failedUpload: false,
      successUpload: null,
    })

    const validateUpSert = (res) => {
      if (res.ok) {
        res.json().then((data) => success(data))
      } else {
        return failed()
      }
    }

    fetch(`${process.env.REACT_APP_API}/donations/upload`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(upload.ipcData),
    })
      .then(validateUpSert)
      .catch((err) => console.log(err))
  }

  const failed = () => {
    setUpload({
      showPopUp: false,
      ipcData: [],
      uploading: false,
      failedUpload: true,
      successUpload: null,
    })
  }
  const success = (data) => {
    setUpload({
      showPopUp: false,
      ipcData: [],
      uploading: false,
      failedUpload: false,
      successUpload: data,
    })
  }

  return (
    <div>
      {upload.successUpload ? (
        <SuccessUpload donorData={upload.successUpload} />
      ) : (
        <div className="updatedb-wrapper">
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
                success={success}
                failed={failed}
              />
            )}
            {upload.uploading && (
              <ProgressBar
                onFailedUpload={failed}
                progress={upload.percentage}
              />
            )}
          </Box>
        </div>
      )}
    </div>
  )
}

const getLatestUpload = async () => {
  return await fetch(`${process.env.REACT_APP_API}/uploads/latest`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((resp) => resp.json())
    .catch((err) => {
      console.log(err)
    })
}

const UploadMsg = () => {
  const [latestUpload, setLatestUpload] = useState({})

  useEffect(() => {
    getLatestUpload().then((result) => {
      setLatestUpload(result)
    })
  }, [])

  // for createdAt 
  const dateString = latestUpload.createdAt
  // console.log(typeof dateString) /*string datatype*/
  // console.log(dateString) 
  const latestDate = new Date(dateString) /*convert into date object*/
  console.log(latestDate)
  // console.log(typeof latestDate)
  const formatlatestDate = dateStringOf(latestDate) /* ot get a desired date format*/
  console.log(formatlatestDate) /* this also works */
  // console.log(latestDate.toLocaleTimeString('en-US')) /* this works*/
  const event = latestDate.toLocaleTimeString('en-US')
  console.log(event)
   // display date and time stamp together ---
  const latestEvent = formatlatestDate + " " + event
  console.log(latestEvent)

  const fds = latestUpload.firstDate
  const firstDate = new Date(fds)
  const lds = latestUpload.lastDate
  const lastDate = new Date(lds)
 
  return (
    <div>
      <div className=" update-top">
        <div className="container1">
          <h1 className="grey-header">Last database update</h1>
          <div className="container2">
            {/* <p className=" update-data">{formatDate(latestUpload.createdAt)}</p> */}
            <p className=" update-data">{formatlatestDate}</p>
          </div>
        </div>
        </div>
        <div className="container1">
          <h1 className="grey-header">For donations in the period of </h1>
          <div className="container2">
            {/* the original line <p className="update-data"> {formatDate(latestUpload.firstDate)} - {formatDate(latestUpload.lastDate)}</p> */}
            {/* the code if using function <p className=" update-data">{formatFirstDate} - {formatLastDate}</p> */}
            <p className=" update-data">{dateStringOf(firstDate)} - {dateStringOf(lastDate)}</p>
          </div>
      <div className="update-bottom">
        <div className="container3">
          <p className="black-description">
            To update the database, upload the IPC file here
          </p>
        </div>
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

function formatDate(dateString) {

  }

export default UpdateDb
