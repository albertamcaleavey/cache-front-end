import "./Transactions.css"
import IncomeCard from "../../components/IncomeCard/IncomeCard";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import GoalTransCard from "../../components/GoalTransCard/GoalTransCard";
import ColorToggleButton from "../../components/ToggleButton/ToggleButton";

const Transactions = (props) => {
  let pageShown
  function handleIncomeClick() {
    return pageShown = 'income'
  }

  function handleExpensesClick() {
    return pageShown = 'expenses'
  }


  return (  
    <>
    <div className="transactions-header">
     {console.log(props.goals.currentAmount)}
        <p className="current-balance">{props.totalIncome - props.totalExpense - props.totalSavings}</p>
        <p className="current-balance-label">Current Balance</p>
      
 
        <p className="income">{props.totalIncome}</p>
        <p className="income-label">Income</p>
     
      <p className="expenses">{props.totalExpense}</p>
        <p className="expenses-label">Expenses</p>
      
    </div>

    <h3 className="transactions-title">Transactions</h3>
    <div className="income-expenses-tabs">
      <p className="income-tab" onClick={handleIncomeClick}>Income</p>
      <p className="expenses-tab" onClick={handleExpensesClick}>Expenses</p>
    </div>
    
    {pageShown === 'income' ?
    <div>
      {props.incomes.map(income => (
        <IncomeCard key={income._id} income={income} user={props.user} handleDeleteIncome={props.handleDeleteIncome} />
      ))}
    </div>
    :
    <div>
      {props.expenses.map(expense => (
        <ExpenseCard key={expense._id} expense={expense} user={props.user} handleDeleteExpense={props.handleDeleteExpense} />
      ))}
      {props.goals.map(goal => (
        <GoalTransCard key={goal._id} goal={goal} user={props.user} />
      ))}
    </div>
    
  
  
  }

    
    
    </>
  )
}

export default Transactions;