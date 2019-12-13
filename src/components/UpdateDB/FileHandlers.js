import React, { useReducer, useCallback, useEffect } from "react";

const initialState = {
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
};
export default useFileHandlers;
