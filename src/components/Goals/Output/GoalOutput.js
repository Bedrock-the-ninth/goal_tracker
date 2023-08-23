//Library Imports
import React from "react";

//CSS Imports
import styles from "./GoalOutput.module.css";

//Image Import
import removeButton from "../../img/icons8-close-button-64.png";

//JS imports
import Card from "../../UI/Card";
import Button from "../../UI/Button";

const GoalOutput = (props) => {
  const { id, title, goal, onRemove } = props;

  const removeGoalHandler = () => {
    onRemove(id);
  };

  return (
    <Card className={styles["goal-output"]}>
      <div className={styles["goal-output__title"]}>
        <h1>{title}</h1>
      </div>
      <Card className={styles["goal-output__goal"]}>
        <pre>{goal}</pre>
      </Card>
      <Button
        className={styles["goal-output__button"]}
        onClick={removeGoalHandler}
      >
        <img
          className={styles["goal-output__button-img"]}
          src={removeButton}
          alt="remove button"
        />
      </Button>
    </Card>
  );
};

export default GoalOutput;
