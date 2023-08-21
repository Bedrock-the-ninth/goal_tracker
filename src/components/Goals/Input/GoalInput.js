//React Imports
import React, { useState } from "react";

// CSS Imports
import "./GoalInput.css";

//JS Imports
import Card from "../../UI/Card";
import Button from "../../UI/Button";

const GoalInput = (props) => {
  //To get and verify the incoming input we have to set a state for it
  const [enteredInput, setEnteredInput] = useState({
    title: "",
    goal: "",
  });

  //To verify that usered inputted something
  const [isValid, setIsValid] = useState(true);

  //With every key stroke in goal title section,
  //this function updates the enteredInput.title
  const goalTitleChangeHandler = (event) => {
    setEnteredInput((prevState) => ({
      title: event.target.value,
      goal: prevState.goal,
    }));
    setIsValid(true);
  };

  //With every key stroke in goal input section,
  //this function updates the enteredInput.goal
  const goalInputChangeHandler = (event) => {
    setEnteredInput((prevState) => ({
      title: prevState.title,
      goal: event.target.value,
    }));
    setIsValid(true);
  };

  //Designed to send the entered information back to
  //the parent component when the submit button is pressed
  //Also it checks so that the user didn't submit an empty string
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredInput.title.trim() == 0 || enteredInput.goal.trim() == 0) {
      setIsValid(false);
      return;
    } else {
      props.onSubmit(enteredInput);
    }
  };

  let invalid = "";

  if (!isValid) {
    invalid = "invalid";
  }

  return (
    <Card className="goal-input">
      <form
        className={`goal-input__header ${invalid}`}
        onSubmit={formSubmitHandler}
      >
        <label className="goal-input__label">
          <h2>Input your goals here to be kept:</h2>
        </label>

        <input
          type="text"
          className="goal-input__input-title"
          placeholder="Your Goal"
          value={enteredInput.title}
          onChange={goalTitleChangeHandler}
        />

        <textarea
          className="goal-input__input-goal"
          placeholder="Description"
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
