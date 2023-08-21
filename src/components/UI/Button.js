//React Imports
import React from "react";

//CSS Imports
import "./Button.css";
import { type } from "@testing-library/user-event/dist/type";
//JS imports

const Button = (props) => {
  let contentOfTag = props.children;
  let classes = "button " + props.className;
  let typeOfButton = props.type;

  return (
    <button type={typeOfButton} className={classes}>
      {contentOfTag}
    </button>
  );
};

export default Button;
