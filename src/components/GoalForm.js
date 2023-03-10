import React, { useState } from "react";

const GoalForm = (props) => {
  const [formData, setFormData] = useState({
    goal: "",
    by: ""
  });
  function addClick(e) {
    e.preventDefault();
    props.setGoals([...props.allGoals, formData])
    setFormData({ goal: "", by: "" })
  }


  return (
    <>
      <h1>My Goals</h1>
      <form  >
        <input
          type="text"
          name='goal'
          value={formData.goal}
          onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
          placeholder='Goal...'
        />
        <input
          type="text"
          name="by"
          value={formData.by}
          onChange={(e) => setFormData({ ...formData, by: e.target.value })}
          placeholder='By...'
        />
        <button onClick={addClick}>Add</button>
      </form>
    </>
  )
}

export default GoalForm;