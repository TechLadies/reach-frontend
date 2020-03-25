import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header'
import ResultsTable from './ResultsTable'
import './index.css'
import Spin from '../../lib/spinner'

const onLoadSearch = async searched => {
  const res = await fetch(
    `${process.env.REACT_APP_API}/donors/search?name=${searched}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
  )
  const data = await res.json()
  return data
}

function SearchResults() {
  const searched = useParams().name
  const [searchResults, setSearchResults] = useState('')

  useEffect(() => {
    onLoadSearch(searched).then(data => {
      setSearchResults(data)
    })
  }, [searched])

  if (searchResults) {
    return (
      <div>
        {console.log(searchResults)}
        <Header>
          <Header.Top>
            <Header.Content>
              <div className="totaldonationamt">
                Search Results for "{searched}"
              </div>
              <div className="keystatslabel">
                {message(searchResults.length)}
              </div>
            </Header.Content>
          </Header.Top>
        </Header>
        <ResultsTable data={searchResults} />
      </div>
    )
  } else return <Spin />
}

const message = count => {
  if (count === 0) {
    return 'No donors found'
  } else if (count > 1) {
    return `${count} donors found`
  } else {
    return `${count} donor found`
  }
}
export default SearchResults
