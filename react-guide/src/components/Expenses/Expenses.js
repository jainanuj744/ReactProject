// import { useState } from "react";
// import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
// import "./Expenses.css";
// import ExpensesFilter from "./ExpensesFilter";

// function Expenses(props) {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const flterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//     // console.log("Expenses.js");
//     // console.log(selectedYear);
//   };

//   const filteredExpenses = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });
//   return (
//     <div>
//       <Card className="expenses">
//         <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={flterChangeHandler}
//         ></ExpensesFilter>
//         {filteredExpenses.map((expense) => (
//           <ExpenseItem
//             key={expense.id}
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           ></ExpenseItem>
//         ))}
//         {/* <ExpenseItem
//           title={props.item[0].title}
//           amount={props.item[0].amount}
//           date={props.item[0].date}
//         ></ExpenseItem>
//         <ExpenseItem
//           title={props.item[1].title}
//           amount={props.item[1].amount}
//           date={props.item[1].date}
//         ></ExpenseItem>
//         <ExpenseItem
//           title={props.item[2].title}
//           amount={props.item[2].amount}
//           date={props.item[2].date}
//         ></ExpenseItem>
//         <ExpenseItem
//           title={props.item[3].title}
//           amount={props.item[3].amount}
//           date={props.item[3].date}
//         ></ExpenseItem> */}
//       </Card>
//     </div>
//   );
// }

// export default Expenses;

import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
