import React, { useState } from 'react'
import Pagination from '../../lib/pagination'
import history from '../../lib/history'

function ResultsTable(props) {
  const searchResultsCount = props.data.length
  const entriesPerPage = 15
  const [currentPage, setCurrentPage] = useState(1)
  const paginate = pageNumber => setCurrentPage(pageNumber)
  const begin = (currentPage - 1) * entriesPerPage
  const end = begin + entriesPerPage
  const paginateDonations = props.data.slice(begin, end)
  return (
    <div>
      <table className="table donortable">
        <thead>
          <tr className="d-flex">
            <th scope="col" className="col-2">
              ID Number
            </th>
            <th scope="col" className="col-2 text-left">
              Name
            </th>
            <th scope="col" className="col-2">
              Total Amt. Donated
            </th>
            <th scope="col" className="col-2">
              Phone Number
            </th>
            <th scope="col" className="col-2">
              Email Address
            </th>
            <th scope="col" className="col-2">
              DNC Status
            </th>
          </tr>
        </thead>
        <tbody>
          <SearchList data={paginateDonations} />
        </tbody>
      </table>
      <Pagination
        totalEntries={searchResultsCount}
        entriesPerPage={entriesPerPage}
        paginate={paginate}
      />
    </div>
  )
}

function SearchList(props) {
  const listElements = props.data
  const listComponents = listElements.map((item, i) => {
    return (
      <tr
        key={i}
        className={item.idNo ? 'donorlink d-flex' : 'd-flex'}
        onClick={item.idNo && (() => history.push(`/details/${item.idNo}`))}
      >
        <td className="col-2 id-num">{handleFalsy(item.idNo)}</td>
        <td className="col-2">{item.name}</td>
        <td className="col-2">$ {handleFalsy(item.totalDonatedAmount)}</td>
        <td className="col-2">{handleFalsy(item.contactNo)}</td>
        <td className="col-2">{handleFalsy(item.email)}</td>
        <td className="col-2">{handleBoolean(item.dnc)}</td>
      </tr>
    )
  })
  return <React.Fragment>{listComponents}</React.Fragment>
}

const handleFalsy = item => {
  if (!item) {
    return '-'
  } else {
    return item
  }
}
const handleBoolean = boolean => {
  if (boolean) {
    return 'Do Not Contact'
  } else if (boolean === false) {
    return 'Can Contact'
  } else if (boolean === null) {
    return '-'
  }
}
export default ResultsTable
