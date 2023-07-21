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


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filterYears={years}
          selectedYear={filteredYear}
          onYearFilterChange={yearFilterHandler}
        />
        {expenses
          .filter((item) => item.date.getFullYear().toString() === filteredYear)
          .map((item, index) => (
            <ExpenseItem
              key={index}
              date={item.date}
              title={item.title}
              amount={item.amount}
            />
          ))}
        {/* <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      /> */}
      </Card>
    </div>
  );
}

export default Expenses;
