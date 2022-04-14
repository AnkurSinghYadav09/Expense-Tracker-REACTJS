import React from 'react';
import "./expensesList.css";
import ExpenseItem from "./ExpenseItem";


const ExpensesContent = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">no expenses here</h2>
    }
    if (props.items.length > 0) {
        // console.log(props.items[0].title)
        return (
            <ul className="expenses-list">
                {props.items.map((expense) =>
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                )}
            </ul>
        )
    }
}

export default ExpensesContent;