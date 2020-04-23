


function convertJSONToCSV(objArray /*or JSONData,ReportTitle,ShowLabel*/) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var csv = ''; /*var  str=''*/


    /* this to extract each row */
    for (var i = 0; i < array.length; i++) {
        var row = ''; /*line ='' */
        /* this to exreact each column and convert it in string comma separated */
        for (var index in array[i]) {
            if (row != '') row += ','

            row += array[i][index];
        }

        csv += row + '\r\n';
    }

    return csv;
}

function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = this.convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10 
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) {
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

var headers = {
    idNo: 'idNo'.replace(/,/g, ''), // remove commas to avoid errors
    name: "name",
    contactno: "contactNo",
    email: "email",
    dnc: "dnc"
};
};

itemsNotFormatted = [
    {
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
           dnc: true,
    },
{
    idNo: "8293270", name: "MediaWks", contactNo: "82938101", email: "mediaworks@gmail.com", dnc: null, …}

];

var itemsFormatted = [];

// format the data
itemsNotFormatted.forEach((item) => {
    itemsFormatted.push({
        idNo: 'idNo'.replace(/,/g, ''), // remove commas to avoid errors
        name: "name",
        contactno: "contactNo",
        email: "email",
        dnc: "dnc"
    });
});

var fileTitle = 'donorlist'; // or 'my-unique-title'

exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
