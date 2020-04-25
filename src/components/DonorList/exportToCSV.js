// import React from 'react'
// // import * as FileSaver from 'file-saver';
// // import * as XLSX from 'xlsx';
// import * as Papa from 'papaparse';

// // step1 . fetch the  API - donorlist
// const getDonorData = async page => { 
//     return  fetch( 
//        `${process.env.REACT_APP_API}/donors${page ? `?page=${page}` : ""}`
//          )
//         .then(resp => resp.json())
//         .catch(err => {
//             console.log("err: ", JSON.stringify(err));
//        })
//        // .then(data=>data.json())
//        };

// //   fetch(
// //     '`${process.env.REACT_APP_API}/donors${page ? `?page=${page}` : ""}`
// //     .then(resp => res.json())
// // console.log(json) ;

// function objectToCsv(data) {
//     const csv =   
//      Papa.unparse(data,
         
//              {
//                  quotes: false, //or array of booleans
//                  quoteChar: '"',
//                  escapeChar: '"',
//                  delimiter: ",",
//                  header: true,
//                  newline: "\r\n",
//                  skipEmptyLines: false, //or 'greedy',
//                  columns: null //or array of strings
//              }
//      )
//     //  return csv ;
//  };
//   console.log(csv);

// //  step 3 export csv // function exportCsvFile

//  export default objectToCsv;
// // export default exportCSVFile;