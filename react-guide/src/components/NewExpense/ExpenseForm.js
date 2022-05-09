import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitlle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitlle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitlle: event.target.value }
    // })
    console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value }
    // })
    console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value }
    // })
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('submitHandler Calling');
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    console.log("Expense Data",expenseData);
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  }


  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
          </div>
          <div className="new-expense__controls">
            <label>Amount</label>
            <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}></input>
          </div>
          <div className="new-expense__controls">
            <label>Date</label>
            <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
