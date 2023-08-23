//Library Imports
import React from "react";

//CSS Imports
import styles from "./Card.module.css";
//JS Imports

const Card = (props) => {
  let classes = `${styles.card} ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
