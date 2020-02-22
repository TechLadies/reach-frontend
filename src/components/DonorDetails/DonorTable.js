import React, { useState } from "react";

function DonorTable (){


    return (
            <div className="container App">
        
             <h4 className="d-inline-block">REACH Community</h4>
             <div className="clearfix"></div>
        
              <table class="table table-bordered donordetails">
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
                          <td>$100</td>
                          <td>Charity Dinner</td>
                          <td>Cash</td>
                          <td>No</td>
                          <td>NIL</td>
                      </tr>
                  </tbody>    
            
              </table>
         
            </div>
          );
}

export default DonorTable;

 