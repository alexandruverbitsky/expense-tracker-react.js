import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";


const App = () => {
const defaultExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 250,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "MacBook Air",
    amount: 175,
    date: new Date(2023, 5, 12),
  },
];
  
  const [expenses, setExpenses] = useState(defaultExpenses);
  
  const newExpenseHandler = (newExpense) => {

    // expenses.push(newExpense);
    console.log(expenses);

    setExpenses((prevExpenses) => { 
      return [newExpense, ...prevExpenses ];
    })
  };

  return (
    <div className="App">
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
