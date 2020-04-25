import React from 'react';
import * as Papa from 'papaparse';

// const convertJSONToCSV = () => {
  function convertJSONToCSV(props) {
    const csv = Papa.unparse({
        fields: ["IdNo", "name","amount Donated", "contactNo", "email", "dnc"],
        data: [{
         idNo: "S409382F",
         name: "Keyboard Warrior",
         amount Donated:350,
         contactNo: null, 
         email: "tkneo@gmail.com",
         dnc: true
          },
          {
                            idNo: "S9209230H",
                             name: "Sylvica Chan",
                             amount Donated:33.5,
                              contactNo: null, 
                              email: "tkneo@gmail.com", 
                              dnc: null
                        },
                        {
                            idNo: "S23231232A",
                             name: "TowKay Neo", 
                             amount Donated:98734923,
                             contactNo: "829212412",
                              email: "tkneo@gmail.com",
                               dnc: true
                        },
                    {
                        idNo: "8293270", 
                        name: "MediaWks",
                        amount Donated:110,
                        contactNo: "82938101", 
                        email: "mediaworks@gmail.com", 
                        dnc: null 
                    }
        ]
      });
      return (
        console.log(csv)
      );
      
    }
 export default convertJSONToCSV ;   

    
