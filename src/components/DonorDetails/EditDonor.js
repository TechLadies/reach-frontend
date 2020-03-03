import React ,{Component} from "react";
import "./index.css";
// import Modal from '../Modal'
export default class Modal extends React.Component {
  render() {
    const { handleClose, desc, show, header, footer  } = this.props
		const showHideClassName = show ? 'show-div' : 'hide-div';
    console.log(this.props);
   return(
     <div className={showHideClassName}>
     <div id="myModal" className="modal">

  <div className="modal-content">
    <div className="modal-header">
      <span className="close" onClick={this.props.handleClose}>×</span>
      <h2>{header}</h2>
    </div>
    <div className="modal-body">
      <p>{desc}</p> <p>Lorem Ipsum is simply dummy text
      of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took
      a galley of type and scrambled it to make a type
      specimen book. It has survived not only five
      centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged. It
      was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software
      like Aldus PageMaker including versions of Lorem
      Ipsum.
      </p>                 </div><div className="modal-footer"><h3>{footer}</h3>
</div>               </div>
 
			</div>
 
		</div>

   );
  }
}
// function EditDonor (props){
//      const onCancel = () => {
//        props.CPU()
//      }
//      const onYes =()=> {
//        props.cvlickYes()
//      }

//      return(
//       <Modal show={true} className="popup-box">
//       <Modal.Body className="message-container">
//         <p className="popup-msg1">
//          edit profile
          
//         </p>
//         <p className="popup-msg2"> Would you like to proceed?</p>
//       </Modal.Body>
//       <Modal.Footer className="popup-btn">
//         <div>
//           <button className="button continue-btn" onClick={onYes}>
//             Yes, continue
//           </button>
//         </div>
//         <div>
//           <button className="button cancel-btn" onClick={onCancel}>
//             <span>Cancel</span>
//           </button>
//         </div>
//       </Modal.Footer>
//  {/* <modal/> */}

//    );
//   }
// export default EditDonor;
