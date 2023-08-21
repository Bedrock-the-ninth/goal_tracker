//React Imports
import React from "react";

//CSS Imports
import "./GoalOutput.css";

//Image Import
import removeButton from "../../img/icons8-close-button-64.png";

//JS imports
import Card from "../../UI/Card";
import Button from "../../UI/Button";

const GoalOutput = (props) => {
  const removeGoalHandler = (event) => {};

  return (
    <Card className="goal-output">
      <div className="goal-output__title">
        <h1>{props.title}</h1>
      </div>
      <Card className="goal-output__goal">
        <pre>{props.goal}</pre>
      </Card>
      <div>
        <Button className="goal-output__button" onClick={removeGoalHandler}>
          <img
            className="goal-output__button-img"
            src={removeButton}
            alt="remove button"
          />
        </Button>
      </div>
    </Card>
  );
};

export default GoalOutput;
