//Library Imports
import styled from "styled-components";

//CSS Imports

//JS imports

const Button = styled.button`
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  background-color: #141e46;
  color: #fff5e0;

  &:hover {
    background-color: #fff5e0;
    color: #141e46;
  }
`;

// const Button = (props) => {
//   let contentOfTag = props.children;
//   let classes = "button " + props.className;
//   let typeOfButton = props.type;

//   return (
//     <button type={typeOfButton} className={classes} onClick={props.onClick}>
//       {contentOfTag}
//     </button>
//   );
// };

export default Button;
