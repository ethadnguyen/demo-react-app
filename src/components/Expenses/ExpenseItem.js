import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
const ExpenseItem = ({ id, title, amount, date }) => {
    const [newTitle, setNewTitle] = useState(title);
    console.log('re-evaluated');
    const clickHandler = () => {
        setNewTitle('Updated')
        console.log(newTitle);
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{newTitle}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button style={{ padding: '0.5rem', marginLeft: '10px' }} onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;