import React, { useState, useEffect, Component } from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../css/Table.css';
import Header from "../Header";
import "./DonorDetails.css";
import Modal from "../Modal";

       class Donardetails extends component{
         render(){
         return (    
           <div> 
             <table class="table table-bordered donordetails">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Source</th>
              <th scope="col">Mode</th>
              <th scope="col">Tax</th>
              <th scope="col">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {/* <ListItem data={donardetails} /> */}
            <tr>
             <th scope="row">1</th>
             <td>2019-12-17</td>
             <td>"50"</td>
             <td>"church"</td>
             <td>"credit card"</td>
             <td>"deductible"</td>
             <td>"Mr Lee and family members are major donors of church"</td>
           </tr>
           <tr>
             <th scope="row">2</th>  
             <td>2019-11-17</td>
             <td>"50"</td>
             <td>"church"</td>
             <td>"credit card"</td>
             <td>"deductible"</td>
             <td>"Mr Lee and family members are major donors of church"</td>
           </tr>
           <tr>
             <th scope="row">3</th>
             <td>2019-10-10</td>
             <td>"100"</td>
             <td>"online"</td>
             <td>"credit card"</td>
             <td>"deductible"</td>
             <td>"Mr Lee and family members are major donors of church"</td>
           </tr>
          </tbody>
          </table>    
        </div> 
          );
         };
        }
          // fetch("https://reach-backend.herokuapp.com/donors/details", {
          //   method: "POST",
          //   headers: { "Content-Type": "application/json" },
          //   body: JSON.stringify({

   
 
export default App;