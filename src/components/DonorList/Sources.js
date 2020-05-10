import React, {useState,useEffect } from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';

const fetchSourceList = async () => {
  const res = await fetch(`${process.env.REACT_APP_API}/sources`);
  const data = res.json();
  return data;
};  

function Source (props) {
     const [sources, setSources] = useState([]);
     const [selected, setSelected] = useState([]);

     useEffect(() => {
        fetchSourceList().then((data) => setSources(data) /* setSources([data]) */)
      }, [])
        console.log(sources)
      return (
        <>
          <Typeahead
          id = "sources-list"
          labelKey= "description"
          multiple = {true} // since we will always allow multiple selection, just directly put true
          options= {sources}
          onChange ={setSelected}
          placeholder = "e.g. Charity Dinner, Reach website"
          selected = {selected}
          className= "sources"
          />
        </>
       
    );
}; 
      
 

 export default Source ;

