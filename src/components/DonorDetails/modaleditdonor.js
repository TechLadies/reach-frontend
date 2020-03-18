import React from "react";

function ModalEditDonor(props) {
  const { show, closeModal } = props;
  return (
    <>
    <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <button onClick={closeModal}>X</button>
        <h1>Modal heading</h1>
        <p>This is edit donor modal content</p>
      </div>
    </>
  );
} 
//   const ModalEditDonor = (<>
//   <div className={show ? "overlay" :"hide"} onClick={closeModal} />
//   <div className={show ? "modal" :"hide"} >
//   <button onClick={closeModal}>X</button>
//   <h1>edit modal heading </h1>
//   <p> THis is donor content</p>
//   </div>
//   </>)
//   return ReactDOM.createPortal(
//       modal , document.getElementById("modal-root")
//   );
//   }

export default  ModalEditDonor;