//React Imports
import React, { useState } from "react";

//CSS Imports

//JS Imports
import GoalInput from "./components/Goals/Input/GoalInput";
import GoalOutput from "./components/Goals/Output/GoalOutput";

const App = () => {
  const [userGoal, setUserGoal] = useState([]);

  const onFormSubmitHandler = (newState) => {
    setUserGoal((prevState) => [
      {
        title: newState.title,
        goal: newState.goal,
        id: "goalNo." + (prevState.length + 1),
      },
      ...prevState,
    ]);
  };

  /* Now the userGoal, after clicking the button `Add +`
  will be set to the value that the user entered as a goal*/

  return (
    <div>
      <GoalInput onSubmit={onFormSubmitHandler} />
      {userGoal.map((goal) => (
        <GoalOutput key={goal.id} title={goal.title} goal={goal.goal} />
      ))}
    </div>
  );
};

export default App;
