// // import { useState } from "react";
// import Card from "../UI/Card";
// import ExpenseDate from "./ExpenseDate";
// import "./ExpenseItem.css";

// function ExpenseItem(props) {
//   // const [title, setTitle] = useState(props.title);
//   // console.log("Expense Item");

//   // const clickHandler = () => {
//   //   setTitle("Updated!!");
//   //   console.log(title);
//   // };

//   return (
//     <Card className="expense-item">
//     {/* {console.log(props)}
//     {console.log(props.date)} */}
//       <ExpenseDate date={props.date}></ExpenseDate>
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//       {/* <button onClick={clickHandler}>Checking if Clicked</button> */}
//     </Card>
//   );
// }

// export default ExpenseItem;

import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;