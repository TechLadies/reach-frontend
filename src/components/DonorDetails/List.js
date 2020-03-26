import React, { Component , useState , useEffect } from 'react';
//  import Modal from '../Modal';
import Modal from "./Modal.js";
import './index.css';


class List extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      donorprofile: [
        
       {
          title: "Mr Tan and his family are active church member",
          msg: "dnc-true"
        }
      ]
    }
  }

  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempdonorprofile = this.state.donorprofile;
    tempdonorprofile[requiredItem] = item;
    this.setState({ donorprofile: tempdonorprofile });
  }

  deleteItem(index) {
    let tempdonorprofile = this.state.donorprofile;
    tempdonorprofile.splice(index, 1);
    this.setState({ donorprofile: tempdonorprofile });
  }

  render() {    
    const donorprofile = this.state.donorprofile.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.title}</td>
          <td>{" "} - {" "}</td>
          <td>{item.msg}</td>
          <td>
            <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
              onClick={() => this.replaceModalItem(index)}>edit</button> {" "}
            <button className="btn btn-danger" onClick={() => this.deleteItem(index)}>remove</button>
          </td>
        </tr>
      )
    });
    
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.donorprofile[requiredItem];
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Editable Bootstrap Modal In React</h1>
          <h6>Bootstrap 4.0.0-beta.3</h6>
        </div>
        <table className="table table-striped">
          <tbody>
            {donorprofile}
          </tbody>
        </table>
       
        <Modal
          title={modalData.title}
          msg={modalData.msg}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
    );
  }
}

export default List;
