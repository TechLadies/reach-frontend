import React, { useState } from 'react'
import DonorDetails from './components/DonorDetails'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

function direct(idNo) {
  console.log(idNo)
  fetch('http://reach-backend.herokuapp.com/donors/details', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ donorIdNo: idNo })
  })
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then(data => {
      console.log(data)
     /*  return (
      <Route path = "/test">
          <DonorDetails donorDetails={data} />
          </Route>
      ) */
    })
}

export default direct
