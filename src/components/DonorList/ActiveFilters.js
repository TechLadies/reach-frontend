//  1) so you create allBadges array as to store the active badges  - done
//  2) inside the loop, you check what filter is active,
//  make the <Badge> for it, and put the badge into the allBadges array
// data = [...data, {"label" : "2", "value" : 14}]
// console.log(data)
// 3) once everything done, you return the
// allBadges array, then React will know to show the contents to the screen
import React from "react";
import "./DonorList.css";

const Badge = ({ children }) => <span>{children}</span>;
const allBadges = [];
function ActiveFilter(props) {
  const filterElements = props.filter;

  for (const prop in filterElements) {
    if (filterElements.taxDeduc === true) {
      <Badge> taxDeduc </Badge>;
    }

    //  console.log(`filterElements.${prop} = ${filterElements[prop]}`);
    // {"source":["Hackathon 2018","President's Challenge 2018"],"minAmt":"10","maxAmt":"5000","taxDeduc":"true"}
    // const theBadge = <Badge> Date</Badge>;

    allBadges.push(theBadge);
  }
  return (
    <div className="active-filter-container">
      {allBadges}
      <Badge> {TheBadge} </Badge>
    </div>
  );
}

export default ActiveFilter;

//   for date, you need to check if there is "from", or "to", or both
// source is an array,
// date is two values, from and to
// donation range is also two values: minAmt and maxAmt

//   <div className ="active-filter-container">
//       <Badge> date </Badge>;
//       <Badge> sources </Badge>;
//       <Badge> taxDeduc </Badge>;
//       <Badge> totalAmountDonated </Badge>;

//       </div>
