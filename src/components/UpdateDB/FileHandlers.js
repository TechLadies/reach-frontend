import React from "react";

const initialState ={
    files: [],
    pending: [],
    next: null,
    uploading: false,
    uploaded: {},
    status: 'idle',
}

const LOADED = 'LOADED'
const INIT = 'INIT'
const PENDING = 'PENDING'
const FILES_UPLOADED = 'FILES_UPLOADED'
const UPLOAD_ERROR = 'UPLOAD_ERROR'

const useFileHandlers = () =>{
    return {}
}

export default useFileHandlers;