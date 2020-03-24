import React from 'react'
import {useLocation, useParams} from 'react-router-dom'
import Header from "../Header";
import ResultsTable from './ResultsTable';
import './index.css';

function SearchResults () {
    const location = useLocation()
    const searched = useParams()
    const searchResults = location.state
    console.log(searchResults)

    return (
        <div>
            <Header>
        <Header.Top>
          <Header.Content>
            <div className="totaldonationamt">Search Results for "{searched.name}" </div>
            <div className="keystatslabel">
              {message(searchResults.length)}
            </div>
          </Header.Content>
        </Header.Top>
      </Header>
      <ResultsTable data={searchResults}/>

        </div>
    )
}

const message = (count) => {
  if (count === 0){
    return "No donors found"
  } else if (count > 1) {
    return `${count} donors found` 
  } else{
    return `${count} donor found`
  }
}
export default SearchResults