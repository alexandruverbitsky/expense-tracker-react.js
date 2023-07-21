import React, {useState} from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {

    const yearChangeHandler = (event) => { 
        console.log(event.target.value)
        props.onYearFilterChange(event.target.value);
    };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={yearChangeHandler}>
          {props.filterYears.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
