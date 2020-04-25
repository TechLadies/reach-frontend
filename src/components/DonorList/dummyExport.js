import React from 'react';
import * as Papa from 'papaparse';

// const convertJSONToCSV = () => {
  function convertJSONToCSV(props) {
    const csv = Papa.unparse({
        fields: ["IdNo", "name", "contactNo", "email", "dnc"],
        data: [{
            idNo: "S409382F",
         name: "Keyboard Warrior",
         contactNo: null, 
         email: "",
         dnc: true
          },
          {
                            idNo: "S9209230H",
                             name: "Sylvica Chan",
                              contactNo: null, 
                              email: "", 
                              dnc: null
                        },
                        {
                            idNo: "S23231232A",
                             name: "TowKay Neo", 
                             contactNo: "829212412",
                              email: "tkneo@gmail.com",
                               dnc: true
                        },
                    {
                        idNo: "8293270", 
                        name: "MediaWks", 
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

    
