import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //     title: '',
  //     amount: '',
  //     date: ''
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    //   setUserInput((prevInput) => {
    //       return {
    //         ...prevInput,
    //         title: event.target.value,
    //       };
    //   })
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput((prevInput) => {
    //   return {
    //     ...prevInput,
    //     amount: event.target.value,
    //   };
    // });
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput((prevInput) => {
    //   return {
    //     ...prevInput,
    //     date: event.target.value,
    //   };
    // });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-10"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
