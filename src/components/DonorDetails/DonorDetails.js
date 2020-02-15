// import React, { useState, useEffect, Component } from "react";
// //import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
// //import '../css/Table.css';
// import "./DonorDetails.css";


// // function to fetch the API will be here  function donordetails{}
//  class Donordetails extends Component {
//    constructor(props) {
//     super(props);
//     this.state = {
//     Donordetails: [],
//     loading: false
//   }
//   this.getDonordetails = this.getDonordetails.bind(this);
// }
 
// getDonordetails() {
//   this.setState({ loading: true });
//   fetch('https://reach-backend.herokuapp.com/donor/details')
//     .then(res => res.json())
//     .then(res => {
//       setTimeout(() => {
//         this.setState({ loading: false, userList: res.data });
//       }, 2000);
//       })
//   }

// render() {
//   const { Donordetails, loading } = this.state;
 
//   return (
//     <div className="container App">

//      <h4 className="d-inline-block">REACH Community</h4>
//      <button className="btn btn-info float-right" onClick={this.getDonordetails} disabled={loading}>{loading ? 'Loading...' : 'Get donor details'}</button>
//      <div className="clearfix"></div>

//       <table class="table table-bordered donordetails">
//           <thead>
//               <th scope="col">Date</th>
//               <th scope="col">Amount</th>
//               <th scope="col">Source</th>
//               <th scope="col">Mode</th>
//               <th scope="col">Tax</th>
//               <th scope="col">Remarks</th>
//           </thead>
//           <tbody>
//           {Donordetails.map(x => <tr>
//             <td>{x.date}</td>
//             <td>{x.amount}</td>
//             <td>{x.source}</td>
//             <td>{x.mode}</td>
//             <td>{x.tax}</td>
//             <td>{x.remarks}</td>
           
//           </tr>)}
//           {Donordetails.length == 0 && <tr>
//             <td className="text-center" colSpan="4">
//               <b>No data found to display.</b>
//             </td>
//           </tr>}
//         </tbody>
//       </table>
 
//     </div>
//   );
// }
// }

// pre defined bootstrap table for temporary 
// function DonorDetails () {
//   return (
//   <div>
//     <Donordetails/>
//     </div>
//   )
// }
//        class Donordetails extends component{
//          render(){
//          return (    
//            <div> 
//              <table class="table table-bordered donordetails">
//           <thead>
//             <tr>
//               <th scope="col">Date</th>
//               <th scope="col">Amount</th>
//               <th scope="col">Source</th>
//               <th scope="col">Mode</th>
//               <th scope="col">Tax</th>
//               <th scope="col">Remarks</th>
//             </tr>
//           </thead>
//           <tbody>
         
//             <tr>
//              <th scope="row">1</th>
//              <td>2019-12-17</td>
//              <td>"50"</td>
//              <td>"church"</td>
//              <td>"credit card"</td>
//              <td>"deductible"</td>
//              <td>"Mr Lee and family members are major donors of church"</td>
//            </tr>
//            <tr>
//              <th scope="row">2</th>  
//              <td>2019-11-17</td>
//              <td>"50"</td>
//              <td>"church"</td>
//              <td>"credit card"</td>
//              <td>"deductible"</td>
//              <td>"Mr Lee and family members are major donors of church"</td>
//            </tr>
//            <tr>
//              <th scope="row">3</th>
//              <td>2019-10-10</td>
//              <td>"100"</td>
//              <td>"online"</td>
//              <td>"credit card"</td>
//              <td>"deductible"</td>
//              <td>"Mr Lee and family members are major donors of church"</td>
//            </tr>
//           </tbody>
//           </table>    
//         </div> 
//           );
//          };
//         }
          
   
 
export default Donordetails;