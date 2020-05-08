import React from 'react';
// hard coded for source filter 
function Source (props) {

 return (
<div> 
<form  action = ""  
                     className="form-inline my-2 my-lg-0" 
                     id="sourceSearchForm">
                <input  
                  list ="sources-list" 
                  class="form-control mr-sm-2 w-75"
                  type="search"
                  placeholder="eg: Charity Dinner, Reach Website"
                  aria-label="Search"
                /> 
    <datalist id="sources-list"> 
        <option value="1"/> 
        <option value="2y"/> 
        <option value="3"/> 
        <option value="4"/> 
        <option value="5"/> 
    </datalist> 
    {/* <button onclick="datalistcall()" type="button"> 
        Click Here</button>  */}
    </form> 
    </div>

 )

}

export default Source ;

// var dcl = document.getElementById( "dynamic-email" );

// dcl.addEventListener( "focus", function () {

//     var dynamicContacts = document.getElementById( "dynamic-contacts" );

//     // Loop over the JSON array.
//     data.emails.forEach( function ( item ) {

//         // Create a new <option> element.
//         var option = document.createElement( 'option' );

//         // Set the value using the item in the JSON array.
//         option.value = item;

//         // Add the <option> element to the <datalist>.

//         dynamicContacts.appendChild( option );
//     } );

// } );