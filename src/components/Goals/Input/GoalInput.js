//Library Imports
import React, { useState, useRef } from "react";

// CSS Imports
import styles from "./GoalInput.module.css";

//JS Imports
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal";

const GoalInput = (props) => {
  const enteredTitleRef = useRef();
  const enteredGoalRef = useRef();
  //To verify that usered inputted something
  const [error, setError] = useState({
    isValid: true,
    title: null,
    message: null,
  });

  //Designed to send the entered information back to
  //the parent component when the submit button is pressed
  //Also it checks so that the user didn't submit an empty string
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      enteredTitleRef.current.value.trim().length === 0 &&
      enteredGoalRef.current.value.trim().length > 0
    ) {
      setError({
        isValid: false,
        title: "Empty Goal Title",
        message: "Please fill in the Goal Title input field!",
      });
      return;
    } else if (
      enteredTitleRef.current.value.trim().length > 0 &&
      enteredGoalRef.current.value.trim().length === 0
    ) {
      setError({
        isValid: false,
        title: "Empty Goal Description",
        message: "Please fill in the Goal Description input field!",
      });
    } else if (
      enteredTitleRef.current.value.trim().length === 0 &&
      enteredGoalRef.current.value.trim().length === 0
    ) {
      setError({
        isValid: false,
        title: "Empty Inputs",
        message: "Please fill in the empty input fields!",
      });
    } else {
      props.onSubmit({
        title: enteredTitleRef.current.value,
        goal: enteredGoalRef.current.value,
      });
      enteredTitleRef.current.value = "";
      enteredGoalRef.current.value = "";
    }
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
    <>
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

          <input type="text" placeholder="Your Goal" ref={enteredTitleRef} />

          <textarea placeholder="Description" ref={enteredGoalRef} />
          <Button type="submit">Add +</Button>
        </form>
      </Card>
    </>
  );
};

export default GoalInput;
