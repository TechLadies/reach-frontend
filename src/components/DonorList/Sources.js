import React, { Control,Fragment,useState,useEffect } from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import {FormGroup} from 'react-bootstrap';

const fetchSourceList = async () => {
const res = await fetch(
`${process.env.REACT_APP_API}/sources`
)
  
  const data = res.json()
  return data
}  
function Source (props) {
     const [sources, setSources] = useState([]);
     const [multiple, setMultiple] = useState(false);
     const [selected, setSelected] = useState([]);

     useEffect(() => {
        fetchSourceList().then((data) => setSources([data]))
      }, [])
//       console.log(" in source.js")
      return (
//        <Fragment>
//          <Typeahead
//            id="sources-list"
//            labelKey="sources"
//            multiple={multiple}
//            onChange={setSelected}
//            options={sources}
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
// function Source (props) {
    // const [description, setDescription] = useState();
    // const [multiple, setMultiple] = useState(false);
    //      const [selected, setSelected] = useState([]);
    //      return (
    //                <Fragment>
    //                  <Typeahead
    //                    id="sources-list"
    //                    labelKey="sources"
    //                    multiple={multiple}
    //                    onChange={setSelected}
    //                     options={description}
    //                     placeholder="Choose  source/s..."
    //                     selected={selected}
    //                  />
    //                  <FormGroup>
    //                     <Control
    //                       checked={multiple}
    //                       onChange={(e) => setMultiple(e.target.checked)}
    //                       type="checkbox">
    //                      Multi-Select
    //                     </Control>
    //                   </FormGroup>
    //                </Fragment>
    //              );
    // console.log('description')
  
//     return (
        console.log("sourceslist")
    )
 }

 export default Source ;
