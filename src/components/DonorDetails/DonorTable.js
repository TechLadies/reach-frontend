import React, { useState } from "react";
import Pagination from "../../Pagination"

function DonorTable (){
    return (
            <div className="container App">
        
             <h4 className="d-inline-block">Donations</h4>
             <div className="clearfix"></div>
        
              <table class="table donordetails">
                  <thead>
                      <th scope="col">Date</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Source</th>
                      <th scope="col">Mode</th>
                      <th scope="col">Tax</th>
                      <th scope="col">Remarks</th>
                  </thead>
                  <tbody>
                      <tr>
                          <td>12.12.2019</td>
                          <td>$1000</td>
                          <td>Charity Dinner</td>
                          <td>cheque</td>
                          <td>Yes</td>
                          <td>NIL</td>
                      </tr>
                      <tr>
                          <td>11.12.2019</td>
                          <td>$500</td>
                          <td>Random</td>
                          <td>Cash</td>
                          <td>No</td>
                          <td>NIL</td>
                      </tr>
                      <tr>
                      <td>1.11.2019</td>
                          <td>$2000</td>
                          <td>Carnival</td>
                          <td>Cash</td>
                          <td>yes</td>
                          <td>Frequent Donor</td>
                      </tr>
                  </tbody>    
            
              </table>
         
            </div>
          );
}


export default DonorTable;

 