import { Link } from 'react-router-dom'
import SavingsIcon from '@mui/icons-material/Savings';
import './GoalTransCard.css'


function GoalTransCard ({goal,user}) {
  return ( 
    <>
    {goal.owner._id === user.profile && goal.currentAmount > 0 ?
    <div className='card'>
      <SavingsIcon fontSize="large" className='goall-icon' />
      <p className='goall-name'>{goal.name}</p>
      <p className='sent'>Sent to Goal</p>
      <p className='amount'>- ${goal.currentAmount}</p>
    </div>
    :
    <p></p>
  }
    </>
  );
}

export default GoalTransCard;