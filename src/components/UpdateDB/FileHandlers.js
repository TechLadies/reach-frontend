import React from "react";
import Reportplus from "../../images/reportplus.svg";
import "./index.css";
import * as Papa from "papaparse";

function FileHandlers(props) {
  const handleSelectedFile = e => {
    console.log(e.target.files[0]);

    Papa.parse(e.target.files[0], {
      header: true,
      download: false,
      delimiter: ",",
      skipEmptyLines: true,
      complete: function(results) {  
        props.loadIpcEntries(results.data);
      }
    });
  };

  return (
    <div>
      <input
        type="file"
        name=""
        id="uploads"
        onChange={handleSelectedFile}
        accept=".csv"
      />
      <button className="button orangebutton" onClick={FileHandlers}>
        <img src={Reportplus} className="button-icon" alt="Upload IPC file" />
        Upload IPC File
      </button>
    </div>
  );
}

export default FileHandlers;
