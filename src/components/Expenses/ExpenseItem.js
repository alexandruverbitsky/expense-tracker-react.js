import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

// const ExpenseItem = ({ date, title, amount }) => {
const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickHandler = (event) => {
    console.log("Clicked!!!");
    event.target.style.background = "pink";
    setTitle('Updated!!!');
    console.log(title);
  };
  const blurHandler = (event) => {
    console.log("Blurred!!!");
    event.target.style.background = "red";
  };
  return (
    <Card className="expense-item" onClick={console.log(`Has been re-evaluated! ${title}`)}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onBlur={blurHandler} onClick={clickHandler}>
        Click me!
      </button>
    </Card>
  );
}

export default ExpenseItem;
