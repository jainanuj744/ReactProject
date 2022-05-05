import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {

  // function clickHandler() {
  //   console.log("Clicked!!!");
  // }

  const clickHandler = () => {
    console.log("Clicked!!!");
  }
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Checking if Clicked</button>
    </Card>
  );
}

export default ExpenseItem;
