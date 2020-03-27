//  this is for pure trial and error code- to create a simple modal
import React ,{Component, useState , useEffect} from "react";
import "./index.css";
import Modal from '../Modal'

function EditDonor() {
  const [show,setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
//   titleHandler(e)
//   {
//     this.setState({ title: e.target.value });
// }

// msgHandler(e) 
// {
//     this.setState({ msg: e.target.value });
// }

// handleSave() 
// {
//     const item = this.state;
//     this.props.saveModalDetails(item);
// }
  return ( 
    <>
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <button className="button purplebutton" onClick ={handleShow}> 
         {/* <img src={Pencil} className="button-icon" /> */}
         Edit Profile
       </button>  
     </div>
     <div className="modal fade" id="examplemodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog" role="document">
           <div className="modal-content"> 
              <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLabel">Edit Remark</h5>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
              </div>
              <div className="modal-body">
                            <p><span className="modal-lable">Remark:</span><input value={this.state.title} onChange={(e) => this.titleHandler(e)} /></p>
                            <p><span className="modal-lable">DNC status:</span><input value={this.state.msg} onChange={(e) => this.msgHandler(e)} /></p>
              </div>
              <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
              </div>


           </div>
         </div>

      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> you're goint to edit Donor details in a modal!
        <div >
          <p> remark</p>
          <input form ='text'></input>
          <p> dnc</p>
          <input form ='text'></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
          <button className="button cancel-btn" onClick={handleClose}>
                <span>Cancel</span>
              </button>
              <div>
                <button className= "button orangebutton" onClick={handleClose}>Save the changes </button>
              </div>
              <br/>
        </Modal.Footer>
      </Modal>
 </>
  );
}

export default EditDonor;


{/* <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-8">
                                <textarea class="form-control" id="message" name="message" placeholder="Enter your massage for us here. We will get back to you within 2 business days." rows="7"></textarea>
                            </div>
                        </div> */}