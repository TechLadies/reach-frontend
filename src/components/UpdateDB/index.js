import React, { useState, useEffect } from "react";
import Box from "../../components/Dashboard/Box";
import UpdateDbImg from "../../images/updatedonordb.svg";
import "./index.css";
import FileHandlers from "./FileHandlers";
import ConfirmUpload from "./ConfirmUpload";
import ProgressBar from "./ProgressBar";
import SuccessUpload from "./Success";
import FailedImg from "../../images/uploadfail.svg";
import { dateStringOf } from "../../lib/date.js";
import BigNumber from 'bignumber.js/bignumber';

const priorUploadState = {
  showPopUp: false,
  ipcData: [],
  uploading: false,
  failedUpload: false,
  successUpload: null,
};

function chunk(array, size) {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }
  return chunked_arr;
}

const UpdateDb = () => {
  const [upload, setUpload] = useState(priorUploadState);
  const loadIpcEntries = (entries) => {
    setUpload({
      showPopUp: true,
      ipcData: entries,
      uploading: false,
      failedUpload: false,
      successUpload: null,
    });
  };

  const cancelPopUp = () => {
    setUpload({
      showPopUp: false,
      ipcData: [],
      uploading: false,
      failedUpload: false,
      successUpload: null,
    });
  };

  const onYesContinue = () => {
    setUpload({
      showPopUp: false,
      ipcData: upload.ipcData,
      uploading: true,
      failedUpload: false,
      successUpload: null,
    });
    
    const chunkedIPC = chunk(upload.ipcData, 1000);
    const fetchAChunk = (chunk) => {
      return fetch(`${process.env.REACT_APP_API}/donations/upload`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },

        body: JSON.stringify(chunk),
      })
        .then((res) => {
          if (res.ok) return res.json();
          else throw new Error("Error in uploading chunk");
        })
        .then((data) => {
          return data;
        });
    };

    chunkedIPC.reduce((prev, curr) => {
      return prev.then((prevResults) => {
        return fetchAChunk(curr).then((result) => [result, ...prevResults]);
      });
    }, Promise.resolve([]))
    .then(results => success(finalResult(results)))
    .catch((err) => {
      if (err) failed();
    })
  };

  const finalResult = (results) => {
    const extractDataResponse = results.map(i => i.data)
    const extractChunkSummary = results.map(i=> i.summary)
    const flattenDataResponse = extractDataResponse.reduce((acc, val) => acc.concat(val), []);
    const maxDate = new Date(Math.max.apply(null, extractChunkSummary.map(function(e) {
      return new Date(e.maxDate);
    })));
    const minDate = new Date(Math.min.apply(null, extractChunkSummary.map(function(e) {
      return new Date(e.minDate);
    })));
    const totalCount = extractChunkSummary.reduce((acc, curr)=> {
      return  acc + curr.totalCount
    },0)
    const totalAmt = extractChunkSummary.reduce((acc, curr)=> {
      return acc.plus(curr.totalAmt)
    }, new BigNumber(0))

    
    return {
      data: flattenDataResponse,
      summary :{
        minDate: minDate.toISOString(),
        maxDate: maxDate.toISOString(),
        totalCount,
        totalAmt: totalAmt.toString()
      }
    }
  }

  const failed = () => {
    setUpload({
      showPopUp: false,
      ipcData: [],
      uploading: false,
      failedUpload: true,
      successUpload: null,
    });
  };
  const success = (data) => {
    setUpload({
      showPopUp: false,
      ipcData: [],
      uploading: false,
      failedUpload: false,
      successUpload: data,
    });
  };

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
              />
            )}
            {upload.uploading && <ProgressBar />}
          </Box>
        </div>
      )}
    </div>
  );
};

const getLatestUpload = async () => {
  return await fetch(`${process.env.REACT_APP_API}/uploads/latest`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((resp) => resp.json())
    .catch((err) => {
      console.log(err);
    });
};

const UploadMsg = () => {
  const [latestUpload, setLatestUpload] = useState({});

  useEffect(() => {
    getLatestUpload().then((result) => {
      if (result) setLatestUpload(result);
    });
  }, []);

  const lastUpdate = latestUpload.createdAt;
  const firstDate = new Date(latestUpload.firstDate);
  const lastDate = new Date(latestUpload.lastDate);

  return (
    <div>
      <div className=" update-top">
        <div className="container1">
          <h1 className="grey-header">Last database update</h1>
          <div className="container2">
            <p className=" update-data">
              {lastUpdate && lastDbUpdateFormat(lastUpdate)}
            </p>
          </div>
        </div>
        <div className="container1">
          <h1 className="grey-header">For donations in the period of </h1>
          <div className="container2">
            <p className="update-data">
              {lastUpdate &&
                dateStringOf(firstDate) + "-" + dateStringOf(lastDate)}
            </p>
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
  );
};

const FailMsg = () => {
  return (
    <div className="fail-container">
      <p className="fail-title">Upload Failed</p>
      <p className="fail-msg">
        Oops! There was a technical issue. Please try uploading it again.
      </p>
    </div>
  );
};

function lastDbUpdateFormat(date) {
  const lastUpdateDate = new Date(date);
  const formatLatestDate = dateStringOf(lastUpdateDate);
  const lastUpdateTime = lastUpdateDate.toLocaleTimeString("en-US");
  const latestUpdate = formatLatestDate + " " + lastUpdateTime;
  return latestUpdate;
}

export default UpdateDb;
