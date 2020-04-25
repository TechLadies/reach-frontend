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

  //Pradnya you can continue from here.. 
    }
 export default convertJSONToCSV ;   

    
