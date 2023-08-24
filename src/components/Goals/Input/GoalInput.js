//Library Imports
import React, { useState } from "react";

// CSS Imports
import styles from "./GoalInput.module.css";

//JS Imports
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal";

const GoalInput = (props) => {
  //To get and verify the incoming input we have to set a state for it
  const [enteredInput, setEnteredInput] = useState({
    title: "",
    goal: "",
  });

  //To verify that usered inputted something
  const [error, setError] = useState({
    isValid: true,
    title: null,
    message: null,
  });

  //With every key stroke in goal title section,
  //this function updates the enteredInput.title
  const goalTitleChangeHandler = (event) => {
    setEnteredInput((prevState) => ({
      title: event.target.value,
      goal: prevState.goal,
    }));

    setError({
      isValid: true,
      title: null,
      message: null,
    });
  };

  //With every key stroke in goal input section,
  //this function updates the enteredInput.goal
  const goalInputChangeHandler = (event) => {
    setEnteredInput((prevState) => ({
      title: prevState.title,
      goal: event.target.value,
    }));

    setError({
      isValid: true,
      title: null,
      message: null,
    });
  };

  //Designed to send the entered information back to
  //the parent component when the submit button is pressed
  //Also it checks so that the user didn't submit an empty string
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredInput.title.trim() == 0 || enteredInput.goal.trim() == 0) {
      setError({
        isValid: false,
        title: "Empty Values",
        message: "Please fill in the input fields!",
      });
      return;
    } else {
      props.onSubmit(enteredInput);
    }

    setEnteredInput({
      title: "",
      goal: "",
    });
  };

  // To handle the clicks after the modal is shown
  const errorHandler = () => {
    setError({
      isValid: true,
      title: null,
      message: null,
    });
  };

  return (
    <div>
      {!error.isValid && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles["goal-input"]}>
        <form onSubmit={formSubmitHandler}>
          <label>
            <h2>Input your goals here to be kept:</h2>
          </label>

          <input
            type="text"
            placeholder="Your Goal"
            value={enteredInput.title}
            onChange={goalTitleChangeHandler}
          />

          <textarea
            placeholder="Description"
            value={enteredInput.goal}
            onChange={goalInputChangeHandler}
          />
          <Button type="submit">Add +</Button>
        </form>
      </Card>
    </div>
  );
};

export default GoalInput;
