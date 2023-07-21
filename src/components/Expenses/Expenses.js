import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import { useState } from 'react';

const years = ["2023", "2022", "2021", "2020", "2019", "2018"];

const Expenses = ({ expenses }) => {

  const [filteredYear, setFilteredYear] = useState(years[0]);

  const yearFilterHandler = (event) => { 
    console.log(event);
    setFilteredYear(event);
  };

  const filteredExpenses = expenses
    .filter((item) => item.date.getFullYear().toString() === filteredYear);


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filterYears={years}
          selectedYear={filteredYear}
          onYearFilterChange={yearFilterHandler}
        />
        {filteredExpenses.length === 0 && (
          <p>No expenses found</p>
        )}
        {filteredExpenses.length > 0 && 
          filteredExpenses.map((item) => (
            <ExpenseItem
              key={item.id}
              date={item.date}
              title={item.title}
              amount={item.amount}
            />
          ))
        }
      </Card>
    </div>
  );
}

export default Expenses;
