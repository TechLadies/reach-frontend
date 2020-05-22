// //  this code -> show which filter are selected
// var obj = {a: 1, b: 2, c: 3};
              // for (const prop in obj) {
             //   console.log(`obj.${prop} = ${obj[prop]}`);
              // }
import React from "react";
import "./DonorList.css"; 

  const Badge = ({children}) => <span>{children}</span>; 

        function ActiveFilter(props) {
            const filterElements = props.filter
        
        for (const prop in filterElements)
        {
            console.log(`filterElements.${prop} = ${filterElements[prop]}`);
        }
             return (
             <Badge > {item.taxDeduc} </Badge> 
             )
        
    }

        
  export default ActiveFilter

  
//   function ActiveFilter(props) {     
  
//      return (        
//       <div classname ="activeFilters"> Active Filters 
//       <div className="active-filter-container">
//           <Badge >date range </Badge>{'x'} 
//           <Badge> sources </Badge >{'x'}
//           <Badge> tax-deductible-status </Badge >{'x'}
//           <Badge> total-amount-donated-range </Badge>{'x'}
//       </div>
//       </div> 
//      )
//    }

   
    // const filterComponents = FilterElements.map((item, index) => {
        // return <React.Fragment>{FilterComponents}</React.Fragment>
    
    //   return (
    //     <Badge className="d-flex" key={index}> 

    //       <Badge>{(item.date)}</Badge>

    //        <Badge> {item.sources}</Badge>
       
    //       <Badge>{item.taxDeduc}</Badge>
          
    //       <Badge>{item.totalAmoutDonated}</Badge>
    //       </Badge>
       
    //   )
    // })
    // return <React.Fragment>{FilterComponents}</React.Fragment>
//   }

  