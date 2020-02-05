import React from 'react'

const Pagination = ({ donorsPerPage, totalDonors, currentPage, paginate }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalDonors / donorsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="page-btn">
      {pageNumbers.length > 1 ? (
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            {pageNumbers.length > 1 ? (
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                className="page-link page-directions"
              >
                Prev
              </button>
            ) : (
              ''
            )}
          </li>
          {pageNumbers.map(number => (
            <li
              key={number}
              className={
                currentPage === number ? 'page-item active' : 'page-item'
              }
            >
              <button
                onClick={() => paginate(number)}
                className="page-link page-numbers"
              >
                {number}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === pageNumbers[pageNumbers.length - 1]
                ? 'disabled'
                : ''
            }`}
          >
            {pageNumbers.length > 1 ? (
              <button
                onClick={() => paginate(Math.max(1, currentPage + 1))}
                className="page-link page-directions"
              >
                Next
              </button>
            ) : (
              ''
            )}
          </li>
        </ul>
      ) : (
        ''
      )}
    </nav>
  )
}

export default Pagination


