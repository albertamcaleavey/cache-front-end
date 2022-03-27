import IncomeCard from "../../components/IncomeCard/IncomeCard";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import "./Transactions.css"

const Transactions = (props) => {
  

  return (  
    <>
    <div className="transactions-header">
      <div className="current-balance">
      <p className="current-balance-label">Current Balance</p>
    </div>
    <div className="income">
      <p className="income-label">Income</p>
    </div>
    <div className="expenses">
      <p className="expenses-label">Expenses</p>
    </div>
    </div>

    <h3 className="transactions-title">Transactions</h3>
    <div>
      {props.incomes.map(income => (
        <IncomeCard key={income._id} income={income} user={props.user} handleDeleteIncome={props.handleDeleteIncome} />
      ))}
    </div>
    <div>
      {props.expenses.map(expense => (
        <ExpenseCard key={expense._id} expense={expense} user={props.user} handleDeleteExpense={props.handleDeleteExpense} />
      ))}
    </div>
    </>
  )
}
 
export default Transactions;