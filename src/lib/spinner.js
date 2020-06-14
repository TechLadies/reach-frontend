import Spinner from 'react-bootstrap/Spinner'
import React from 'react'

const Spin = ({className}) => {
  return (
    <div className= {className ? className : "spinner"}>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  )
}

export default Spin;