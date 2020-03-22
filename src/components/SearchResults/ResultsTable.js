import React, { useState } from 'react'
import Pagination from '../../Pagination'

function ResultsTable() {
  return (
    <table className="table">
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
        /*   data={props.data}
          donorsPerPage={props.donorsPerPage} */
        />
      </tbody>
    </table>
  )
}

function SearchList(props) {
    return(
        <tr className="d-flex">
        <td className="col-2">IC Number</td>
        <td className="col-2">Name</td>
        <td className="col-2">$1000</td>
        <td className="col-2">Phone Number</td>
        <td className="col-2">Email Address</td>
        <td className="col-2">DNC Status</td>
      </tr>
    )
  /* const listElements = props.data
  const listComponents = listElements.map(item => {
    return (
      <tr className="d-flex">
        <td className="col-2">IC Number</td>
        <td className="col-2">Name</td>
        <td className="col-2">$1000</td>
        <td className="col-2">Phone Number</td>
        <td className="col-2">Email Address</td>
        <td className="col-2">DNC Status</td>
      </tr>
    )
  })
  return <React.Fragment>{listComponents}</React.Fragment> */
}

export default ResultsTable
