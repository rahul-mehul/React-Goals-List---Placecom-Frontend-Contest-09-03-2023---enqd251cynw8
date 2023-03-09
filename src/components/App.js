import React, { useState } from 'react'
import '../styles/App.css';
import GoalForm from './GoalForm';
import ListOfGoals from './ListOfGoals';

const App = () => {

  const [allGoals, setAllGoals] = useState([]);


  return (
    <div id="main">
      <GoalForm setgoalsPrps={setAllGoals} allGoalsPrps={allGoals} />
      <ListOfGoals allGoalsPrps={allGoals} />
    </div>
  )

}


export default App;
