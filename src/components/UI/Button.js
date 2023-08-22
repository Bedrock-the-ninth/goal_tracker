//Library Imports
import React from "react";

//CSS Imports
import style from "./Button.module.css";

//JS imports

const Button = (props) => {
  let contentOfTag = props.children;
  let classes = style.button + " " + props.className;
  let typeOfButton = props.type;

  const clickHandler = (event) => {
    if (props.onClick) {
      props.onClick(event);
    }
  };

  return (
    <button type={typeOfButton} className={classes} onClick={clickHandler}>
      {contentOfTag}
    </button>
  );
};

export default Button;
