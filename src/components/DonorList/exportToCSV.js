import React from 'react';
import * as Papa from 'papaparse';

function downloadCSV(data)
{
    const csv = Papa.unparse(data)

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
