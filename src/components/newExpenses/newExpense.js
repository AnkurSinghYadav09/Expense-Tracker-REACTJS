import React,{useState} from 'react';
import '../newExpenses/newExpense.css';
import ExpenseForm from './ExpenseForm.js'

const NewExpense = (props) => {

   const expenseFormHandler=(eventData)=>{         
        const data={
            ...eventData,
            id:Math.random().toString()
        }
        props.onData(data);
   }


    const [enterForm,setForm]=useState(false);

   const formEnterHandler = ()=>{
       setForm(true);
   }

   const formCancelOut=()=>{
       setForm(false)
   }

    return (
        <div className="new-expense">
            {enterForm===false  && <button onClick={formEnterHandler}>ADD EXPENSE</button>}
            {enterForm===true && <ExpenseForm onCancel={formCancelOut} onExpenseForm={expenseFormHandler}/>}
        </div>
    )
}

export default NewExpense;