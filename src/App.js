//Library Imports
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

  const removeHandler = (id) => {
    setUserGoal((prevState) => prevState.filter((goal) => goal.id !== id));
  };
  //Now after remove button being clicked, the selected item will be removed

  return (
    <>
      <GoalInput onSubmit={onFormSubmitHandler} />
      {userGoal.map((goal) => (
        <GoalOutput
          key={goal.id}
          id={goal.id}
          title={goal.title}
          goal={goal.goal}
          onRemove={removeHandler}
        />
      ))}
    </>
  );
};

export default App;
