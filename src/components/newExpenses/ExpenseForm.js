import React, { useState } from 'react';

import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const [changeTitle, setTitle] = useState("");
    const [changeAmount, setAmount] = useState("");
    const [changeDate, setDate] = useState("");


    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const data = {
            title: changeTitle,
            amount: changeAmount,
            date: new Date(changeDate)
        }

        props.onExpenseForm(data);
        setTitle("");
        setAmount("");
        setDate("");
    }

    // const cancelHandler = ()=>{
    //     props.onCancel=false
    //     console.log(props.onCancel)
    // }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={changeTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='Number' min="0.01" value={changeAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='Date' min="2021-01-01" max="2023-01-01"  value={changeDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>CANCEL</button>
                <button type="submit">ADD EXPENSE</button>
            </div>
        </form>
    )
}

export default ExpenseForm;