import React from 'react';
// haed coded for source filter 
function Source (props) {

 return (

  <div class="form-group">
   <label for="sel-bs"> multiple select following Sources </label >
  <select id="sel-bs" multilple class="mdb-select md-form" multiple searchable="Search for Sources...">
    <option value="" disabled selected>Select all</option>
    <option value="1">charity Dinner </option>
    <option value="2">Reach Website </option>
    <option value="3">charity3 charity 3</option>
    <option value="3">charity4</option>
    <option value="3">charity5</option>
  </select>
 </div> 

 


 )

}

export default Source ;