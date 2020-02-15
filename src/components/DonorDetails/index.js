import React, { useState } from 'react'
import Box from '../Dashboard/Box'
import './index.css'

function DonorDetails () {
  return (
  <div>
    <Particulars/>
    <Contact/>
    <Donordetails />
  </div>
  )
}

const Particulars = () => {
  return(
  <Box>
    <div className="double-field">
      <div>
        <p>ID Number</p>
        <p>S0980213A</p>
      </div>
      <div>
        <p>ID Type</p>
        <p>NRIC</p>
      </div>
    </div>
    <div className="single-field">
      <p>Donor Name</p>
      <p>Mr Keith Wee Liang</p>
    </div>
    <div className="single-field">
      <p>Date of Birth</p>
      <p>28 Nov 2019</p>
    </div>
    <div className="double-field">
      <div>
        <p>Total Donations</p>
        <p>57</p>
      </div>
      <div>
      <p>Total Donation Amount</p>
        <p>$5412432</p>
      </div>
    </div>
    <div className="single-field">
      <p>Remarks</p>
        <p>Mr Lee and family members are major donors of church</p>
    </div>
  </Box>
  )
}

const Contact = () => {
  return(
    <Box>
      <div className="single-field">
      <p>Phone Number</p>
        <p>09876234</p>
    </div>
      <div className="single-field">
      <p>Email Address</p>
        <p>keith@gmail.com</p>
    </div>
      <div className="single-field">
      <p>Mailing Address</p>
        <p>Blk 123 Havery Road Singapore 798724832</p>
    </div>
    </Box>
  )
}

// function to fetch the API will be here  function donordetails{}
class Donordetails extends Component {
  constructor(props) {
   super(props);
   this.state = {
   Donordetails: [],
   loading: false
 }
 this.getDonordetails = this.getDonordetails.bind(this);
}

getDonordetails() {
 this.setState({ loading: true });
 fetch('https://reach-backend.herokuapp.com/donor/details')
   .then(res => res.json())
   .then(res => {
     setTimeout(() => {
       this.setState({ loading: false, userList: res.data });
     }, 2000);
     })
 }

render() {
 const { Donordetails, loading } = this.state;

 return (
   <div className="container App">

    <h4 className="d-inline-block">REACH Community</h4>
    <button className="btn btn-info float-right" onClick={this.getDonordetails} disabled={loading}>{loading ? 'Loading...' : 'Get donor details'}</button>
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
         {Donordetails.map(x => <tr>
           <td>{x.date}</td>
           <td>{x.amount}</td>
           <td>{x.source}</td>
           <td>{x.mode}</td>
           <td>{x.tax}</td>
           <td>{x.remarks}</td>
          
         </tr>)}
         {Donordetails.length == 0 && <tr>
           <td className="text-center" colSpan="4">
             <b>No data found to display.</b>
           </td>
         </tr>}
       </tbody>
     </table>

   </div>
 );
}
}
export default DonorDetails
