import React from "react";

const Pagination = ({
  donorsPerPage,
  totalDonors,
  currentPage,
  onPageChange
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDonors / donorsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            href="!#"
            className="page-link"
          >
            Prev
          </a>
        </li>

        {pageNumbers.map(number => (
          <li
            key={number}
            className={
              currentPage === number ? "page-item active" : "page-item"
            }
          >
            {/* <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a> */}

            <a
              onClick={() => onPageChange(number)}
              href="#!"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === pageNumbers[pageNumbers.length - 1]
              ? "disabled"
              : ""
          }`}
        >
          <a
            onClick={() => onPageChange(Math.max(1, currentPage + 1))}
            href="#!"
            className="page-link"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
