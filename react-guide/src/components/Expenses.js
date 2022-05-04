import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div>
      <div className="expenses">
        <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        ></ExpenseItem>
      </div>
      <div className="expenses">
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        ></ExpenseItem>
      </div>
      <div className="expenses">
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        ></ExpenseItem>
      </div>
    </div>
  );
}

export default Expenses;
