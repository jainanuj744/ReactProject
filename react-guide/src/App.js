import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./index.css";

function App() {
  const expenses = [
    {
      title: "Health Insurance",
      amount: 500,
      date: new Date(2019, 4, 22),
    },
    {
      title: "Car Insurance",
      amount: 600,
      date: new Date(2020, 5, 30),
    },
    {
      title: "New TV",
      amount: 700,
      date: new Date(2021, 6, 25),
    },
    {
      title: "New Bike",
      amount: 800,
      date: new Date(2022, 7, 16),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div className="index">
      {/* <h1>Hello World</h1> */}
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses item={expenses}></Expenses>
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem> */}
    </div>
  );
}

export default App;
