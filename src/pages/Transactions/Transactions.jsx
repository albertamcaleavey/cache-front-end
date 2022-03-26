import IncomeCard from "../../components/IncomeCard/IncomeCard";

const Transactions = (props) => {
  return (  
    <>
    <h1>Transactions</h1>
    <div>
      {props.incomes.map(income => (
        <IncomeCard key={income._id} income={income} handleDeleteIncome={props.handleDeleteIncome} />
      ))}
    </div>
    </>
  )
}
 
export default Transactions;