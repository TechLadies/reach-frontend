import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'
import Header from "../Header";
import ResultsTable from './ResultsTable';

function SearchResults () {
    const location = useLocation()
    console.log(location.state)
    return (
        <div>
            <Header>
        <Header.Top>
          <Header.Content>
            <div className="totaldonationamt">Search Results for 'Jonat'</div>
            <div className="keystatslabel">
              1 out of 4 donors found
            </div>
          </Header.Content>
        </Header.Top>
      </Header>
      <ResultsTable/>

        </div>
    )
}

export default SearchResults