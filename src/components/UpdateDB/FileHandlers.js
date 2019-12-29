import React, { useState } from "react";
import Reportplus from "../../images/reportplus.svg";
import "./index.css";
import * as Papa from "papaparse";

const initialState = {
  selectedFile: "",
  loaded: 0
};

function FileHandlers() {
  const [state, setState] = useState(initialState);
  const handleSelectedFile = e => {
    console.log(e.target.files[0]);

    Papa.parse(e.target.files[0], {
      header: true,
      download: false,
      delimiter: ",",
      complete: function(results) {
        console.log(results.data);
      }
    });
    setState({
      ...state,
      selectedFile: e.target.files[0],
      loaded: 0
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

/* const initialState = {
  files: [],
  pending: [],
  next: null,
  uploading: false,
  uploaded: {},
  status: "idle"
};

const LOADED = "LOADED";
const INIT = "INIT";
const PENDING = "PENDING";
const FILES_UPLOADED = "FILES_UPLOADED";
const UPLOAD_ERROR = "UPLOAD_ERROR";

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { ...state, files: action.files, status: LOADED }
    case 'submit':
        return {...state, uploading: true, pending: state.files, status: INIT}
    case 'next' :
        return {
        ...state,
        next: action.next,
        status: PENDING,
    }
          
    default:
      return state;
  }
};

const useFileHandlers = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const onSubmit = useCallback(
      (e) => {
          e.preventDefault()
          if (state.files.length){
              dispatch ({type: 'submit'})
          } else {
              window.alert("You don't have any files loaded")
          }
      },
      [state.files.length],
  ) 

  const onChange = e => {
    if (e.target.files.length) {
      const arrFiles = Array.from(e.target.files);
      const files = arrFiles.map((file, index) => {
        const src = window.URL.createObjectURL(file);
        return { file, id: index, src };
      });
      dispatch({ type: "load", files });
    }
  };

//Sets the next file when it detects that state.next can be set again
  useEffect(() => {
      if(state.pending.length && state.next == null){
          const next = state.pending[0]
          dispatch ({type: 'next', next})
      }
  }, [state.next, state.pending])
  
  const countRef = useRef(0)
//Processes the next pending thumbnail when ready 
useEffect(() =>{
    if (state.pending.length && state.next)
})
  return {
      ...state,
      onSubmit,
      onChange,
  };
}; */
export default FileHandlers;
