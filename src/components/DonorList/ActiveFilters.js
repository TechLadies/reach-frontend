//  1) so you create allBadges array as to store the active badges  - done
//  2) inside the loop, you check what filter is active,
//  make the <Badge> for it, and put the badge into the allBadges array
// data = [...data, {"label" : "2", "value" : 14}]
// console.log(data)
// 3) once everything done, you return the
// allBadges array, then React will know to show the contents to the screen
import React from "react";

const Badge = ({ children }) => <span className="badge">{children}</span>;

function ActiveFilter(props) {
  const filterElements = props.filter;
  const allBadges = [];

  const dateFilter = {
    from: null,
    to: null,
    active: false,
    get value() {
      const { from, to } = this;
      let str;
      if (from && !to) str = `${from} and after`;
      if (!from && to) str = `${to} and earlier`;
      if (from && to) str = `${from} - ${to}`;
      return `Date: ${str}`;
    },
  };
  const amountFilter = {
    minAmt: null,
    maxAmt: null,
    active: false,
    get value() {
      const { minAmt, maxAmt } = this;
      let str;
      if (minAmt && !maxAmt) str = `${minAmt} and above`;
      if (!minAmt && maxAmt) str = `${maxAmt} and below`;
      if (minAmt && maxAmt) str = `${minAmt} - ${maxAmt}`;
      return `Total Amount Donated: ${str}`;
    },
  };

  for (const item in filterElements) {
    let theBadge;
    if (item === "taxDeduc" && filterElements[item]) {
      theBadge = <Badge>Tax Deductable Status: {filterElements[item]}</Badge>;
      allBadges.push(theBadge);
    }

    if (item === "source") {
      theBadge = <Badge>Source</Badge>;
      allBadges.push(theBadge);
    }

    if (item === "from" || item === "to") {
      dateFilter[item] = filterElements[item];
    }

    if (item === "minAmt" || item === "maxAmt") {
      amountFilter[item] = filterElements[item];
    }
    //  console.log(`filterElements.${prop} = ${filterElements[prop]}`);
    // {"source":["Hackathon 2018","President's Challenge 2018"],"minAmt":"10","maxAmt":"5000","taxDeduc":"true"}
    // const theBadge = <Badge> Date</Badge>;
  }
  if (dateFilter.from || dateFilter.to) {
    allBadges.push(<Badge>{dateFilter.value}</Badge>);
  }
  if (amountFilter.minAmt || amountFilter.maxAmt) {
    allBadges.push(<Badge>{amountFilter.value}</Badge>);
  }

  return <div className="active-filter-container">{allBadges}</div>;
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
