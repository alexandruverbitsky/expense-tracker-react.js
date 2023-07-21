import React from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => { 

    const saveExpenseHandler = (enteredExpenseData) => { 
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onNewExpense(expenseData);

    };
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
      </div>
    );
};

export default NewExpense;