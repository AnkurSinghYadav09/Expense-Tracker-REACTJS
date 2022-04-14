import React from 'react';
import "./date.css"

const Date=(props)=> {
    // console.log(props)

    const month = props.date.toLocaleString("en-US", { month: 'long' });   //its lacale not lacal
    const day = props.date.toLocaleString("en-US", { day: '2-digit' });
    const year = props.date.getFullYear()


    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}

export default Date;