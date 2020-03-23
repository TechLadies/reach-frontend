import React, { useState } from 'react'
import Pagination from '../../Pagination'

function ResultsTable(props) {
  return (
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
        <SearchList
          data={props.data}
          /* donorsPerPage={props.donorsPerPage} */
        />
      </tbody>
    </table>
  )
}

function SearchList(props) {
  const listElements = props.data
  const listComponents = listElements.map(item => {
    return (
      <tr className="d-flex">
        <td className="col-2">{item.idNo}</td>
        <td className="col-2">{item.name}</td>
        <td className="col-2">$ {item.totalDonatedAmount}</td>
        <td className="col-2">{item.contactNo}</td>
        <td className="col-2">{item.email}</td>
        <td className="col-2">{handleNull(item.dnc)}</td>
      </tr>
    )
  })
  return <React.Fragment>{listComponents}</React.Fragment>
}

const handleNull = boolean => {
  if (boolean == null) {
    return '-'
  } else {
    return boolean
  }
}
export default ResultsTable
