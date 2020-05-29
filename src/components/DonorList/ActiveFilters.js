import React from "react";
import {format} from 'date-fns'
import Delete from "../../images/Delete.svg";

function ActiveFilter(props) {
  const filterElements = props.filter;
  const allBadges = [];

  function reset(param, initialValue) {
    props.setFilter((currentFilter) => {
      return { ...currentFilter, [param]: initialValue};
    });
  }

  const Badge = ({ children, param, initialValue }) => (
    <span className="badge">
      {children}
      <img onClick={ () => reset(param, initialValue)} src={Delete} className ="icon" alt ="delete" />
    </span>
  );

  const dateFilter = {
    from: null,
    to: null,
    active: false,
    get value() {
      const { from, to } = this;
      const fromDate = from && format(from, 'DD MMM YYYY') 
      const toDate = to && format(to, 'DD MMM YYYY') 
      let str;
      if (fromDate && !toDate) str = `${fromDate} and after`;
      if (!fromDate && toDate) str = `${toDate} and earlier`;
      if (fromDate && toDate) str = `${fromDate} - ${toDate}`;
      return <>Date: <strong>{str}</strong></>;
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
      return <>Total Amount Donated: <strong>{str}</strong></>;
    },
  };


  if (filterElements.taxDeduc !== "any") {
    const status = filterElements.taxDeduc === "true" ? "Tax Deductable" : "Non Tax Deductable";
    allBadges.push(<Badge key="taxDeduc" param="taxDeduc" initialValue="any">Tax Deductable Status: <strong>{status}</strong> </Badge>);
  }
  
  if (filterElements.source.length > 0) {
    allBadges.push(<Badge key="source" param="source" initialValue={[]}>Source: <strong>{filterElements.source.join (", ")}</strong></Badge>);
  }

  if (filterElements.date.from || filterElements.date.to) {
    dateFilter.from = filterElements.date.from;
    dateFilter.to = filterElements.date.to;
    allBadges.push(
      <Badge key="date" param="date" initialValue={{from: null, to: null}}>
        {dateFilter.value}
      </Badge>
    );
  }
  if (filterElements.amt.min || filterElements.amt.max){
    amountFilter.minAmt = filterElements.amt.min
    amountFilter.maxAmt = filterElements.amt.max
    allBadges.push(
      <Badge key="amt" param="amt" initialValue={{min: "", max: ""}}>
        {amountFilter.value}
      </Badge>
    );
  }
  

  return <div className="active-filters">
    Active Filters
    <div className="active-filters-list">
      {allBadges}
    </div>
  </div>;
}

export default ActiveFilter;
