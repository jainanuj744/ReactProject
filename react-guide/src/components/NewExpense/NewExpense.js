import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpeseData) => {
    const expenseData = {
      ...enteredExpeseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
