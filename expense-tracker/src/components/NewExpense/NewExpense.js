import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseHandler = (newExpenseData) =>{
        const expenseData = {
            ...newExpenseData,
            id : Math.random().toString()
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    const isEditingHandler = () =>{
        setIsEditing(true);
    }
    const isCancelHandler = () =>{
        setIsEditing(false);
    }
    
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={isEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} isCancel={isCancelHandler}/>}
        </div>
    );
}


export default NewExpense;