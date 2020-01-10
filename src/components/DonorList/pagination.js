import React from "react";
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";

function pagination(props) {
  state = {
    currentPage: 1
  };

  changeCurrentPage = numPage => {
    this.setState({ currentPage: numPage });
    //fetch a data
    //or update a query to get data
  };

    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage}
          totalPages={10}
          changeCurrentPage={this.changeCurrentPage}
        />
        <h2>current Page:{this.state.currentPage}</h2>
      </div>
    );
  }
export default pagination;