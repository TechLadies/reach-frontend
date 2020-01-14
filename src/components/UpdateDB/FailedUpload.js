import React from 'react'
import FailedImg from '../../images/uploadfail.svg'

function FailedUpload() {
  return (
  <Box className="updatedb-box">
    <img src={FailedImg} alt="oops, upload failed" />
    <div className="updatedetails-container">
      <div className=" update-top">
        <p className=" update-data">Upload Failed</p>
        <p>Oops! There was a technical issue. Please try uploading it again.</p>
      </div>

      <FileHandlers loadIpcEntries={loadIpcEntries} CPU={cancelPopUp} />
    </div>
  </Box>
  )
}

export default FailedUpload;
