// trial code 

import React, { Component } from "react";

class taxfilter extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption:'',
    //   key:value;
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    // this.setState({
    //   selectedOption: event.target.value
    // });
    this.setState({[event.target.name]:event.target.value
    });
  }

formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
    
  }


render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value={this.state.selectedOption}
              checked={this.state.selectedOption === "any"}
              onChange={this.onValueChange}
            />
           any
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="taxdeduc"
            //   checked={this.state.selectedOption === "taxdeductible"}
              onChange={this.onValueChange}
            />
            tax
            
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="notaxdeduc"
            //   checked={this.state.selectedOption === "notaxdeduc"}
              onChange={this.onValueChange}
            />
            notax
          </label>
        </div>
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
export default taxfilter;


