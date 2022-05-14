// import { useState } from "react";
// import Expenses from "./components/Expenses/Expenses";
// import NewExpense from "./components/NewExpense/NewExpense";
// import "./index.css";

// const DUMMY_EXPENSES = [
//   {
//     title: "Health Insurance",
//     amount: 500,
//     date: new Date(2019, 4, 22),
//   },
//   {
//     title: "Car Insurance",
//     amount: 600,
//     date: new Date(2020, 5, 30),
//   },
//   {
//     title: "New TV",
//     amount: 700,
//     date: new Date(2021, 6, 25),
//   },
//   {
//     title: "New Bike",
//     amount: 800,
//     date: new Date(2022, 7, 16),
//   },
// ];

// const App = () => {
//   const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

//   const addExpenseHandler = (expense) => {
//     setExpenses((prevExpenses) => {
//       return [expense, ...prevExpenses];
//     });
//   };

//   // const App = () => {
//   // const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
//   // const addExpenseHandler = (expense) => {
//   // console.log("In App.js");
//   // console.log(expense);
//   // setExpenses((prevExpenses) => {
//   // return [expense, ...prevExpenses];
//   // });
//   // };

//   return (
//     <div className="index">
//       {/* <h1>Hello World</h1> */}
//       <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
//       <Expenses item={expenses}></Expenses>
//       {/* <ExpenseItem
//         title={expenses[0].title}
//         amount={expenses[0].amount}
//         date={expenses[0].date}
//       ></ExpenseItem>
//       <ExpenseItem
//         title={expenses[1].title}
//         amount={expenses[1].amount}
//         date={expenses[1].date}
//       ></ExpenseItem>
//       <ExpenseItem
//         title={expenses[2].title}
//         amount={expenses[2].amount}
//         date={expenses[2].date}
//       ></ExpenseItem> */}
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;