//React Imports
import React from "react";

//CSS Imports
import "./Card.css";
//JS Imports

const Card = (props) => {
  let classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
