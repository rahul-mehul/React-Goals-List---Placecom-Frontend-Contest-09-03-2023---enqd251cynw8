import React from "react";

const ListOfGoals = (props) => {
  return (
    <ul>
      {
        props.allGoals.map((ele, ind) => (<li key={ind}>
          <p>My goal is to {ele.goal},by {ele.by}.</p>
        </li>
        ))
      }
    </ul>
  );
}

export default ListOfGoals;