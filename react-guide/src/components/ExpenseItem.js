import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseMonth = props.date.toLocaleString("en-US", { month: "long" });
  const expenseDay = props.date.toLocaleString("en-US", { day: "2-digit" });
  const expenseYear = props.date.getFullYear();
  return (
    <div className="expense-item">
      <div>
        <div>{expenseMonth}</div>
        <div>{expenseDay}</div>
        <div>{expenseYear}</div>
      </div>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item_price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
