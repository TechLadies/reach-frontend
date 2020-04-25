import React from 'react';
import * as Papa from 'papaparse';

// const convertJSONToCSV = () => {
  function convertJSONToCSV(data) {

  //pass in API data from DonorList.js, you can access it by calling data
  console.log(data)

  //unparse donationList
  const csv = Papa.unparse(data)

  // check dev console to see unparsed donationList 
  console.log(csv)

  //  continue from here.. download csv 

//   function downloadCSV()
// {
//     var csv = Papa.unparse(array);

//     var csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
//     var csvURL =  null;
//     if (navigator.msSaveBlob)
//     {
//         csvURL = navigator.msSaveBlob(csvData, 'download.csv');
//     }
//     else
//     {
//         csvURL = window.URL.createObjectURL(csvData);
//     }

//     var tempLink = document.createElement('a');
//     tempLink.href = csvURL;
//     tempLink.setAttribute('download', 'download.csv');
//     tempLink.click();
// }
// or following code

// self._downloadCSV(csv);
// _downloadCSV: function(csv) {
//   var blob = new Blob([csv]);
//   var a = window.document.createElement("a");
//     a.href = window.URL.createObjectURL(blob, {type: "text/plain"});
//     a.download = "contacts.csv";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// }
// }

    }
 export default convertJSONToCSV ;   

    
