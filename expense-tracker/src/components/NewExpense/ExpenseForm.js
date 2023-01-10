import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [newTitle, setNewTitle] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newDate, setNewDate] = useState('');

    const titleChangehandler = (event) => {
        setNewTitle(event.target.value);
    }
    const amountChangehandler = (event) => {
        setNewAmount(event.target.value);
    }
    const dateChangehandler = (event) => {
        setNewDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : newTitle,
            amount : +newAmount,
            date : new Date(newDate)
        }

        props.onSaveExpenseData(expenseData);
        setNewTitle('');
        setNewAmount('');
        setNewDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={newTitle} onChange={titleChangehandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='1' step='1' value={newAmount} onChange={amountChangehandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2019-01-01' max='2022-13-31' value={newDate} onChange={dateChangehandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit" onClick={props.isCancel}>Cancel</button>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;