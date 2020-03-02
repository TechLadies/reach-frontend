import React, { useState } from "react";
import Pagination from "../../Pagination"

function DonorTable (){
    return (
            <div className="details-table">
        
             <h4 className="table-title">Donations</h4>
             <p className= "listing">15 out of 57 donations listed</p>
             {/* <div className="clearfix"></div> */}
        
              <table className="table">
                  <thead>
                      <tr className = "d-flex">
                      <th scope="col" className= "col-2">Date</th>
                      <th scope="col" className= "col-2">Amount</th>
                      <th scope="col" className = "col-2">Source</th>
                      <th scope="col" className= "col-2">Mode</th>
                      <th scope="col" className= "col-2">Tax</th>
                      <th scope="col" className= "col-2">Remarks</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className= "d-flex">
                          <td className= "col-2">12.12.2019</td>
                          <td className= "col-2">$1000</td>
                          <td className = "col-2">Charity Dinner</td>
                          <td className= "col-2">cheque</td>
                          <td className= "col-2">Yes</td>
                          <td className= "col-2">NIL</td>
                      </tr>
                      <tr className= "d-flex">
                          <td className= "col-2">12.12.2019</td>
                          <td className= "col-2">$1000</td>
                          <td className = "col-2">Charity Dinner</td>
                          <td className= "col-2">cheque</td>
                          <td className= "col-2">Yes</td>
                          <td className= "col-2">NIL</td>
                      </tr>
                      <tr className= "d-flex">
                          <td className= "col-2">12.12.2019</td>
                          <td className= "col-2">$1000</td>
                          <td className = "col-2">Charity Dinner</td>
                          <td className= "col-2">cheque</td>
                          <td className= "col-2">Yes</td>
                          <td className= "col-2">NIL</td>
                      </tr>
                      
                  </tbody>    
            
              </table>
         
            </div>
          );
}


export default DonorTable;

 