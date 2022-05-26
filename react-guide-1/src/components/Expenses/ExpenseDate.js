// import React from "react";

// import "./ExpenseDate.css";

// function ExpenseDate(props) {
//   // const expenseMonth = props.date.toLocaleString("en-US", { month: "long" });
//   // const expenseDay = props.date.toLocaleString("en-US", { day: "2-digit" });
//   // const expenseYear = props.date.getFullYear();

//   const month = props.date?.toLocaleString('en-US', { month: 'long' });
//   const day = props.date?.toLocaleString('en-US', { day: '2-digit' });
//   const year = props.date?.getFullYear();

//   return (
//     <div className="expense-date">
//       <div className="expense-date__month">{month}</div>
//       <div className="expense-date__day">{day}</div>
//       <div className="expense-date__year">{year}</div>
//     </div>
//   );
// }

// export default ExpenseDate;

import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;