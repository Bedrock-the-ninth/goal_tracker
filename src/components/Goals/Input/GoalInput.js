//Library Imports
import React, { useState } from "react";
import { styled } from "styled-components";

// CSS Imports
import "./GoalInput.css";

//JS Imports
import Button from "../../UI/Button";

const FormControl = styled.div`
  width: 70%;
  margin: 2rem auto;
  padding: 1.5rem 1rem 1.5rem;
  background-color: #ff6969;

  & form {
    display: flex;
    flex-direction: column;
  }

  & form label {
    color: ${(props) => (props.invalid ? "#bb2525" : "#fff5e0")};
  }

  & form input {
    color: #141e46;
    font-size: large;
    width: 40%;
    height: 3rem;
    line-height: 1.5;
    margin: 1rem auto 1.5rem;
    text-align: center;
    border-radius: 12px;
    border: 1px solid transparent;
    outline: 0px;
    padding: 3%;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: large;
    border-color: ${(props) => (props.invalid ? "#bb2525" : "transparent")};
    background-color: ${(props) => props.invalid && "#ffd7d7"};

    @media (max-width: 1000px) {
      width: 90%;
    }
  }

  & form textarea {
    color: #141e46;
    font-size: large;
    width: 90%;
    height: 60%;
    line-height: 1.5;
    margin: auto;
    text-align: start;
    border-radius: 12px;
    border: 1px solid transparent;
    outline: 0px;
    padding: 3%;
    font-family: "Roboto Mono", monospace;
    font-weight: 300;
    font-size: medium;
    border-color: ${(props) => (props.invalid ? "#bb2525" : "#ccc")};
    background-color: ${(props) => props.invalid && "#ffd7d7"};
  }

  & form input:focus,
  & form input:active,
  & form textarea:focus,
  & form textarea:active {
    border: 3px solid #bb2525;
  }

  & button {
    width: 30%;
    height: 2rem;
    margin: 10px auto 10px;
  }
`;

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

  /*Designed to send the entered information back to
  the parent component when the submit button is pressed
  Also it checks so that the user didn't submit an empty string*/
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredInput.title.trim() == 0 || enteredInput.goal.trim() == 0) {
      setIsValid(false);
      return;
    } else {
      props.onSubmit(enteredInput);
    }

    setEnteredInput({
      title: "",
      goal: "",
    });
  };

  return (
    <FormControl className="card" invalid={!isValid}>
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
    </FormControl>
  );
};

export default GoalInput;
