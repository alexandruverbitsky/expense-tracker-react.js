import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
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
        //   setUserInput((prevState) => {
        //       return {
        //         ...prevState,
        //         title: event.target.value,
        //       };
        //   })
    };
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
        // setUserInput((prevState) => {
        //   return {
        //     ...prevState,
        //     amount: event.target.value,
        //   };
        // });
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        // setUserInput((prevState) => {
        //   return {
        //     ...prevState,
        //     date: event.target.value,
        //   };
        // });
    };
    
    const inputChangeHandler = (identifier, value) => {
        switch (identifier) {
            case 'title':
                setTitle(value);
                break;
            case 'amount':
                setAmount(value);
                break;
            case 'date':
                setDate(value);
                break;
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title, amount, date: new Date(date)
        }
        // console.log(expenseData);
        setAmount('');
        setTitle('');
        setDate('');

        props.onSaveExpenseData(expenseData);
     }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
          value={date}
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
