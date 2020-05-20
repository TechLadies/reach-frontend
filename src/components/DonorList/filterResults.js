// //  this is for to show which filter are selected
import React from "react";
  import "./DonorList.css"; 

const FilterResult =() =>
{
    return (
    <div className="active-filter-container">
       <button  className="purplebutton"> date range</button>
       <button  className="purplebutton"> sources</button >
       <button  className="purplebutton"> tax deductible  status</button >
       <button  className="purplebutton"> total amount donated range</button>
    </div>
    )

}
  export default filterResult