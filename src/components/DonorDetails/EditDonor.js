import React ,{ useState }  from 'react';
import Modal from '../Modal'
import Box from '../Dashboard/Box'
import Pencil from '../../images/pencil.svg'

function EditDonor (){
    return (
      <div>
        <div className="container App">
           <h4 className="d-inline-block">Donordetails</h4>
        </div>  
        <div className="edit-wrapper">
        <div>
           <h4 className="d-inline-block">Edit Information</h4>
        </div>
       <div> 
      <button className= "button purplebutton">
      <img src={Pencil} className="button-icon"/>Edit Profile</button>
    </div> 
      <Box className="contact-box">
        <div>
            </div> 
        <div className="single-field">
        <p className="idnumberlabel">Phone Number</p>
          <p className="idnumbertext">09876234</p>
      </div>
        <div className="single-field">
        <p className="remarklabel">Email Address</p>
          <p className="remark">keith@gmail.com</p>
      </div>
        <div className="single-field">
        <p className="remarklabel">Mailing Address</p>
          <p className="remark"> Blk 123 Havery Road Singapore 798724832</p>
      </div>
      </Box>
      </div>
      </div>
    )
  }


 export default EditDonor;
