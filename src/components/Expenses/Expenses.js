import React, { useState } from 'react'
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = ({ items }) => {

    const [filteredYear, setFilteredYear] = useState('all');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }


    let filteredExpenses = items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    if (filteredYear === 'all') {
        filteredExpenses = items;
    }



    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses