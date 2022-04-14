
import React,{useState} from 'react';
// import ExpenseItem from './components/expenses/ExpenseItem'
import './App.css';  

import Expenses from './components/expenses/expenses';
import Footer from './components/footer/Footer';

import NewExpense from './components/newExpenses/newExpense.js'


const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App=()=> {
    const [expenses,setNewData]=useState(dummyExpenses)

   
  const newExpenseHandler=(eventData)=>{
    // setNewData([eventData, ...expenses]);
    setNewData(prevData => [
      eventData,...prevData     //here we can also spread expenses as well....istead of prevdata
    ]);
  }

  return (
    // React.createElement("div", {}, React.createElement("h2", {}, "Expense tracker"), React.createElement(Expenses, { items: expenses }))

    <div >
      <h3  style={{"textAlign":"center", "color":"red"}}>EXPENSE TRACKER </h3>
      <NewExpense onData={newExpenseHandler}/>
      <Expenses items={expenses}/>
      
       <div className="footer">
          <Footer/>
       </div>
    </div>
       
  );
}

export default App; 
