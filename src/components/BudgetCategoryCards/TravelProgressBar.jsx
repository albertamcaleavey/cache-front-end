import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import './BudgetCategoryCards.css'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export default function TravelProgressBar(props) {
  const [progress, setProgress] = useState(0);

  let percentSpent = props.totaTravelExpense / props.currentBudget.travelLimit * 100

  useEffect(() => {
    setProgress(percentSpent)
  }, [percentSpent])
  
  return (
    <div className='budget-cat-card-container'>
      <AirplanemodeActiveIcon fontSize='large' className='budget-cat-card-icon' />
      <p className='budget-cat-card-title'>Travel</p>
      <div className='budget-progress-container'>
      <LinearProgress className='progress-bar' variant="determinate" value={progress}       
          sx={{
            height: 15,
            backgroundColor: 'rgb(183,224,189)',
            "& .MuiLinearProgress-bar": {
              backgroundColor: 'seagreen'
            }
          }} 
        /> 
      </div>
      {progress >= 100 ? 
        <p className='budget-status-msg'><CloseIcon fontSize='small' /> You've exceeded your budget</p>
        :
        <p className='budget-status-msg'><CheckIcon fontSize='small' /> Your spending is on track</p>
      }
    </div> 
  );
}