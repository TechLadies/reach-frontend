import React, { useState } from 'react'
import {useLocation, useParams} from 'react-router-dom'
import Header from "../Header";
import ResultsTable from './ResultsTable';

function SearchResults () {
    const location = useLocation()
    const search = useParams()
    const searchResults = location.state

    return (
        <div>
            <Header>
        <Header.Top>
          <Header.Content>
            <div className="totaldonationamt">Search Results for "{search.name}" </div>
            <div className="keystatslabel">
              1 out of 4 donors found
            </div>
          </Header.Content>
        </Header.Top>
      </Header>
      <ResultsTable data={searchResults}/>

        </div>
    )
}

export default SearchResults