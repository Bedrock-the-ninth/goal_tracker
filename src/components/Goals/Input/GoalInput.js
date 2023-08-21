//React Imports
import React, { useState } from "react";

// CSS Imports
import "./GoalInput.css";

//JS Imports
import Card from "../../UI/Card";
import Button from "../../UI/Button";

const GoalInput = (props) => {
  const [enteredInput, setEnteredInput] = useState({
    title: "",
    goal: "",
  });

  const goalInputChangeHandler = (event) => {
    setEnteredInput((prevState) => ({
      title: prevState.title,
      goal: event.target.value,
    }));
  };

  const goalTitleChangeHandler = (event) => {
    setEnteredInput((prevState) => ({
      title: event.target.value,
      goal: prevState.goal,
    }));
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    props.onSubmit(enteredInput);
  };

  return (
    <Card className="goal-input">
      <form className="goal-input__header" onSubmit={formSubmitHandler}>
        <label className="goal-input__label">
          <h2>Input your goals here to be kept:</h2>
        </label>

        <input
          type="text"
          className="goal-input__input-title"
          placeholder="Title"
          value={enteredInput.title}
          onChange={goalTitleChangeHandler}
        />

        <textarea
          className="goal-input__input-goal"
          placeholder="Your Goal..."
          value={enteredInput.goal}
          onChange={goalInputChangeHandler}
        />
        <Button type="submit" className="goal-input__button">
          Add +
        </Button>
      </form>
    </Card>
  );
};

export default GoalInput;
