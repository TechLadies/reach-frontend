import React from "react";
import Reportplus from "../../images/reportplus.svg";
import "./index.css";
import * as Papa from "papaparse";



function FileHandlers(props) {
  const onCancel= () =>{
    props.CPU()
  }
  const handleSelectedFile = e => {
    console.log(e.target.files[0]);

    Papa.parse(e.target.files[0], {
      header: true,
      download: false,
      delimiter: ",",
      skipEmptyLines: true,
      complete: function(results) {  
        props.loadIpcEntries(results.data);
        console.log(results.data);
      }
    });
  };

  return (
    <div>
      <input
        type="file"
        name="file"
        id="file"
        onChange={handleSelectedFile}
        accept=".csv"
        value= {onCancel}
        className= "defaultinputfile"
      />
      <label for= "file" className= "button orangebutton">
      <img src={Reportplus} className="button-icon" alt="Upload IPC file" />
        Upload IPC File
      </label>
    </div>
  );
}

export default FileHandlers;
