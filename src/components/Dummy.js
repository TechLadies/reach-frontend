import React from 'react';
import Report from '../images/report.svg';
import Filterp from '../images/filter_purplebtn.svg';
import Filterw from '../images/filter_whitebtn.svg';
import Reportplus from '../images/reportplus.svg';
import Pencil from '../images/pencil.svg';
import Person from '../images/person.svg';



function Dummy() {
  return (
    <div className= "button">
     <div><button className= "button orangebutton">Apply Filter</button></div><br/>
     <div><button className= "button orangebutton"><img src={Report} className="button-icon"/>Export Donor List</button></div><br/>
     <div><button className= "button orangebutton"><img src={Person} className="button-icon"/>View Donor List</button></div><br/>
     <div><button className= "button orangebutton"><img src={Reportplus} className="button-icon"/>Upload IPC File</button></div><br/>
     <div><button className= "button whitebutton"><img src={Filterw} className="button-icon"/>Filters</button></div><br/>
     <div><button className= "button purplebutton"><img src={Filterp} className="button-icon"/>Filters</button></div><br/>
     <div><button className= "button purplebutton"><img src={Pencil} className="button-icon"/>Edit Profile</button></div><br/>
     <div><button className= "button transparentbutton">Reset Filters</button></div><br/>
    </div>

  );
}

export default Dummy;
