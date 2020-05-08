import React, { Control,Fragment,useState,useEffect } from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import {FormGroup} from 'react-bootstrap';


const fetchSourceList = async () => {
const res = await fetch(
`${process.env.REACT_APP_API}/sources` , {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  
//   const data = res.json()
//   console.log(data);
//   return data
}

//  function Source (props) {
//      const [source, setSource] = useState([]);
//      const [multiple, setMultiple] = useState(false);
//      const [selected, setSelected] = useState([]);

//      useEffect(() => {
//         fetchSourceList().then((data) => setSource(data))
//       }, [])
  
//      return (
//        <Fragment>
//          <Typeahead
//            id="sources-list"
//            labelKey="sources"
//            multiple={multiple}
//            onChange={setSelected}
//            options={source}
//            placeholder="Choose  source/s..."
//            selected={selected}
//         />
//         <FormGroup>
//            <Control
//              checked={multiple}
//              onChange={(e) => setMultiple(e.target.checked)}
//              type="checkbox">
//             Multi-Select
//            </Control>
//          </FormGroup>
//       </Fragment>
//     );
// }; 
function Source (props) {
    console.log(" in source.js")
    return (
        <h4>" for debugging the fetch API -in filter modal "</h4>
    )
}
export default Source ;

