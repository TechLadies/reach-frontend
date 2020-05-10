import React ,{ useState , useEffect, useRef} from 'react'
import {form, Listgroup, Jubotron } from "react-bootstrap"

export default function Search() {
    //  set initial state for query and other items
    const [query, setQuery] = useState('')
    const [taxDeductible, setTaxDeductible] = useState('true')
    const [dateRange, setDateRange] = useState({startDate} - {endDate})
    const [sourcesList,SetSourcesList] = useState([])
    const [minAmount, setMinAmount] =useState()
    const [maxAmount, setMaxAmount] =useState()
    const focuseSearch =useRef(null)
}

//   Fetch the search results and update the state with the result.
// 	 Also cancels the previous query before making the new one.
//   define  an async function getsearchData to fetch data from the API. This function 
//   takes in the search term with query and returns the donors that contain the search term.

useEffect (() => {focuseSearch.current.focus()},[])

//  fetch API data
const getsearchData = async (query) => {
    const results = await fetch('process.env.REACT_APP_API}/donors?term=${query}`', {
        headers :{'accept':'application/json'}
    })
    const searchData = await results.json()
    return searchData.results
}


