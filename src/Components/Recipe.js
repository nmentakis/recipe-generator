import React from 'react';
const Recipe = (props) => {
  return (
    <li>
      <img src={props.imgUrl}></img>
      <div>{props.title}</div>
    </li>
  );
}
export default Recipe;