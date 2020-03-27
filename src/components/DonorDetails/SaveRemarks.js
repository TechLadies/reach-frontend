import React from 'react';
// import { Row, Form, Col, Button } from 'react-bootstrap';

// class SaveRemark extends React.Component {
//   constructor(props) {
//     super(props);
//     this.initialState = {
//       remark: '',
//       dnc: '',

//     }
//     this.state = this.initialState;

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     const name = event.target.name;
//     const value = event.target.value;

//     this.setState({
//       [name]: value
//     })
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.props.onFormSubmit(this.state);
//     this.setState(this.initialState);
//   }

//   render() {
//     return(
//       <div>
//         <h2>Add Product</h2>
//         <Row>
//           <Col sm={6}>
//             <Form onSubmit={this.handleSubmit}>
//               <Form.Group controlId="productName">
//                 <Form.Label>Product Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="productName"
//                   value={this.state.productName}
//                   onChange={this.handleChange}
//                   placeholder="Product Name"/>
//               </Form.Group>
//               <Form.Group controlId="sku">
//                 <Form.Label>SKU</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="sku"
//                   value={this.state.sku}
//                   onChange={this.handleChange}
//                   placeholder="SKU" />
//               </Form.Group>
//               <Form.Group controlId="price">
//                 <Form.Label>Price</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="price"
//                   value={this.state.price}
//                   onChange={this.handleChange}
//                   placeholder="Price" />
//               </Form.Group>
//               <Form.Group>
//                 <Button variant="success" type="submit">Save</Button>
//               </Form.Group>
//             </Form>
//           </Col>
//         </Row>
//       </div>
//     )
//   }
// }

// export default saveRemarks;
export function NameForm(props) {
  const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput('');
  const { value:lastName, bind:bindLastName, reset:resetLastName } = useInput('');
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${firstName} ${lastName}`);
      resetFirstName();
      resetLastName();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" {...bindFirstName} />
      </label>
      <label>
        Last Name:
        <input type="text" {...bindLastName} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}