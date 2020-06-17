import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ entriesPerPage, totalEntries, paginate }) => {


  return (
    <ReactPaginate
    previousLabel={"prev"}
    nextLabel={"next"}
    breakLabel={"..."}
    breakClassName={"break-me page-item"}
    pageCount = {Math.ceil(totalEntries/entriesPerPage)}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={ data => paginate(data.selected + 1)}
    containerClassName={"pagination"}
    subContainerClassName={"pages pagination"}
    activeClassName={"active"}
    pageLinkClassName = {"page-link page-numbers"}
    pageClassName = {"page-item"}
    previousClassName = {"page-item"}
    nextClassName = {"page-item"}
    previousLinkClassName ={"page-link page-numbers"}
    nextLinkClassName ={"page-link page-numbers"}
    breakLinkClassName = {"page-link page-numbers"}
   />
  )
}

export default Pagination


