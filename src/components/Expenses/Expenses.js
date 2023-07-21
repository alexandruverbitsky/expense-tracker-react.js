import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

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
            onChonYearFilterChangeangeFilter={yearFilterHandler}
          />
          <ExpensesList items={filteredExpenses} />
        </Card>
      </div>
    );
}

export default Expenses;
