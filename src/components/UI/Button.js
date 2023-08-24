//Library Imports
import React from "react";

//CSS Imports
import styles from "./Button.module.css";

//JS imports

const Button = (props) => {
  let contentOfTag = props.children;
  let classes = styles.button + " " + props.className;
  let typeOfButton = props.type;

  return (
    <button type={typeOfButton} className={classes} onClick={props.onClick}>
      {contentOfTag}
    </button>
  );
};

export default Button;
