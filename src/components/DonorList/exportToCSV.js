import React from 'react';
import * as Papa from 'papaparse';
// // step1 . fetch the  API - donorlist
//  step 2 -convert data into csv
//  step 3 -download csv
function downloadCSV(data)
{
    console.log(data)

    //unparse donationList
    //  step 2 -convert data into csv
    const csv = Papa.unparse(data)
  
    // check dev console to see unparsed donationList 
    console.log(csv)
  
//  step 3 -download csv
    var csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
    var csvURL =  null;
    if (navigator.msSaveBlob)
    {
        csvURL = navigator.msSaveBlob(csvData, 'download.csv');
    }
    else
    {
        csvURL = window.URL.createObjectURL(csvData);
    }

    var tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', 'download.csv');
    tempLink.click();
}
export default downloadCSV;


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