import React from "react";

const ListOfGoals = ({ allGoalsPrps }) => {
  return (
    <ul>
      {allGoalsPrps.length > 0 ?
        allGoalsPrps.map((ele, ind) => (<li>
          <p>My goal is to {ele.goal},by {ele.by}.</p>
        </li>
        )) : null
      }
    </ul>
  );
}

export default ListOfGoals;