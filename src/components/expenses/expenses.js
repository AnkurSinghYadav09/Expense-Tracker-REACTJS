
// import ExpenseItem from "./ExpenseItem"
import "./expenses.css"
import React, { useState } from 'react';
import ExpensesFilter from "../newExpenses/expensesFilter"
import ExpensesContent from "./expensesList";
import ExpensesChart from "./ExpensesChart.js"

const Expenses = (props) => {
    // console.log(props)
    const [filteredYear, setYear] = useState("2020");

    const filterData = (data) => {
        setYear(data);
    }

    const filteredData = props.items.filter(expense => {
        return filteredYear === expense.date.getFullYear().toString()
    })


    return (

        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onFilter={filterData} />
            <ExpensesChart expenses={filteredData}/>
              <ExpensesContent items={filteredData}/> 
        </div>
    )
}

export default Expenses;