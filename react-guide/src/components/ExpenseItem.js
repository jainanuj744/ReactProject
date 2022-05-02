import "./ExpenseItem.css";

function ExpenseItem(props) {
//   const expenseDate = new Date(2022, 6, 16);
//   const expenseTitle = "Car Insurance Waale";
//   const expenseAmount = 542;
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item_price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
